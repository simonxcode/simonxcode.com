import React from 'react'
import Layout from '../components/layout'
import visitedLinks from '../components/layout.module.scss'

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1>Contact</h1>
        <p>Drop a line or just say hello</p>
        <a className={visitedLinks.content} href="https://twitter.com/simonxcode" target="_blank">Lets get social</a>
      </Layout>
    </div>
  )
}

export default ContactPage