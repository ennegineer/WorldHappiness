<script lang="ts">
	import Navigation from '../navigation.svelte';
	import RouteButtons from '../routeButtons.svelte';

	let checkbox = false;
</script>

<Navigation />
<div class="p-4">
	<h1>Explore the Data</h1>
	<RouteButtons buttonsToInclude={['about', 'meet']} />
</div>
