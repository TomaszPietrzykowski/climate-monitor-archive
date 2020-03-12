import React, { useContext } from "react"
import "./CarbonMenu.css"
import { ThemeContext } from "../../contexts/ThemeContext"

const CarbonMenu = ({ active, setTab }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const theme = isDarkMode ? "dark" : "light"
  return (
    <div>
      <div
        id={"full"}
        className={
          active === "full" ? `${theme}activebtn` : `${theme}passivebtn`
        }
        onClick={setTab}
      >
        Full ice-core data
      </div>
      <div
        id={"yearly"}
        className={
          active === "yearly" ? `${theme}activebtn` : `${theme}passivebtn`
        }
        onClick={setTab}
      >
        Annual average
      </div>
      <div
        id={"weekly"}
        className={
          active === "weekly" ? `${theme}activebtn` : `${theme}passivebtn`
        }
        onClick={setTab}
      >
        Weekly average
      </div>
      <div
        id={"latest"}
        className={
          active === "latest" ? `${theme}activebtn` : `${theme}passivebtn`
        }
        onClick={setTab}
      >
        Daily readings
      </div>
      <div
        id={"oceanco2"}
        className={
          active === "oceanco2" ? `${theme}activebtn` : `${theme}passivebtn`
        }
      >
        Ocean CO2
      </div>
      <div
        id={"keeling"}
        className={
          active === "keeling" ? `${theme}activebtn` : `${theme}passivebtn`
        }
      >
        Keeling curve
      </div>
      <div
        id={"compare"}
        className={
          active === "keeling" ? `${theme}activebtn` : `${theme}passivebtn`
        }
      >
        Compare factors
      </div>
      <div
        id={"carbonnews"}
        className={
          active === "carbonnews" ? `${theme}activebtn` : `${theme}passivebtn`
        }
      >
        News
      </div>
    </div>
  )
}
export default CarbonMenu
