import { COLORS } from "$lib/colors";
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
  let happinessData = input.happinessData.map(row => row.life_ladder)
  let happinessMax = Math.max(...happinessData)
  let happinessMin = Math.min(...happinessData)

  let internetData = input.internetData.map(row => row.no_internet_users)
  let internetMax = Math.max(...internetData)
  let internetMin = Math.min(...internetData)

  return {
    type: 'line',
    data: {
      labels: input.happinessData.map((row: any) => row.year),
      datasets: [
        {
          label: 'Happiness',
          data: input.happinessData.map((row: any) => (Math.round(row.life_ladder * 100) - happinessMin) / happinessMax),
          borderColor: COLORS.blue,
          backgroundColor: COLORS.blue,
          yAxisID: 'y'
        },
        {
          label: 'Number of Internet Users',
          data: input.internetData.map((row: any) => (Math.round(row.no_internet_users * 100) - internetMin) / internetMax),
          borderColor: COLORS.coral,
          backgroundColor: COLORS.coral,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index',
      },  
      plugins: {
        tooltip: {
          callbacks: {
            label: function(item) {
              return `${item.dataset.label}: ${Math.round(item.raw as number)}%`
            }
          }
        },
        legend: {
          labels: {
            usePointStyle: true
          },
          display: true,
          position: 'bottom'
        }
      },
      scales: {
        y: {
          position: 'right',
          type: 'linear',
          display: true,
          ticks: {
            display: false
          },
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
  
        },
        y1: {
          display: true,
          type: 'linear',
          position: 'left',
          ticks: {
            display: false
          },
        },
      }
    }
  }
}