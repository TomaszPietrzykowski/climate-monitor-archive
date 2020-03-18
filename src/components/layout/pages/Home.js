import React, { Fragment } from "react"
import Showcase from "../Showcase"
import Dashboard from "../../Dashboard/Dashboard"
import "./Home.css"

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <Dashboard />
    </Fragment>
  )
}

export default Home
