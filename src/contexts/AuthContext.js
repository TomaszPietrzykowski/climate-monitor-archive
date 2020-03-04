import React, { Component, createContext } from "react"

export const AuthContext = createContext()

class AuthContexProvider extends Component {
  state = {
    isLoggedIn: false,
    loggedInUser: {}
  }
  logIn = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }
  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, logIn: this.logIn }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContexProvider
