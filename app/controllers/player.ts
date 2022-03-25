import { Socket } from "socket.io";

export interface PlayerData {
  id: string;
  name: string;
  socketId: string;
}
/**
 * This class is used to manage player in the game
 * @class PlayerController
 * @param {PlayerData} data - The player data
 */
export default class PlayerController {
  private data: PlayerData;
  constructor(data: PlayerData) {
    this.data = data;
  }
  getSocketId() {
    return this.data.socketId;
  }
  getId() {
    return this.data.id;
  }
  getData() {
    return this.data;
  }
}
