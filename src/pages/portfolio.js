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
        <div>
          <h2>Score Keeper</h2>
          <p>A score tracker where the first player matching the game score is the winner.
          </p>
          <p>This app was built with React, Redux and styled with Sass.</p>
          <a><p>Repository</p></a>
          <a><p>Image of Project</p></a>
        </div>
        <div>
          <h2>Chirpper</h2>
          <p>
          A social medial platform where users can create and share a dialogue. 
          </p>
          <p>This app was built with JavaScript, Node, Express, MongoDB and styled with CSS</p>
          <a><p>Repository</p></a>
          <a><p>Image of Project</p></a>
        </div>
        <div>
          <h2>In the Pan</h2>
          <p>
          A recipe finder that will help generate ideas for your next meal. 
          </p>
          <p>This application with build with Vue, VueX, Vuetify and utilized a 3rd party API.</p>
          <a><p>Repository</p></a>
          <a><p>Image of Project</p></a>
        </div>
        <div>
          <h2>Tic Tac Toe</h2>
          <p>
          The classic paper-and-pencil game where players have to match 3 in-a-row to win.
          </p>
          <p>This application was built with React and styled with Material-UI</p>
          <a><p>Repository</p></a>
          <a><p>Image of Project</p></a>
        </div>
        
      </Layout>
    </div>
  )
}

export default ProjectPage