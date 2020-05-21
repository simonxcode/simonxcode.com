import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyle from './layout.module.scss'

const Layout = (props) => {
  return (
    <div>
       <div className={layoutStyle.sidebar}>
        <Header />
        <Footer />
        </div>
      <div className={layoutStyle.content}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout