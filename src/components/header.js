import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import Anime, { anime } from 'react-anime'

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
    <Anime
      opacity={[0, 1]}
      easing='easeInExpo'
      translateX={'1rem'}
      delay={anime.stagger(300)}
    >
      <div>
        <header className={headerStyles.header}>
        <Link className={headerStyles.brand} to="/">
          {data.site.siteMetadata.title}
          <p className={headerStyles.tagline}>always a student</p>
        </Link>
          </header>
      </div>
    <div>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">home</Link>
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
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">contact</Link>
          </li>
        </ul>
      </nav>  
    </div>
      <div className={headerStyles.footer}>
        <p>{data.site.siteMetadata.author} © 2020</p>
      </div>
    </Anime>
  )
}

export default Header