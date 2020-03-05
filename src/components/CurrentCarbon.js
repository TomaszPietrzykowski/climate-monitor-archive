import React from "react"

const CurrentCarbon = () => {
  return (
    <div>
      <div
        className="my-2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center"
        }}
      >
        <div>
          <h4>Current atmosferic CO2:</h4>
          <h2> 414.17 ppm</h2>
        </div>
        <div>
          <h4>Corresponding reading 1 y/a:</h4>
          <h2>409.48 ppm</h2>
        </div>
        <div>
          <h4>Corresponding reading 10 y/a:</h4>
          <h2>379.23 ppm</h2>
        </div>
        <div>
          <h4>Current atmosferic CH4:</h4>
          <h2> 1876 ppb</h2>
        </div>
        <script
          type="text/javascript"
          src="https://www.climatelevels.org/graphs/js/co2.php?theme=grid-light&pid=2degreesinstitute"
        ></script>
        <div id="co2-widget-container"></div>
      </div>
    </div>
  )
}

export default CurrentCarbon
