import { BASE_URL } from '$env/static/private';

async function getData(slug: string) {
  try {
    let response = await fetch(BASE_URL + slug)
    return await response.json()
  } catch (error) {
    throw new Error("Failed to fetch data from database api.")
  }
}

export async function getCountryList(): Promise<string[]> {
  return await getData("data/countries")
}