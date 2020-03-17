import React, { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { ChartContext } from "../../../contexts/ChartContext"
import { DatabaseContext } from "../../../contexts/DatabaseContext"
import CarbonMenu from "../../Carbon/CarbonMenu"
import CarbonChartSlider from "../../Carbon/CarbonChartSlider"
import CarbonChart from "../../Carbon/CarbonChart"
import SectionHeader from "../SectionHeader"
import "./Carbon.css"
import CarbonFloatBtn from "../mobilemenus/CarbonFloatBtn"

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
    setActiveTab(tab)
    setActiveChartData(data)
  }
  return (
    <div
      style={{
        background: theme.bgPrimary,
        color: theme.text,
        borderTop: `1px solid ${theme.text}`,
        minHeight: "100vh"
      }}
    >
      <div className="container">
        <SectionHeader title={"Carbon Dioxide CO2"} />
        <div style={{ display: "flex", marginTop: "1.5rem" }}>
          <div className="carbonmenu">
            <CarbonMenu active={activeTab} setTab={setTab} />
          </div>
          <div style={{ flex: "3" }}>
            <CarbonChartSlider />
            <CarbonChart />
            <CarbonFloatBtn setTab={setTab} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Carbon
