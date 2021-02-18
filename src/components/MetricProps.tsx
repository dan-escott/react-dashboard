import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface MetricProps {
  id: string;
  icon: IconProp;
  value: number;
  uom: string;
  formatter?: (d: Number) => string;
}
