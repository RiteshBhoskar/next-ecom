import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const userRouter = createTRPCRouter({
    greetings: publicProcedure
        .input(z.object({
            text: z.string()
        }))
        .query(( opts ) => {
            return {
                greeting: `Hello ${opts.input.text}`
            }
        }),
})