import React, { useState } from "react"

const NewsFeedSearch = ({ setQuerry }) => {
  const [text, setText] = useState("")
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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search News..."
          value={text}
          onChange={handleChange}
        />
        <input
          style={{ border: "1px solid black" }}
          type="submit"
          value="Search"
          className="submitbtn btn btn-block"
        />
      </form>
    </div>
  )
}

export default NewsFeedSearch
