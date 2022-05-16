import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gatsbyImage } from '../../pages/portfolio.module.scss'

const ScoreKeeper = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "scoreKeeper.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    } 
  `)

  if(!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }
  return <GatsbyImage className={gatsbyImage} image={data.placeholderImage.childImageSharp.gatsbyImageData} alt='score keeper screenshot' />
}

export default ScoreKeeper
