import React, { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import CarbonChart from "../../CarbonChart"
import CarbonMenu from "../../CarbonMenu"

const Carbon = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div style={{ background: theme.bgPrimary, color: theme.text }}>
      <div className="container">
        <div style={{ display: "flex", paddingTop: "4rem" }}>
          <div style={{ flex: "1" }}>
            <CarbonMenu />
          </div>
          <div style={{ flex: "3" }}>
            <CarbonChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carbon
