import React from 'react'
import Header from '../header'
import '../../styles/index.scss'
import { container, sidebar, content } from './layout.module.scss'
import Sidebar from '../sidebar'
import Footer from '../footer'
import 'normalize.css/normalize.css'

const Layout = (props) => {
  return (
    <div className={container}>
      <Sidebar />
       <div className={sidebar}>
        <Header />
      </div>
      <div className={content}>
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
