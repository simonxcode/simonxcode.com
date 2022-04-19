import React from 'react'
import Layout from '../components/layout'
import {title, subTitle, display, description, image } from "./portfolio.module.scss"
import Head from '../components/head'
import ClutchWeather from '../components/gatsby-image/ClutchWeather'
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
            <h3>Clutch Weather</h3>
            <p>Search over 200,000 cities in the world and get reliable current weather information. 
            Built with React, Express, OpenWeather API and styled with Tailwind. 
            </p>
            <p><a href="https://github.com/simonxcode/clutch-weather-app">Repository</a></p>
          </div>
          <div className={image}>
            <a href="https://clutchweather.herokuapp.com/">
              <div>
                <ClutchWeather />
              </div>
            </a>
          </div>
        </div>
        <div className={display}>
          <div className={description}>
            <h3>Score Keeper</h3>
            <p>A score tracker between two players where the first player matching the game score is the winner. 
            Built with React, Redux and styled with Sass.
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
            <h3>In the Pan</h3>
            <p>Search over 2.3 million recipes to help generate ideas for your next meal.
              Project was part of a collaborative remote learning cohort.
              Built with Vue, VueX, Edamam API and styled with Vuetify.</p>
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
            <h3>Chirpper</h3>
            <p>A social medial platform where users can create and share a dialogue. 
            Project was part of a collaborative remote learning cohort. 
            Built with JavaScript, Express, MongoDB and styled with Bootstrap.
            </p>
            <p><a href="https://github.com/chingu-voyage5/Geckos-Team-16">Repository</a></p>
          </div>
          <div className={image}>
            <a a href = "https://chingu-chirpper.herokuapp.com/" >
              <div>
                <Chirpper />
              </div>
            </a>
          </div>
        </div>
        <div className={display}>
          <div className={description}>
            <h3>Tic Tac Toe</h3>
            <p>The classic paper-and-pencil game where players have to match 3 in-a-row to win.
            Built with React and styled with Material-UI.</p>
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