"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";


const Page = () => {
  
// Obtaining router from Next.js
const router = useRouter();

// Fetching search parameters using useSearchParams hook
const searchParams = useSearchParams();
const origin = searchParams.get('origin'); // Extracting 'origin' from search parameters

// Accessing 'toast' from useToast
const { toast } = useToast();

// Using trpc.authCallback for querying
trpc.authCallback.useQuery(undefined, {
  onSuccess: ({ success }: any) => {
    // If success, perform actions
    if (success) {
      console.log('pleaaase'); // Logging message

      // If origin exists, redirect to '/{origin}', else redirect to '/dashboard'
      router.push(origin ? `/${origin}` : '/dashboard');
    } else {
      // Display toast for error in logging in
      toast({
        title: 'Error Logging in',
        description: 'You need to login first',
        variant: 'destructive',
      });
      // Redirect to '/'
      router.push('/');
    }
  },
  onError: (err) => {
    console.log('no'); // Logging message

    // If error code is 'UNAUTHORIZED', redirect to '/sign-in'
    if (err.data?.code === 'UNAUTHORIZED') {
      router.push('/sign-in');
    }
  },
  retry: true, // Enable request retrying until success
  retryDelay: 500, // Set delay for checking user synchronization with db (every 500ms)
});
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