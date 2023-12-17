import { initTRPC } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
 
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