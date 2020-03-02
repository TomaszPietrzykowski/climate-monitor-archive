import React from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Home from "./components/layout/pages/Home"
import ThemeContexProvider from "./contexts/ThemeContext"

function App() {
  return (
    <div className="App">
      <ThemeContexProvider>
        <Navbar />
        <Home />
      </ThemeContexProvider>
    </div>
  )
}

export default App
