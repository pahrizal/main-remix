import { Server } from "socket.io";
import ClientController from "./client";
import { printLog } from "../utils/helper";

export const clients: ClientController[] = [];
class ConnectionController {
  io: Server;
  constructor(io: Server) {
    this.io = io;
  }
  listen() {
    this.io.on("connection", (socket) => {
      printLog("default", "SOCKET", "connected: ", socket.id);
      const client = new ClientController(socket);
      clients.push(client);
    });
  }
}

export default ConnectionController;
