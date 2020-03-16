import React, { Fragment, useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "./MobileMenus.css"

const CarbonFloatBtn = ({ setTab }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const switchOpen = () => {
    setIsOpen(!isOpen)
  }
  const switchData = e => {
    setTab(e)
    switchOpen()
  }
  return (
    <Fragment>
      <div
        className="floatbtn"
        onClick={switchOpen}
        style={{ color: theme.accentSecondary, backgroundColor: theme.text }}
      >
        <div className="iconcontainer">
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: "1.5rem" }} />
          ) : (
            <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.5rem" }} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="carbonmobilemenu">
          <div id={"full"} className="mobilemenubtn" onClick={switchData}>
            Full ice-core data
          </div>
          <div id={"yearly"} className="mobilemenubtn" onClick={switchData}>
            Annual average
          </div>
          <div id={"weekly"} className="mobilemenubtn" onClick={switchData}>
            Weekly average
          </div>
          <div id={"latest"} className="mobilemenubtn" onClick={switchData}>
            Daily readings
          </div>
          <div id={"oceanco2"} className="mobilemenubtn">
            Ocean CO2
          </div>
          <div id={"keeling"} className="mobilemenubtn">
            Keeling curve
          </div>
          <div id={"compare"} className="mobilemenubtn">
            Compare factors
          </div>
          <div id={"carbonnews"} className="mobilemenubtn">
            News
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default CarbonFloatBtn
