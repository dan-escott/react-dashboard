import React from 'react'
import { Scatter } from 'react-chartjs-2'
import styles from './Tile.css'
import metricStyles from './Metric.css'
import { Metric } from './Metric'
import { TileProps } from './TileProps'

export const Tile = (props: TileProps) => {
  const color = 'rgba(255, 255, 255, 0.3)'
  const data = {
    datasets: [
      {
        label: '',
        fill: 'origin',
        borderColor: color,
        backgroundColor: color,
        pointBackgroundColor: color,
        pointBorderColor: color,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: color,
        data: props.sparklineData.series
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    showLines: true,
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
          time: {
            unit: 'second'
          }
        }
      ],
      yAxes: [
        {
          id: 'A',
          type: 'linear',
          display: false,
          ticks: {
            suggestedMin: props.sparklineData.min,
            suggestedMax: props.sparklineData.max
          },
          gridLines: {
            display: false
          }
        }
      ]
    }
  }

  return (
    <div
      className={`${styles.tile} ${props.status ? styles[props.status] : ''}`}
    >
      <div className={styles.title}>{props.title}</div>
      <div className={metricStyles.metrics}>
        {props.metrics.map((metric) => (
          <Metric key={metric.id} metric={metric} />
        ))}
      </div>
      <div className={styles.sparkline}>
        <Scatter data={data} options={options} height={100} width={338} />
      </div>
    </div>
  )
}
