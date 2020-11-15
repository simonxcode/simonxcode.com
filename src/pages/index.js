import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import indexStyle from './index.module.scss' 
import Head from '../components/head'
import Anime from 'react-anime'


const HomePage = () => {
  return (
  
      <div> 
        <Layout>
          <Head title="home" />
          <div>
            <Anime
              opacity={[0, 1]}
              easing= 'easeInExpo' 
              translateY={'3rem'}
              delay={(e, i) => i * 300}
            >
              <p className={indexStyle.greeting}>Hello, I'm Simon.</p>
              <h1>I like to help build impactful solutions for humans.</h1>
              <p> Feel free to checkout my <Link className={indexStyle.link} to="/portfolio">portfolio</Link> to see my latest work.</p>
            </Anime>
          </div>
        </Layout>
      </div>
   
  )
}

export default HomePage