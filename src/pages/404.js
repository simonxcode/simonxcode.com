import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { link } from './404.module.scss'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404 - Page not found"/>
      <div className={link}>
        <p><Link to="/">back to home</Link></p>
        <h1>404 - Page not found</h1>
      </div>

    </Layout>
  )
}

export default NotFound 
