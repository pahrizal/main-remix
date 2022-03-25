import { Server } from "socket.io";
import ClientController from "./client";
import { printLog } from "../utils/helper";

export const clients: ClientController[] = [];

/**
 * This class is used to manage the socket connection between the server and the client
 * @class ConnectionController
 * @param {Server} io - The socket io connection between the server and the client
 *
 */
class ConnectionController {
  io: Server;
  constructor(io: Server) {
    this.io = io;
  }

  /**
   * This method is used to start listening to the socket connection
   * @method start
   * @returns {void}
   */
  start() {
    this.io.on("connection", (socket) => {
      printLog("default", "SOCKET", "connected: ", socket.id);
      const client = new ClientController(socket);
      clients.push(client);
    });
  }
}

export default ConnectionController;
