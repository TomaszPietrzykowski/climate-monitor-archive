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
    <div>
      <div
        className="header"
        style={{ marginBottom: "2rem", textAlign: "center" }}
      >
        <h3>{activeChartData.title}</h3>
      </div>

      <div
        style={{
          padding: "1rem 3.5rem 1rem 3.5rem",
          display: "flex"
        }}
      >
        <div className="label" style={{ flex: "1" }}>
          <h4>Data range:</h4>
        </div>
        <div className="slider" style={{ flex: "6", paddingTop: "0.3rem" }}>
          <InputRange
            maxValue={initialRange.max - 1}
            minValue={0}
            formatLabel={value =>
              `${activeChartData.labels[value - 1] ||
                activeChartData.labels[0]}`
            }
            value={value}
            onChange={value => updateZoom(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default CarbonChartSlider
