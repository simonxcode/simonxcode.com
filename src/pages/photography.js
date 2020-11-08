import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import photographyStyle from './photography.module.scss'

const PhotographyPage = () => {
  return (
    <div>
      <Layout>
        <Head title="photography"/>
        <p className={photographyStyle.title}>Photography</p>
        <h1>Bits and pieces of my photos</h1> 
      </Layout>
  </div>
  )
}

export default PhotographyPage