import express from "express";
import http from "http";
import { Server } from "socket.io";

// const app = express();
const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("hello", "world");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
