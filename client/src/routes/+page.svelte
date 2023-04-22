<script lang="ts">
	import { onMount } from 'svelte';
	import RouteButtons from './routeButtons.svelte';
	// import Plotly from "plotly.js-dist-min";

	let data = [
		{
			x: ['giraffes', 'orangutans', 'monkeys'],
			y: [20, 14, 23],
			type: 'bar'
		}
	];
	let plotDiv: Element;

	onMount(async () => {
		const Plotly = await import('plotly.js-dist-min');
		// @ts-ignore
		new Plotly.newPlot(plotDiv, data, {}, { showSendToCloud: true });
	});
</script>

<div
	class="flex text-lg md:text-2xl p-4 md:items-center md:justify-center flex-col justify-around text-dark-gray"
>
	<div class="md:w-4/5 lg:w-1/2 text-center space-y-4 md:space-y-8">
		<h1
			class="font-serif text-6xl md:text-[4rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]"
		>
			Is the world's happiness<br />declining?
		</h1>
		<h2>
			Explore the relationship between internet usage and self-reported happiness levels on a global
			scale.
		</h2>
		<div bind:this={plotDiv}><!-- Plotly chart will be drawn inside this DIV --></div>
		<RouteButtons buttonsToInclude={['about', 'explore', 'meet']} />
	</div>
</div>
