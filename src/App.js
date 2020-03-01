import React from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Home from "./components/layout/pages/Home"
import Footer from "./components/layout/Footer"
import ThemeContexProvider from "./contexts/ThemeContext"

function App() {
  return (
    <div className="App">
      <ThemeContexProvider>
        <Navbar />
        <Home />
        <Footer />
      </ThemeContexProvider>
    </div>
  )
}

export default App
