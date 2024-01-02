import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { TRPCError, initTRPC } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
const middleware=t.middleware
const isAuth = middleware(async (opts) => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
  
    if (!user || !user.id) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }
  
    return opts.next({
      ctx: {
        userId: user.id,
        user,
      },
    })
  })
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
{/*
publicProcedure is a helper that allows you to define a procedure
that can be called from the client without authentication.
means that you can call it from the client without being logged in.

*/}
export const publicProcedure = t.procedure;
export const privateProcedure= t.procedure.use(isAuth)