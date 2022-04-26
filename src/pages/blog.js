import React from 'react'
import Layout from '../components/layout'
import { title } from './blog.module.scss'
import Head from '../components/head'

const Blog = () => {
  return (
    <div>
      <Layout>
        <Head title="blog" />
        <p className={title}>Blog</p>
        <p>Check out my <a href='https://dev.to/simonxcode'>Dev.to </a>to read some of my latest writings.</p>
      </Layout>
    </div>
  )
}

export default Blog
