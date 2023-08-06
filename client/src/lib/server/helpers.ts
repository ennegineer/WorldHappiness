import type { RequestEvent } from "@sveltejs/kit";


export function getRequestParams (request: RequestEvent) {
  if(request?.url?.searchParams) {
    return Object.fromEntries(request.url.searchParams.entries())
  } else {
    throw new Error("Could not get request params.")
  }
}