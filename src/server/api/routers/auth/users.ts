import { createTRPCRouter, publicProcedure } from "../../trpc";
import z from "zod"

export const authRouter = createTRPCRouter({
    signup: publicProcedure
          .input(z.object({
                name: z.string().min(3, "Name must be at least 3 characters"),
                email: z.string().email("Invalid email"),
                password: z.string().min(6, "Password must be at least 6 characters"),
          }))
          .mutation(async ({ input }) => {

          })
})