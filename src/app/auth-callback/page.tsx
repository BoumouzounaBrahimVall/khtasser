"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";


const Page = () => {
  
const router = useRouter()

const searchParams=useSearchParams()
const origin=searchParams.get('origin')

 trpc.authCallback.useQuery(undefined, {
    onSuccess:({ success }:any) => {

      if (success) {
        console.log('pleaaase')
        // user is synced to db
        router.push(origin ? `/${origin}` : '/dashboard')
      }
    },
    onError: (err) => {
      console.log('no')

      if (err.data?.code === 'UNAUTHORIZED') {

        router.push('/sign-in')
      }
    },
    retry: true,//send the request again untill the router send something successfull
    retryDelay: 500,//check if the user is synchro to our db every 500 ms
  })
  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
        <h3 className='font-semibold text-xl'>
          Please wait to set up your account...
        </h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  )
}

export default Page;