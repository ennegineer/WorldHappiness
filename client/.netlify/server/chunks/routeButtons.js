import { c as create_ssr_component, d as add_attribute } from "./index.js";
const buttonClasses = "text-lg block md:inline-block p-4 h-[100%] md:w-1/3 border border-accent border-b-4 active:border-b-[1px] active:translate-y-1 rounded-md self-center hover:break-none";
const RouteButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonsToInclude = [] } = $$props;
  function checkIfButtonIncluded(buttonName) {
    return buttonsToInclude.some((name) => name === buttonName);
  }
  if ($$props.buttonsToInclude === void 0 && $$bindings.buttonsToInclude && buttonsToInclude !== void 0)
    $$bindings.buttonsToInclude(buttonsToInclude);
  return `<div class="block md:flex justify-around space-y-4 md:space-y-0 md:space-x-4">
	${checkIfButtonIncluded("explore") ? `<a href="explore"${add_attribute("class", buttonClasses, 0)}>Explore the Data</a>` : ``}
	${checkIfButtonIncluded("about") ? `<a href="about-the-project"${add_attribute("class", buttonClasses, 0)}>About the Project</a>` : ``}
	${checkIfButtonIncluded("meet") ? `<a href="meet-the-team"${add_attribute("class", buttonClasses, 0)}>Meet the Team</a>` : ``}</div>`;
});
export {
  RouteButtons as R
};
