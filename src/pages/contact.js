import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { title, subTitle, social, icon } from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons' 

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <p className={title}>Contact</p>
        <h1>Drop a line or just say hello.</h1>
        <div className={subTitle}>
          <p>Now lets get social.<a href='https://mail.google.com/mail/?view=cm&fs=1&to=simonxiong11@gmail.com'> Emails</a> are cool also.</p>        
        </div>
        <div className={social}>
          <ul>
            <li><a href='https://www.github.com/simonxcode'><FontAwesomeIcon icon={faGithub} className={icon}/></a></li>
            <li><a href='https://www.linkedin.com/in/simonxcode/'><FontAwesomeIcon icon={faLinkedinIn} className={icon}/></a></li>
            <li><a href='https://www.twitter.com/simonxcode'><FontAwesomeIcon icon={faTwitter} className={icon}/></a></li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage