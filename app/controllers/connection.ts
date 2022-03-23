import { Server, Socket } from "socket.io";
import { printLog, TerminalColor } from "~/utils/helper";
import ClientController from "./client";

class ConnectionController {
  io: Server;
  clients: ClientController[];
  constructor(io: Server) {
    this.io = io;
    this.clients = [];
  }
  listen() {
    this.io.on("connection", (socket) => {
      printLog("default", "SOCKET", "connected: ", socket.id);
      const client = new ClientController(socket);
      this.clients.push(client);
    });
  }
}

export default ConnectionController;
