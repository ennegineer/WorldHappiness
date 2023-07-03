import { c as create_ssr_component } from "./index.js";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="p-4 flex justify-between"><a href="/" class="text-3xl font-serif">World Happiness</a></nav>`;
});
export {
  Navigation as N
};
