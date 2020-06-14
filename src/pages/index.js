import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import indexStyle from './index.module.scss'

const HomePage = () => {
  return (
    <div> 
      <Layout>
        <div className={indexStyle.content}>
          <p className={indexStyle.greeting}>Hello, I'm Simon</p>
          <h1>I like to help build impactful solutions for humans and companies</h1>
          <p> Feel free to checkout my <Link to="/portfolio">portfolio</Link> to see my latest work.</p>
        </div>
      </Layout>
    </div>
  )
}

export default HomePage