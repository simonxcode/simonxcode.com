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
          <a href="https://github.com/simonxcode/scoreKeeper-redux" target="_blank">Repository</a>
          <a href="https://scorekeeper-app.surge.sh/" target="_blank">
            <img src="../images/scoreKeeper.jpg" alt="screenshot of Score Keeper" />
          </a>
        </div>
        <div>
          <h2>Chirpper</h2>
          <p>
          A social medial platform where users can create and share a dialogue. 
          </p>
          <p>This app was built with JavaScript, Node, Express, MongoDB and styled with CSS</p>
          <a href="https://github.com/chingu-voyage5/Geckos-Team-16" target="_blank">Repository</a>
          <a href="https://chingu-chirpper.herokuapp.com/timeline/chingu" target="_blank">
            <img src="../images/chirpper.jpg" alt="screenshot of Chirpper" />
          </a>
        </div>
        <div>
          <h2>In the Pan</h2>
          <p>
          A recipe finder that will help generate ideas for your next meal. 
          </p>
          <p>This application with build with Vue, VueX, Vuetify and utilized a 3rd party API.</p>
          <a href="https://github.com/chingu-voyages/v8-geckos-team-11" target="_blank">Repository</a>
          <a href="https://inthepan-app.surge.sh/" target="_blank">
            <img src="../images/inThePan.jpg" alt="screenshot of In the Pan" />
          </a>
        </div>
        <div>
          <h2>Tic Tac Toe</h2>
          <p>
          The classic paper-and-pencil game where players have to match 3 in-a-row to win.
          </p>
          <p>This application was built with React and styled with Material-UI</p>
          <a href="https://github.com/simonxcode/tictactoe-react" target="_blank">Repository</a>
          <a href="https://simonxcode.github.io/tictactoe-react/" target="_blank">
            <img src="../images/ticTacToe.jpg" alt="screenshot of Tic Tac Toe" />
          </a>
        </div>
        
      </Layout>
    </div>
  )
}

export default ProjectPage