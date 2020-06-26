import React, {useState} from "react"
import "./App.css"
import UserNameInput from "./components/UserNameInput"
import Chat from "./components/Chat"
const ENDPOINT = "localhost:4000"

function App() {
  const [userName, setUserName] = useState("Guest User")
  const [usernameChosen, setUsernameChosen] = useState(false)

  return (
    <div className="App">
      {!usernameChosen ? (
        <UserNameInput
          placeholder="Enter your name..."
          defaultName={userName}
          onUserNameSet={(name) => {
            setUserName(name)
            setUsernameChosen(true)
          }}
        />
      ) : (
        <Chat username={userName} endpoint={ENDPOINT} />
      )}
    </div>
  )
}

export default App
