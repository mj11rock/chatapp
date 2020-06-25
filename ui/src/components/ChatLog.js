import React from "react"

const ChatLog = (props) => {
  const {username, message} = props
  return (
    <div className={"chatlog-" + (username === "system" ? "system" : "user")}>
      <span className="chatlog-type">
        {username !== undefined ? username + ":" : ""}{" "}
      </span>
      <span className="message">{message}</span>
    </div>
  )
}

export default ChatLog
