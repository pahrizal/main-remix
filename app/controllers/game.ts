import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import { printLog } from "~/utils/helper";
import { Deck } from "~/controllers/deck";
import PlayerController from "~/controllers/player";
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

export interface Card {
    image: string;
    value: number;
    suit: string;
    code: string;
}

export interface GameData {
    id: string;
    level: number;
    owner: string;
    playerCount?: number;
    cardOnTable?: Card[]; // stack of card on table, the last card is the top card
    nextPlayer: string; // player id of the next turn
    winner?: string; // player id of the winner
}

/**
 * This class is used to manage the game
 * @class GameController
 * @param {GameData} data - The game id
 */
export default class GameController {
    private data: GameData = {
        id: uuidv4(),
        level: 1,
        owner: "",
        playerCount: 0,
        cardOnTable: [],
        nextPlayer: "",
    };
    private status: GameStatus = GameStatus.WAITING;
    private players: PlayerController[] = [];
    private deck: Deck;
    private freeFold: boolean;
    private freeFoldOwner: string;

    constructor(data: GameData) {
        this.data = {
            ...data,
            playerCount: this.players.length,
            nextPlayer: data.owner,
        };
        this.freeFold = false;
        this.freeFoldOwner = "";
        // init deck
        this.deck = new Deck();
    }

    setFreeFold(state: boolean, owner: string) {
        this.freeFold = state;
        this.freeFoldOwner = owner;
    }
    setFreeFoldOwner(playerId: string) {
        this.freeFoldOwner = playerId;
    }
    resetFreeFold() {
        this.freeFold = false;
        this.freeFoldOwner = "";
    }
    isFreeFold() {
        return this.freeFold;
    }

    getFreeFoldOwner() {
        return this.freeFoldOwner;
    }
    getFreeFoldPlayer() {
        return this.players.find((player) => player.getId() === this.freeFoldOwner);
    }

    addPlayer(player: PlayerController) {
        this.players.push(player);
        printLog("info", "GAME", "Player ", player.getId(), " added to game: ", this.data.id);
        this.data.playerCount = this.players.length;
        return player;
    }
    setId(id: string) {
        this.data.id = id;
    }
    setOwner(playerId: string) {
        this.data.owner = playerId;
        this.data.nextPlayer = playerId;
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
        printLog("info", "GAME", "Player ", player.getId(), " removed from game: ", this.data.id);
        this.data.playerCount = this.players.length;
    }
    async drawCardToTable() {
        const cards = await this.deck.draw();
        this.data.cardOnTable = cards;
    }
    getCardOnTable() {
        return this.data.cardOnTable;
    }
    pushCardOnTable(card: Card) {
        this.data.cardOnTable?.push(card);
    }
    async start() {
        // reset freefold
        this.resetFreeFold();
        // shuffle deck
        await this.deck.shuffle();
        const cardPerPlayer = Math.floor(51 / this.players.length);
        // draw card for each player and send to client
        for (const player of this.players) {
            const cards = await this.deck.draw(cardPerPlayer);
            player.setCards(cards);
        }
        // draw one card for the game table
        await this.drawCardToTable();

        printLog("info", "GAME", "Game started: ", this.data.id);
        this.status = GameStatus.STARTED;
    }
    setNextPlayer(playerId: string) {
        this.data.nextPlayer = playerId;
    }
    getCurrentPlayerIndex() {
        const currentPlayerIndex = this.players.findIndex((player) => player.getId() === this.data.nextPlayer);
        return currentPlayerIndex;
    }
    getPreviousPlayer() {
        //get current player index
        const currentPlayerIndex = this.getCurrentPlayerIndex();
        // get previous player index
        let previousPlayerIndex = currentPlayerIndex - 1;
        if (previousPlayerIndex < 0) {
            previousPlayerIndex = this.players.length - 1;
        }
        // get previous player
        const previousPlayer = this.players[previousPlayerIndex];
        return previousPlayer;
    }

    getNextPlayer() {
        //get current player index
        const currentPlayerIndex = this.getCurrentPlayerIndex();
        //get next player index
        let nextPlayerIndex = currentPlayerIndex + 1;
        if (nextPlayerIndex > this.players.length - 1) {
            nextPlayerIndex = 0;
        }
        const nextPlayer = this.players[nextPlayerIndex];
        this.data.nextPlayer = nextPlayer.getId();
        return nextPlayer;
    }
    getCurrentPlayer() {
        return this.getPlayerById(this.data.nextPlayer);
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
    setWinner(player: PlayerController) {
        this.data.winner = player.getId();
        this.status = GameStatus.FINISHED;
    }
}
