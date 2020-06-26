import React, {useState, useEffect, useCallback} from "react"
import socketIOClient from "socket.io-client"
import ChatLog from "./ChatLog"
import ChatMessageInput from "./ChatMessageInput"

let socket
const Chat = (props) => {
  const {endpoint, username} = props
  const [connected, setConnected] = useState(false)
  const [chatLog, setChatLog] = useState([])
  const appendChatlog = (username, message) => {
    setChatLog((chatLog) => [...chatLog, {username, message}])
  }
  console.log(props)

  const onMessage = useCallback(
    (message) => {
      return new Promise((resolve, reject) => {
        try {
          socket.emit("message", message)
        } catch (e) {
          reject(e.message)
          return
        }
        appendChatlog(username, message)
        resolve()
      })
    },
    [username]
  )

  useEffect(() => {
    // console.log("log from effect", username, endpoint)
    if (!username || !endpoint) return
    socket = socketIOClient(endpoint)
    console.log("socket io", socket)
    socket.emit("register", username)
    // appendChatlog("system", "Welcome, " + username)

    socket.on("message", ({username, message}) => {
      appendChatlog(username, message)
    })
    setConnected(true)

    return () => {
      socket.disconnect()
    }
  }, [endpoint, username])

  return (
    <div className="chat-wrapper">
      <h3>Chat</h3>
      <div className="username">{username}</div>
      <div className="chat-area">
        {chatLog.map((chatLogEntity, index) => (
          <ChatLog
            key={index}
            username={chatLogEntity.username}
            message={chatLogEntity.message}
          />
        ))}
      </div>
      <div className="chat-input">
        {connected && <ChatMessageInput onMessage={onMessage} />}
      </div>
    </div>
  )
}

export default Chat
