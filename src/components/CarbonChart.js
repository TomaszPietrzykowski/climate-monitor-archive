import React, { useContext } from "react"
import { CarbonContext } from "../contexts/CarbonContext"
// import { Line } from "react-chartjs-2"

const CarbonChart = () => {
  const { labels, values } = useContext(CarbonContext).yearlyCarbon
  return (
    <div>
      carbon chart here: year {labels[0]} value: {values[0]}
    </div>
  )
}

export default CarbonChart
