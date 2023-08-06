import type { PageServerLoad } from './$types';
import { getCountryList, getUSCountryData } from "$lib/server/aws_client";

export const load = (({ params }) => {
    return {
        countryList: getCountryList(),
        USCountryData: getUSCountryData()
    };
}) satisfies PageServerLoad;