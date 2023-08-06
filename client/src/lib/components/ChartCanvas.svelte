<script lang="ts">
	import type { ChartConfiguration, ChartData } from "chart.js";
	import { Chart } from "chart.js/auto";
	import { onMount } from "svelte";

  let classNames = ""
  export let style: string = ""

  let chartCanvasElement: any;
  let chart: Chart;

  /** 
   * Optional chart configuration to show the chart on mount.  
   * If data is not available on mount, update the chart with {@link updateChart} when data is available.
  */
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
    
    chart.data = chartConfig.data
    chart.config.options = chartConfig.options
    // chart.options.plugins = chartConfig.plugins
    // How can we update the type from the config?

    chart.update()
  }

  export { classNames as class }
</script>


<canvas 
  bind:this={chartCanvasElement} 
  class={classNames} 
  style={style}
  />