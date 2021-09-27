import React, { useMemo } from 'react'
import { ReducerDefinitions } from 'store/reducers'
import { Bar } from 'react-chartjs-2'
import { ChartOptions } from 'chart.js'
import { CHART_CONFIGURATION } from 'consts/pollConsts'
import formatChartData from 'utils/formatChartData'
import { BarChartRounded as BarIcon } from '@mui/icons-material'
import Empty from 'components/shared/Section/Empty'
import { StyledContentWrapper } from 'components/Poll/styles'

const options = CHART_CONFIGURATION.OPTIONS as ChartOptions

interface ChartProps {
  answers: ReducerDefinitions.Option[]
  totalVotes: number
}

const Chart: React.FC<ChartProps> = ({ answers, totalVotes }: ChartProps) => {
  const data = useMemo(() => formatChartData(answers), [answers])

  return (
    <StyledContentWrapper contentExists={!!totalVotes}>
      {!!totalVotes ? (
        <Bar data={data} options={options} />
      ) : (
        <Empty
          icon={<BarIcon fontSize="large" />}
          title="Results chart is not available now"
          subTitle="You will be able to see results here once people voted."
        />
      )}
    </StyledContentWrapper>
  )
}

export default Chart
