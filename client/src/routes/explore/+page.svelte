<script lang="ts">
  import type { PageData } from './$types';
  import Navigation from '../navigation.svelte';
  import RouteButtons from '../routeButtons.svelte';
	import ChartCanvas from '$lib/components/ChartCanvas.svelte';
	import { getChartConfiguration as YoYChartConfig } from './charts/yearOverYearHappinessData.chart';

  export let data: PageData;
  const { countryList, USCountryData } = data;
  let selectedCountry: string = countryList[0]

  let YoYChart: ChartCanvas
  
  USCountryData.usCountryData.then(uSCountryDataResult => {
    const YoYchartData = uSCountryDataResult.map((record: any) => {
      return {
        year: record.year,
        confidence_in_national_government: record.confidence_in_national_government,
        freedom_to_make_life_choices: record.freedom_to_make_life_choices,
        log_gdp_per_capita: record.log_gdp_per_capita,
        healthy_life_expectancy_at_birth: record.healthy_life_expectancy_at_birth,
        positive_affect: record.positive_affect,
        life_ladder: record.life_ladder,
        generosity: record.generosity,
        perceptions_of_corruption: record.perceptions_of_corruption,
        negative_affect: record.negative_affect,
        social_support: record.social_support
      }
    })
    YoYChart?.updateChart(YoYChartConfig(YoYchartData))
  })
</script>

<Navigation />
<div class="p-4">
  <h1>Explore the Data</h1>

  <select bind:value={selectedCountry} class="p-2 m-2 border-2 border-coral rounded-md">
    {#each countryList as country}
      <option value={country}>
        {country}
      </option>
    {/each}
  </select>
  
  <ChartCanvas bind:this={YoYChart}></ChartCanvas>

  <RouteButtons buttonsToInclude={['about', 'meet']} />
</div>

