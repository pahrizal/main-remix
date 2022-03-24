import { Server, Socket } from "socket.io";
import { printLog, TerminalColor } from "~/utils/helper";
import ClientController from "./client";

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
