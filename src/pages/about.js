import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About Me</h1>
        <p>Bio will show up here later on.</p>
        <p><Link to="/contact">Want to work with me? React out.</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage