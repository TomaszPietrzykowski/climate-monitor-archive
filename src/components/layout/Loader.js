import React from "react"
import loader from "../../images/globespinner.gif"

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Loading data..." />
    </div>
  )
}

export default Loader
