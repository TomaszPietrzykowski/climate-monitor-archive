import React from "react"

const NewsThumbnail = ({ img, url, title, description, content, source }) => {
  return (
    <div>
      <div
        className="thumbnailimg"
        style={{ backgroundImage: `url(${img})`, minHeight: "200px" }}
      ></div>
      <div className="thumbnaildisplay">
        <div className="newstitle">{title}</div>
        <div className="newsdescription">{description}</div>
        <div className="newscontent">{content}</div>
        <div className="newsinfo">
          source: {source} powered by:{" "}
          <a
            href="https://newsapi.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            News API
          </a>{" "}
        </div>
        <div className="newsbtn">
          <a href={`${url}`} target="_blank" rel="noopener noreferrer">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsThumbnail
