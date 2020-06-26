import React, {useState} from "react"

const UserNameInput = (props) => {
  const {onUserNameSet: passUsernameToHoc, placeholder} = props
  const [userName, setUserName] = useState("")
  const [error, setError] = useState(null)

  function userNameEnter() {
    // validation
    if (userName.length < 3) {
      setError("Username length is less than 3")
    } else if (!userName.match(/^[a-zA-Z][a-zA-Z0-9.-_]+$/)) {
      setError("Username format is invalid")
    } else {
      passUsernameToHoc(userName)
    }
  }
  return (
    <div className="login-wrapper">
      <h3>login</h3>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          setError(null)
          setUserName(e.target.value)
        }}
      />
      <button className="btn" onClick={userNameEnter} disabled={error !== null}>
        login
      </button>
    </div>
  )
}

export default UserNameInput
