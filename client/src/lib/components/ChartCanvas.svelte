<script lang="ts">
	import type { ChartConfiguration, ChartData } from "chart.js";
	import { Chart } from "chart.js/auto";
	import { onMount } from "svelte";

  let chartCanvasElement: any;
  let chart: Chart;
  export let chartConfig: ChartConfiguration | undefined = undefined

  onMount(() => {
    if(chartConfig) {
      initChart(chartConfig)
    }
  })

  function initChart(chartConfig: ChartConfiguration) {
    if(!chart) {
      const ctx = chartCanvasElement.getContext('2d');
      // Initialize chart using default config set
      chart = new Chart(ctx, chartConfig);
    }
  }

  export function updateChart (chartConfig: ChartConfiguration) {
    if(chart === undefined) {
      initChart(chartConfig);
    }
    
    chart.data = {
      ...chart.data,
      ...chartConfig
    }
    chart.update()
  }

</script>


<canvas bind:this={chartCanvasElement} />