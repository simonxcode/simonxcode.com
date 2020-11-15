import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import contactStyle from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons' 

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <p className={contactStyle.title}>Contact</p>
        <h1>Drop a line or just say hello.</h1>
        <p>Now lets get social. <a href='https://mail.google.com/mail/?view=cm&fs=1&to=simonxiong11@gmail.com'>Emails</a> are cool also.</p>
        <div className={contactStyle.social}>
          <ul>
            <li><a href='https://github.com/simonxcode'><FontAwesomeIcon icon={faGithub} className={contactStyle.icon}/></a></li>
            <li><a href='https://www.linkedin.com/in/simonxcode/'><FontAwesomeIcon icon={faLinkedinIn} className={contactStyle.icon}/></a></li>
            <li><a href='https://twitter.com/simonxcode'><FontAwesomeIcon icon={faTwitter} className={contactStyle.icon}/></a></li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage