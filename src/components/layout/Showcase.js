import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import imgDark from "../../images/bgdark.jpg"
import imgLight from "../../images/bglight.jpg"
import "../layout/pages/Home.css"

const Showcase = () => {
  const { isDarkMode, light, dark } = useContext(ThemeContext)
  const showcaseImg = isDarkMode ? imgDark : imgLight
  const theme = isDarkMode ? dark : light

  return (
    <div
      className="showcase"
      style={{ backgroundImage: `url(${showcaseImg})` }}
    >
      <div className="container showcasecontainer">
        <div
          className="showcaseinfo"
          style={{
            borderLeft: `15px solid ${theme.accent}`,
            background: `${theme.showcaseInfoBg}`
          }}
        >
          <h2>LATEST AND HISTORICAL CLIMATE DATA</h2>
          <p>from NOAA's and NASA's public database</p>
        </div>
      </div>
    </div>
  )
}

export default Showcase
