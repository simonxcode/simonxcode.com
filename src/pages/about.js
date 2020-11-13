import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyle from './about.module.scss'
import Img from 'gatsby-image'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if(!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div>
      <Layout>
        <Head title="about"/>
        <p className={aboutStyle.title}>About Me</p>
        <h1>Full Stack Developer based in Atlanta, Georgia.</h1>
        <p>Experienced in JavaScript based frameworks for building elegant 
        and functional web applications. When not building software,
        I enjoy partaking in photography, fitness and learning about other cultures.</p>
        <p>Want to work with me?<Link to="/contact"> React out.</Link></p>
      </Layout>
      <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
    </div>
  )
}

export default AboutPage