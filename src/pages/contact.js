import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import contactStyle from './contact.module.scss'

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <p className={contactStyle.title}>Contact</p>
        <h1>Drop a line or just say hello</h1>
        <a href="https://twitter.com/simonxcode">Lets get social</a>
      </Layout>
    </div>
  )
}

export default ContactPage