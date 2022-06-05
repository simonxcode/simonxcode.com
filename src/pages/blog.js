import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import { title, posts, post } from './blog.module.scss'
import Head from '../components/head'

const Blog = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
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
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className={post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <p>{edge.node.frontmatter.date}</p>
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
