import React from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
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
    </ThemeContext.Consumer>
  )
}

export default ThemeToggle
