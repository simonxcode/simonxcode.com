import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gatsbyImage } from '../../pages/portfolio.module.scss'

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  if(!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }
  return <GatsbyImage className={gatsbyImage} image={data.placeholderImage.childImageSharp.gatsbyImageData} alt='profile photo' />
}

export default Profile
