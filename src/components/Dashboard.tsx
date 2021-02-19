import React from 'react'
import { Tile } from './Tile'
import styles from './Dashboard.css'

export const Dashboard = ({
  children
}: {
  children: React.ReactElement<typeof Tile>[]
}) => {
  return (
    <div className={styles.dashboard}>{children.map((child) => child)}</div>
  )
}
