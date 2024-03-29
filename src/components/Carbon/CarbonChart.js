import React, { useContext } from "react"
import { ChartContext } from "../../contexts/ChartContext"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Line } from "react-chartjs-2"
import "../layout/pages/Carbon.css"

const CarbonChart = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const { labels, values } = useContext(ChartContext).outputChartData
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
          label: "Atmospheric CO2 (ppm)",
          data: values,
          backgroundColor: gradient,
          borderColor: theme.chartColor[2],
          borderWidth: 2.5
        }
      ]
    }
  }
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: true }
  }
  return (
    <div className="carbonchart">
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}

export default CarbonChart
