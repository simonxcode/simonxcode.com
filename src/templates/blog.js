import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query {
    sanityPost {
      slug {
        current
      }
      title
      publishedAt(formatString: "MMM Do, YYYY")
      _rawBody
    }
  }
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <h1>{data.sanityPost.title}</h1>
      <p>{data.sanityPost.publishedAt}</p>
    </Layout>
  )
}

export default BlogPost
