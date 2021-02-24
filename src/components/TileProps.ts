import { SparkLineSeries } from './SparkLineSeries'
import { MetricProps } from './MetricProps'
import { TileStatus } from './TileStatus'

export type TileProps = {
  title: string
  metrics: MetricProps[]
  status?: TileStatus
  sparkline?: {
    series: SparkLineSeries[]
    independentAxes?: boolean
  }
}
