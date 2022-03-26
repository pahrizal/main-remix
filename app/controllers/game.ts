import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import { printLog } from "~/utils/helper";
import PlayerController from "./player";
/**
 * This constant is used to store the game created by the client
 * @constant {GameController[]}
 * @default []
 */
export let games: GameController[] = [];
export type GameEvent = "kick" | "kicked";
export enum GameStatus {
  WAITING = "WAITING",
  STARTED = "STARTED",
  FINISHED = "FINISHED",
  BUSY = "BUSY",
  READY = "READY",
  UNDEFINED = "UNDEFINED",
}

export interface GameData {
  id: string;
  level: number;
  owner: string;
  playerCount?: number;
}
/**
 * This class is used to manage the game
 * @class GameController
 * @param {Socket} socket - The socket connection created by the client
 * @param {GameData} data - The game id
 * @param {PlayerController[]} players - The player list inside the game
 */
export default class GameController {
  private data: GameData = {
    id: uuidv4(),
    level: 1,
    owner: "",
    playerCount: 0,
  };
  private status: GameStatus = GameStatus.WAITING;
  private players: PlayerController[] = [];

  constructor(data: GameData) {
    this.data = { ...data, playerCount: this.players.length };
  }
  addPlayer(player: PlayerController) {
    this.players.push(player);
    printLog(
      "info",
      "GAME",
      "Player ",
      player.getId(),
      " added to game: ",
      this.data.id
    );
    this.data.playerCount = this.players.length;
    return player;
  }
  setId(id: string) {
    this.data.id = id;
  }
  setOwner(playerId: string) {
    this.data.owner = playerId;
  }
  getId() {
    return this.data.id;
  }
  getPlayers() {
    return this.players;
  }
  getTotalPlayer() {
    return this.players.length;
  }
  getPlayerById(playerId: string | undefined) {
    if (!playerId) return undefined;
    return this.players.find((player) => player.getId() === playerId);
  }
  getPlayerBySocketId(socketId: string) {
    return this.players.find((player) => player.getSocketId() === socketId);
  }
  getData() {
    return this.data;
  }
  removePlayer(player: PlayerController) {
    const playerIndex = this.players.indexOf(player);
    this.players.splice(playerIndex, 1);
    printLog(
      "info",
      "GAME",
      "Player ",
      player.getId(),
      " removed from game: ",
      this.data.id
    );
    this.data.playerCount = this.players.length;
  }

  start() {
    printLog("info", "GAME", "Game started: ", this.data.id);
    this.status = GameStatus.STARTED;
  }
  setStatus(status: GameStatus) {
    this.status = status;
  }
  getStatus() {
    return this.status;
  }
  isStarted() {
    return this.status === GameStatus.STARTED;
  }
  isReady() {
    return this.status === GameStatus.READY;
  }
  isFinished() {
    return this.status === GameStatus.FINISHED;
  }
  isWaiting() {
    return this.status === GameStatus.WAITING;
  }
  isBusy() {
    return this.status === GameStatus.BUSY;
  }
}
