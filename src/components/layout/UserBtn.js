import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { AuthContext } from "../../contexts/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faUserLock } from "@fortawesome/free-solid-svg-icons"

const UserBtn = () => {
  const { isDarkMode, dark, light } = useContext(ThemeContext)
  const { isLoggedIn, logIn } = useContext(AuthContext)
  const theme = isDarkMode ? dark : light
  return (
    <li
      style={{ background: theme.bgPrimary, color: theme.text }}
      onClick={logIn}
    >
      {isLoggedIn ? (
        <FontAwesomeIcon icon={faUser} />
      ) : (
        <FontAwesomeIcon icon={faUserLock} />
      )}
    </li>
  )
}

export default UserBtn
