import { Socket } from "socket.io";
import { printLog } from "~/utils/helper";

export type ClientEvent = "input-change" | "other" | "update-input";

export default class ClientController {
  socket: Socket;
  constructor(socket: Socket) {
    this.socket = socket;
    socket.on("disconnect", (reason) => {
      printLog("warning", "SOCKET", "disconnected: ", socket.id);
      this.socket.disconnect();
    });

    socket.on<ClientEvent>("input-change", (payload) => {
      socket.broadcast.emit<ClientEvent>("update-input", payload);
    });
  }
}
