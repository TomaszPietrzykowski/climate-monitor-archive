import React, { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { ChartContext } from "../../../contexts/ChartContext"
import { DatabaseContext } from "../../../contexts/DatabaseContext"
import CarbonMenu from "../../CarbonMenu"
import CarbonChartSlider from "../../CarbonChartSlider"
import CarbonChart from "../../CarbonChart"
import SectionHeader from "../../SectionHeader"

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
    setActiveTab({ tab })
    setActiveChartData(data)
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
        <SectionHeader title={"Carbon Dioxide CO2"} />
        <div style={{ display: "flex", marginTop: "1.5rem" }}>
          <div style={{ flex: "1", marginTop: "2rem" }}>
            <CarbonMenu active={activeTab} setTab={setTab} />
          </div>
          <div style={{ flex: "3" }}>
            <CarbonChartSlider />
            <CarbonChart />
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
