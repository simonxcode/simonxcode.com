import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import indexStyle from './index.module.scss' 
import Head from '../components/head'
import Anime, { anime } from 'react-anime'


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
              delay={anime.stagger(300, {start:1000})}
              // delay={(e, i) => i * 300}
            >
            <div>
              <p className={indexStyle.greeting}>Hello, I 'm Simon.</p>
            </div>
            <div>
              <h1>I like to help build impactful solutions for humans.</h1>
            </div>
            <div>
              <p> Feel free to checkout my <Link className={indexStyle.link} to="/portfolio">portfolio</Link> to see my latest work.</p>
            </div>
            </Anime>
          </div>
        </Layout>
      </div>
   
  )
}

export default HomePage