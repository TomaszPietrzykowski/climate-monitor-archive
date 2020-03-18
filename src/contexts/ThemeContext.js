import React, { Component, createContext } from "react"

export const ThemeContext = createContext()

class ThemeContexProvider extends Component {
  state = {
    isDarkMode: true,
    light: {
      text: "#333",
      bgPrimary: "rgba(255, 255, 255, 1)",
      bgSecondary: "rgba(245, 245, 245, 1)",
      accent: "#0d0",
      accentSecondary: "rgba(0, 184, 230,1)",
      showcaseInfoBg: "rgba(0,0,0,0.6)",
      chartColor: [
        "rgba(0, 255, 0, 0)",
        "rgba(0, 191, 255, 0.1)",
        "rgba(0, 191, 255, 0.4)"
      ]
    },
    dark: {
      text: "#ddd",
      bgPrimary: "rgba(0, 0, 0, 1)",
      bgSecondary: "rgba(20,20,30,1)",
      accent: "rgba(153, 0, 51, 1)",
      accentSecondary: "rgba(255, 64, 0,1)",
      showcaseInfoBg: "rgba(0,0,0,0.6)",
      chartColor: [
        "rgba(0, 0, 153, 0)",
        "rgba(153, 0, 51, 0.5)",
        "rgba(255, 64, 0, 1)"
      ]
    }
  }
  toggleTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode })
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContexProvider
