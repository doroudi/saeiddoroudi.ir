import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  const headers = Object.fromEntries(request.headers.entries());
  console.log("Request Headers:", headers); // Log on server
  
  return next();
};