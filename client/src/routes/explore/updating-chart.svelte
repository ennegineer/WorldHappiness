<script lang="ts">
  import type { PageData } from './$types';
  import Navigation from '../navigation.svelte';
  import RouteButtons from '../routeButtons.svelte';
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js/auto'

  export let data: PageData;
  const { countryList } = data;
  let selectedCountry: string = countryList[0]
  let chartCanvas: any;
  let chart;

  async function getCountryData (country: string): Promise<any> {
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
      }
    })

    let newChartData = {
      labels: parsedCountryData.map((row: any) => row.year),
      datasets: [
        {
          label: 'Confidence in National Government',
          data: parsedCountryData.map((row: any) => (row.confidence_in_national_government * 100).toFixed(2))
        },
        {
          label: 'Freedom to Make Life Choices',
          data: parsedCountryData.map((row: any) => (row.freedom_to_make_life_choices * 100).toFixed(2))
        },
        // {
        //     label: 'GDP Per Capita',
        //     data: parsedCountryData.map((row: any) => row.log_gdp_per_capita)
        // }
      ]
    }

    if(!chart) {
      const ctx = chartCanvas.getContext('2d');
      // Initialize chart using default config set
      chart = new Chart(ctx, {
        type: 'line',
        data: newChartData
      });
    }
    chart.data = newChartData
    chart.update()
  }

  onMount(()=> {
    getCountryData(selectedCountry)
  })

</script>

<Navigation />
<div class="p-4">
  <h1>Explore the Data</h1>

  <select bind:value={selectedCountry} on:change={() => getCountryData(selectedCountry)} class="p-2 m-2 border-2 border-coral rounded-md">
    {#each countryList as country}
      <option value={country}>
        {country}
      </option>
    {/each}
  </select>
  <canvas bind:this={chartCanvas} class="w-full h-1/2" />
  <!-- <pre>
    {JSON.stringify(data.USCountryData, null, 2)}
  </pre> -->
  <RouteButtons buttonsToInclude={['about', 'meet']} />
</div>

