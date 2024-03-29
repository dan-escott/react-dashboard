import { Dashboard, Tile, TileStatus } from '@dan-escott/react-dashboard'
import { faArrowUp, faArrowDown, faBatteryHalf, faSignal } from '@fortawesome/free-solid-svg-icons'
import '@dan-escott/react-dashboard/dist/index.css'

const getDataSeriesA = () => [
  {x: new Date('2021-01-01T00:00'), y: 0},
  {x: new Date('2021-01-02T00:00'), y: 60},
  {x: new Date('2021-01-03T00:00'), y: 20},
  {x: new Date('2021-01-04T00:00'), y: 50},
  {x: new Date('2021-01-05T00:00'), y: 100}
]

const getDataSeriesB = () => [
  {x: new Date('2021-01-01T00:00'), y: 10},
  {x: new Date('2021-01-02T00:00'), y: 30},
  {x: new Date('2021-01-03T00:00'), y: 50},
  {x: new Date('2021-01-04T00:00'), y: 20},
  {x: new Date('2021-01-05T00:00'), y: 40}
]

const basicSparklines = { series: [
  { data: getDataSeriesA(), min: 0, max: 1 },
  { data: getDataSeriesB(), min: 0, max: 1 }
]}

const basicMetrics = { data: [
  { id: 'kpi1', value: 1, uom: '%', icon: faArrowUp},
  { id: 'kpi2', value: 1, uom: '%', icon: faArrowDown}
]}
  


const App = () => {
  return (
    <div className="example-container">
      <Dashboard>

        <Tile title="Charts on same scale"
          metrics={basicMetrics}
          sparkline={basicSparklines}
          />

        <Tile title="Charts on independent scales"
          metrics={basicMetrics}
          sparkline={{
            independentAxes: true,
            series: [
              { data: getDataSeriesA(), min: 0, max: 1 },
              { data: getDataSeriesB(), min: 0, max: 1 }]
            }}
          />

        <Tile title="Charts with fixed timespan"
          metrics={basicMetrics}
          sparkline={{
            series: [
              { data: getDataSeriesA(), min: 0, max: 1 },
              { data: getDataSeriesB(), min: 0, max: 1 }],
            xmin: new Date(new Date(getDataSeriesA()[0].x).valueOf() - 1000 * 60 * 60 *24),
            xmax: new Date(new Date(getDataSeriesA()[getDataSeriesA().length - 1].x).valueOf() + 1000 * 60 * 60 *24)
            }}
          />

        <Tile title="Tile" metrics={{ data:[{ id: 'kpi1', value: 1, uom: '%', icon: faArrowUp}]}}></Tile>
        <Tile title="Tile with icons" metrics={basicMetrics} sparkline={basicSparklines} icons={[faBatteryHalf, faSignal]}/>
        <Tile title="Tile with stale data" metrics={basicMetrics} sparkline={basicSparklines} status={TileStatus.Stale}></Tile>
        <Tile title="Tile with warning" metrics={basicMetrics} sparkline={basicSparklines} status={TileStatus.Warning}></Tile>
        <Tile title="Tile with error" metrics={basicMetrics} sparkline={basicSparklines} status={TileStatus.Error}></Tile>

      </Dashboard>
    </div>
  )
}

export default App
