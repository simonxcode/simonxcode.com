import React from 'react'
import { Link } from 'gatsby'
import headerStyle from './header.module.scss'

const Header = () => {
  return (
    <header>
      <h1>simonxcode - always a student</h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyle.link} to="/">home</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/photography">photography</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header