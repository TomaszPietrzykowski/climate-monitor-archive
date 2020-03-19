import React, { useState, useEffect, useContext } from "react"
import NewsFeedSearch from "./NewsFeedSearch"
import NewsFeedList from "./NewsFeedList"
import Loader from "../layout/Loader"
import { ThemeContext } from "../../contexts/ThemeContext"

const NewsFeed = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  const [querry, setQuerry] = useState("climate+change+warming")
  const [resultsFor, setResultsFor] = useState("")
  useEffect(() => {
    req(querry)
  }, [querry])
  const req = async querry => {
    setLoading(true)
    const res = await fetch(
      `http://newsapi.org/v2/everything?q=${querry}&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    )
    const data = await res.json()
    setNews(data.articles)
    setLoading(false)
  }
  return (
    <div
      className="newsfeedcontainer"
      style={{ background: theme.bgPrimary, color: theme.text }}
    >
      <div className="poweredby">
        Powered by{" "}
        <a
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NewsAPI.org
        </a>
      </div>
      <NewsFeedSearch setQuerry={setQuerry} setResultsFor={setResultsFor} />
      {loading ? (
        <Loader />
      ) : (
        <NewsFeedList news={news} resultsFor={resultsFor} />
      )}
    </div>
  )
}

export default NewsFeed
