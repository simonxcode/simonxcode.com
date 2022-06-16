import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { PortableText } from '@portabletext/react'

export const query = graphql`
  query {
    sanityPost {
      id
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
      <PortableText value={data.sanityPost._rawBody} />
    </Layout>
  )
}

export default BlogPost
