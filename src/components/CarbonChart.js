import React, { useContext } from "react"
import { CarbonContext } from "../contexts/CarbonContext"
import { ThemeContext } from "../contexts/ThemeContext"
import { Line } from "react-chartjs-2"

const CarbonChart = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const { labels, values } = useContext(CarbonContext).yearlyCarbon
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "ATMOSPHERIC CO2: ANNUAL AVERAGE",
        data: values,
        backgroundColor: theme.chartColor
      }
    ]
  }
  const chartOptions = { maintainAspectRatio: false }
  return (
    <div
      className="chart"
      style={{ dislpay: "flex", flexDirection: "row", color: "rgb(255,255,0)" }}
    >
      <Line data={chartData} height="400vh" options={chartOptions} />
    </div>
  )
}

export default CarbonChart
