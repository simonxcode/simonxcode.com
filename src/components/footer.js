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
          <li><a href='https://www.github.com/simonxcode' aria-label="Github icon"><FontAwesomeIcon icon={faGithub} className={icon} /></a></li>
          <li><a href='https://www.linkedin.com/in/simonxcode/' aria-label="LinkedIn icon"><FontAwesomeIcon icon={faLinkedinIn} className={icon} /></a></li>
          <li><a href='https://www.twitter.com/simonxcode' aria-label="Twitter icon"><FontAwesomeIcon icon={faTwitter} className={icon} /></a></li>
          <li><a href='https://www.dev.to/simonxcode' aria-label="Dev.to icon"><FontAwesomeIcon icon={faDev} className={icon} /></a></li>
        </ul>   
      </div>
      <p>{data.site.siteMetadata.author} © 2022</p>
    </div>
  )
}

export default Footer