import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
 

//initialize our main router instance in which we'll later add procedures to (API logic)
export const appRouter = router({  
  authCallback: publicProcedure.query(async () => {
    console.log('here?')
    return {success:true}
    //const { getUser } = getKindeServerSession()
    //const user =await getUser()
    
   /* if (!user||!user.id || !user.email)
      throw new TRPCError({ code: 'UNAUTHORIZED' })

    // check if the user is in the database
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    })

    if (!dbUser) {
      // create user in db
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      })
    }


        return {success:true}*/
  }),
  test:publicProcedure.query(()=>{
    return 'hello'
  })
});
 
// Export type router type signature,
// NOT the router itself.
//it's hat AppRouter who will give us the automatic type safety to knox the typ of the reponse
export type AppRouter = typeof appRouter;