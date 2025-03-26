import { createTRPCRouter, protectedProcedure, publicProcedure } from "../../trpc";


export const orderRouter = createTRPCRouter({
    getAllOrders: protectedProcedure
        .query(async ({ ctx }) => {
            const orders = await ctx.db.order.findMany({
                where: {
                    userId: ctx.session.user.id
                }
            })
            return orders;
        })
})