import React, { useContext } from "react"
import { CarbonContext } from "../contexts/CarbonContext"
import { ThemeContext } from "../contexts/ThemeContext"
import { Line } from "react-chartjs-2"

const CarbonChart = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const { labels, values } = useContext(CarbonContext).fullRecordCarbon
  const chartData = canvas => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 500, 0, 100)
    gradient.addColorStop(0, theme.chartColor[0])
    gradient.addColorStop(0.8, theme.chartColor[1])
    gradient.addColorStop(1, theme.chartColor[2])
    return {
      labels: labels,
      datasets: [
        {
          label: "ATMOSPHERIC CO2: ANNUAL AVERAGE",
          data: values,
          backgroundColor: gradient
        }
      ]
    }
  }
  const chartOptions = { maintainAspectRatio: false }
  return (
    <div
      className="chart"
      style={{ dislpay: "flex", flexDirection: "row", margin: "2rem" }}
    >
      <Line data={chartData} height="400" options={chartOptions} />
    </div>
  )
}

export default CarbonChart
