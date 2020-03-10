import React from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Home from "./components/layout/pages/Home"
import ThemeContexProvider from "./contexts/ThemeContext"
import AuthContexProvider from "./contexts/AuthContext"
import CarbonContexProvider from "./contexts/CarbonContext"
import Carbon from "./components/layout/pages/Carbon"
import DatabaseContexProvider from "./contexts/DatabaseContext"

function App() {
  return (
    <div className="App">
      <DatabaseContexProvider>
        <AuthContexProvider>
          <ThemeContexProvider>
            <Navbar />
            <CarbonContexProvider>
              <Carbon />
              <Home />
            </CarbonContexProvider>
          </ThemeContexProvider>
        </AuthContexProvider>
      </DatabaseContexProvider>
    </div>
  )
}

export default App
