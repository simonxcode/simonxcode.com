import React from 'react'
import Layout from '../components/layout'
import {title, subTitle, display, description, image } from "./portfolio.module.scss"
import Head from '../components/head'
import ScoreKeeper from '../components/gatsby-image/ScoreKeeper'
import Chirpper from '../components/gatsby-image/Chirpper'
import InThePan from '../components/gatsby-image/InThePan'
import TicTacToe from '../components/gatsby-image/TicTacToe'

const ProjectPage = () => {
  return (
    <div>
      <Layout>
        <Head title="portfolio"/>
        <p className={title}>Feature Projects</p>
        <h1 className={subTitle}>Here are some projects I recently worked on.</h1>
        <div className={display}>
          <div className={description}>
            <h3>Score Keeper</h3>
            <p>A score tracker where the first player matching the game score is the winner. 
            This app was built with React, Redux and styled with Sass.
            </p>
            <p><a href="https://github.com/simonxcode/scoreKeeper-redux">Repository</a></p>
          </div>
          <div className={image}>
            <a href="https://scorekeeper-app.surge.sh/">
              <div>
                <ScoreKeeper />
              </div>
            </a>
          </div>
        </div>
        <div className={display}>
          <div className={description}>
            <h3>Chirpper</h3>
            <p>A social medial platform where users can create and share a dialogue.
            This app was built with JavaScript, Node, Express, MongoDB and styled with Bootstrap.
            </p>
            <p><a href="https://github.com/chingu-voyage5/Geckos-Team-16">Repository</a></p>
          </div>
          <div className={image}>
            <a href="https://chingu-chirpper.herokuapp.com/timeline/chingu">
              <div>
                <Chirpper />
              </div>
            </a>
          </div>
        </div>
        <div className={display}>
          <div className={description}>
            <h3>In the Pan</h3>
            <p>A recipe finder that will help you generate ideas for your next meal.
            This app was built with Vue, VueX, Vuetify and utilized a 3rd party API.</p>
            <p><a href="https://github.com/chingu-voyages/v8-geckos-team-11">Repository</a></p>
          </div>
          <div className={image}>
            <a href="https://inthepan-app.surge.sh/">
              <div>
                <InThePan />
              </div>
            </a>
          </div>
        </div>
        <div className={display}>
          <div className={description}>
            <h3>Tic Tac Toe</h3>
            <p>The classic paper-and-pencil game where players have to match 3 in-a-row to win.
            This app was built with React and styled with Material-UI.</p>
            <p>
              <a href="https://github.com/simonxcode/tictactoe-react"> Repository </a>
            </p>
          </div>
          <div className={image}>
            <a href="https://simonxcode.github.io/tictactoe-react/">
              <div>
                <TicTacToe />
              </div>
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProjectPage