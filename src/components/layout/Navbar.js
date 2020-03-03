import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const { isDarkMode, light, dark } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <nav
      className="navbar"
      style={{ background: theme.bgPrimary, color: theme.text }}
    >
      <h1 className="logo">Climate Monitor</h1>
      <ul>
        <li>Home</li>
        <li>Co2</li>
        <li>Temp</li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
