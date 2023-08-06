import type { ChartConfiguration } from "chart.js/auto";

export type ChartInput = {
  year: number
  life_ladder: number
}[]

export function getChartConfiguration (input: ChartInput): ChartConfiguration {
  return {
    type: 'line',
    data: {
      labels: input.map((row: any) => row.year),
      datasets: [
        {
          label: 'Happiness',
          data: input.map((row: any) => Math.round(row.life_ladder * 100)),
          borderColor: '#00CCC9'
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
            }
      },
      scales: {
        y: {
          min: 650,
          max: 750,
          ticks: {
            display: false
          }
        }
      }
    }
  }
}