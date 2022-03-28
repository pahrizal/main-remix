import { Server, Socket } from "socket.io";
import { generateName, printLog } from "~/utils/helper";
import { clients } from "~/controllers/connection";
import GameController, { Card, GameData, games } from "~/controllers/game";
import PlayerController, { PlayerData } from "~/controllers/player";
import { v4 as uuidv4 } from "uuid";

export type ClientEvent = "join" | "joined" | "leave" | "left";
export interface JoinData {
  gameData: GameData;
  playerData: PlayerData;
}

export interface NewGameData {
  playerName: string;
  gameData: GameData;
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
    socket.on("start", this.start.bind(this));
    socket.on("foldCard", this.foldCard.bind(this));
    socket.on("passToNextPlayer", this.passToNextPlayer.bind(this));
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

  /**
   *
   * @param {NewGameData} data game data sent by the client to create a new game
   * @returns {void}
   */
  create(data: NewGameData): void {
    // prepare game owner data
    const ownerData: PlayerData = {
      id: uuidv4(),
      name: data.playerName || "Owner",
      socketId: this.socket.id,
      cards: [],
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
    this.socket.join(newGame.getId());

    // send the data to the client
    this.socket.emit("created", joinData);
    printLog("info", "CLIENT", "New game created: ", newGame.getId());
  }

  /**
   *
   * @param {JoinData} data game join data sent by player (gameData and playerData)
   * @returns {void}
   */
  join(data: JoinData): void {
    let newPlayer: PlayerController = new PlayerController({
      id: data.playerData.id || uuidv4(),
      name: data.playerData.name || generateName(1),
      socketId: this.socket.id,
      cards: data.playerData.cards || [],
    });
    // check if the game is already created
    let game = games.find((game) => game.getId() === data.gameData.id);

    if (!game) {
      printLog("warning", "CLIENT", "Game not found ", data.gameData.id);
      // tell the client that the game is not found
      this.socket.emit("notFound", data.gameData.id);
      return;
    }

    // emit game not found when the game is already started and the player is not in the game
    if (
      game.isStarted() &&
      game.getPlayerById(data.playerData.id) === undefined
    ) {
      printLog("warning", "CLIENT", "Game already started ", data.gameData.id);
      this.socket.emit("notFound", data.gameData.id);
      return;
    }

    // check if current player is already in the game
    const existingPlayer = game.getPlayerById(newPlayer.getData().id);
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
    } else {
      // update existing player socket id
      existingPlayer.setSocketId(newPlayer.getData().socketId);
      existingPlayer.setName(newPlayer.getData().name);
      newPlayer.setCards(existingPlayer.getCards());
    }

    // join the game room
    printLog(
      "info",
      "PLAYER",
      "Joining game: ",
      newPlayer.getId(),
      "(",
      newPlayer.getName(),
      ")"
    );
    this.socket.join(game.getId());

    // prepare the data to send to the client
    const joinData: JoinData = {
      gameData: game.getData(),
      playerData: newPlayer.getData(),
    };
    // send the data to the client if the game is not started
    this.socket.emit("joined", joinData);

    // send player list to the game room
    // get all player in the game
    const players = game.getPlayers();
    // map the player data to send to the client
    const playerData = players.map((player) =>
      player.getData({ includeCards: false })
    );

    //send the data to the client
    this.server.in(game.getId()).emit("players", playerData);
  }

  /**
   * This method is used to leave the game
   * @method leave
   * @returns {void}
   */
  leave(data: JoinData): void {
    // get game data from socket data
    const game = games.find((game) => game.getId() === data.gameData.id);
    // if game is defined, proceed removing the player from the game
    if (game) {
      const player = game.getPlayerById(data.playerData.id);

      // if the player is found, then we can remove the player from the game
      if (player) {
        printLog(
          "warning",
          "PLAYER",
          "Leaving game: ",
          data.playerData.id,
          "(",
          player.getName(),
          ")"
        );
        // broadcast to other players that the player left
        this.server
          .in(game.getId())
          .emit("left", player.getData({ includeCards: false }));
        game.removePlayer(player);
      }
    }
  }

  /**
   * This method is used to start the game
   * @method start
   * @params {JoinData} data The game id
   * @returns {void}
   */
  async start(data: JoinData): Promise<void> {
    // get game data from game list
    const game = games.find((game) => game.getId() === data.gameData.id);

    // if game is defined, proceed starting the game
    if (game) {
      // start the game, this will take care of creating the game board
      // creating the card deck and shuffling it
      // and draw initial 5 cards to the players
      // since we use external API, it will take some time to start the game
      // so we use promise to wait for the game to be started
      await game.start();

      // send cards to the players
      const players = game.getPlayers();
      for (const player of players) {
        this.server.in(player.getSocketId()).emit("cards", player.getCards());
      }

      // send the current card on table all players
      const tableCard = game.getCardOnTable();
      this.server.in(game.getId()).emit("tableCard", tableCard);

      // broadcast to other players that the game started
      this.server.in(game.getId()).emit("started", game.getData());
    }
  }

  foldCard(data: { card: Card; playerId: string; gameId: string }): void {
    // get game data from game list
    const game = games.find((game) => game.getId() === data.gameId);
    if (!game) {
      printLog(
        "warning",
        "CLIENT",
        "Folding card failed. Game not found ",
        this.socket.id
      );
      return;
    }
    //get player
    const player = game.getPlayerById(data.playerId);
    if (player) {
      const cardOnTable = game.getCardOnTable();
      if (!cardOnTable) return;
      const lastCardOnTable = cardOnTable[cardOnTable.length - 1];

      /**
       * This is the core step to decide the player can fold the card or not
       * by comparing the card on table with the card the player folded (highest value)
       * 1. if the card on table is higher than the card the player folded, then the player can fold the card
       * 2. and the card on table doesn't have the same suit with the folded one, then the player can not fold the card
       * except for the player that having free fold (because next player pass the turn) until his turn
       */
      if (
        (lastCardOnTable.value < data.card.value &&
          lastCardOnTable.suit === data.card.suit) ||
        (game.isFreeFold() && game.getFreeFoldOwner() === data.playerId)
      ) {
        // reset the free fold, since another player having higher card or this is the player that having free fold
        const freeFoldPlayer = game.getFreeFoldPlayer();
        if (freeFoldPlayer) {
          game.resetFreeFold();
          // tell the free fold owner that his free fold is over
          this.server
            .in(freeFoldPlayer.getSocketId())
            .emit("freeFold", game.isFreeFold());
        }
        // add card to table
        game.pushCardOnTable(data.card);
        // remove card from player
        player.removeCard(data.card);
        // get player current card
        const currentCard = player.getCards();
        // emit new cards to player
        this.socket.emit("cards", currentCard);

        const nextPlayer = game.getNextPlayer();

        this.server.in(game.getId()).emit("nextPlayer", nextPlayer.getId());

        // send the current card on table all players
        const tableCard = game.getCardOnTable();
        this.server.in(game.getId()).emit("tableCard", tableCard);
      } else {
        printLog(
          "warning",
          "CLIENT",
          "Folding card failed. folded card is lower than currently on table ",
          this.socket.id
        );
      }
    } else {
      printLog(
        "warning",
        "CLIENT",
        "Folding card failed. Player not found ",
        data.playerId
      );
    }
  }

  // this method is used to pass the turn to the next player
  passToNextPlayer(params: { gameId: string }) {
    const game = games.find((game) => game.getId() === params.gameId);
    if (!game) {
      printLog(
        "warning",
        "CLIENT",
        "Passing to next player failed. Game not found ",
        this.socket.id
      );
      return;
    }

    // since the current player is PASSING his turn,
    // set free fold to the previous player (if the free fold is not already assigned)
    if (!game.isFreeFold()) {
      const prevPlayer = game.getPreviousPlayer();
      game.setFreeFold(true, prevPlayer.getId());
      // let the player now that he has a FREE FOLD turn
      this.server
        .in(prevPlayer.getSocketId())
        .emit("freeFold", game.isFreeFold());

      printLog(
        "success",
        "CLIENT",
        "Assigning FREE FOLD to player: ",
        prevPlayer.getId(),
        "(",
        prevPlayer.getName(),
        ")"
      );
    }

    const nextPlayer = game.getNextPlayer();
    game.setNextPlayer(nextPlayer.getId());

    // send next player update to all players
    this.server.in(game.getId()).emit("nextPlayer", nextPlayer.getId());

    // send the current card on table all players
    const tableCard = game.getCardOnTable();
    this.server.in(game.getId()).emit("tableCard", tableCard);
  }
}
