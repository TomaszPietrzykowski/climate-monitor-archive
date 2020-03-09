import React from "react"
import InputRange from "react-input-range"
import "react-input-range/lib/css/index.css"

class CarbonChartSlider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: { min: 2, max: 10 }
    }
  }

  render() {
    return (
      <div
        className="slider"
        style={{ padding: "1rem 2.5rem", margin: "1.5rem" }}
      >
        <InputRange
          maxValue={200}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </div>
    )
  }
}

export default CarbonChartSlider
