import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import CurrentCarbon from "../Carbon/CurrentCarbon"
import DashboardButtons from "./DashboardButtons"

const Dashboard = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div style={{ background: theme.bgPrimary, color: theme.text }}>
      <div className="container">
        <div className="dashboard">
          <br />
          <br />
          <h2
            style={{
              borderBottom: `1px solid ${theme.accent}`,
              paddingBottom: "0.5rem"
            }}
          >
            Dashboard
          </h2>
          <br />
          <CurrentCarbon />
          <DashboardButtons />
          <br />
          <br />
        </div>

        <br />
      </div>
    </div>
  )
}

export default Dashboard
