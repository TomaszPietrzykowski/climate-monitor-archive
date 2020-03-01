import React, { Component, createContext } from "react"

export const ThemeContex = createContext()

class ThemeContexProvider extends Component {
  state = {
    isDarkMode: false,
    light: { text: "#ccc", bgPrimary: "#000", bgSecondary: "#333" },
    dark: { text: "#ccc", bgPrimary: "#ddd", bgSecondary: "#bbb" }
  }
  render() {
    return (
      <ThemeContex.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContex.Provider>
    )
  }
}

export default ThemeContexProvider
