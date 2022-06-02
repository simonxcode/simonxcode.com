import React from 'react'
import Layout from '../components/layout'
import { title } from '../pages/blog.module.scss'

const BlogPost = () => {
  return (
    <Layout>
      <p className={title}>This is a blog template</p>
    </Layout>
  )
}

export default BlogPost
