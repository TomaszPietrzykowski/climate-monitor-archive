import React, { Component, createContext } from "react"

export const ThemeContext = createContext()

class ThemeContexProvider extends Component {
  state = {
    isDarkMode: false,
    light: {
      text: "#333",
      bgPrimary: "#eee",
      bgSecondary: "#333",
      accent: "#0d0",
      showcaseInfoBg: "rgba(0,0,0,0.55)"
    },
    dark: {
      text: "#ddd",
      bgPrimary: "#000006",
      bgSecondary: "#bbb",
      accent: "rgba(102, 0, 34, 1)",
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
