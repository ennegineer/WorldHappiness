import type { PageServerLoad } from './$types';
import { getInternetNumUsers, getUSCountryData } from "$lib/server/aws_client";


export const load = (() => {
    return {
        USCountryData: getUSCountryData(),
        USNumInternetUsers: getInternetNumUsers("United States")
    };
}) satisfies PageServerLoad;