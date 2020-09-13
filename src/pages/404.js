import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404 page not found"/>
      <h1>page not found</h1>
      <p><Link to="/">back to home</Link></p>
    </Layout>
  )
}

export default NotFound 