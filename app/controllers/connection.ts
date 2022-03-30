import { Server, Socket } from "socket.io";
import ClientController from "~/controllers/client";
import { printLog } from "~/utils/helper";
import _ from "lodash";
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
      // advertise peer
      const client = new ClientController(socket, this.io);
      clients.push(client);
      clients.forEach((c) => {
        const s = c.socket;
        if (s.id !== socket.id) {
          printLog(
            "info",
            "SOCKET",
            "Advertising peer ",
            socket.id,
            " to ",
            s.id
          );
          s.emit("peer", {
            peerId: socket.id,
            initiator: true,
          });
          socket.emit("peer", {
            peerId: s.id,
            initiator: false,
          });
        }
      });
      socket.on("signal", function (data) {
        // find socket by peerId
        const peer = clients.find((c) => c.socket.id === data.peerId);
        if (!peer) return;
        const socket2 = peer.socket;
        printLog(
          "info",
          "SOCKET",
          "Proxying signal from peer ",
          socket.id,
          " to ",
          socket2
        );

        socket2.emit("signal", {
          signal: data.signal,
          peerId: socket.id,
        });
      });
    });
  }
}

export default ConnectionController;
