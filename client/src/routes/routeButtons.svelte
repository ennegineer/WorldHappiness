<script lang="ts">
	import { page } from '$app/stores';
	export let buttonsToInclude: ('explore' | 'about' | 'meet')[] = [];
	const buttonClasses =
		'text-lg block md:inline-block p-4 h-[100%] md:w-1/3 border border-accent border-b-4 active:border-b-[1px] active:translate-y-1 rounded-md self-center hover:break-none';

	function checkIfButtonIncluded(buttonName: string) {
		return buttonsToInclude.some((name) => name === buttonName);
	}
</script>

<div class="block md:flex justify-around space-y-4 md:space-y-0 md:space-x-4">
	<!-- {#if $page.route.id !== '/'}
		<a href="/">Home</a>
	{/if} -->
	{#if checkIfButtonIncluded('explore')}
		<a href="explore" class={buttonClasses}>Explore the Data</a>
	{/if}
	{#if checkIfButtonIncluded('about')}
		<a href="about-the-project" class={buttonClasses}>About the Project</a>
	{/if}
	{#if checkIfButtonIncluded('meet')}
		<a href="meet-the-team" class={buttonClasses}>Meet the Team</a>
	{/if}
</div>
