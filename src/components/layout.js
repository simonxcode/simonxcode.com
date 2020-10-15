import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyle from './layout.module.scss'
import footerStyle from './footer.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyle.container}>
       <div className={layoutStyle.sidebar}>
        <Header />
      </div>
      <div className={layoutStyle.content}>
        {props.children}
      </div>
      <div className={layoutStyle.menu}></div>
      <div className={footerStyle.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout