const io = require("socket.io-client")
const ENDPOINT = "http://localhost:3000"
console.log("bot started, trying to connect...")
const socket = io(ENDPOINT, {
  reconnect: true,
  "reconnection delay": 5000,
  "max reconnection attempts": 5,
})

socket.on("connect", () => {
  const msgList = [
    "What a awesome time",
    "Hey, folks, wassup",
    "Time to sleep (zzzzz...)",
    "Welcome everyone to chat",
  ]
  const length = msgList.length
  const message = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(msgList[Math.floor(Math.random() * length)].toString())
      }, Math.floor(Math.random() * Math.floor(5) + 1) * 1000)
    })
  }

  console.log("connected...")
  socket.on("user_loggined", (username) => {
    socket.emit("message", `hello, ${username}, from bot :)`)
  })
  socket.on("message", (data) => {
    message().then((text) => {
      socket.emit("message", text)
    })
  })
})

socket.on("connect_error", (error) => {
  console.log("connection error", error)
})
