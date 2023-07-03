import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Navigation } from "../../../chunks/navigation.js";
import { R as RouteButtons } from "../../../chunks/routeButtons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<div class="p-4"><h1>Project Goals</h1>
	<p>A goal of this project is to find trends between happiness, socioeconomic status, and internet usage by comparing data points by year and country. Another goal is to answer the question, is world happiness decreasing?</p>
	<h1>Data Sources</h1>
	<p>This project incorporates two datasets sourced from Kaggle: <a href="https://www.kaggle.com/datasets/usamabuttar/world-happiness-report-2005-present" target="_blank">the World Happiness Report 2005-2022</a> and <a href="https://www.kaggle.com/datasets/ashishraut64/internet-users" target="_blank">Global Internet Users (1980-2020)</a></p>
	<h1>Expected Outcomes</h1>
	<h1>Tech Stack</h1>
	<p>We prepared our .csv datasets using Python and exported the processed data to .json files to import into our database. The website is built on SvelteKit and TailwindCSS and the data is served with Chalice.</p>
	${validate_component(RouteButtons, "RouteButtons").$$render($$result, { buttonsToInclude: ["meet", "explore"] }, {}, {})}</div>`;
});
export {
  Page as default
};
