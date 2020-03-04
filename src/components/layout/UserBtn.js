import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faUserLock } from "@fortawesome/free-solid-svg-icons"

const UserBtn = () => {
  const { isDarkMode, dark, light, toggleTheme } = useContext(ThemeContext)
  const theme = isDarkMode ? dark : light
  return (
    <li
      style={{ background: theme.bgPrimary, color: theme.text }}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <FontAwesomeIcon icon={faUser} />
      ) : (
        <FontAwesomeIcon icon={faUserLock} />
      )}
    </li>
  )
}

export default UserBtn
