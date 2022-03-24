import { Socket } from "socket.io";
import { printLog } from "../utils/helper";
import { clients } from "./connection";

export type ClientEvent = "join" | "joining";

export default class ClientController {
  socket: Socket;
  constructor(socket: Socket) {
    this.socket = socket;
    socket.on("disconnect", (reason) => {
      printLog("warning", "SOCKET", "disconnected: ", socket.id);
      this.socket.disconnect();
      const clientIndex = clients.indexOf(this);
      printLog("warning", "CLIENT", "Removing CLIENT#", clientIndex);
      clients.splice(clientIndex, 1);
    });

    socket.on<ClientEvent>("join", (gameId) => {
      printLog("info", "CLIENT", "new join: ", gameId);
      socket.join(gameId);
      socket.to(gameId).emit<ClientEvent>("joining", "someone is joining");
    });
  }
}
