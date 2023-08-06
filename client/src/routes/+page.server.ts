import type { PageServerLoad } from './$types';
import { getUSCountryData } from "$lib/server/aws_client";

export const load = (({ params }) => {
    return {
        USCountryData: getUSCountryData()
    };
}) satisfies PageServerLoad;