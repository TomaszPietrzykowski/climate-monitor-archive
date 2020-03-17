import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCloudMeatball,
  faFillDrip,
  faBiohazard,
  faThermometerHalf,
  faPeopleCarry,
  faAtom,
  faSatellite,
  faRss,
  faChartBar,
  faDatabase
} from "@fortawesome/free-solid-svg-icons"

const DashboardButtons = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div className="dashboardlist" style={{ background: theme.bgSecondary }}>
      <Link to="/co2" style={{ color: theme.text }}>
        <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
          <h1
            className="dashbooardicon"
            style={{ color: theme.accentSecondary }}
          >
            <FontAwesomeIcon icon={faCloudMeatball} />
          </h1>
          <h4>Cabon Dioxide CO2</h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            pariatur aut.
          </p>
        </div>
      </Link>

      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faThermometerHalf} />
        </h1>
        <h4>Temperatures</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faFillDrip} />
        </h1>
        <h4>Sea Levels</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faBiohazard} />
        </h1>
        <h4>Methane CH4</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faAtom} />
        </h1>
        <h4>Atmospheric N2O</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faChartBar} />
        </h1>
        <h4>Compare Factors</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faSatellite} />
        </h1>
        <h4>N A S A</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faRss} />
        </h1>
        <h4>News</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faDatabase} />
        </h1>
        <h4>About Data</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faPeopleCarry} />
        </h1>
        <h4>Join Community</h4>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default DashboardButtons
