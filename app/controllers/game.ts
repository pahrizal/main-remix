import { Socket } from "socket.io";

export default class GameController {
  socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }
}
