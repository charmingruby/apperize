import { publicProcedure, router } from './trpc'

export const appRouter = router({
  ping: publicProcedure.query(async () => {
    return {
      message: 'pong',
    }
  }),
})

export type AppRouter = typeof appRouter
