import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gatsbyImage } from '../../pages/portfolio.module.scss'

const InThePan = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "inThePan.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    } 
  `)

  if(!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }
  return <GatsbyImage className={gatsbyImage} image={data.placeholderImage.childImageSharp.gatsbyImageData} alt='in the pan screenshot' />
}

export default InThePan
