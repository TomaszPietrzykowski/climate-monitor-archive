import React, { useContext } from "react"
import "../layout/pages/News.css"
import { ThemeContext } from "../../contexts/ThemeContext"

const NewsThumbnail = ({ img, url, title, description, content, source }) => {
  const { isDarkMode, light, dark } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <div
      className="newsthumbnail"
      style={{ background: theme.bgPrimary, color: theme.text }}
    >
      <div
        className="thumbnailimg"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="thumbnaildisplay">
        <div className="newstitle">{title}</div>
        <div className="newsdescription">{description}</div>
        <div className="newscontent">{content}</div>
        <div className="newssource">source: {source}</div>
        <div className="btncontainer">
          <div
            className="readmorebtn"
            style={{ background: theme.accentSecondary, color: "#fff" }}
          >
            <a href={`${url}`} target="_blank" rel="noopener noreferrer">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsThumbnail
