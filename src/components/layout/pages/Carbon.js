import React, { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import CarbonChart from "../../CarbonChart"
import CarbonMenu from "../../CarbonMenu"
import CarbonChartSlider from "../../CarbonChartSlider"

const Carbon = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div
      style={{
        background: theme.bgPrimary,
        color: theme.text,
        borderTop: `1px solid ${theme.text}`
      }}
    >
      <div style={{ display: "flex", marginTop: "1.5rem" }}>
        <div style={{ flex: "1", marginTop: "2rem" }}>
          <CarbonMenu />
        </div>
        <div style={{ flex: "3" }}>
          <h2
            style={{
              borderBottom: `1px solid ${theme.accent}`,
              paddingBottom: "0.5rem",
              margin: "2rem 2rem 4rem 2rem"
            }}
          >
            Carbon Dioxide CO2
          </h2>
          <CarbonChartSlider />
          <CarbonChart />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Carbon
