import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import visitedLinks from '../components/layout.module.scss'

const HomePage = () => {
  return (
    <div> 
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Simon, a full-stack developer living in beautiful Los Angeles.</h2>
        <p>Need a developer? <Link className={visitedLinks.content} to="/contact">contact me</Link></p>
      </Layout>
    </div>
  )
}

export default HomePage