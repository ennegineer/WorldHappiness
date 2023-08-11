import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { charts } from '$lib/charts/availableCharts'

export const load = (async ({ fetch, params }) => {
  if(!charts.some(c => c.slug === params.chart)) {
    throw error(404, {
      message: `${params.chart} does not exist in the available charts.`
    })
  }
  return {
      chart: params.chart
  };
}) satisfies PageServerLoad;