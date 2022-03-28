import { printLog } from "~/utils/helper";
import { Card } from "~/controllers/game";

export const convertedCardValue: { [key: string]: number } = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
};

export class Deck {
  private BASE_URL = "https://deckofcardsapi.com/api/deck";
  private remaining: number = 0;
  private deckId: string = "";
  constructor() {
    this.create();
  }

  /**
   * create a new deck
   * @returns void
   */
  private async create(): Promise<void> {
    const res = await fetch(`${this.BASE_URL}/new/shuffle/?deck_count=1`);
    const json = await res.json();
    this.deckId = json.deck_id;
  }

  /**
   * Draw a card from the deck
   * @param {string} deckId deck id
   * @param {number} count how many card to draw
   * @returns {Promise<Card>} card
   */
  async draw(count: number = 1): Promise<Card[]> {
    const res = await fetch(
      `${this.BASE_URL}/${this.deckId}/draw/?count=${count}`
    );
    // if res status is not 200, return empty array
    if (res.status !== 200) return [];

    const json = await res.json();
    this.remaining = json.remaining;
    printLog(
      "info",
      "DECK",
      `draw ${count} card from deck ${this.deckId} remaining ${this.remaining}`
    );
    return json.cards.map((c: Card) => ({
      code: c.code,
      image: c.image,
      suit: c.suit,
      value: convertedCardValue[c.value],
    }));
  }

  /**
   * Shuffle the deck
   * @returns {Promise<void>}
   */
  async shuffle(): Promise<void> {
    const res = await fetch(
      `${this.BASE_URL}/${this.deckId}/shuffle/?remaining=true`
    );
    const json = await res.json();
    printLog("info", "DECK", `shuffle deck ${this.deckId}`);
    this.remaining = json.remaining;
  }
}
