import { getCountryData } from '$lib/server/aws_client.js';
import { getRequestParams } from '$lib/server/helpers.js';
import { json } from '@sveltejs/kit';


export async function GET (request) {
  let params = getRequestParams(request)
  let countryData = await getCountryData(params.country)
  return json({
    countryData: countryData
  })
}
