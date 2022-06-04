import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import { title } from './blog.module.scss'
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
    <Layout>
      <Head title="blog" />
      <p className={title}>Blog</p>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <div>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2 className={title}>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link> 
          </div>
        )
      })}
    </Layout>
  )
}

export default Blog
