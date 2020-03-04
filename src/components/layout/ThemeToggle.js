import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const ThemeToggle = () => {
  const { isDarkMode, dark, light, toggleTheme } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div
      style={{ background: theme.bgPrimary, color: theme.text }}
      onClick={toggleTheme}
    >
      <i className={theme.ico} />
    </div>
  )
}

export default ThemeToggle
