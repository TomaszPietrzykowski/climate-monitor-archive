import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import SectionHeader from "../layout/SectionHeader"
import CurrentCarbon from "../Carbon/CurrentCarbon"
import DashboardButtons from "./DashboardButtons"

const Dashboard = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div style={{ background: theme.bgPrimary, color: theme.text }}>
      <div className="container">
        <div className="dashboard">
          <SectionHeader title={"Dashboard"} />
          <CurrentCarbon />
          <DashboardButtons />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
