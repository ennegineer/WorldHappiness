import type { ChartConfiguration } from "chart.js/auto";

type ChartInput = {
  name: string
  value: number
}[]

export function getSampleChart (input: ChartInput): ChartConfiguration {
  return {
    type: 'bar',
    data: {
        datasets: [
          {
            label: 'Value Label',
            data: input.map(row => row.value)
          }
        ]
      }
  }
}