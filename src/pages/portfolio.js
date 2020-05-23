import React from 'react'
import Layout from '../components/layout'

const ProjectPage = () => {
  return (
    <div>
      <Layout>
        <p>PORTFOLIO</p>
        <h1>Feature Projects</h1>
        <h2>Here are some projects I recently worked on.</h2>
        <hr />
        <h2>Score Keeper</h2>
        <p>A score tracker between 2 players where the first player matching game score is the winner. 
        Game score can be increment, decrement and reset.
        </p>
        <p>This app was built with React, Redux and styled with Sass.</p>
        <a><p>Repository</p></a>
        <a><p>Image of Project</p></a>
      </Layout>
    </div>
  )
}

export default ProjectPage