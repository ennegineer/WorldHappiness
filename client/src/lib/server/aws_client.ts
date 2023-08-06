import { BASE_URL } from '$env/static/private';

async function getData(slug: string) {
  try {
    let URL = encodeURI(BASE_URL + slug)
    let response = await fetch(URL)
    return await response.json()
  } catch (error) {
    throw new Error("Failed to fetch data from database api.")
  }
}

export async function getCountryList(): Promise<string[]> {
  let countryData: string[] = await getData("data/countries")
  // Sort the US first.
  countryData.sort(country => country === 'United States' ? -1 : 0)
  return countryData
}

export async function getUSCountryData(): Promise<any>{
  let USCountryData = await getData('happiness/country?country=United States')
  // console.log('🪵 ~ getUSCountryData ~ USCountryData:', USCountryData);
  return USCountryData
}

export async function getCountryData (country: string) {
  let countryData = await getData(`happiness/country?country=${country}`)
  return countryData
}