import { Socket } from "socket.io";
import { printLog } from "../utils/helper";
import { clients } from "./connection";
import GameController, { GameData, games } from "./game";
import PlayerController, { PlayerData } from "./player";
import { v4 as uuidv4 } from "uuid";

export type ClientEvent = "join" | "joined" | "leave" | "left";
export interface JoinData {
  gameData: GameData;
  playerData: PlayerData;
}
/**
 * This class is used to manage the socket connection created by the client
 * @class ClientController
 * @param {Socket} socket - The socket connection created by the client
 *
 */

export default class ClientController {
  socket: Socket;
  /**
   *
   * @param socket socket connection created by the client
   */
  constructor(socket: Socket) {
    this.socket = socket;
    socket.on("disconnect", this.disconnect.bind(this));
    socket.on("join", this.join.bind(this));
  }
  /**
   * This method is used to disconnect the socket connection
   * @method disconnect
   * @returns {void}
   */
  disconnect() {
    this.socket.disconnect();
    printLog("warning", "SOCKET", "disconnected: ", this.socket.id);
    this.socket.disconnect();
    const clientIndex = clients.indexOf(this);
    printLog("warning", "CLIENT", "Removing CLIENT#", clientIndex);
    clients.splice(clientIndex, 1);
  }

  getGame() {
    return games.find((game) => game.getId() === this.socket.id);
  }

  join(data: JoinData) {
    console.log(data);
    let newPlayer: PlayerController = new PlayerController({
      id: data.playerData.id || uuidv4(),
      name: "Anonymous",
      socketId: this.socket.id,
    });

    // check if the game is already created
    let game = games.find((game) => game.getId() === data.gameData.id);
    console.log(data.gameData);
    if (!game) {
      // create the game
      game = new GameController(data.gameData);
      game.setOwner(newPlayer.getId());
      // add the player to the game
      game.addPlayer(newPlayer);

      // add the game to the list
      games.push(game);
      console.log("game created: ", game.getId());
    } else {
      // check if current player is already in the game
      console.log("game found: ", game.getId());
      const existingPlayer = game.getPlayerById(data.playerData.id);
      console.log("existingPlayer: ", existingPlayer);
      if (!existingPlayer) {
        // create the player if the game is not full
        if (game.getTotalPlayer() < 4) {
          // add the player to the game
          game.addPlayer(newPlayer);
        } else {
          // send error message to the client
          this.socket.emit("error", {
            message: "Game is full",
          });
        }
      }
    }
    // prepare the data to send to the client
    const joinData: JoinData = {
      gameData: game.getData(),
      playerData: newPlayer.getData(),
    };
    this.socket.data = game;
    // send the data to the client
    this.socket.emit<ClientEvent>("joined", joinData);
  }
}
