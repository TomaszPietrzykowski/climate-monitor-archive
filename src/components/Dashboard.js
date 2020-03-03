import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Dashboard = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div
      className="dashboard"
      style={{ background: theme.bgPrimary, color: theme.text }}
    >
      <div className="container">
        <h2>dashboard content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          facilis vero! Ipsa quos illo expedita, excepturi harum in
          necessitatibus, quibusdam cupiditate eaque vero recusandae, ratione
          voluptate vitae ea consectetur dignissimos autem quod atque id quam at
          eius placeat. Pariatur, molestiae?
        </p>
      </div>
    </div>
  )
}

export default Dashboard
