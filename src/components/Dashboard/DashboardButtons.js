import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons"

const DashboardButtons = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const liststyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    background: theme.bgSecondary,
    marginTop: "3rem",
    padding: "1rem"
  }
  let btnstyle = {
    background: theme.bgPrimary,
    margin: "1rem",
    padding: "1rem",
    textAlign: "center"
  }
  const iconstyle = {
    color: theme.accentSecondary,
    fontSize: "2.5rem",
    marginBottom: "1rem"
  }

  return (
    <div style={liststyle}>
      <Link to="/co2" style={{ color: theme.text }}>
        <div style={btnstyle}>
          <h1 style={iconstyle}>
            <FontAwesomeIcon icon={faGlobeEurope} />
          </h1>
          <h4>Cabon Dioxide CO2</h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            pariatur aut.
          </p>
        </div>
      </Link>
      <div style={btnstyle}>
        <h1 style={iconstyle}>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </h1>
        <h4>Methane CH4</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style={btnstyle}>
        <h1 style={iconstyle}>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </h1>
        <h4>Temperatures</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style={btnstyle}>
        <h1 style={iconstyle}>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </h1>
        <h4>Sea Levels</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style={btnstyle}>
        <h1 style={iconstyle}>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </h1>
        <h4>Atmospheric N2O</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style={btnstyle}>
        <h1 style={iconstyle}>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </h1>
        <h4>N A S A</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style={btnstyle}>
        <h1 style={iconstyle}>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </h1>
        <h4>News</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style={btnstyle}>
        <h1 style={iconstyle}>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </h1>
        <h4>About Data</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style={btnstyle}>
        <h1 style={iconstyle}>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </h1>
        <h4>Join Community</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default DashboardButtons
