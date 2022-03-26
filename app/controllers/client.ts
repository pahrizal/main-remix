import { Server, Socket } from "socket.io";
import { generateName, printLog } from "../utils/helper";
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
  server: Server;
  /**
   *
   * @param socket socket connection created by the client
   */
  constructor(socket: Socket, io: Server) {
    this.socket = socket;
    this.server = io;
    socket.on("disconnect", this.disconnect.bind(this));
    socket.on("create", this.create.bind(this));
    socket.on("join", this.join.bind(this));
    socket.on("leave", this.leave.bind(this));
  }
  /**
   * This method is used to disconnect the socket connection
   * @method disconnect
   * @returns {void}
   */
  disconnect(): void {
    this.socket.disconnect();
    printLog("warning", "SOCKET", "disconnected: ", this.socket.id);
    this.socket.disconnect();
    const clientIndex = clients.indexOf(this);
    printLog("warning", "CLIENT", "Removing CLIENT#", clientIndex);
    clients.splice(clientIndex, 1);
  }

  //   getGame() {
  //     const data = this.socket.data as JoinData;
  //     return games.find((game) => game.getId() === data.gameData.id);
  //   }

  create(data: { playerName: string; gameData: GameData }) {
    // prepare game owner data
    const ownerData: PlayerData = {
      id: uuidv4(),
      name: data.playerName || "Owner",
      socketId: this.socket.id,
    };
    // define new gameData
    const newGameData: GameData = { ...data.gameData, owner: ownerData.id };

    // create owner as a player too
    const owner = new PlayerController(ownerData);

    // create the game
    const newGame = new GameController(newGameData);

    // add the owner to the game
    newGame.addPlayer(owner);

    // add the game to the game list
    games.push(newGame);

    // prepare the data to send to the client
    const joinData: JoinData = {
      gameData: newGame.getData(),
      playerData: ownerData,
    };

    // join the game room
    printLog("info", "CLIENT", "Joining game room: ", newGame.getId());
    this.socket.join(newGame.getId());

    // send the data to the client
    this.socket.emit("created", joinData);
    printLog("info", "CLIENT", "New game created: ", newGame.getId());
  }

  join(data: JoinData) {
    let newPlayer: PlayerController = new PlayerController({
      id: data.playerData.id || uuidv4(),
      name: data.playerData.name || generateName(1),
      socketId: this.socket.id,
    });
    console.log(data);
    // check if the game is already created
    let game = games.find((game) => game.getId() === data.gameData.id);

    if (!game) {
      printLog("warning", "CLIENT", "Game not found ", data.gameData.id);
      // tell the client that the game is not found
      this.socket.emit("notFound", data.gameData.id);
    } else {
      // check if current player is already in the game
      const existingPlayer = game.getPlayerById(data.playerData.id);
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

      // join the game room
      printLog("info", "CLIENT", "Joining game room: ", game.getId());
      this.socket.join(game.getId());

      // prepare the data to send to the client
      const joinData: JoinData = {
        gameData: game.getData(),
        playerData: newPlayer.getData(),
      };
      // send the data to the client
      this.socket.emit("joined", joinData);

      // send player list to the game room
      // get all player in the game
      const players = game.getPlayers();
      // map the player data to send to the client
      const playerData = players.map((player) => player.getData());
      //send the data to the client
      this.server.in(game.getId()).emit("players", playerData);
    }
  }

  /**
   * This method is used to leave the game
   * @method leave
   * @returns {void}
   */
  leave(data: JoinData): void {
    printLog("warning", "CLIENT", "Leaving game: ", data.gameData.id);
    // get game data from socket data
    const game = games.find((game) => game.getId() === data.gameData.id);
    // if game is defined, proceed removing the player from the game
    if (game) {
      const player = game.getPlayerById(data.playerData.id);
      printLog("warning", "PLAYER", "Leaving game: ", data.playerData.id);

      // if the player is found, then we can remove the player from the game
      if (player) {
        // broadcast to other players that the player left
        this.server.in(game.getId()).emit("left", player.getData());
        game.removePlayer(player);
      }
    }
  }
}
