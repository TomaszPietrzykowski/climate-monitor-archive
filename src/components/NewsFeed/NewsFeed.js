import React, { useState, useEffect } from "react"
import NewsFeedSearch from "./NewsFeedSearch"
import NewsFeedList from "./NewsFeedList"
import SectionHeader from "../layout/SectionHeader"

const NewsFeed = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  const [querry, setQuerry] = useState("climate")
  useEffect(() => {
    req(querry)
  }, [querry])
  const req = async querry => {
    setLoading(true)
    const res = await fetch(
      `http://newsapi.org/v2/everything?q=${querry}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    )
    const data = await res.json()
    setNews(data.articles)
    setLoading(false)
  }
  return (
    <div>
      <NewsFeedSearch setQuerry={setQuerry} />
      {loading ? "Loading data..." : <NewsFeedList news={news} />}
    </div>
  )
}

export default NewsFeed
