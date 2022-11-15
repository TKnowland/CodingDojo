import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default () => {
  return (
    <div className={styles.header}>
      <h1>Metroidvania Project</h1>
      <div>
        <ul className={styles.nav}>
          <li><a href="https://github.com/TKnowland/MetroidvaniaProject">GitHub</a></li>
          <li>ChangeLog</li>
          <li><a href="https://tknowland.itch.io/metroidvania">Demo</a></li>
          <li><Link>About</Link></li>
        </ul>
      </div>
    </div>
  )
}