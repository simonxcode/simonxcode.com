import React from 'react'
import { Link } from 'gatsby'


const HomePage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Simon, a full-stack developer living in beautiful Los Angeles.</h2>
      <p>Need a developer? <Link to="/contact">contact me</Link></p>
    </div>
  )
}

export default HomePage