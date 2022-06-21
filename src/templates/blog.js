import React from 'react'
import { graphql } from 'gatsby'
import { PortableText } from '@portabletext/react'
import Layout from '../components/layout'
import components from './components'

export const query = graphql`
  query($id: String!) {
    sanityPost(id: {eq: $id}){
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
      <PortableText value={data.sanityPost._rawBody} components={components} />
    </Layout>
  )
}

export default BlogPost
