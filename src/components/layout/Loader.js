import React from "react"
import loader from "../../images/globe.gif"

const Loader = () => {
  return (
    <div className="loader">
      <img
        src={loader}
        alt="Loading data..."
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  )
}

export default Loader
