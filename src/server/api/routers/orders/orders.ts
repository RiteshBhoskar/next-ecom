import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";


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
    createOrderWithoutPayment: protectedProcedure
        .input(z.object({
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
                
                return order;
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