import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Home from "./components/layout/pages/Home"
import ThemeContexProvider from "./contexts/ThemeContext"
import AuthContexProvider from "./contexts/AuthContext"
import ChartContexProvider from "./contexts/ChartContext"
import Carbon from "./components/layout/pages/Carbon"
import DatabaseContexProvider from "./contexts/DatabaseContext"
import ScrollToTop from "./components/layout/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <DatabaseContexProvider>
            <AuthContexProvider>
              <ThemeContexProvider>
                <Navbar />
                <ChartContexProvider>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/co2" component={Carbon} />
                  </Switch>
                </ChartContexProvider>
              </ThemeContexProvider>
            </AuthContexProvider>
          </DatabaseContexProvider>
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
