<script lang="ts">
  import type { PageData } from './$types';
  import Navigation from '../navigation.svelte';
  import RouteButtons from '../routeButtons.svelte';
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js/auto'

  export let data: PageData;
  const { countryList, USCountryData } = data;
  let selectedCountry: string = countryList[0]
  let chart: any;

  const chartData = USCountryData.map((record: any) => {
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
  

  onMount(()=> {
    const ctx = chart.getContext('2d');
    // Initialize chart using default config set
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.map((row: any) => row.year),
        datasets: [
          {
            label: 'Confidence in National Government',
            data: chartData.map((row: any) => (row.confidence_in_national_government * 100).toFixed(2))
          },
          {
            label: 'Freedom to Make Life Choices',
            data: chartData.map((row: any) => (row.freedom_to_make_life_choices * 100).toFixed(2))
          },
          {
            label: 'GDP Per Capita (nat. log)',
            data: chartData.map((row: any) => row.log_gdp_per_capita)
          },
          {
            label: 'Positive Affect',
            data: chartData.map((row: any) => (row.positive_affect * 100).toFixed(2))
          },
          {
            label: 'Negative Affect',
            data: chartData.map((row: any) => (row.negative_affect * 100).toFixed(2))
          },
          {
            label: 'Generosity',
            data: chartData.map((row: any) => (row.generosity * 100).toFixed(2))
          },
          {
            label: 'Perceptions Of Corruption',
            data: chartData.map((row: any) => (row.perceptions_of_corruption * 100).toFixed(2))
          },
          {
            label: 'Social Support',
            data: chartData.map((row: any) => (row.social_support * 100).toFixed(2))
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Year over Year Happiness Data', 
            position: 'top'
          }
        }
      }
  })
});

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
  <canvas bind:this={chart} class="w-3/4 h-1/5" />
  <!-- <pre>
    {JSON.stringify(data.USCountryData, null, 2)}
  </pre> -->
  <RouteButtons buttonsToInclude={['about', 'meet']} />
</div>

