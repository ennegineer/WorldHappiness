import type { PageServerLoad } from './$types';
import { getCountryList } from "$lib/server/aws_client";

export const load = (({ params }) => {
    return {
        countryList: getCountryList()
    };
}) satisfies PageServerLoad;