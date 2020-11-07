import React from 'react'
import Header from './header'
import Menu from './menu'
import '../styles/index.scss'
import layoutStyle from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyle.container}>
       <div className={layoutStyle.sidebar}>
        <Header />
      </div>
      <div className={layoutStyle.content}>
        {props.children}
      </div>
      <Menu />
    </div>
  )
}

export default Layout