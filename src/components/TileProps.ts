import { SparkLineData } from './SparkLineData'
import { MetricProps } from './MetricProps'
import { TileStatus } from './TileStatus'

export type TileProps = {
  title: string
  metrics: MetricProps[]
  status?: TileStatus
  sparklineData: SparkLineData
}
