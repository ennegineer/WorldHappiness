<script lang="ts">
  import { page } from '$app/stores';

  let seeError: boolean = false
</script>

<div class="flex flex-col items-center justify-center h-screen md:w-1/2 mx-auto space-y-4 p-2">
  <h1 class="text-3xl md:text-4xl font-bold font-serif">Chart Not Found</h1>
  <p>The chart you were looking for does not exist.</p>
  <p>See the  
    <button 
      class="text-blue"
      on:click={() => seeError = !seeError}>
      error
    </button>
    below for details.</p>

  {#if seeError}
    <div class="p-4 bg-coral w-full rounded-xl">
      <p class="text-white">Error: {$page.error?.message}</p>
    </div>
  {/if}

  <a href="/explore" class="py-2 px-4 rounded-lg text-white bg-coral">See All Graphs</a>
</div>