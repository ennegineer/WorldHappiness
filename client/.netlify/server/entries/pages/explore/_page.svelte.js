import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from "../../../chunks/index.js";
import { N as Navigation } from "../../../chunks/navigation.js";
import { R as RouteButtons } from "../../../chunks/routeButtons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let countryList = data.countryList;
  countryList[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<div class="p-4"><h1>Explore the Data</h1>

	<select class="p-2 m-2 border-2 border-coral rounded-md">${each(countryList, (country) => {
    return `<option${add_attribute("value", country, 0)}>${escape(country)}
			</option>`;
  })}</select>
	${validate_component(RouteButtons, "RouteButtons").$$render($$result, { buttonsToInclude: ["about", "meet"] }, {}, {})}</div>`;
});
export {
  Page as default
};
