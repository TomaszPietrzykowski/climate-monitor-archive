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
          <p>Latest and ice-core data, Keeling Curve and more.</p>
        </div>
      </Link>

      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faThermometerHalf} />
        </h1>
        <h4>Temperatures</h4>
        <br />
        <p>Full range air and ocean temperatures data</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faFillDrip} />
        </h1>
        <h4>Sea Levels</h4>
        <br />
        <p>Sea levels and increase rate charts</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faBiohazard} />
        </h1>
        <h4>Methane CH4</h4>
        <br />
        <p>All availaible data on atmospheric Methane</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faAtom} />
        </h1>
        <h4>Atmospheric N2O</h4>
        <br />
        <p>Significant climate factor. All range data charted.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faChartBar} />
        </h1>
        <h4>Compare Factors</h4>
        <br />
        <p>Choose climate factors to compare and analize interdependencies.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faSatellite} />
        </h1>
        <h4>N A S A</h4>
        <br />
        <p>Eye on the planet. Relax with NASA API's</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faRss} />
        </h1>
        <h4>News</h4>
        <br />
        <p>Latest climate news feed.</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faDatabase} />
        </h1>
        <h4>About Data</h4>
        <br />
        <p>Climate Monitor backend. Data sources and process methods</p>
      </div>
      <div className="dashboardbtn" style={{ background: theme.bgPrimary }}>
        <h1 className="dashbooardicon" style={{ color: theme.accentSecondary }}>
          <FontAwesomeIcon icon={faPeopleCarry} />
        </h1>
        <h4>Join Community</h4>
        <br />
        <p>Take action against climate change</p>
      </div>
    </div>
  )
}

export default DashboardButtons
