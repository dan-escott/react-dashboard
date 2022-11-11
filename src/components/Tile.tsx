import React from 'react'
import { Scatter } from 'react-chartjs-2'
import styles from './Tile.css'
import metricStyles from './Metric.css'
import { Metric } from './Metric'
import { TileProps } from './TileProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Tile = (props: TileProps): JSX.Element => {
  const color = 'rgba(255, 255, 255, 0.3)'

  const dashes = [
    [1, 0],
    [10, 5]
  ]

  const sparkline = props.sparkline ? props.sparkline : { series: [] }

  if (sparkline.series.length > dashes.length) {
    console.warn(
      `Too many sparkline series - only the first ${dashes.length} are being included.`
    )
    sparkline.series = sparkline.series.slice(0, dashes.length)
  }

  const data = {
    datasets: sparkline.series.slice(0, dashes.length).map((series, i) => ({
      label: `props.title ${i}`,
      fill: 'origin',
      borderColor: color,
      backgroundColor: color,
      pointBackgroundColor: color,
      pointBorderColor: color,
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: color,
      borderDash: dashes[i],
      yAxisID: sparkline.independentAxes ? i : 0,
      showLine: true,
      data: series.data
    }))
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    animation: {
      duration: 0
    },
    elements: {
      line: {
        tension: 0, // disables bezier curves
        fill: true
      },
      point: {
        radius: 0
      }
    },
    plugins: {
      filler: {
        propagate: true
      }
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          display: false,
          gridLines: {
            display: false
          },
          ticks: {
            min: props.sparkline ? props.sparkline.xmin : undefined,
            max: props.sparkline ? props.sparkline.xmax : undefined
          }
        }
      ],
      yAxes: sparkline.series.map((series, i) => ({
        id: i,
        type: 'linear',
        display: false,
        ticks: {
          suggestedMin: series.min,
          suggestedMax: series.max
        },
        gridLines: {
          display: false
        }
      }))
    }
  }

  const metricsElement = props.metrics ? (
    <div className={metricStyles.metrics}>
      {props.metrics.data.map((metric) => (
        <Metric key={metric.id} metric={metric} />
      ))}
    </div>
  ) : (
    <div />
  )

  const sparklineElement =
    data.datasets.length > 0 ? (
      <div className={styles.sparkline}>
        <Scatter data={data} options={options} height={100} width={338} />
      </div>
    ) : (
      <div />
    )

  return (
    <div
      className={`${styles.tile} ${props.status ? styles[props.status] : ''}`}
    >
      <div className={styles.title}>{props.title}</div>
      <div className={styles.icons}>
        {props.icons?.map((icon) => (
          <FontAwesomeIcon
            key={icon.toString()}
            className={styles.icon}
            icon={icon}
          />
        ))}
      </div>
      {metricsElement}
      {sparklineElement}
    </div>
  )
}
