import React from "react"

const NewsFeedList = ({ news }) => {
  return (
    <ul>
      <h2>{news[1].title}</h2>
      <p>{news[1].content}</p>
    </ul>
  )
}

export default NewsFeedList
