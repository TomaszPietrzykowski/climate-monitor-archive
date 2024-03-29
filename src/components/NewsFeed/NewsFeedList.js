import React, { useContext } from "react"
import NewsThumbnail from "./NewsThumbnail"
import { ThemeContext } from "../../contexts/ThemeContext"
import { v4 as uuidv4 } from "uuid"

const NewsFeedList = ({ news }) => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div className="newsfeedlist" style={{ background: theme.bgSecondary }}>
      {news.map(art => (
        <NewsThumbnail
          key={uuidv4()}
          url={art.url}
          img={art.urlToImage}
          title={art.title}
          description={art.description}
          content={art.content}
          source={art.source.name}
        />
      ))}
    </div>
  )
}

export default NewsFeedList
