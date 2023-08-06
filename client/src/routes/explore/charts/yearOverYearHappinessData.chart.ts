import type { ChartConfiguration } from "chart.js/auto";

type ChartInput = {
  countryName: string
  data: {
    year: string
    confidence_in_national_government: string
    freedom_to_make_life_choices: string
    log_gdp_per_capita: string
    healthy_life_expectancy_at_birth: string
    positive_affect: string
    life_ladder: string
    generosity: string
    perceptions_of_corruption: string
    negative_affect: string
    social_support: string
  }[]
}

export function getChartConfiguration (input: ChartInput): ChartConfiguration {
  return {
    type: 'line',
    data: {
      labels: input.data.map((row: any) => row.year),
      datasets: [
        {
          label: 'Confidence in National Government',
          data: input.data.map((row: any) => (row.confidence_in_national_government * 100).toFixed(2))
        },
        {
          label: 'Freedom to Make Life Choices',
          data: input.data.map((row: any) => (row.freedom_to_make_life_choices * 100).toFixed(2))
        },
        {
          label: 'GDP Per Capita (nat. log)',
          data: input.data.map((row: any) => row.log_gdp_per_capita)
        },
        {
          label: 'Positive Affect',
          data: input.data.map((row: any) => (row.positive_affect * 100).toFixed(2))
        },
        {
          label: 'Negative Affect',
          data: input.data.map((row: any) => (row.negative_affect * 100).toFixed(2))
        },
        {
          label: 'Generosity',
          data: input.data.map((row: any) => (row.generosity * 100).toFixed(2))
        },
        {
          label: 'Perceptions Of Corruption',
          data: input.data.map((row: any) => (row.perceptions_of_corruption * 100).toFixed(2))
        },
        {
          label: 'Social Support',
          data: input.data.map((row: any) => (row.social_support * 100).toFixed(2))
        }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: `Year over Year Happiness Data for ${input.countryName}`, 
          position: 'top'
        }
      }
    }
  }
}