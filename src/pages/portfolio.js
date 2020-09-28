import React from 'react'
import Layout from '../components/layout'
import portfolioStyle from "./portfolio.module.scss"
import Head from '../components/head'

const ProjectPage = () => {
  return (
    <div>
      <Layout>
        <Head title="portfolio"/>
        <h1>Feature Projects</h1>
        <h2>Here are some projects I recently worked on.</h2>
        <hr />
        <div className={portfolioStyle.display}>
          <div className={portfolioStyle.description}>
            <h2>Score Keeper</h2>
            <p>A score tracker where the first player matching the game score is the winner.</p>
            <p>This app was built with React, Redux and styled with Sass.</p>
            <a href="https://github.com/simonxcode/scoreKeeper-redux">Repository</a>
          </div>
          <div className={portfolioStyle.image}>
            <a href="https://scorekeeper-app.surge.sh/">
              <img src="../images/scoreKeeper.jpg" alt="screenshot of Score Keeper" />
            </a>
          </div>
        </div>
        <div className={portfolioStyle.display}>
          <div className={portfolioStyle.description}>
            <h2>Chirpper</h2>
            <p>A social medial platform where users can create and share a dialogue.</p>
            <p>This app was built with JavaScript, Node, Express, MongoDB and styled with CSS</p>
            <a href="https://github.com/chingu-voyage5/Geckos-Team-16">Repository</a>
          </div>
          <div className={portfolioStyle.image}>
            <a href="https://chingu-chirpper.herokuapp.com/timeline/chingu">
              <img src="../images/chirpper.jpg" alt="screenshot of Chirpper" />
            </a>
          </div>
        </div>
        <div className={portfolioStyle.display}>
          <div className={portfolioStyle.description}>
            <h2>In the Pan</h2>
            <p>A recipe finder that will help generate ideas for your next meal.</p>
            <p>This application with build with Vue, VueX, Vuetify and utilized a 3rd party API.</p>
            <a href="https://github.com/chingu-voyages/v8-geckos-team-11">Repository</a>
          </div>
          <div className={portfolioStyle.image}>
            <a href="https://inthepan-app.surge.sh/">
              <img src="../images/inThePan.jpg" alt="screenshot of In the Pan" />
            </a>
          </div>
        </div>
        <div className={portfolioStyle.display}>
          <div className={portfolioStyle.description}>
            <h2>Tic Tac Toe</h2>
            <p>The classic paper-and-pencil game where players have to match 3 in-a-row to win.</p>
            <p>This application was built with React and styled with Material-UI</p>
            <a href="https://github.com/simonxcode/tictactoe-react">Repository</a>
          </div>
          <div className={portfolioStyle.image}>
            <a href="https://simonxcode.github.io/tictactoe-react/">
              <img src="../images/ticTacToe.jpg" alt="screenshot of Tic Tac Toe" />
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProjectPage