import React, { useContext, useState } from "react"
import InputRange from "react-input-range"
import "./CarbonChartSlider.css"
import { ChartContext } from "../contexts/ChartContext"

const CarbonChartSlider = () => {
  const { activeChartData, updateActiveValues, outputChartData } = useContext(
    ChartContext
  )
  const [value, setValue] = useState({
    min: 0,
    max: activeChartData.labels.length
  })
  const updateZoom = value => {
    const data = {
      min: value.min < 0 ? 0 : value.min,
      max:
        value.max > activeChartData.labels.length - 1
          ? activeChartData.labels.length - 1
          : value.max
    }
    const initialLabels = activeChartData.labels.slice(0)
    const initialValues = activeChartData.values.slice(0)
    const outputLabels = initialLabels.slice(data.min, data.max)
    const outputValues = initialValues.slice(data.min, data.max)
    const newData = {
      labels: outputLabels,
      values: outputValues,
      title: activeChartData.title
    }
    console.log(newData)
    console.log(`slider range: ${data.min} - ${data.max}`)
    console.log(`labels: ${outputChartData.labels.length}`)
    console.log(`values: ${outputChartData.values.length}`)
    console.log("___________________")
    updateActiveValues(newData)
    setValue({ data })
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
            maxValue={activeChartData.length - 1}
            minValue={0}
            formatLabel={value =>
              `${activeChartData[value - 1] || activeChartData[0]}`
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
