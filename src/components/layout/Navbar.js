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
        padding: "0.2rem 0rem"
      }}
    >
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h3>
              <FontAwesomeIcon
                icon={faGlobeEurope}
                style={{ fontSize: "1.5rem" }}
              />
              <span
                style={{
                  paddingLeft: "0.8rem",
                  fontFamily: "Spartan, sans-serif"
                }}
              >
                CLIMATE MONITOR
              </span>
            </h3>
          </div>
          <ul style={{ fontSize: "0.8rem" }}>
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
            <li>
              <Link to="/news" style={{ color: theme.text }}>
                NEWS
              </Link>
            </li>
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
