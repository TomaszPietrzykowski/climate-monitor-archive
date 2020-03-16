import React, { useContext, useState, useEffect } from "react"
import InputRange from "react-input-range"
import "../layout/pages/Carbon.css"
import { ChartContext } from "../../contexts/ChartContext"

const CarbonChartSlider = () => {
  const { activeChartData, updateActiveValues } = useContext(ChartContext)
  const [value, setValue] = useState({
    min: 0,
    max: activeChartData.labels.length
  })
  const initialRange = activeChartData.labels.length
  useEffect(() => {
    updateActiveValues(value)
    //eslint-disable-next-line
  }, [value])
  useEffect(() => {
    setValue({ min: 0, max: activeChartData.labels.length })
  }, [activeChartData])
  console.log(initialRange)
  console.log(value)
  return (
    <div>
      <div className="chartheader">{activeChartData.title}</div>

      <div className="slidercontainer">
        <div className="sliderlabel">Data range:</div>
        <div className="slider">
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
