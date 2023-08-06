import type { PageServerLoad, Actions } from './$types';
import { getCountryList, getUSCountryData } from "$lib/server/aws_client";

export const load = (({ fetch, params }) => {
    return {
        countryList: getCountryList(),
        USCountryData: getUSCountryData()
    };
}) satisfies PageServerLoad;