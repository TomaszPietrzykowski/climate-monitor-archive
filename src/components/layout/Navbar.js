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
          <div className="logo">
            <h1>
              <i className="fas fa-globe" />
              <span style={{ paddingLeft: "0.8rem" }}>Climate Monitor</span>
            </h1>
          </div>
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
