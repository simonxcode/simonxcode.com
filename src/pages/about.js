import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
        <p>Bio will show up here later on.</p>
        <p><Link to="/contact">Want to work with me? React out.</Link></p>
    </div>
  )
}

export default AboutPage