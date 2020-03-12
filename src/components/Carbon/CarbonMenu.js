import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const CarbonMenu = ({ active, setTab }) => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light

  const carbonBtnStyle = {
    fontSize: "1.1rem",
    padding: "1rem 3rem",
    margin: "1px",
    background: `${theme.bgPrimary}`
  }
  return (
    <div>
      <div id={"full"} style={carbonBtnStyle} onClick={setTab}>
        Full ice-core data
      </div>
      <div id={"yearly"} style={carbonBtnStyle} onClick={setTab}>
        Annual average
      </div>
      <div id={"weekly"} style={carbonBtnStyle} onClick={setTab}>
        Weekly average
      </div>
      <div id={"latest"} style={carbonBtnStyle} onClick={setTab}>
        Daily readings
      </div>
      <div style={carbonBtnStyle}>Ocean CO2</div>
      <div style={carbonBtnStyle}>Keeling curve</div>
      <div style={carbonBtnStyle}>Compare factors</div>
      <div style={carbonBtnStyle}>News</div>
    </div>
  )
}
export default CarbonMenu