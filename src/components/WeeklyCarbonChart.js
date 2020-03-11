import React, { Fragment } from "react"
import CarbonChartSlider from "./CarbonChartSlider"
import CarbonChart from "./CarbonChart"

const WeeklyCarbonChart = () => {
  return (
    <Fragment>
      <CarbonChartSlider />
      <CarbonChart />
    </Fragment>
  )
}

export default WeeklyCarbonChart
