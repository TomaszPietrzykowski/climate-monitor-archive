import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import imgDark from "../../images/bgdark.jpg"
import imgLight from "../../images/bglight.jpg"

const Showcase = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const showcaseImg = isDarkMode ? imgDark : imgLight
  const showcaseStyle = {
    backgroundImage: `url(${showcaseImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "300px"
  }
  return <div className="showcase" style={showcaseStyle}></div>
}

export default Showcase
