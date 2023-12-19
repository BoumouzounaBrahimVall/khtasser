import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { MutationCache } from '@tanstack/react-query'


const Page = async () => {


  const mutationCache = new MutationCache({
    onError: (error:any) => {
      if (error.data?.code === 'UNAUTHORIZED') {
        router.push('/sign-in')
      }
    },
    onSuccess:({ success }:any) => {
      if (success) {
        // user is synced to db
        router.push(origin ? `/${origin}` : '/dashboard')
      }
    },
    
  })

const router = useRouter()

const searchParams=useSearchParams()
const origin=searchParams.get('origin')

trpc.authCallback.useQuery(undefined, {
  mutationCache,
  })

}

export default Page;