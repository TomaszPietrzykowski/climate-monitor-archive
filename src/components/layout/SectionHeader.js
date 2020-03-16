import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./pages/Carbon.css"

const SectionHeader = ({ title }) => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <h2
      className="sectionheader"
      style={{
        borderBottom: `1px solid ${theme.accent}`
      }}
    >
      {title}
    </h2>
  )
}

export default SectionHeader
