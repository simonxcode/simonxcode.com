import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import headerStyles from './header.module.scss'
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
      <Menu>
        <header className={headerStyles.header}>
          <Link className={headerStyles.brand} to="/">
            {data.site.siteMetadata.title}
            <p>always a student</p>
          </Link>
        </header>  
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeClassName} to="/">home</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/portfolio">portfolio</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">about</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/photography">photography</Link>
            </li>
          </ul>
        </nav>
      </Menu>
    </div>
  )
}

export default Sidebar 