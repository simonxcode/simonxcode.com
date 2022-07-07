import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
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
        <SyntaxHighlighter language={language || 'text'} style={oneDark}>
          {code}
       </SyntaxHighlighter>
      )
    }
  }
}

export default components
