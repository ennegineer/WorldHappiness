<script lang="ts">
	import { onMount } from 'svelte';
	import RouteButtons from './routeButtons.svelte';
	import { Chart } from 'chart.js/auto';
	import type { PageData } from './$types';

	export let data: PageData;
  	const { USCountryData } = data;
	let chart: any;

	const chartData = USCountryData.map((record: any) => {
		return {
		year: record.year,
		life_ladder: record.life_ladder
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
            label: 'Happiness',
            data: chartData.map((row: any) => (row.life_ladder * 100).toFixed(2)),
			borderColor: '#00CCC9'
          }
        ]
	  },
		options: {
			plugins: {
				legend: {
					display: false
      			}
			},
			scales: {
				y: {
					min: 650,
					max: 750,
					ticks: {
						display: false
					}
				}
			}
		}
  })
});
</script>

<div
	class="flex text-lg md:text-2xl p-4 md:items-center md:justify-center flex-col justify-around text-dark-gray"
>
	<div class="md:w-4/5 lg:w-1/2 text-center space-y-4 md:space-y-8">
		<h1
			class="font-serif text-6xl md:text-[4rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]"
		>
			Is the world's happiness declining?
		</h1>
		<h2>
			Explore the relationship between internet usage and self-reported happiness levels on a global
			scale.
		</h2>
		<canvas bind:this={chart}>
			<!-- Chart will be drawn inside this DIV -->
		</canvas>
		<RouteButtons buttonsToInclude={['about', 'explore', 'meet']} />
	</div>
</div>
