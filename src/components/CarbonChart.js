import React, { useContext } from "react"
import { CarbonContext } from "../contexts/CarbonContext"
import { Line } from "react-chartjs-2"

const CarbonChart = () => {
  const { labels, values } = useContext(CarbonContext).yearlyCarbon
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "atmospheric CO2: annual average",
        data: values,
        backgroundColor: ["rgba(0, 204, 255, 0.2)"]
      }
    ]
  }
  const chartOptions = { maintainAspectRatio: false }
  return (
    <div className="chart">
      <Line data={chartData} options={chartOptions} width={100} height={400} />
      {/* /* carbon chart here: year {labels[0]} value: {values[0]} */}
    </div>
  )
}

export default CarbonChart
