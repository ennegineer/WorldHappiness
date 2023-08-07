import { BASE_URL } from '$env/static/private';
import type { HappinessRecord } from '$lib/types/happinessDataTypes';

async function getData<DType>(slug: string): Promise<DType> {
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



export async function getUSCountryData(): Promise<HappinessRecord[]>{
  let USCountryData = await getData<HappinessRecord[]>('happiness/country?country=United States')
  return USCountryData
}

export async function getCountryData (country: string) {
  let countryData = await getData<HappinessRecord[]>(`happiness/country?country=${country}`)
  return countryData
}

export async function getInternetNumUsers (country: string) {
  let numUsersData = await getData<any>(`users/country/column?country=${country}&column=no_internet_users`)
  return numUsersData
}