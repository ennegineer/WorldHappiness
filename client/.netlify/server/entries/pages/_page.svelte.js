import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { R as RouteButtons } from "../../chunks/routeButtons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let plotDiv;
  return `<div class="flex text-lg md:text-2xl p-4 md:items-center md:justify-center flex-col justify-around text-dark-gray"><div class="md:w-4/5 lg:w-1/2 text-center space-y-4 md:space-y-8"><h1 class="font-serif text-6xl md:text-[4rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]">Is the world&#39;s happiness declining?
		</h1>
		<h2>Explore the relationship between internet usage and self-reported happiness levels on a global
			scale.
		</h2>
		<div class="mx-auto"${add_attribute("this", plotDiv, 0)}></div>
		${validate_component(RouteButtons, "RouteButtons").$$render(
    $$result,
    {
      buttonsToInclude: ["about", "explore", "meet"]
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Page as default
};
