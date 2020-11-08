import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyle from './about.module.scss'

const AboutPage = () => {
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
    </div>
  )
}

export default AboutPage