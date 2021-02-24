import React from 'react'
import ReactDOM from 'react-dom'
import { Tile } from './Tile'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Tile
      title='test title'
      metrics={[]}
      sparkline={{
        series: [{ data: [{ x: new Date(), y: 1 }], min: 0, max: 1 }]
      }}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders with no sparkline without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Tile title='test title' metrics={[]} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
