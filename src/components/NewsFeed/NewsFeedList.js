import React from "react"
import NewsThumbnail from "./NewsThumbnail"

const NewsFeedList = ({ news }) => {
  return (
    <div className="newsfeedlist">
      {news.map(art => (
        <NewsThumbnail
          url={art.url}
          img={art.urlToImage}
          title={art.title}
          description={art.description}
          content={art.content}
        />
      ))}
    </div>
  )
}

export default NewsFeedList
