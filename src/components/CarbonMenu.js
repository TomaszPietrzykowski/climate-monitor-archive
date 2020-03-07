import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const CarbonMenu = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const carbonBtnStyle = {
    fontSize: "1.1rem",
    padding: "1rem 3rem",
    margin: "1px"
  }
  //   const carbonBtnStyleHoover = {
  //     fontSize: "1.1rem",
  //     padding: "1rem 3rem",
  //     margin: "1px",
  //     background: `${theme.bgSecondary}`,
  //     borderLeft: `15px solid ${theme.accent}`
  //   }
  const carbonBtnStyleHoover = {
    fontSize: "1.1rem",
    padding: "1rem 3rem",
    margin: "1px",
    background: `${theme.bgSecondary}`,
    borderLeft: `15px solid ${theme.accent}`,
    color: `${theme.accentSecondary}`
  }
  return (
    <div>
      <div style={carbonBtnStyle}>Daily data</div>
      <div style={carbonBtnStyle}>Wekly average</div>
      <div style={carbonBtnStyleHoover}>Yearly average</div>
      <div style={carbonBtnStyle}>Full data sope</div>
      <div style={carbonBtnStyle}>Ocean CO2</div>
      <div style={carbonBtnStyle}>Keeling curve</div>
      <div style={carbonBtnStyle}>Compare factors</div>
      <div style={carbonBtnStyle}>News</div>
    </div>
  )
}

export default CarbonMenu
