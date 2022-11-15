import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default () => {
  return (
    <div className={styles.header}>
      <h1><Link to={'/'}>Metroidvania Project</Link></h1>
      <div>
        <ul className={styles.nav}>
          <li><a href="https://github.com/TKnowland/MetroidvaniaProject">GitHub</a></li>
          <li>ChangeLog</li>
          <li><a href="https://tknowland.itch.io/metroidvania">Demo</a></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
      </div>
    </div>
  )
}