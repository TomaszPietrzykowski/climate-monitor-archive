import React, { useContext, useState } from "react"
import InputRange from "react-input-range"
import "./CarbonChartSlider.css"
import { CarbonContext } from "../contexts/CarbonContext"

const CarbonChartSlider = () => {
  const { activeChartData, updateActiveValues } = useContext(CarbonContext)

  // const updateChart = (value) => {
  let initialRange = { min: 0, max: activeChartData.labels.length }
  const [value, setValue] = useState({ min: 0, max: initialRange.max })
  const updateZoom = value => {
    setValue(value)
    updateActiveValues(value)
  }
  return (
    <div
      className="slider"
      style={{ padding: "1rem 2.5rem", margin: "1.5rem" }}
    >
      <InputRange
        maxValue={initialRange.max}
        minValue={0}
        value={value}
        onChange={value => updateZoom(value)}
      />
    </div>
  )
}

export default CarbonChartSlider
