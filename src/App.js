import React from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Home from "./components/layout/pages/Home"
import ThemeContexProvider from "./contexts/ThemeContext"
import AuthContexProvider from "./contexts/AuthContext"
import CarbonContexProvider from "./contexts/CarbonContext"

function App() {
  return (
    <div className="App">
      <AuthContexProvider>
        <ThemeContexProvider>
          <Navbar />
          <CarbonContexProvider>
            <Home />
          </CarbonContexProvider>
        </ThemeContexProvider>
      </AuthContexProvider>
    </div>
  )
}

export default App
