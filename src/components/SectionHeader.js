import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const SectionHeader = ({ title }) => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <h2
      style={{
        borderBottom: `1px solid ${theme.accent}`,
        paddingBottom: "0.5rem",
        margin: "2rem 2rem 4rem 2rem"
      }}
    >
      {title}
    </h2>
  )
}

export default SectionHeader
