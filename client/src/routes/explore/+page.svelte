<script lang="ts">
  import type { PageData } from './$types';
  import Navigation from '../navigation.svelte';
  import RouteButtons from '../routeButtons.svelte';
	import ChartCanvas from '$lib/components/ChartCanvas.svelte';
	import { getChartConfiguration as YoYChartConfig } from '$lib/charts/yearOverYearHappinessData.chart';
	import { onMount } from 'svelte';
  import { charts } from '$lib/charts/availableCharts'

  export let data: PageData;
  const { countryList } = data;
  let selectedCountry: string = countryList[0]

  let YoYChart: ChartCanvas

  async function getCountryData (country: string): Promise<any> {
    console.log('Getting Country Data for ', country);
    let res = await fetch('/explore?' + new URLSearchParams({
      country: country
    }))
    let { countryData } = await res.json() 

    let parsedCountryData = countryData.map((record: any) => {
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

    YoYChart.updateChart(YoYChartConfig({
      countryName: country,
      data: parsedCountryData
    }))
  }

  onMount(() => {
    getCountryData(selectedCountry)
  })

</script>

<Navigation />
<div class="p-4 space-y-8 ">
  <div class="lg:flex lg:space-x-2">
    <div class="flex-none">
      <h1>Explore the Data</h1>
    
      <select bind:value={selectedCountry} on:change={() => getCountryData(selectedCountry)} class="p-2 m-2 border-2 border-coral rounded-md">
        {#each countryList as country}
          <option value={country}>
            {country}
          </option>
        {/each}
      </select>
    </div>

    <div class="h-[400px] lg:h-[600px]">
      <ChartCanvas bind:this={YoYChart} class="h-full w-full"></ChartCanvas>
    </div>
  </div>

  <div class="flex flex-col md:grid md:grid-cols-2 3xl:grid-cols-3 mx-auto md:w-2/3 lg:w-1/2 text-center gap-4" data-sveltekit-preload-data="hover">
    {#each charts as chart}
      <a href="explore/{chart.slug}" class="bg-coral h-64 flex justify-center items-center text-white rounded-2xl">
        <p>{chart.name}</p>
      </a>
    {/each}
  </div>

  <RouteButtons buttonsToInclude={['about', 'meet']} />
</div>

