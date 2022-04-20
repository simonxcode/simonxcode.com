import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { title, subTitle, social, icon } from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons' 

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <p className={title}>Contact</p>
        <h1>Drop a line or just say hello.</h1>
        <p>Now lets get social.<a href='https://mail.google.com/mail/?view=cm&fs=1&to=simonxiong11@gmail.com'> Emails</a> are cool also.</p>        
        <div className={social}>
          <ul>
            <li><a href='https://www.github.com/simonxcode' aria-label="Github icon"><FontAwesomeIcon icon={faGithub} className={icon}/></a></li>
            <li><a href='https://www.linkedin.com/in/simonxcode/' aria-label="LinkedIn icon"><FontAwesomeIcon icon={faLinkedinIn} className={icon}/></a></li>
            <li><a href='https://www.twitter.com/simonxcode' aria-label="Twitter icon"><FontAwesomeIcon icon={faTwitter} className={icon}/></a></li>
            <li><a href='https://www.dev.to/simonxcode' aria-label="Dev.to icon"><FontAwesomeIcon icon={faDev} className={icon}/></a></li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage
