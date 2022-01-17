import { SparkLineSeries } from './SparkLineSeries'
import { MetricProps } from './MetricProps'
import { TileStatus } from './TileStatus'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type TileProps = {
  title: string
  metrics?: {
    data: MetricProps[]
  }
  status?: TileStatus
  sparkline?: {
    series: SparkLineSeries[]
    independentAxes?: boolean
    xmin?: Date
    xmax?: Date
  }
  icons?: IconProp[];
}
