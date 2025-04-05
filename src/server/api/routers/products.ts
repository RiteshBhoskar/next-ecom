import { products } from "~/lib/data";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const productRouter = createTRPCRouter({
    seedDb: protectedProcedure
        .mutation(async ({ ctx }) => {
            await Promise.all(
                products.map(product =>
                    ctx.db.product.upsert({
                        where: { name: product.name },
                        update: {},
                        create: product, 
                    })
                )
            );
            return { message : "db seeded successfully."}
        }),

    getProducts: protectedProcedure
        .query(async ({ ctx }) => {
            const allProducts = await ctx.db.product.findMany({
                orderBy: {createdAt: "desc"}
            })

            return allProducts;
        }),
    getProductById: protectedProcedure
        .input(z.object({ id: z.string()}))
        .query(async({ ctx , input }) => {
            const productIdInt = parseInt(input.id, 10);
            if (isNaN(productIdInt)) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: `Invalid product ID format: ${input.id}. Expected an integer.`,
                });
            }
            const product = await ctx.db.product.findUnique({
                where: { id: productIdInt}
            })

            if(!product){
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Product with ID ${input.id} not found.`,
                });
            }

            return product;
        })
})