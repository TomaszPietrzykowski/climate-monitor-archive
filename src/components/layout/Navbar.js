import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const { isDarkMode, light, dark } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div
      className="nav"
      style={{ background: theme.bgPrimary, color: theme.text }}
    >
      <div className="container">
        <nav className="navbar">
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
      </div>
    </div>
  )
}

export default Navbar
