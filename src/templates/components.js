import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter';
import client from './sanityClient'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const components = {
  types: {
    image: props => (
      <figure>
        <img src={urlFor(props.value.asset).width(300).url()} alt=''></img>
      </figure>
    ),
    codeBlock: ({ value = {} }) => {
      const { code, language } = value

      if(!code) {
        return null
      }
      return (
        <SyntaxHighlighter language={language || 'text'}>
          {code}
       </SyntaxHighlighter>
      )
    }
  }
}

export default components
