import React from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Home from "./components/layout/pages/Home"
import ThemeContexProvider from "./contexts/ThemeContext"
import AuthContexProvider from "./contexts/AuthContext"

function App() {
  return (
    <div className="App">
      <AuthContexProvider>
        <ThemeContexProvider>
          <Navbar />
          <Home />
        </ThemeContexProvider>
      </AuthContexProvider>
    </div>
  )
}

export default App
