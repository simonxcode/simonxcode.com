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
    <Menu>
      <header className={headerStyles.header}>
        <Link className={headerStyles.brand} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </header>
    </Menu>
  )
}

export default Sidebar 