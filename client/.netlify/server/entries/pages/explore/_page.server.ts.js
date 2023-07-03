const BASE_URL = "https://asoeu6al9d.execute-api.us-west-1.amazonaws.com/api/";
async function getData(slug) {
  try {
    let response = await fetch(BASE_URL + slug);
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data from database api.");
  }
}
async function getCountryList() {
  return await getData("data/countries");
}
const load = ({ params }) => {
  return {
    countryList: getCountryList()
  };
};
export {
  load
};
