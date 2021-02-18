import React from 'react';
import { Tile } from './Tile';
import styles from './Dashboard.css';

export const Dashboard = ({ children }: { children: React.ReactElement<typeof Tile>[] }) => (
  <div className={styles.dashboard}>
    {
      children.map(child => (
          child
      ))
    }
  </div>
);
