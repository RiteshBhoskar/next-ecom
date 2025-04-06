import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import Stripe from "stripe";
import { env } from "~/env";
import { TRPCError } from "@trpc/server";

const stripe = new Stripe(env.STRIPE_SECRET_TEST_KEY)

export const orderRouter = createTRPCRouter({
    getAllOrders: protectedProcedure
        .query(async ({ ctx }) => {
            const orders = await ctx.db.order.findMany({
                where: {
                    userId: ctx.session.user.id
                },
                include: {
                    orderItems: {
                        include: {
                            product: true
                        }
                    }
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
            return orders;
        }),
    createPaymentIntent: protectedProcedure
        .input(z.object({
            amount: z.number(),
            newAddress: z.object({
                address: z.string(),
                city: z.string(),
                state: z.string(),
                country: z.string(),
                zip: z.string()
            }),
            cartItems: z.array(
                z.object({
                    productId: z.number(),
                    quantity: z.number(),
                })
            )
        }))
        .mutation(async ({ ctx , input }) => {
            try {
                const shippingAddress = await ctx.db.address.create({
                    data: {
                        userId: ctx.session.user.id,
                        ...input.newAddress,
                    }
                })

                if(!shippingAddress){
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "Failed to create shipping address",
                    })
                }

                const order = await ctx.db.order.create({
                    data: {
                        userId: ctx.session.user.id,
                        shippingAddressId: shippingAddress.id
                    }
                })

                if(!order){
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "Failed to create order",
                    })
                }

                await ctx.db.orderItem.createMany({
                    data: input.cartItems.map((item) => ({
                        productId: item.productId,
                        orderId: order.id,
                        quantity: item.quantity
                    }))
                })
                
                const products = await ctx.db.product.findMany({
                    where: {
                        id: {
                            in: input.cartItems.map((item) => item.productId)
                        }
                    }
                })

                const lineItems = input.cartItems.map(cartitem => {
                    const product = products.find(p => p.id === cartitem.productId)

                    if(!product) {
                        throw new TRPCError({
                            code: "NOT_FOUND",
                            message: `Product with id ${cartitem.productId} not found`,
                        })
                    }

                    return {
                        price_data: {
                            currency: "inr",
                            product_data: {
                                name: product.name,
                                description: product.description,
                            },
                            unit_amount: product.price * 100,
                        },
                        quantity: cartitem.quantity,
                    }
                })

                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ["card","amazon_pay"],
                    line_items: lineItems,
                    mode: "payment",
                    success_url: `${env.NEXT_PUBLIC_URL}/home/cart/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${env.NEXT_PUBLIC_URL}/home/cart/checkout/cancel`,
                    shipping_address_collection: {
                        allowed_countries: ["US", "GB", "AU", "DE", "FR", "IT", "ES", "IN", "JP", "NZ"],
                    }
                })

                return { sessionId: session.id };
            } catch (error) {
                console.error("Error creating payment intent:", error);
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Failed to create payment intent",
                    cause: error,
                })
            }
        })
})