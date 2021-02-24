import React from 'react'
import ReactDOM from 'react-dom'
import { Tile } from './Tile'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Tile title='test title' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders with metrics without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Tile title='test title' metrics={{ data: [] }} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders with sparkline without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Tile
      title='test title'
      sparkline={{
        series: [{ data: [{ x: new Date(), y: 1 }], min: 0, max: 1 }]
      }}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
