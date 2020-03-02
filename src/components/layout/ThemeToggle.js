import React from "react"
import { ThemeContex } from "../../contexts/ThemeContext"

const ThemeToggle = () => {
  return (
    <ThemeContex.Consumer>
      {context => {
        const { isDarkMode, dark, light, toggleTheme } = context
        const theme = isDarkMode ? dark : light
        const btnText = isDarkMode ? "light mode" : "dark mode"
        return (
          <button
            style={{ background: theme.bgPrimary, color: theme.text }}
            onClick={toggleTheme}
            className="btn btn-dark"
          >
            {btnText}
          </button>
        )
      }}
    </ThemeContex.Consumer>
  )
}

export default ThemeToggle
