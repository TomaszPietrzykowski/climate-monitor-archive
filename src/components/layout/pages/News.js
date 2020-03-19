import React, { useContext } from "react"
import NewsFeed from "../../NewsFeed/NewsFeed"
import "./News.css"
import SectionHeader from "../SectionHeader"
import { ThemeContext } from "../../../contexts/ThemeContext"

const News = () => {
  const { isDarkMode, light, dark } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div
      style={{
        background: theme.bgPrimary,
        color: theme.text,
        borderTop: `1px solid ${theme.text}`
      }}
    >
      <div className="container">
        <SectionHeader title="Climate News" />
        <NewsFeed />
      </div>
    </div>
  )
}

export default News
