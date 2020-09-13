import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <h1>Contact</h1>
        <p>Drop a line or just say hello</p>
        <a href="https://twitter.com/simonxcode" target="_blank">Lets get social</a>
      </Layout>
    </div>
  )
}

export default ContactPage