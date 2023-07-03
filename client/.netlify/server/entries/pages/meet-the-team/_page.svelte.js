import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Navigation } from "../../../chunks/navigation.js";
import { R as RouteButtons } from "../../../chunks/routeButtons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<h1 class="text-3xl p-4 text-center font-serif">Meet the Team</h1>

<div class="space-y-[3rem] p-4">
	<div class="space-y-2 md:space-y-0 md:flex md:items-center md:space-x-6"><img src="https://avatars.githubusercontent.com/u/49216938?v=4" alt="Enne" class="rounded-full w-4/5 mx-auto md:w-1/5 md:mx-0">
		<p class="md:w-1/2 md:text-xl"><a href="https://github.com/ennegineer" target="_blank" class="accent-link text-xl md:text-2xl">Enne Remener</a>, a data engineer with experience designing and implementing data systems with SQL and
			Python. Skilled in developing scalable data pipelines and working with big data technologies.
			Committed to delivering high-quality data solutions to support business operations. A quick
			learner with a strong work ethic, dedicated to improving skills in data engineering and
			delivering data-driven insights that support business success.
		</p></div>
	
	<div class="space-y-2 md:space-y-0 md:flex md:items-center md:space-x-6 lg:flex-row-reverse lg:text-right"><img src="https://avatars.githubusercontent.com/u/47040504?v=4" alt="Christian" class="rounded-full w-4/5 mx-auto md:w-1/5 md:mx-0 lg:mx-8">
		<p class="md:w-1/2 md:text-xl"><a href="https://github.com/ChristianPayne" target="_blank" class="accent-link text-xl md:text-2xl">Christian Payne</a>, a full stack web developer with a focus on developing robust and user-friendly
			applications. Proficient in both front-end and back-end development, with experience building
			scalable web applications. Strong attention to detail and a commitment to software foundations
			for long-term success. Committed to delivering high-quality solutions that meet user needs and
			provide value.
		</p></div>

	${validate_component(RouteButtons, "RouteButtons").$$render($$result, { buttonsToInclude: ["about", "explore"] }, {}, {})}</div>`;
});
export {
  Page as default
};
