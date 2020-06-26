import React, {useState, useEffect, Fragment} from "react"
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://localhost:4001"

const Chat = () => {
  const socket = socketIOClient(ENDPOINT)

  const [text, textInput] = useState("")
  const [chatLog, chatUpdate] = useState([])

  function submitValue() {
    socket.emit("new_message", text)
    // console.log(text)
    chatUpdate((chatLog) => [...chatLog, text])
    textInput("")
  }
  return (
    <Fragment>
      <div className="chat-wrapper">
        {chatLog.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
        <input
          id="txt"
          type="text"
          value={text}
          onChange={(e) => {
            textInput(e.target.value)
          }}
          placeholder="Enter your message..."
        />
        <button onClick={submitValue} type="submit" className="btn btn-send">
          Send
        </button>
      </div>
    </Fragment>
  )
}

export default Chat
