import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type MetricProps = {
  id: string
  icon: IconProp
  value: number
  uom: string
  formatter?: (d: number) => string
}
