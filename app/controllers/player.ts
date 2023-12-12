import { printLog, randomColor } from "~/utils/helper";
import { Card } from "~/controllers/game";

export interface PlayerData {
    id: string;
    name: string;
    socketId: string;
    cards?: Card[];
    colors?: string;
    bot: boolean;
    playTurn?: boolean;
    stream?: MediaStream;
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
    getId() {
        return this.data.id;
    }
    getData(opts?: { includeCards?: boolean }) {
        return opts?.includeCards ? this.data : { ...this.data, cards: [] };
    }
    setCards(cards: Card[]) {
        this.data.cards = this.sortHand(cards);
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
    isBot() {
        return this.data.bot;
    }
    
    /**
     * This function sorts cards first by suite then by value
     * @param cards 
     * @returns cards
     */
    sortHand(cards: Card[]){
        cards = cards?.sort(function(a, b){
            // If the suite is the same, then sort by value
            if(a.suit == b.suit){
                    return a.value - b.value;
            }
            
            // Otherwise, sort by suite char code
            return a.suit.charCodeAt(0) - b.suit.charCodeAt(0);
        });
        return cards;
    }
    
    leave() {
        this.data = {
            id: "",
            name: "",
            socketId: "",
            cards: [],
            bot: false,
        };
    }
}
