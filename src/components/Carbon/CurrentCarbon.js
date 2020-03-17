import React from "react"
import "../layout/pages/Home.css"

const CurrentCarbon = () => {
  return (
    <div>
      <div className="currentbtncontaner">
        <div className="currentbtn">
          <h4>
            Current
            <br /> atmospheric CO2:
          </h4>
          <br />
          <h2> 414.17 ppm</h2>
        </div>
        <div className="currentbtn">
          <h4>
            Corresponding reading
            <br /> 1 year ago:
          </h4>
          <br />
          <h2>409.48 ppm</h2>
        </div>
        <div className="currentbtn">
          <h4>
            Corresponding reading
            <br /> 10 years ago:
          </h4>
          <br />
          <h2>379.23 ppm</h2>
        </div>
      </div>
    </div>
  )
}

export default CurrentCarbon
