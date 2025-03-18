import { z } from "zod";
import { createTRPCRouter , publicProcedure } from "../../trpc";


export const userRouter = createTRPCRouter({
    welcome: publicProcedure
        .query(( opts ) => {
            console.log(opts.ctx.session?.user.name)
            return {
                welcome: `Hello ${opts.ctx.session?.user.name}`
            }
        }),
})