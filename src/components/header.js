import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.brand} to="/">
          simonxcode - always a student
        </Link>
        </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} to="/">home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/blog">blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/projects">projects</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/about">about</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/photography">photography</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header