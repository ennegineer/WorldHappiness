import { getCountryData } from '$lib/server/aws_client.js';
import { getRequestParams } from '$lib/server/helpers.js';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';


export async function GET (request: RequestEvent) {
  let params = getRequestParams(request)
  let countryData = await getCountryData(params.country)
  return json({
    countryData: countryData
  })
}
