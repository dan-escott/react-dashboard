import React from 'react'
import { Dashboard, Tile, TileStatus } from '@dan-escott/react-dashboard'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '@dan-escott/react-dashboard/dist/index.css'

const App = () => {
  return (
    <div className="example-container">
      <Dashboard>

        <Tile title="Tile 1"
          metrics={[
            { id: 'kpi1', value: 1, uom: '%', icon: faArrowUp},
            { id: 'kpi2', value: 1, uom: '%', icon: faArrowDown}
          ]}
          sparklineData={
            { series: [
              {x: '2021-01-01T00:00', y: 0},
              {x: '2021-01-02T00:00', y: 60},
              {x: '2021-01-03T00:00', y: 20},
              {x: '2021-01-04T00:00', y: 50},
              {x: '2021-01-05T00:00', y: 100}
            ], min: 0, max: 100 }}
          />

        <Tile title="Tile 2" metrics={[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]} sparklineData={{ series: [], min: 0, max: 100 }} ></Tile>
        <Tile title="Tile 3" metrics={[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]} sparklineData={{ series: [], min: 0, max: 100 }} ></Tile>
        <Tile title="Tile 4" metrics={[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]} sparklineData={{ series: [], min: 0, max: 100 }} ></Tile>
        <Tile title="Tile 5" metrics={[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]} sparklineData={{ series: [], min: 0, max: 100 }} ></Tile>
        <Tile title="Tile 6" metrics={[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]} status={TileStatus.Stale} sparklineData={{ series: [], min: 0, max: 100 }} ></Tile>
        <Tile title="Tile 7" metrics={[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]} sparklineData={{ series: [], min: 0, max: 100 }} ></Tile>

      </Dashboard>
    </div>
  )
}

export default App
