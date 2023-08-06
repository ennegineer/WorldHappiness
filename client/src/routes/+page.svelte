<script lang="ts">
	import RouteButtons from './routeButtons.svelte';
	import type { PageData } from './$types';
	import ChartCanvas from '$lib/components/ChartCanvas.svelte';
	import { getChartConfiguration as USAggregatedHappinessConfiguration, type ChartInput } from '$lib/charts/USAggregatedHappiness.chart'
	import { onMount } from 'svelte';

	export let data: PageData;
	let chart: ChartCanvas;

	const chartData: ChartInput = {
		happinessData: data.USCountryData.map((record) => {
			return {
				year: record.year,
				life_ladder: record.life_ladder
			}
		}),
		internetData: data.USNumInternetUsers.map((record: any[]) => {
			const [year, no_internet_users] = record
			return {
				year,
				no_internet_users
			}
		})
	}

	onMount(() => {
		chart.updateChart(USAggregatedHappinessConfiguration(chartData))
	})


</script>

<div
	class="flex text-lg md:text-2xl p-4 md:items-center md:justify-center flex-col justify-around text-dark-gray"
>
	<div class="md:w-4/5 lg:w-1/2 text-center space-y-4 md:space-y-8">
		<h1
			class="font-serif text-5xl md:text-[4rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]"
		>
			Is the world's happiness declining?
		</h1>
		<h2>
			Explore the relationship between internet usage and self-reported happiness levels on a global
			scale.
		</h2>
		<ChartCanvas bind:this={chart} class="h-full w-full"></ChartCanvas>
		<RouteButtons buttonsToInclude={['about', 'explore', 'meet']} />
	</div>
</div>
