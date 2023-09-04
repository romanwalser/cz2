import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Black Street Rabbit</title>
        <meta property="og:title" content="Black Street Rabbit" />
      </Helmet>
      <a href="https://czproklaland.chuimain.online/" className="home-link">
        <img alt="image" src="/czbutton-400h.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
