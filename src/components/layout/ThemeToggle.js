import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"

const ThemeToggle = () => {
  const { isDarkMode, dark, light, toggleTheme } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div
      style={{ background: theme.bgPrimary, color: theme.text }}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </div>
  )
}

export default ThemeToggle
