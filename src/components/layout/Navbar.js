import React from "react"
import { ThemeContex } from "../../contexts/ThemeContext"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <ThemeContex.Consumer>
      {context => {
        const { isDarkMode, light, dark } = context
        const theme = isDarkMode ? dark : light
        return (
          <nav
            className="nav-bar"
            style={{ background: theme.bgPrimary, color: theme.text }}
          >
            <h1 className="logo">Climate Monitor</h1>
            <ul className="nav">
              <li>Home</li>
              <li>Co2</li>
              <li>Temperature</li>
              <li>About</li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        )
      }}
    </ThemeContex.Consumer>
  )
}

export default Navbar
