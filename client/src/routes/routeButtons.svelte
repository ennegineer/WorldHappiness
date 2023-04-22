<script lang="ts">
	export let buttonsToInclude: ('explore' | 'about' | 'meet')[] = [];
	const buttonClasses =
		'block md:inline-block p-4 md:w-1/3 border border-accent border-b-4 active:border-b-[1px] active:translate-y-1 rounded-md self-center';

	function checkIfButtonIncluded(buttonName: string) {
		return buttonsToInclude.find((name) => name === buttonName) ? true : false;
	}
</script>

<div class="block md:flex justify-around space-y-4 md:space-y-0 md:space-x-4">
	{#if checkIfButtonIncluded('explore')}
		<a href="explore" class={buttonClasses}> Explore the Data </a>
	{/if}
	{#if checkIfButtonIncluded('about')}
		<a href="about-the-project" class={buttonClasses}> About the Project </a>
	{/if}
	{#if checkIfButtonIncluded('meet')}
		<a href="meet-the-team" class={buttonClasses}> Meet the Team </a>
	{/if}
</div>
