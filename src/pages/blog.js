import React from 'react'
import Layout from '../components/layout'
import blogStyle from './blog.module.scss'

const Blog = () => {
  return (
    <div>
      <Layout>
        <div className={blogStyle.content}>
          <p className={blogStyle.header}>Blog</p>
          <h2>What I have learned and what interest me</h2>
        </div>
      </Layout>
    </div>
  )
}

export default Blog