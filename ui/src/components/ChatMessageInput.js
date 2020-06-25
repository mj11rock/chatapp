import React, {useState, useEffect} from "react"

const validateMessage = (message) => {
  return !!message
}

const ChatMessageInput = (props) => {
  const {onMessage} = props
  const [message, setMessage] = useState("")
  const [buttonEnabled, setButtonEnabled] = useState(false)

  useEffect(() => {
    setButtonEnabled(validateMessage(message))
  }, [message])

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        value={message}
      />
      <button
        className="btn"
        onClick={() => {
          if (buttonEnabled) {
            onMessage(message).then(() => {
              setMessage("")
            })
          }
        }}
        disabled={!buttonEnabled}
      >
        Send
      </button>
    </>
  )
}

export default ChatMessageInput
