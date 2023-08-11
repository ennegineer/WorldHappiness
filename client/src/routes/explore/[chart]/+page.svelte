<script lang="ts">
	import Navigation from '../../navigation.svelte';
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<Navigation />
<div class="p-4 space-y-8 ">
  <p>{data.chart}</p>
</div>