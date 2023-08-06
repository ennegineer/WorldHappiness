import type { ChartConfiguration } from "chart.js";

type ChartInput = {

}

export function getSampleChart (input: ChartInput): ChartConfiguration {
  return {
    type: 'bar',
    data: {
        datasets: [
          {
            label: 'Some Label',
            data: [ 1, 2, 3 ]
          }
        ]
      }
  }
}