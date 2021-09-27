import { CHART_CONFIGURATION } from 'consts/pollConsts'
import { ReducerDefinitions } from 'store/reducers'

interface DataSet {
  data: number[]
  label: string
  backgroundColor: string[]
  borderColor: string[]
  borderWidth: number
}

interface ChartDataProps {
  labels: string[]
  datasets: DataSet[]
}

const formatChartData = (
  answers: ReducerDefinitions.Option[]
): ChartDataProps => {
  const labels = answers.map(({ value }) => value)
  const data = answers.map(({ count }) => count)
  return {
    labels,
    datasets: [{ ...CHART_CONFIGURATION.DATA_SET, data }]
  }
}

export default formatChartData
