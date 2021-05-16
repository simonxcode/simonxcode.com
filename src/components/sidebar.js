import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { header, brand, tagline, navList, navItem, activeNavItem } from './header.module.scss'
import './sidebar.css'

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <div>
      <Menu disableAutoFocus>
        <header className={header}>
          <Link className={brand} to="/">
            {data.site.siteMetadata.title}
            <p className={tagline}>always a student</p>
          </Link>
        </header>  
        <nav>
          <ul className={navList}>
            <li>
              <Link className={navItem} activeClassName={activeNavItem} to="/">home</Link>
            </li>
            <li>
              <Link className={navItem} activeClassName={activeNavItem} to="/portfolio">portfolio</Link>
            </li>
            <li>
              <Link className={navItem} activeClassName={activeNavItem} to="/blog">blog</Link>
            </li>
            <li>
              <Link className={navItem} activeClassName={activeNavItem} to="/about">about</Link>
            </li>
            <li>
              <Link className={navItem} activeClassName={activeNavItem} to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </Menu>
    </div>
  )
}

export default Sidebar 