import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import indexStyle from './index.module.scss' 
import Head from '../components/head'

const HomePage = () => {
  return (
    <div> 
      <Layout>
        <Head title="home" />
        <div>
          <div>
            <p className={indexStyle.greeting}>Hello, I 'm Simon.</p>
          </div>
          <div>
            <h1>I like to help build impactful solutions for humans.</h1>
          </div>
          <div className={indexStyle.summary}>
            <p>Feel free to checkout my <Link className={indexStyle.link} to="/portfolio">portfolio</Link> to see my latest work.</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default HomePage