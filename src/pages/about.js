import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { title, display, summary, image }from './about.module.scss'
import Profile from '../components/gatsby-image/Profile'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about"/>
        <p className={title}>About Me</p>
        <h1>Full Stack Developer based in Atlanta, Georgia.</h1>
        <div className={display}>
          <div className={summary}>
            <p>
            I am experienced in JavaScript based frameworks and tools for building elegant 
            and functional web applications. 
            </p>
            <p>
            My philosophy is to never stop learning and <i>always be a student</i>. 
            </p>
            <p>
            When not building software,
            I enjoy partaking in photography, fitness and learning about other cultures.
            </p>
            <p>Want to work with me?<Link to="/contact"> React out.</Link></p>
          </div>
          <div className={image}>
            <Profile />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage