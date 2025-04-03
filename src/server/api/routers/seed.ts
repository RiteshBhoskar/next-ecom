import { products } from "~/lib/data";
import { createTRPCRouter, protectedProcedure } from "../trpc";
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
        })
})