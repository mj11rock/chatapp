const express = require("express")
const http = require("http")
const socketIo = require("socket.io")

const port = process.env.PORT || 3000
const index = require("./routes/index")

const app = express()
app.use(index)

const server = http.createServer(app)
const io = socketIo(server)

io.on("connection", (socket) => {
  let addedUser = false
  console.log("New client connected")

  socket.on("register", (username) => {
    console.log("username registered ", username)
    if (!username) return
    socket.username = username
    addedUser = true
    socket.broadcast.emit("user_loggined", username)
    socket.broadcast.emit("message", {
      username: "system",
      message: socket.username + " joined the chat",
    })
  })
  socket.on("message", (data) => {
    console.log(data)
    socket.broadcast.emit("message", {
      username: socket.username,
      message: data,
    }) //* broadcasts to everyone, except sender
  })
  socket.on("disconnect", () => {
    console.log("Client disconnected")
    socket.broadcast.emit("message", {
      username: "system",
      message: socket.username + " has left the chat",
    })
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
