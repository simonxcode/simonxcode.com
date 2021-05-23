import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { header, brand, tagLine, navList, navItem, activeNavItem, footer } from './header.module.scss'

const Header = () => {
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
    <div>
        <header className={header}>
        <Link className={brand} to="/">
          {data.site.siteMetadata.title}
          <p className={tagLine}>always a student</p>
        </Link>
          </header>
      </div>
    <div>
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
    </div>
      <div className={footer}>
        <p>{data.site.siteMetadata.author} © 2021</p>
      </div>
    </div>
  )
}

export default Header