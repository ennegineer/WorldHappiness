import type { ChartConfiguration } from "chart.js/auto";

export type ChartInput = {
  happinessData: {
    year: number
    life_ladder: number
  }[],
  internetData: {
    year: number
    no_internet_users: number
  }[]
}

export function getChartConfiguration (input: ChartInput): ChartConfiguration {
  let happinessMax = Math.max(...input.happinessData.map(row => row.life_ladder))
  let happinessMin = Math.min(...input.happinessData.map(row => row.life_ladder))

  let internetMax = Math.max(...input.internetData.map(row => row.no_internet_users))
  let internetMin = Math.min(...input.internetData.map(row => row.no_internet_users))
  return {
    type: 'line',
    data: {
      labels: input.happinessData.map((row: any) => row.year),
      datasets: [
        {
          label: 'Happiness',
          data: input.happinessData.map((row: any) => (Math.round(row.life_ladder * 100) - happinessMin) / happinessMax),
          borderColor: '#00CCC9'
        },
        {
          label: 'Number of Internet Users',
          data: input.internetData.map((row: any) => (Math.round(row.no_internet_users * 100) - internetMin) / internetMax),
          borderColor: '#ff5e5b'
        }
      ]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function(item) {
              return `${item.dataset.label}: ${Math.round(item.raw as number)}%`
            }
          }
        },
        legend: {
          display: false
            }
      },
      scales: {
        y: {
          // min: 650,
          // max: 750,
          ticks: {
            display: false
          }
        },
        x: {
          // min: 2012
        }
      }
    }
  }
}