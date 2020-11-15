import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyle from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons' 

const Footer  = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className={footerStyle.footer}>
      <div className={footerStyle.social}>
        <ul>
          <li><a href='https://github.com/simonxcode'><FontAwesomeIcon icon={faGithub} className={footerStyle.icon} /></a></li>
          <li><a href='https://www.linkedin.com/in/simonxcode/'><FontAwesomeIcon icon={faLinkedinIn} className={footerStyle.icon} /></a></li>
          <li><a href='https://twitter.com/simonxcode'><FontAwesomeIcon icon={faTwitter} className={footerStyle.icon} /></a></li>
        </ul>   
      </div>
      <p>{data.site.siteMetadata.author} © 2020</p>
    </div>
  )
}

export default Footer