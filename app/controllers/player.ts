import { printLog, randomColor } from "~/utils/helper";
import { Card } from "~/controllers/game";

export interface PlayerData {
  id: string;
  name: string;
  socketId: string;
  cards: Card[];
  colors: string;
  playTurn: boolean;
  iceCandidate: RTCIceCandidate | null;
  RTCOffer?: RTCSessionDescriptionInit;
  RTCAnswer?: RTCSessionDescriptionInit;
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
    this.data.colors = randomColor();
  }
  getSocketId() {
    return this.data.socketId;
  }
  getName() {
    return this.data.name;
  }
  setName(name: string) {
    this.data.name = name;
  }
  setSocketId(socketId: string) {
    this.data.socketId = socketId;
  }
  setTurn(turn: boolean) {
    this.data.playTurn = turn;
  }
  getId() {
    return this.data.id;
  }
  setRTCOffer(RTCOffer: RTCSessionDescriptionInit) {
    this.data.RTCOffer = RTCOffer;
  }
  setRTCAnswer(RTCAnswer: RTCSessionDescriptionInit) {
    this.data.RTCAnswer = RTCAnswer;
  }
  getData(opts?: { includeCards?: boolean }) {
    return opts?.includeCards ? this.data : { ...this.data, cards: [] };
  }
  setCards(cards: Card[]) {
    this.data.cards = cards;
  }
  removeCard(card: Card) {
    if (!this.data.cards) return;
    printLog("info", "PLAYER", "Removing card: ", card);
    const newCards = this.data.cards.filter((c) => c.code !== card.code);
    this.data.cards = newCards;
  }
  getCards() {
    return this.data.cards || [];
  }
  leave() {
    this.data = {
      id: "",
      name: "",
      socketId: "",
      cards: [],
      playTurn: false,
      iceCandidate: null,
      colors: "",
    };
  }
  setIceCandidate(iceCandidate: RTCIceCandidate) {
    this.data.iceCandidate = iceCandidate;
  }
}
