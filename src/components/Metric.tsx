import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MetricProps } from './MetricProps'
import styles from './Metric.css'

export const Metric = (props: { metric: MetricProps }): JSX.Element => {
  const fontAwesomeIcon = <FontAwesomeIcon icon={props.metric.icon} />
  const value = props.metric.formatter
    ? props.metric.formatter(props.metric.value)
    : props.metric.value.toString()

  return (
    <div className={styles.metric}>
      {fontAwesomeIcon}&nbsp;{value}
      {props.metric.uom}
    </div>
  )
}
