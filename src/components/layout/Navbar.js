import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import ThemeToggle from "./ThemeToggle"
import UserBtn from "./UserBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
  const { isDarkMode, light, dark } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div
      className="nav"
      style={{
        background: theme.bgPrimary,
        color: theme.text,
        paddingBottom: "0.3rem"
      }}
    >
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h2>
              <FontAwesomeIcon icon={faGlobeEurope} />
              <span
                style={{
                  paddingLeft: "0.8rem",
                  fontFamily: "Exo 2, sans-serif"
                }}
              >
                CLIMATE MONITOR
              </span>
            </h2>
          </div>
          <ul>
            <li>
              <Link to="/" style={{ color: theme.text }}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/co2" style={{ color: theme.text }}>
                CO2
              </Link>
            </li>
            <li>TEMP</li>
            <li>MORE</li>
            <li>NEWS</li>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <UserBtn />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
