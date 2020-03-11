import React, { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { ChartContext } from "../../../contexts/ChartContext"
import { DatabaseContext } from "../../../contexts/DatabaseContext"
import CarbonMenu from "../../CarbonMenu"
// import FullCarbonChart from "../../FullCarbonChart"
// import WeeklyCarbonChart from "../../WeeklyCarbonChart"
import CarbonChartSlider from "../../CarbonChartSlider"
import CarbonChart from "../../CarbonChart"

const Carbon = () => {
  const {
    dailyCarbon,
    weeklyCarbon,
    yearlyCarbon,
    fullRecordCarbon
  } = useContext(DatabaseContext)
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const [activeTab, setActiveTab] = useState("full")
  const { setActiveChartData } = useContext(ChartContext)
  const setTab = e => {
    const tab = e.target.id
    const data =
      tab === "full"
        ? fullRecordCarbon
        : tab === "yearly"
        ? yearlyCarbon
        : tab === "weekly"
        ? weeklyCarbon
        : dailyCarbon
    setActiveChartData(data)
    setActiveTab({ tab })
  }
  return (
    <div
      style={{
        background: theme.bgPrimary,
        color: theme.text,
        borderTop: `1px solid ${theme.text}`
      }}
    >
      <div className="container">
        <div style={{ display: "flex", marginTop: "1.5rem" }}>
          <div style={{ flex: "1", marginTop: "2rem" }}>
            <CarbonMenu active={activeTab} setTab={setTab} />
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
            {/* {activeTab === "full" ? <FullCarbonChart /> : <WeeklyCarbonChart />} */}
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Carbon
