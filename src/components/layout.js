import React from 'react'
import Header from './header'
import '../styles/index.scss'
import layoutStyle from './layout.module.scss'
import Sidebar from './sidebar'
import Footer from './footer'
import 'normalize.css/normalize.css'

const Layout = (props) => {
  return (
    <div className={layoutStyle.container}>
      <Sidebar />
       <div className={layoutStyle.sidebar}>
        <Header />
      </div>
      <div className={layoutStyle.content}>
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout