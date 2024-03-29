import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import { title, posts, post } from './blog.module.scss'
import Head from '../components/head'

const Blog = () => {

  const data = useStaticQuery(graphql`
    query {
      allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            publishedAt(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  `)
  
  return (
    <div> 
      <Layout>
        <Head title="blog" />
        <p className={title}>Blog</p>
        <ol className={posts}>
          {data.allSanityPost.edges.map((edge) => {
            return (
              <li className={post} key={edge.node.id}>
                <Link to={`/blog/${edge.node.slug.current}`}>
                  <h1>{edge.node.title}</h1>
                  <p>{edge.node.publishedAt}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default Blog
