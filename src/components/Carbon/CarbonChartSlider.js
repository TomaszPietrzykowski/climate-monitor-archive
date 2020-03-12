import React, { useContext, useState, useEffect } from "react"
import InputRange from "react-input-range"
import "./CarbonChartSlider.css"
import { ChartContext } from "../../contexts/ChartContext"
import { ThemeContext } from "../../contexts/ThemeContext"

const CarbonChartSlider = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const [dark, setDark] = useState(false)
  console.log(dark)
  useEffect(() => {
    setDark(isDarkMode)
  }, [isDarkMode])
  const { activeChartData, updateActiveValues } = useContext(ChartContext)
  const [value, setValue] = useState({
    min: 0,
    max: activeChartData.labels.length
  })
  const initialRange = activeChartData.labels.length
  useEffect(() => {
    updateActiveValues(value)
  }, [value])
  useEffect(() => {
    setValue({ min: 0, max: activeChartData.labels.length })
  }, [activeChartData])
  console.log(initialRange)
  console.log(value)
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
            maxValue={initialRange}
            minValue={0}
            formatLabel={value =>
              `${activeChartData.labels[value - 1] ||
                activeChartData.labels[0]}`
            }
            value={value}
            onChange={value => setValue(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default CarbonChartSlider
