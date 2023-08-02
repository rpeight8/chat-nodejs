import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  path: "/chat",
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/api/rooms", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Room 1",
    },
    {
      id: 2,
      name: "Room 2",
    },
    {
      id: 3,
      name: "Room 3",
    },
  ]);
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("hello", "world");
  setTimeout(() => {
    socket.emit("rooms:updated");
  }, 3000);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
