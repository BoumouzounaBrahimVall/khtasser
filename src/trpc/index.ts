import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
 

//initialize our main router instance in which we'll later add procedures to (API logic)
export const appRouter = router({
  authCallback:publicProcedure.query(async ()=>{

      // the loggin session of the current user
      const { getUser } = getKindeServerSession()
        const user = await  getUser();
        if (!user || ! user.email|| !user.id) throw new TRPCError({code:'UNAUTHORIZED'})
        return {success:true}
     
  })
});
 
// Export type router type signature,
// NOT the router itself.
//it's hat AppRouter who will give us the automatic type safety to knox the typ of the reponse
export type AppRouter = typeof appRouter;