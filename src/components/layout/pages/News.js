import React from "react"
import NewsFeed from "../../NewsFeed/NewsFeed"
import "./News.css"
import SectionHeader from "../SectionHeader"

const News = () => {
  return (
    <div className="container">
      <SectionHeader title="Latest News:" />
      <NewsFeed />
    </div>
  )
}

export default News
