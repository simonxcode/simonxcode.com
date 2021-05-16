import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { title, posts, post } from './blog.module.scss'
import Head from '../components/head'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost( sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Head title="blog"/>
        <p className={title}>Blog</p>
        <ol className={posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
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