import type { PageServerLoad, Actions } from './$types';
import { getCountryList, getUSCountryData } from "$lib/server/aws_client";

export const load = (async ({ fetch, params }) => {
    return {
        countryList: getCountryList(),
        USCountryData: {
            usCountryData : getUSCountryData()
        }
    };
}) satisfies PageServerLoad;