import React, { useContext } from "react"
import { ThemeContex } from "../../../contexts/ThemeContext"

const Home = () => {
  const { isDarkMode } = useContext(ThemeContex)
  const bg = isDarkMode
    ? "../../../images/bgdark.jpg"
    : "../../../images/bgdlight.jpg"
  return (
    <div
      className="home"
      style={{ backgroundImage: bg, minHight: "40vh", width: "100%" }}
    >
      <div className="container">this is home page</div>
    </div>
  )
}

export default Home
