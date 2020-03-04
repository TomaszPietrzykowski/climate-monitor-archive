import React, { Component, createContext } from "react"

export const ThemeContext = createContext()

class ThemeContexProvider extends Component {
  state = {
    isDarkMode: false,
    light: {
      text: "#333",
      bgPrimary: "#eee",
      bgSecondary: "#333",
      ico: "fas fa-moon"
    },
    dark: {
      text: "#ddd",
      bgPrimary: "#000006",
      bgSecondary: "#bbb",
      ico: "fas fa-sun"
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
