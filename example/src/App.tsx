import React from 'react'
import { Dashboard, Tile, TileStatus } from '@dan-escott/react-dashboard'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '@dan-escott/react-dashboard/dist/index.css'

const getDataSeriesA = () => [
  {x: '2021-01-01T00:00', y: 0},
  {x: '2021-01-02T00:00', y: 60},
  {x: '2021-01-03T00:00', y: 20},
  {x: '2021-01-04T00:00', y: 50},
  {x: '2021-01-05T00:00', y: 100}
]

const getDataSeriesB = () => [
  {x: '2021-01-01T00:00', y: 10},
  {x: '2021-01-02T00:00', y: 30},
  {x: '2021-01-03T00:00', y: 50},
  {x: '2021-01-04T00:00', y: 20},
  {x: '2021-01-05T00:00', y: 40}
]

const App = () => {
  return (
    <div className="example-container">
      <Dashboard>

        <Tile title="Charts on same scale"
          metrics={{ data: [
            { id: 'kpi1', value: 1, uom: '%', icon: faArrowUp},
            { id: 'kpi2', value: 1, uom: '%', icon: faArrowDown}
          ]}}
          sparkline={{
            series: [
              { data: getDataSeriesA(), min: 0, max: 1 },
              { data: getDataSeriesB(), min: 0, max: 1 }]
            }}
          />

        <Tile title="Charts on independent scales"
          metrics={{ data: [
            { id: 'kpi1', value: 1, uom: '%', icon: faArrowUp},
            { id: 'kpi2', value: 1, uom: '%', icon: faArrowDown}
          ]}}
          sparkline={{
            independentAxes: true,
            series: [
              { data: getDataSeriesA(), min: 0, max: 1 },
              { data: getDataSeriesB(), min: 0, max: 1 }]
            }}
          />

        <Tile title="Tile" metrics={{ data:[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]}}></Tile>
        <Tile title="Tile" metrics={{ data:[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]}}></Tile>
        <Tile title="Tile" metrics={{ data:[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]}}></Tile>
        <Tile title="Tile with stale data" metrics={{ data: [{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]}} status={TileStatus.Stale}></Tile>
        <Tile title="Tile" metrics={{ data:[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]}}></Tile>

      </Dashboard>
    </div>
  )
}

export default App
