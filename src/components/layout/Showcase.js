import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import imgDark from "../../images/bgdark.jpg"
import imgLight from "../../images/bglight.jpg"

const Showcase = () => {
  const { isDarkMode, light, dark } = useContext(ThemeContext)
  const showcaseImg = isDarkMode ? imgDark : imgLight
  const theme = isDarkMode ? dark : light
  const showcaseStyle = {
    backgroundImage: `url(${showcaseImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "300px"
  }
  const showcaseContainerStyle = {
    // border: "1px solid #000",
    minHeight: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "start",
    paddingLeft: "0.5rem"
  }
  const showcaseInfoStyle = {
    borderLeft: `15px solid ${theme.accent}`,
    padding: "1rem 4rem 1rem 1.5rem",
    background: `${theme.showcaseInfoBg}`,
    color: "rgba(255,255,255,1)",
    fontFamily: '"Spartan", sans-serif'
  }
  return (
    <div className="showcase" style={showcaseStyle}>
      <div className="container" style={showcaseContainerStyle}>
        <div className="showcase-info" style={showcaseInfoStyle}>
          <h2
            style={{
              marginBottom: "0.7rem",
              letterSpacing: "0.2rem"
            }}
          >
            LATEST AND HISTORICAL CLIMATE DATA
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
            from NOAA's and NASA's public database
          </p>
        </div>
      </div>
    </div>
  )
}

export default Showcase
