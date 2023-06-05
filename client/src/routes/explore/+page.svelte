<script lang="ts">
	import type { PageData } from './$types';
	import Navigation from '../navigation.svelte';
	import RouteButtons from '../routeButtons.svelte';

	let checkbox = false;

	export let data: PageData;
	let countryList = data.countryList
	let selectedCountry: string = countryList[0]
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
	<RouteButtons buttonsToInclude={['about', 'meet']} />
</div>

