import { Server } from "socket.io";
import type {
  Server as HttpServer,
  IncomingMessage,
  ServerResponse,
} from "http";

let io;

export const initIO = async (
  server: HttpServer<typeof IncomingMessage, typeof ServerResponse>
) => {
  const io = new Server(server, {
    path: "/chat",
    cors: {
      origin: "http://localhost:5173",
    },
  });
  let i = 0;
  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.emit("hello", "world");
    setTimeout(() => {
      socket.emit("rooms:updated");
    }, 3000);
    setInterval(() => {
      socket.emit("rooms/1:messages", {
        id: i++,
        content: "Hello world",
        createdAt: new Date(),
      });
    }, 5000);
  });
};
