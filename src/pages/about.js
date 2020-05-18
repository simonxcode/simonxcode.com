import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
        <p>Bio will show up here later on.</p>
        <p><Link to="/contact">Want to work with me? React out.</Link></p>
        <Footer />
    </div>
  )
}

export default AboutPage