<script lang="ts">
  import { onMount } from 'svelte'; 
  // import Plotly from "plotly.js-dist-min";
  import Navigation from "./navigation.svelte";
  const buttonClasses = 'block md:inline-block p-4 md:w-1/3 border border-accent border-b-4 active:border-b-[1px] active:translate-y-1 rounded-md self-center'
  

  let data = [{
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }];
  let plotDiv: Element;

  onMount(async () => {
    const Plotly = await import('plotly.js-dist-min')
    // @ts-ignore
    new Plotly.newPlot(plotDiv, data, {}, {showSendToCloud:true});
  });
</script>

<div class="flex text-lg md:text-3xl p-4 md:h-screen md:items-center md:justify-center flex-col justify-around text-dark-gray">
  <div class="md:w-4/5 lg:w-1/2 text-center space-y-4 md:space-y-8">
    <h1 class="font-serif text-6xl md:text-[4rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]">
      Is the world's happiness<br/>declining?
    </h1>
    <h2>
      Explore the relationship between internet usage and self-reported happiness levels on a global scale.
    </h2>
    <div bind:this={plotDiv}><!-- Plotly chart will be drawn inside this DIV --></div>
    <div class="block md:flex justify-around space-y-4 md:space-y-0 md:space-x-4">
      <a href="explore" class="{buttonClasses}">
        Explore the Data
      </a>
      <a href="about-the-project" class="{buttonClasses}">
        About the Project
      </a>
      <a href="meet-the-team" class="{buttonClasses}">
        Meet the Team
      </a>
    </div>
  </div>
</div>