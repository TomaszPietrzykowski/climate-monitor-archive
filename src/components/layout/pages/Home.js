import React, { Fragment } from "react"
import Showcase from "../Showcase"
import Dashboard from "../../Dashboard/Dashboard"
import NewsFeed from "../../NewsFeed/NewsFeed"
import "./Home.css"

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <Dashboard />
      <NewsFeed />
    </Fragment>
  )
}

export default Home
