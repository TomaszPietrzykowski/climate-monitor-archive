import React, { Component, createContext } from "react"

export const ChartContext = createContext()

class ChartContexProvider extends Component {
  state = {
    activeChartData: {
      labels: [
        1959,
        1960,
        1961,
        1962,
        1963,
        1964,
        1965,
        1966,
        1967,
        1968,
        1969,
        1970,
        1971,
        1972,
        1973,
        1974,
        1975,
        1976,
        1977,
        1978,
        1979,
        1980,
        1981,
        1982,
        1983,
        1984,
        1985,
        1986,
        1987,
        1988,
        1989,
        1990,
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2018,
        2018
      ],
      values: [
        315.97,
        316.91,
        317.64,
        318.45,
        318.99,
        319.62,
        320.04,
        321.38,
        322.16,
        323.04,
        324.62,
        325.68,
        326.32,
        327.45,
        329.68,
        330.18,
        331.11,
        332.04,
        333.83,
        335.4,
        336.84,
        338.75,
        340.11,
        341.45,
        343.05,
        344.65,
        346.12,
        347.42,
        349.19,
        351.57,
        353.12,
        354.39,
        355.61,
        356.45,
        357.1,
        358.83,
        360.82,
        362.61,
        363.73,
        366.7,
        368.38,
        369.55,
        371.14,
        373.28,
        375.8,
        377.52,
        379.8,
        381.9,
        383.79,
        385.6,
        387.43,
        389.9,
        391.65,
        393.85,
        396.52,
        398.65,
        400.83,
        404.24,
        406.55,
        408.52,
        411.44
      ],
      title: "Active chart data title"
    },
    outputChartData: {
      labels: [
        1959,
        1960,
        1961,
        1962,
        1963,
        1964,
        1965,
        1966,
        1967,
        1968,
        1969,
        1970,
        1971,
        1972,
        1973,
        1974,
        1975,
        1976,
        1977,
        1978,
        1979,
        1980,
        1981,
        1982,
        1983,
        1984,
        1985,
        1986,
        1987,
        1988,
        1989,
        1990,
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019
      ],
      values: [
        315.97,
        316.91,
        317.64,
        318.45,
        318.99,
        319.62,
        320.04,
        321.38,
        322.16,
        323.04,
        324.62,
        325.68,
        326.32,
        327.45,
        329.68,
        330.18,
        331.11,
        332.04,
        333.83,
        335.4,
        336.84,
        338.75,
        340.11,
        341.45,
        343.05,
        344.65,
        346.12,
        347.42,
        349.19,
        351.57,
        353.12,
        354.39,
        355.61,
        356.45,
        357.1,
        358.83,
        360.82,
        362.61,
        363.73,
        366.7,
        368.38,
        369.55,
        371.14,
        373.28,
        375.8,
        377.52,
        379.8,
        381.9,
        383.79,
        385.6,
        387.43,
        389.9,
        391.65,
        393.85,
        396.52,
        398.65,
        400.83,
        404.24,
        406.55,
        408.52,
        411.44
      ],
      title: "Active chart data section of context called"
    }
  }
  setActiveChartData = data => {
    this.setState({ activeChartData: data, outputChartData: data })
  }
  updateActiveValues = value => {
    const initialLabels = this.state.activeChartData.labels
    const initialValues = this.state.activeChartData.values
    let outputLabels = initialLabels.slice(value.min, value.max)
    let outputValues = initialValues.slice(value.min, value.max)
    this.setState({
      outputChartData: {
        labels: outputLabels,
        values: outputValues,
        title: this.state.activeChartData.title
      }
    })
  }
  render() {
    return (
      <ChartContext.Provider
        value={{
          ...this.state,
          updateActiveValues: this.updateActiveValues,
          setActiveChartData: this.setActiveChartData
        }}
      >
        {this.props.children}
      </ChartContext.Provider>
    )
  }
}

export default ChartContexProvider