import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import router from "./routes";
import { initIO } from "./socket";

const app = express();
app.use(cors());
app.use(router);

const server = http.createServer(app);

initIO(server);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
