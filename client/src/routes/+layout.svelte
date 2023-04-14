<script>
  import "../app.css";
</script>

<nav class="w-full bg-teal-200 flex p-4 items-center justify-between">
  <h1 class="text-3xl">World Happiness</h1>
  <div class="text-xl space-x-4">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</nav>

<div class="p-4">
  <slot />
</div>