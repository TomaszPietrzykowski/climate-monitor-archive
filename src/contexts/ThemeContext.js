import React, { Component, createContext } from "react"

export const ThemeContext = createContext()

class ThemeContexProvider extends Component {
  state = {
    isDarkMode: false,
    light: {
      text: "#333",
      bgPrimary: "#eee",
      bgSecondary: "rgb(225, 225, 255)",
      accent: "#0d0",
      showcaseInfoBg: "rgba(0,0,0,0.6)"
    },
    dark: {
      text: "#ddd",
      bgPrimary: "#000006",
      bgSecondary: "rgba(10,10,20,1)",
      accent: "rgba(153, 0, 51, 1)",
      showcaseInfoBg: "rgba(0,0,0,0.82)"
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
