import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import contactStyle from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons' 

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <p className={contactStyle.title}>Contact</p>
        <h1>Drop a line or just say hello</h1>
        <a href="https://twitter.com/simonxcode">Lets get social</a>
        <div>
          <ul>
            <li><a href='https://www.linkedin.com/in/simonxcode/'><FontAwesomeIcon icon={faLinkedinIn} className={contactStyle.icon} /></a></li>
            <li><a href='https://github.com/simonxcode'><FontAwesomeIcon icon={faGithub} className={contactStyle.icon} /></a></li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage