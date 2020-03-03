import React, { Component, createContext } from "react"

export const ThemeContext = createContext()

class ThemeContexProvider extends Component {
  state = {
    isDarkMode: true,
    light: { text: "#444", bgPrimary: "#eee", bgSecondary: "#333" },
    dark: { text: "#eee", bgPrimary: "#444", bgSecondary: "#bbb" }
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
