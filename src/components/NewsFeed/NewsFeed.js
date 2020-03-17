import React, { useState, useEffect } from "react"
import NewsFeedSearch from "./NewsFeedSearch"
import NewsFeedList from "./NewsFeedList"

const NewsFeed = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  const [querry, setQuerry] = useState("climate+change")
  useEffect(() => {
    req(querry)
    // eslint-disable-next-line
  }, [])
  const req = async () => {
    setLoading(true)
    const res = await fetch(
      `http://newsapi.org/v2/everything?q=${querry}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    )
    const data = await res.json()
    console.log(data)
    setNews(data.articles)
    setLoading(false)
  }
  return (
    <div>
      <h2>Latest Climate News</h2>
      <NewsFeedSearch setQuerry={setQuerry} />
      {loading ? "Loading data..." : <NewsFeedList news={news} />}
    </div>
  )
}

export default NewsFeed
