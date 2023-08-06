import type { PageServerLoad } from './$types';
import { getUSCountryData } from "$lib/server/aws_client";

export const load = (() => {
    return {
        USCountryData: getUSCountryData()
    };
}) satisfies PageServerLoad;