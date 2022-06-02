import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
        {data.allMarkdownRemark.edges.map((edge) => (
          <ul>
            <li>
              <h2 className={title}>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          </ul>
        ))}
      </Layout>
    </div>
  )
}

export default Blog
