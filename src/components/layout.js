import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutModule from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutModule.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout