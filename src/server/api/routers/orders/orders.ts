import { createTRPCRouter, protectedProcedure, publicProcedure } from "../../trpc";


export const orderRouter = createTRPCRouter({
    order: protectedProcedure
        .query(async ({ ctx }) => {
            
        })
})