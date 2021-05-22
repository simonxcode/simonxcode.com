import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { footer, social, icon } from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons' 

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
    <div className={footer}>
      <div className={social}>
        <ul>
          <li><a href='https://www.github.com/simonxcode'><FontAwesomeIcon icon={faGithub} className={icon} /></a></li>
          <li><a href='https://www.linkedin.com/in/simonxcode/'><FontAwesomeIcon icon={faLinkedinIn} className={icon} /></a></li>
          <li><a href='https://www.twitter.com/simonxcode'><FontAwesomeIcon icon={faTwitter} className={icon} /></a></li>
          <li><a href='https://www.dev.to/simonxcode'><FontAwesomeIcon icon={faDev} className={icon} /></a></li>
        </ul>   
      </div>
      <p>{data.site.siteMetadata.author} © 2021</p>
    </div>
  )
}

export default Footer