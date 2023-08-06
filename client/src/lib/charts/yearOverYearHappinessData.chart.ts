import type { ChartConfiguration } from "chart.js/auto";

type ChartInput = {
  countryName: string
  data: {
    year: number
    confidence_in_national_government: number
    freedom_to_make_life_choices: number
    log_gdp_per_capita: number
    healthy_life_expectancy_at_birth: number
    positive_affect: number
    life_ladder: number
    generosity: number
    perceptions_of_corruption: number
    negative_affect: number
    social_support: number
  }[]
}

export function getChartConfiguration (input: ChartInput): ChartConfiguration {
  return {
    type: 'line',
    data: {
      labels: input.data.map(row => row.year),
      datasets: [
        {
          label: 'Confidence in National Government',
          data: input.data.map(row => Math.round(row.confidence_in_national_government * 100))
        },
        {
          label: 'Freedom to Make Life Choices',
          data: input.data.map(row => Math.round(row.freedom_to_make_life_choices * 100))
        },
        // {
        //   label: 'GDP Per Capita (nat. log)',
        //   data: input.data.map(row => Math.round(row.log_gdp_per_capita))
        // },
        {
          label: 'Positive Affect',
          data: input.data.map(row => Math.round(row.positive_affect * 100))
        },
        {
          label: 'Negative Affect',
          data: input.data.map(row => Math.round(row.negative_affect * 100))
        },
        {
          label: 'Generosity',
          data: input.data.map(row => Math.round(row.generosity * 100))
        },
        {
          label: 'Perceptions Of Corruption',
          data: input.data.map(row => Math.round(row.perceptions_of_corruption * 100))
        },
        {
          label: 'Social Support',
          data: input.data.map(row => Math.round(row.social_support * 100))
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `Year over Year Happiness Data for ${input.countryName}`, 
          position: 'top'
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  }
}