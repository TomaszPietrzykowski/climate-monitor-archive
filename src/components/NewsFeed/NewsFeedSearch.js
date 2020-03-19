import React, { useState, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const NewsFeedSearch = ({ setQuerry }) => {
  const [text, setText] = useState("")
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  const handleSubmit = e => {
    setQuerry(text)
    setText("")
    e.preventDefault()
  }
  const handleChange = e => {
    setText(e.target.value)
    console.log(text)
  }
  return (
    <div className="searchcontainer">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search news..."
          value={text}
          onChange={handleChange}
          style={{
            borderColor: theme.accentSecondary,
            backgroundColor: theme.bgSecondary
          }}
        />
        <input
          style={{ backgroundColor: theme.accentSecondary }}
          type="submit"
          value="SEARCH"
          className="submitbtn"
        />
      </form>
    </div>
  )
}

export default NewsFeedSearch
