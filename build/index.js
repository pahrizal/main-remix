var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/papuq/Work/main-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => AppWithRedux,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_react = __toESM(require("react"));
var import_react_redux = require("react-redux");
var import_remix2 = __toESM(require_remix());
var import_remix3 = __toESM(require_remix());
var import_socket = require("socket.io-client");

// app/assets/styles/animation.css
var animation_default = "/build/_assets/animation-IGYYV32R.css";

// app/assets/styles/app.css
var app_default = "/build/_assets/app-BCGGNUNM.css";

// app/assets/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FITOBAMO.css";

// app/stores/index.ts
init_react();

// app/stores/gameState.ts
init_react();

// app/controllers/game.ts
init_react();
var import_uuid = require("uuid");

// app/utils/helper.ts
init_react();
var import_moment = __toESM(require("moment"));
var currentTimestamp = () => (0, import_moment.default)().format("YYYY-MM-DD HH:mm:ss");
var printLog = (type = "default", label = "", ...message) => {
  let color = "\x1B[37m" /* FgWhite */;
  switch (type) {
    case "info":
      color = "\x1B[34m" /* FgBlue */;
      break;
    case "warning":
      color = "\x1B[33m" /* FgYellow */;
      break;
    case "success":
      color = "\x1B[32m" /* FgGreen */;
      break;
    case "error":
      color = "\x1B[31m" /* FgRed */;
      break;
    default:
      color = "\x1B[37m" /* FgWhite */;
  }
  console.log(`[${"\x1B[35m" /* FgMagenta */}${currentTimestamp() + "\x1B[0m" /* Reset */}][${"\x1B[36m" /* FgCyan */}${label}${"\x1B[0m" /* Reset */}]`, color, ...message, "\x1B[0m" /* Reset */);
};
function capFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function getRandomInt(min = 0, max = 999) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function generateName(wordLen = 2) {
  const output = [];
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";
  for (let w = 0; w < wordLen; w++) {
    const wordCharLen = getRandomInt(3, 10);
    const name = [];
    for (let i = 0; i < wordCharLen; i++) {
      if (i % 2 === 0) {
        name.push(consonants.charAt(getRandomInt(0, consonants.length)));
      } else {
        name.push(vowels.charAt(getRandomInt(0, vowels.length)));
      }
    }
    output.push(capFirst(name.join("")));
  }
  return output.join("");
}
var randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
var preloadImage = async (imgPath) => new Promise((res) => {
  const newImg = new Image();
  newImg.onload = function() {
    res(newImg);
  };
  newImg.src = imgPath;
});

// app/controllers/deck.ts
init_react();
var convertedCardValue = {
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
  ACE: 14
};
var Deck = class {
  constructor() {
    this.BASE_URL = "https://deckofcardsapi.com/api/deck";
    this.remaining = 0;
    this.deckId = "";
    this.create();
  }
  async create() {
    const res = await fetch(`${this.BASE_URL}/new/shuffle/?deck_count=1`);
    const json3 = await res.json();
    this.deckId = json3.deck_id;
  }
  async draw(count = 1) {
    const res = await fetch(`${this.BASE_URL}/${this.deckId}/draw/?count=${count}`);
    if (res.status !== 200)
      return [];
    const json3 = await res.json();
    this.remaining = json3.remaining;
    printLog("info", "DECK", `draw ${count} card from deck ${this.deckId} remaining ${this.remaining}`);
    return json3.cards.map((c) => ({
      code: c.code,
      image: c.image,
      suit: c.suit,
      value: convertedCardValue[c.value]
    }));
  }
  async shuffle() {
    const res = await fetch(`${this.BASE_URL}/${this.deckId}/shuffle/?remaining=true`);
    const json3 = await res.json();
    printLog("info", "DECK", `shuffle deck ${this.deckId}`);
    this.remaining = json3.remaining;
  }
};

// app/controllers/game.ts
var games = [];
var GameController = class {
  constructor(data) {
    this.data = {
      id: (0, import_uuid.v4)(),
      level: 1,
      owner: "",
      playerCount: 0,
      cardOnTable: [],
      nextPlayer: ""
    };
    this.status = "WAITING" /* WAITING */;
    this.players = [];
    this.data = __spreadProps(__spreadValues({}, data), {
      playerCount: this.players.length,
      nextPlayer: data.owner
    });
    this.freeFold = false;
    this.deck = new Deck();
  }
  setFreeFold(freeFold) {
    this.freeFold = freeFold;
  }
  isFreeFold() {
    return this.freeFold;
  }
  addPlayer(player) {
    this.players.push(player);
    printLog("info", "GAME", "Player ", player.getId(), " added to game: ", this.data.id);
    this.data.playerCount = this.players.length;
    return player;
  }
  setId(id) {
    this.data.id = id;
  }
  setOwner(playerId) {
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
  getPlayerById(playerId) {
    if (!playerId)
      return void 0;
    return this.players.find((player) => player.getId() === playerId);
  }
  getPlayerBySocketId(socketId) {
    return this.players.find((player) => player.getSocketId() === socketId);
  }
  getData() {
    return this.data;
  }
  removePlayer(player) {
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
  pushCardOnTable(card) {
    var _a;
    (_a = this.data.cardOnTable) == null ? void 0 : _a.push(card);
  }
  async start() {
    await this.deck.shuffle();
    const cardPerPlayer = Math.floor(51 / this.players.length);
    for (const player of this.players) {
      const cards = await this.deck.draw(cardPerPlayer);
      player.setCards(cards);
    }
    await this.drawCardToTable();
    printLog("info", "GAME", "Game started: ", this.data.id);
    this.status = "STARTED" /* STARTED */;
  }
  setNextPlayer(playerId) {
    this.data.nextPlayer = playerId;
  }
  getNextPlayer() {
    const currentPlayerIndex = this.players.findIndex((player) => player.getId() === this.data.nextPlayer);
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
  setStatus(status) {
    this.status = status;
  }
  getStatus() {
    return this.status;
  }
  isStarted() {
    return this.status === "STARTED" /* STARTED */;
  }
  isReady() {
    return this.status === "READY" /* READY */;
  }
  isFinished() {
    return this.status === "FINISHED" /* FINISHED */;
  }
  isWaiting() {
    return this.status === "WAITING" /* WAITING */;
  }
  isBusy() {
    return this.status === "BUSY" /* BUSY */;
  }
};

// app/stores/socketState.ts
init_react();
var initialSocketState = {
  client: null,
  connected: false
};
var SocketActionsTypes = {
  SET_SOCKET: "SET_SOCKET",
  SET_CONNECTED: "SET_CONNECTED"
};
var socketActions = {
  init: (socket, onData) => {
    return async (dispatch, getState) => {
      if (!socket)
        return;
      socket.on("connect", () => {
        dispatch({
          type: SocketActionsTypes.SET_CONNECTED,
          payload: true
        });
      });
      dispatch({
        type: SocketActionsTypes.SET_SOCKET,
        payload: socket
      });
    };
  },
  startLinsteningGameEvents: () => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket)
        return;
      socket.on("created", (payload) => {
        console.log("game created", payload);
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
      });
      socket.on("players", (payload) => {
        console.log("new player list", payload);
        gameActions.setPlayers(payload)(dispatch, getState);
      });
      socket.on("notFound", (payload) => {
        gameActions.setGameNotFound(true)(dispatch, getState);
      });
      socket.on("joined", (payload) => {
        console.log("joined", payload);
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
      });
      socket.on("left", (payload) => {
        console.log(payload.name, "has left the game");
        gameActions.removePlayer(payload.id)(dispatch, getState);
      });
      socket.on("started", (payload) => {
        console.log("game started", payload);
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
        gameActions.setGameStatus("STARTED" /* STARTED */)(dispatch, getState);
      });
      socket.on("cards", (payload) => {
        console.log("cards", payload);
        gameActions.setCards(payload)(dispatch, getState);
      });
      socket.on("tableCard", (payload) => {
        console.log("tableCard", payload);
        gameActions.setTableCard(payload)(dispatch, getState);
      });
      socket.on("nextPlayer", (playerId) => {
        console.log("nextPlayer", playerId);
        gameActions.setCurrentPlayer(playerId)(dispatch, getState);
      });
    };
  },
  stopListeningGameEvents: () => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket)
        return;
      socket.off("created");
      socket.off("newPlayer");
      socket.off("notFound");
      socket.off("joined");
      socket.off("left");
    };
  }
};
var SocketReducer = (state, action) => {
  if (state === void 0) {
    return initialSocketState;
  }
  switch (action.type) {
    case SocketActionsTypes.SET_SOCKET:
      return __spreadProps(__spreadValues({}, state), {
        client: action.payload
      });
    case SocketActionsTypes.SET_CONNECTED:
      return __spreadProps(__spreadValues({}, state), {
        connected: action.payload
      });
    default:
      return state;
  }
};

// app/stores/gameState.ts
var initialGameState = {
  data: null,
  notFound: false,
  players: [],
  cards: [],
  status: "WAITING" /* WAITING */,
  tableCard: [],
  currentPlayer: ""
};
var GameActionsTypes = {
  SET_GAME_DATA: "SET_GAME_DATA",
  SET_GAME_NOT_FOUND: "SET_GAME_NOT_FOUND",
  SET_PLAYERS: "SET_PLAYERS",
  SET_GAME_STATUS: "SET_GAME_STATUS",
  SET_CARDS: "SET_CARDS",
  SET_TABLE_CARD: "SET_TABLE_CARD",
  SET_CURRENT_PLAYER: "SET_CURRENT_PLAYER"
};
var gameActions = {
  setCurrentPlayer: (playerId) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_CURRENT_PLAYER,
        payload: playerId
      });
      const gameData = getState().game.data;
      if (gameData) {
        gameData.gameData.nextPlayer = playerId;
        dispatch({
          type: GameActionsTypes.SET_GAME_DATA,
          payload: gameData
        });
      }
    };
  },
  setTableCard: (cards) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_TABLE_CARD,
        payload: cards
      });
    };
  },
  passToNextPlayer: () => {
    return async (dispatch, getState) => {
      var _a;
      const socket = getState().socket.client;
      if (!socket)
        return;
      socket.emit("passToNextPlayer", {
        gameId: (_a = getState().game.data) == null ? void 0 : _a.gameData.id
      });
    };
  },
  foldCard: (card) => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      const data = getState().game.data;
      const currentPlayerTurn = getState().game.currentPlayer;
      if (!socket || !data)
        return;
      if (currentPlayerTurn !== data.playerData.id) {
        console.log("not your turn", currentPlayerTurn, data.playerData.id);
        return;
      }
      socket.emit("foldCard", {
        card,
        playerId: data.playerData.id,
        gameId: data.gameData.id
      });
    };
  },
  setPlayers: (players) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: players
      });
    };
  },
  setCards: (cards) => {
    return async (dispatch, getState) => {
      for (const card of cards) {
        preloadImage(card.image);
      }
      dispatch({
        type: GameActionsTypes.SET_CARDS,
        payload: cards
      });
    };
  },
  addPlayer: (player) => {
    return async (dispatch, getState) => {
      const players = getState().game.players;
      const playerExist = players.find((p) => p.id === player.id);
      if (playerExist)
        return;
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: [...players, player]
      });
      console.log("player added", player);
    };
  },
  removePlayer: (playerId) => {
    return async (dispatch, getState) => {
      const players = getState().game.players;
      const playerExist = players.find((p) => p.id === playerId);
      if (!playerExist)
        return;
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: players.filter((p) => p.id !== playerId)
      });
    };
  },
  setGameNotFound: (payload) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_GAME_NOT_FOUND,
        payload
      });
    };
  },
  setGameData: (data) => {
    return async (dispatch, getState) => {
      localStorage.setItem(data.gameData.id, JSON.stringify(data));
      dispatch({
        type: GameActionsTypes.SET_GAME_DATA,
        payload: data
      });
    };
  },
  create: (playerName) => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket)
        return;
      const gameData = {
        id: generateName(),
        level: 1,
        owner: "",
        nextPlayer: ""
      };
      socket.emit("create", { playerName, gameData });
      socketActions.startLinsteningGameEvents()(dispatch, getState);
    };
  },
  join: (gameId, playerName) => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket)
        return;
      socketActions.startLinsteningGameEvents()(dispatch, getState);
      let joinData = getState().game.data;
      const persistantGameData = localStorage.getItem(gameId);
      if (!joinData) {
        if (persistantGameData) {
          joinData = JSON.parse(persistantGameData);
          dispatch({
            type: GameActionsTypes.SET_GAME_DATA,
            payload: joinData
          });
        }
      }
      if ((joinData == null ? void 0 : joinData.gameData.id) === gameId) {
        joinData.playerData.socketId = socket.id;
        dispatch({
          type: GameActionsTypes.SET_GAME_DATA,
          payload: joinData
        });
      }
      if (!joinData) {
        joinData = {
          gameData: {
            id: gameId,
            level: 1,
            owner: "",
            nextPlayer: ""
          },
          playerData: {
            id: "",
            name: playerName,
            socketId: socket.id
          }
        };
      }
      console.log("sending join data", joinData);
      socket.emit("join", joinData);
    };
  },
  leave: () => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      const gameData = getState().game.data;
      if (!socket || !gameData)
        return;
      socket.emit("leave", gameData);
      socketActions.stopListeningGameEvents()(dispatch, getState);
      localStorage.removeItem(gameData.gameData.id);
      dispatch({
        type: GameActionsTypes.SET_GAME_DATA,
        payload: null
      });
      document.location = "/";
    };
  },
  toggleNotFound: () => {
    return async (dispatch, getState) => {
      const notFound = getState().game.notFound;
      dispatch({
        type: GameActionsTypes.SET_GAME_NOT_FOUND,
        payload: !notFound
      });
    };
  },
  setGameStatus: (status) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_GAME_STATUS,
        payload: status
      });
    };
  },
  start: () => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      const gameData = getState().game.data;
      if (!socket || !gameData)
        return;
      console.log("sending start game request");
      socket.emit("start", gameData);
    };
  }
};
var GameReducer = (state, action) => {
  if (state === void 0) {
    return initialGameState;
  }
  switch (action.type) {
    case GameActionsTypes.SET_CURRENT_PLAYER:
      return __spreadProps(__spreadValues({}, state), {
        currentPlayer: action.payload
      });
    case GameActionsTypes.SET_TABLE_CARD:
      return __spreadProps(__spreadValues({}, state), {
        tableCard: action.payload
      });
    case GameActionsTypes.SET_GAME_DATA:
      return __spreadProps(__spreadValues({}, state), {
        data: action.payload
      });
    case GameActionsTypes.SET_GAME_NOT_FOUND:
      return __spreadProps(__spreadValues({}, state), {
        notFound: action.payload
      });
    case GameActionsTypes.SET_PLAYERS:
      return __spreadProps(__spreadValues({}, state), {
        players: action.payload
      });
    case GameActionsTypes.SET_GAME_STATUS:
      return __spreadProps(__spreadValues({}, state), {
        status: action.payload
      });
    case GameActionsTypes.SET_CARDS:
      return __spreadProps(__spreadValues({}, state), {
        cards: action.payload
      });
    default:
      return state;
  }
};

// app/stores/index.ts
var initialAppState = {
  socket: initialSocketState,
  game: initialGameState
};
var reducers = {
  socket: SocketReducer,
  game: GameReducer
};

// app/stores/config.ts
init_react();
var import_redux = require("redux");
var import_redux_thunk = __toESM(require("redux-thunk"));
var bindMiddleware = (middleware) => {
  if (true) {
  }
  return (0, import_redux.applyMiddleware)(...middleware);
};
var configureStore = (initialState) => {
  const middleware = [import_redux_thunk.default];
  const rootReducer = (0, import_redux.combineReducers)(__spreadValues({}, reducers));
  const store2 = (0, import_redux.createStore)(rootReducer, initialState, bindMiddleware(middleware));
  return store2;
};
var config_default = configureStore;

// route:/Users/papuq/Work/main-remix/app/root.tsx
var links = () => {
  return [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Virgil3YOFF.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: animation_default }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Main Remix",
  viewport: "width=device-width,initial-scale=1"
});
var persistedState = __spreadValues({}, initialAppState);
var store = config_default(persistedState);
function App() {
  const dispatch = (0, import_react_redux.useDispatch)();
  import_react.default.useEffect(() => {
    dispatch(socketActions.init((0, import_socket.io)({
      transports: ["websocket"],
      upgrade: false
    }), (data) => {
    }));
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en",
    className: "bg-slate-900 text-slate-100 flex flex-col justify-center items-center w-screen h-screen"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement(import_remix3.Meta, null), /* @__PURE__ */ import_react.default.createElement(import_remix3.Links, null)), /* @__PURE__ */ import_react.default.createElement("body", {
    className: "overflow-hidden"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix3.Outlet, null), /* @__PURE__ */ import_react.default.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ import_react.default.createElement(import_remix3.Scripts, null), /* @__PURE__ */ import_react.default.createElement(import_remix3.LiveReload, null)));
}
var loader = () => {
  return (0, import_remix2.json)({ env: "development" });
};
function AppWithRedux() {
  const data = (0, import_remix2.useLoaderData)();
  import_react.default.useEffect(() => {
    window.ENV = data.env;
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(import_react_redux.Provider, {
    store
  }, /* @__PURE__ */ import_react.default.createElement(App, null));
}

// route:/Users/papuq/Work/main-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react4 = __toESM(require("react"));
var import_react_redux2 = require("react-redux");
var import_remix4 = __toESM(require_remix());

// app/components/Button.tsx
init_react();
var import_clsx = __toESM(require("clsx"));
var import_react2 = __toESM(require("react"));
var Button = ({
  onClick,
  className,
  children,
  disabled
}) => {
  return /* @__PURE__ */ import_react2.default.createElement("button", {
    disabled,
    className: (0, import_clsx.default)("bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-4 px-8", className, {
      "bg-slate-400 cursor-not-allowed hover:bg-slate-400 hover:text-slate-500": disabled
    }),
    onClick
  }, /* @__PURE__ */ import_react2.default.createElement("p", null, children));
};
var Button_default = Button;

// app/assets/images/playing-cards.png
var playing_cards_default = "/build/_assets/playing-cards-PK6EDUO4.png";

// app/components/RubberText.tsx
init_react();
var import_clsx2 = __toESM(require("clsx"));
var import_react3 = __toESM(require("react"));
var RubberText = ({
  text = "",
  bounceIn,
  rootClass = "",
  className = "font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-lime-400 cursor-pointer"
}) => {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: (0, import_clsx2.default)("flex flex-row", rootClass, {
      bounceInLeft: bounceIn === "left" || !bounceIn,
      bounceInRight: bounceIn === "right",
      bounceInUp: bounceIn === "up",
      bounceInDown: bounceIn === "down"
    })
  }, text.split("").map((c, i) => /* @__PURE__ */ import_react3.default.createElement("h1", {
    key: i,
    className
  }, c)));
};
var RubberText_default = RubberText;

// route:/Users/papuq/Work/main-remix/app/routes/index.tsx
function Index() {
  const [joinId, setJoinId] = import_react4.default.useState("");
  const [playerName, setPlayerName] = import_react4.default.useState("");
  const data = (0, import_react_redux2.useSelector)((state) => state.game.data);
  const notFound = (0, import_react_redux2.useSelector)((state) => state.game.notFound);
  const dispatch = (0, import_react_redux2.useDispatch)();
  const joinIdRef = import_react4.default.useRef(null);
  const playerNameRef = import_react4.default.useRef(null);
  const nav = (0, import_remix4.useNavigate)();
  const handleRoomInput = (event) => {
    const value = event.target.value;
    if (!value)
      return;
    setJoinId(value);
  };
  const handleNameInput = (event) => {
    const value = event.target.value;
    if (!value)
      return;
    setPlayerName(value);
  };
  const handleJoin = () => {
    var _a, _b;
    if (!playerName) {
      (_a = playerNameRef.current) == null ? void 0 : _a.focus();
      return;
    }
    if (!joinId) {
      (_b = joinIdRef.current) == null ? void 0 : _b.focus();
      return;
    }
    dispatch(gameActions.join(joinId, playerName));
  };
  const handleCreateGame = () => {
    var _a;
    if (!playerName) {
      (_a = playerNameRef.current) == null ? void 0 : _a.focus();
      return;
    }
    dispatch(gameActions.create(playerName));
  };
  import_react4.default.useEffect(() => {
    if (!data)
      return;
    console.log(data);
    nav(data.gameData.id);
  }, [data]);
  import_react4.default.useEffect(() => {
    if (notFound) {
      alert("Game not found");
      dispatch(gameActions.toggleNotFound());
    }
  }, [notFound]);
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col w-screen h-screen justify-center items-center"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    src: playing_cards_default,
    alt: "bg",
    width: 512,
    className: "-z-10 absolute bottom-0 right-0 opacity-20 bounceInUp"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col overflow-hidden items-center justify-center"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ import_react4.default.createElement(RubberText_default, {
    text: "Hello",
    rootClass: "mr-8"
  }), /* @__PURE__ */ import_react4.default.createElement(RubberText_default, {
    text: "there!"
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ import_react4.default.createElement(RubberText_default, {
    text: "Let's",
    bounceIn: "right",
    rootClass: "mr-8",
    className: "font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-slate-100 text-lime-400 cursor-pointer"
  }), /* @__PURE__ */ import_react4.default.createElement(RubberText_default, {
    text: "PLAY!",
    bounceIn: "right",
    className: "font-exo xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber px-2 hover:text-slate-100 text-lime-400 cursor-pointer"
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex w-full flex-col mt-8 items-center"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-row border border-lime-500 items-center sm:w-full"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    ref: playerNameRef,
    maxLength: 20,
    value: playerName,
    className: "h-100 flex flex-grow bg-transparent py-4  outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo",
    placeholder: "Type your name here",
    onChange: handleNameInput
  }), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "text-lime-500 font-virgil py-4 xl:text-xl lg:text-lg md:text-md text-sm"
  }, "and"), /* @__PURE__ */ import_react4.default.createElement("input", {
    ref: joinIdRef,
    value: joinId,
    className: "h-100 flex flex-grow bg-transparent py-4 outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo",
    placeholder: "Enter the game ID here",
    onChange: handleRoomInput
  }), /* @__PURE__ */ import_react4.default.createElement(Button_default, {
    onClick: handleJoin
  }, "Play")), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "sm:mr-0 xs:mr-0 xl:mr-4 lg:mr-4 md:mr-4 sm:w-full xs:w-full text-center mt-4"
  }, /* @__PURE__ */ import_react4.default.createElement(Button_default, {
    onClick: handleCreateGame
  }, "Create your own game")))));
}

// route:/Users/papuq/Work/main-remix/app/routes/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default,
  loader: () => loader2
});
init_react();
var import_react11 = __toESM(require("react"));
var import_react_redux3 = require("react-redux");
var import_remix5 = __toESM(require_remix());

// app/components/Alert.tsx
init_react();
var import_clsx3 = __toESM(require("clsx"));
var import_react5 = __toESM(require("react"));
var Alert = ({ show, children, onCancel, onConfirm }) => {
  return show ? /* @__PURE__ */ import_react5.default.createElement("div", {
    className: (0, import_clsx3.default)("absolute z-40 w-screen h-screen top-0 left-0 backdrop-blur-md flex flex-col justify-center items-center")
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: (0, import_clsx3.default)("text-center text-2xl font-virgil", "w-[320px] h-[240px]", "bg-slate-600", "border-2 border-slate-900", "rounded-lg shadow-lg", "flex flex-col justify-center items-center")
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-grow p-10 "
  }, children), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex w-full flex-row border-t-2 justify-space-between items-center"
  }, /* @__PURE__ */ import_react5.default.createElement(Button_default, {
    className: "bg-slate-500 font-exo hover:bg-slate-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-sm",
    onClick: onCancel
  }, "Cancel"), /* @__PURE__ */ import_react5.default.createElement(Button_default, {
    className: "bg-lime-500 ml-auto font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-sm",
    onClick: onConfirm
  }, "Yes")))) : /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null);
};
var Alert_default = Alert;

// app/components/GameTable.tsx
init_react();
var import_clsx5 = __toESM(require("clsx"));
var import_react8 = __toESM(require("react"));

// app/components/Card.tsx
init_react();
var import_react6 = __toESM(require("react"));
var Card = ({ card, onClick, className, animate }) => {
  const cardRef = (0, import_react6.useRef)(null);
  const [img, setImg] = import_react6.default.useState();
  import_react6.default.useEffect(() => {
    preloadImage(card.image).then((image) => {
      setImg(image);
    });
  }, []);
  return /* @__PURE__ */ import_react6.default.createElement("img", {
    src: card.image,
    alt: card.code,
    onClick: () => onClick && onClick(card),
    className: className || "flex w-[5rem] flex-col justify-center items-center rounded-md cursor-pointer hover:z-10 hover:shadow-lg hover:shadow-slate-900",
    style: animate ? {
      backgroundPosition: "center",
      animationName: "bounceInRight",
      animationDelay: getRandomInt(300, 2e3) + "ms",
      animationDuration: "1s"
    } : {}
  });
};
var Card_default = Card;

// app/components/playerAvatar.tsx
init_react();
var import_clsx4 = __toESM(require("clsx"));
var import_react7 = __toESM(require("react"));
var PlayerAvatar = ({
  name = "",
  me,
  playTurn = false,
  color
}) => {
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "relative z-10 w-[128px] h-[128px] text-center flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    style: {
      borderColor: name && !me ? `${color}` : "inherit"
    },
    className: (0, import_clsx4.default)("absolute z-0 w-[128px] h-[128px] rounded-full", {
      "hover:animate-rubber border-8 border-sky-400 bg-sky-500": name && me,
      "hover:animate-rubber border-8 border-cyan-400 bg-cyan-500": name && !me,
      "border-8 border-dashed animate-spin-slow": !name || playTurn
    })
  }, " "), /* @__PURE__ */ import_react7.default.createElement("div", {
    style: {
      backgroundColor: name && !me ? `${color}cc` : "inherit"
    },
    className: (0, import_clsx4.default)("w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center font-virgil z-10 ow text-xl px-4", {
      "text-slate-100 animate-pulse bg-slate-700": !name || playTurn,
      "text-slate-900": name
    })
  }, /* @__PURE__ */ import_react7.default.createElement("p", null, name || "waiting player")));
};
var playerAvatar_default = PlayerAvatar;

// app/components/GameTable.tsx
var GameTable = ({
  players,
  me,
  ownerId,
  blur,
  cards,
  currentPlayer,
  cardOnTable = [],
  nextPlayer,
  onFold
}) => {
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: (0, import_clsx5.default)("absolute z-0 inset-0 w-screen h-screen flex flex-col justify-center items-center", {
      blur
    })
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "relative w-[95%] h-[70%] min-h-[320px] min-w-[640px] max-h-[480px] max-w-[1024px] bg-slate-700 rounded-[6rem] border-[1rem] table-shadow shadow-slate-100 border-slate-900 flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: (0, import_clsx5.default)("absolute  shadow-[0px_0px_10px_#000] w-[128px] h-[128px] border-[8px] rounded-full bg-slate-700 border-slate-900 flex flex-col justify-center items-center", "-bottom-[64px]")
  }, /* @__PURE__ */ import_react8.default.createElement(playerAvatar_default, {
    name: currentPlayer == null ? void 0 : currentPlayer.name,
    me: true,
    playTurn: nextPlayer !== void 0 && currentPlayer && currentPlayer.id === nextPlayer,
    color: "#29AEEF"
  })), players.filter((p) => p.id !== (currentPlayer == null ? void 0 : currentPlayer.id)).map((player, index) => /* @__PURE__ */ import_react8.default.createElement("div", {
    key: index,
    className: (0, import_clsx5.default)("absolute  shadow-[0px_0px_10px_#000] w-[128px] h-[128px] border-[8px] rounded-full bg-slate-700 border-slate-900 flex flex-col justify-center items-center", {
      "-left-[77px]": index === 0,
      "-right-[77px]": index === 1,
      "-top-[77px]": index === 2
    })
  }, /* @__PURE__ */ import_react8.default.createElement(playerAvatar_default, {
    name: player.name,
    me: false,
    color: player.colors,
    playTurn: player.id === nextPlayer
  }))), /* @__PURE__ */ import_react8.default.createElement("div", {
    id: "player-cards",
    className: (0, import_clsx5.default)("absolute bottom-0 card-deck flex w-full justify-center items-center flex-row", `-space-x-[3rem]`)
  }, cards.map((card, i) => /* @__PURE__ */ import_react8.default.createElement(Card_default, {
    card,
    key: card.code,
    onClick: onFold
  }))), /* @__PURE__ */ import_react8.default.createElement("div", {
    id: "table-cards",
    className: (0, import_clsx5.default)("flex w-full justify-center items-center flex-row", `-space-x-[3rem]`)
  }, cardOnTable.map((card, i) => /* @__PURE__ */ import_react8.default.createElement(Card_default, {
    card,
    key: card.code
  })))));
};
var GameTable_default = GameTable;

// app/components/Toolbar.tsx
init_react();
var import_clsx6 = __toESM(require("clsx"));
var import_react9 = __toESM(require("react"));
var Toolbar = ({ blur, onLeave, onPass, canPass }) => {
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: (0, import_clsx6.default)("absolute bottom-0", "flex flex-row align-center", "justify-center", "w-screen", "bg-slate-600", "border-2 border-slate-900", { blur })
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-row flex-grow justify-start items-center"
  }, " "), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-row flex-grow justify-center items-center"
  }, /* @__PURE__ */ import_react9.default.createElement(Button_default, {
    disabled: !canPass,
    className: "bg-orange-500 font-exo hover:bg-orange-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-md",
    onClick: onPass
  }, "Pass")), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-row flex-grow justify-end items-center"
  }, /* @__PURE__ */ import_react9.default.createElement(Button_default, {
    className: "bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-md",
    onClick: onLeave
  }, "Leave")));
};
var Toolbar_default = Toolbar;

// app/components/WaitingRoom.tsx
init_react();
var import_react10 = __toESM(require("react"));
var WaitingRoom = ({
  ownerId = "",
  players = [],
  abortText = "Abort!",
  startText = "Launch the game!",
  maxPlayers = 4,
  onAbort,
  onStart,
  showStart
}) => {
  const [disableStart, setDisableStart] = import_react10.default.useState(false);
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-col z-10 w-screen h-screen backdrop-blur-2xl justify-center items-center"
  }, /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "text-center text-2xl font-exo mb-8"
  }, players.length === maxPlayers ? `Starting the game, please standby!...` : `Waiting another player...`), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-row space-x-4 items-center"
  }, players.map((player) => /* @__PURE__ */ import_react10.default.createElement(playerAvatar_default, {
    me: player.id === ownerId,
    key: player.id,
    name: player.name
  })), Array(maxPlayers - players.length).fill(0).map((i) => /* @__PURE__ */ import_react10.default.createElement(playerAvatar_default, {
    key: i
  }))), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-row space-x-4 items-center mt-8"
  }, /* @__PURE__ */ import_react10.default.createElement(Button_default, {
    className: "bg-slate-500 font-exo hover:bg-slate-600 hover:text-slate-100 text-slate-900 font-bold py-4 px-8",
    onClick: onAbort
  }, abortText), showStart && /* @__PURE__ */ import_react10.default.createElement(Button_default, {
    disabled: disableStart,
    onClick: (e) => {
      onStart && onStart();
      setDisableStart(true);
    }
  }, startText)));
};
var WaitingRoom_default = WaitingRoom;

// route:/Users/papuq/Work/main-remix/app/routes/$id.tsx
var loader2 = async ({ params }) => {
  const game = games.find((game2) => game2.getId() === params.id);
  if (!game) {
    return (0, import_remix5.json)(__spreadProps(__spreadValues({}, params), { players: [], status: "UNDEFINED" /* UNDEFINED */ }));
  }
  return (0, import_remix5.json)(__spreadValues(__spreadProps(__spreadValues({}, game.getData()), {
    players: game.getPlayers().map((p) => p.getId()),
    status: game.getStatus()
  }), params));
};
var GameScreen = () => {
  const data = (0, import_remix5.useLoaderData)();
  const socket = (0, import_react_redux3.useSelector)((state) => state.socket.client);
  const dataState = (0, import_react_redux3.useSelector)((state) => state.game.data);
  const currentPlayer = (0, import_react_redux3.useSelector)((state) => state.game.currentPlayer);
  const cards = (0, import_react_redux3.useSelector)((state) => state.game.cards);
  const players = (0, import_react_redux3.useSelector)((state) => state.game.players);
  const gameStatus = (0, import_react_redux3.useSelector)((state) => state.game.status);
  const cardOnTable = (0, import_react_redux3.useSelector)((state) => state.game.tableCard);
  const [showAlert, setShowAlert] = import_react11.default.useState(false);
  const dispatch = (0, import_react_redux3.useDispatch)();
  const handleLeave = () => {
    dispatch(gameActions.leave());
  };
  const handleFold = (card) => {
    console.log("Fold", card);
    dispatch(gameActions.foldCard(card));
  };
  import_react11.default.useEffect(() => {
    if (data.status === "UNDEFINED" /* UNDEFINED */) {
      dispatch(gameActions.toggleNotFound());
      window.location.href = "/";
    }
  }, [data]);
  import_react11.default.useEffect(() => {
    if (data && data.id && socket) {
      let playerName = "Anonymous";
      const localData = localStorage.getItem(data.id);
      if (localData) {
        const localDataObj = JSON.parse(localData);
        playerName = localDataObj.playerData.name || "Anonymous";
        if (data.players.includes(localDataObj.playerData.id)) {
          dispatch(gameActions.join(data.id, playerName));
        } else {
          dispatch(gameActions.start());
        }
      } else {
        if (data.status === "WAITING" /* WAITING */ && data.playerCount && data.playerCount < 4) {
          const newPlayerName = prompt("Enter your name", "Anonymous");
          if (newPlayerName) {
            playerName = newPlayerName;
          }
          dispatch(gameActions.join(data.id, playerName));
        } else {
          window.location.href = "/";
        }
      }
    }
  }, [data, dispatch, socket]);
  return /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "w-screen h-screen flex flex-col justify-center items-center"
  }, gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */ && cards.length === 0 && /* @__PURE__ */ import_react11.default.createElement(WaitingRoom_default, {
    players,
    ownerId: dataState == null ? void 0 : dataState.gameData.owner,
    showStart: (dataState == null ? void 0 : dataState.gameData.owner) === (dataState == null ? void 0 : dataState.playerData.id),
    onAbort: () => dispatch(gameActions.leave()),
    onStart: () => dispatch(gameActions.start())
  }), /* @__PURE__ */ import_react11.default.createElement(GameTable_default, {
    players,
    cardOnTable,
    blur: gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */ && cards.length === 0,
    currentPlayer: dataState == null ? void 0 : dataState.playerData,
    ownerId: dataState == null ? void 0 : dataState.gameData.owner,
    nextPlayer: currentPlayer,
    cards,
    onFold: handleFold
  }), /* @__PURE__ */ import_react11.default.createElement(Toolbar_default, {
    blur: gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */ && cards.length === 0,
    canPass: (dataState == null ? void 0 : dataState.playerData.id) === currentPlayer,
    onLeave: () => setShowAlert(true),
    onPass: () => dispatch(gameActions.passToNextPlayer())
  }), /* @__PURE__ */ import_react11.default.createElement(Alert_default, {
    show: showAlert,
    onCancel: () => setShowAlert(false),
    onConfirm: handleLeave
  }, /* @__PURE__ */ import_react11.default.createElement("p", null, "Are you sure want to leave the game now?")));
};
var id_default = GameScreen;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "edf35476", "entry": { "module": "/build/entry.client-6IIXYFCD.js", "imports": ["/build/_shared/chunk-YSJTNW6O.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QU6CEP5K.js", "imports": ["/build/_shared/chunk-WOZQRYJK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$id": { "id": "routes/$id", "parentId": "root", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$id-IPR7SJAG.js", "imports": ["/build/_shared/chunk-B3TZW7DB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-U6ITBGJ6.js", "imports": ["/build/_shared/chunk-B3TZW7DB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-EDF35476.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$id": {
    id: "routes/$id",
    parentId: "root",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  }
};

// server.js
var import_express = require("@remix-run/express");
var import_compression = __toESM(require("compression"));
var import_express2 = __toESM(require("express"));
var import_http = __toESM(require("http"));
var import_morgan = __toESM(require("morgan"));
var import_socket2 = require("socket.io");

// app/controllers/connection.ts
init_react();

// app/controllers/client.ts
init_react();

// app/controllers/player.ts
init_react();
var PlayerController = class {
  constructor(data) {
    this.data = data;
    this.data.colors = randomColor();
  }
  getSocketId() {
    return this.data.socketId;
  }
  setName(name) {
    this.data.name = name;
  }
  setSocketId(socketId) {
    this.data.socketId = socketId;
  }
  getId() {
    return this.data.id;
  }
  getData(opts) {
    return (opts == null ? void 0 : opts.includeCards) ? this.data : __spreadProps(__spreadValues({}, this.data), { cards: [] });
  }
  setCards(cards) {
    this.data.cards = cards;
  }
  removeCard(card) {
    if (!this.data.cards)
      return;
    printLog("info", "PLAYER", "Removing card: ", card);
    const newCards = this.data.cards.filter((c) => c.code !== card.code);
    this.data.cards = newCards;
    printLog("info", "PLAYER", "card removed. current cards: ", this.data.cards);
  }
  getCards() {
    return this.data.cards || [];
  }
  leave() {
    this.data = {
      id: "",
      name: "",
      socketId: "",
      cards: []
    };
  }
};

// app/controllers/client.ts
var import_uuid2 = require("uuid");
var ClientController = class {
  constructor(socket, io2) {
    this.socket = socket;
    this.server = io2;
    socket.on("disconnect", this.disconnect.bind(this));
    socket.on("create", this.create.bind(this));
    socket.on("join", this.join.bind(this));
    socket.on("leave", this.leave.bind(this));
    socket.on("start", this.start.bind(this));
    socket.on("foldCard", this.foldCard.bind(this));
    socket.on("passToNextPlayer", this.passToNextPlayer.bind(this));
  }
  disconnect() {
    this.socket.disconnect();
    printLog("warning", "SOCKET", "disconnected: ", this.socket.id);
    this.socket.disconnect();
    const clientIndex = clients.indexOf(this);
    printLog("warning", "CLIENT", "Removing CLIENT#", clientIndex);
    clients.splice(clientIndex, 1);
  }
  create(data) {
    const ownerData = {
      id: (0, import_uuid2.v4)(),
      name: data.playerName || "Owner",
      socketId: this.socket.id,
      cards: []
    };
    const newGameData = __spreadProps(__spreadValues({}, data.gameData), { owner: ownerData.id });
    const owner = new PlayerController(ownerData);
    const newGame = new GameController(newGameData);
    newGame.addPlayer(owner);
    games.push(newGame);
    const joinData = {
      gameData: newGame.getData(),
      playerData: ownerData
    };
    printLog("info", "CLIENT", "Joining game room: ", newGame.getId());
    this.socket.join(newGame.getId());
    this.socket.emit("created", joinData);
    printLog("info", "CLIENT", "New game created: ", newGame.getId());
  }
  join(data) {
    let newPlayer = new PlayerController({
      id: data.playerData.id || (0, import_uuid2.v4)(),
      name: data.playerData.name || generateName(1),
      socketId: this.socket.id,
      cards: data.playerData.cards || []
    });
    let game = games.find((game2) => game2.getId() === data.gameData.id);
    if (!game) {
      printLog("warning", "CLIENT", "Game not found ", data.gameData.id);
      this.socket.emit("notFound", data.gameData.id);
      return;
    }
    if (game.isStarted() && game.getPlayerById(data.playerData.id) === void 0) {
      printLog("warning", "CLIENT", "Game already started ", data.gameData.id);
      this.socket.emit("notFound", data.gameData.id);
      return;
    }
    const existingPlayer = game.getPlayerById(newPlayer.getData().id);
    if (!existingPlayer) {
      if (game.getTotalPlayer() < 4) {
        game.addPlayer(newPlayer);
      } else {
        this.socket.emit("error", {
          message: "Game is full"
        });
      }
    } else {
      existingPlayer.setSocketId(newPlayer.getData().socketId);
      existingPlayer.setName(newPlayer.getData().name);
      newPlayer.setCards(existingPlayer.getCards());
    }
    printLog("info", "CLIENT", "Joining game room: ", game.getId());
    this.socket.join(game.getId());
    const joinData = {
      gameData: game.getData(),
      playerData: newPlayer.getData()
    };
    this.socket.emit("joined", joinData);
    const players = game.getPlayers();
    const playerData = players.map((player) => player.getData({ includeCards: false }));
    this.server.in(game.getId()).emit("players", playerData);
  }
  leave(data) {
    printLog("warning", "CLIENT", "Leaving game: ", data.gameData.id);
    const game = games.find((game2) => game2.getId() === data.gameData.id);
    if (game) {
      const player = game.getPlayerById(data.playerData.id);
      printLog("warning", "PLAYER", "Leaving game: ", data.playerData.id);
      if (player) {
        this.server.in(game.getId()).emit("left", player.getData({ includeCards: false }));
        game.removePlayer(player);
      }
    }
  }
  async start(data) {
    printLog("info", "CLIENT", "Starting game: ", data);
    const game = games.find((game2) => game2.getId() === data.gameData.id);
    if (game) {
      await game.start();
      const players = game.getPlayers();
      for (const player of players) {
        this.server.in(player.getSocketId()).emit("cards", player.getCards());
      }
      const tableCard = game.getCardOnTable();
      this.server.in(game.getId()).emit("tableCard", tableCard);
      this.server.in(game.getId()).emit("started", game.getData());
    }
  }
  foldCard(data) {
    printLog("info", "CLIENT", "Folding card: ", data);
    const game = games.find((game2) => game2.getId() === data.gameId);
    if (!game) {
      printLog("warning", "CLIENT", "Folding card failed. Game not found ", this.socket.id);
      return;
    }
    const player = game.getPlayerById(data.playerId);
    if (player) {
      const cardOnTable = game.getCardOnTable();
      if (!cardOnTable)
        return;
      const lastCardOnTable = cardOnTable[cardOnTable.length - 1];
      if (lastCardOnTable.value < data.card.value && lastCardOnTable.suit === data.card.suit || game.isFreeFold()) {
        game.setFreeFold(false);
        game.pushCardOnTable(data.card);
        player.removeCard(data.card);
        const currentCard = player.getCards();
        this.socket.emit("cards", currentCard);
        printLog("info", "CLIENT", "current player card: ", currentCard);
        const nextPlayer = game.getNextPlayer();
        const gameData = game.getData();
        printLog("info", "CLIENT", "next player: ", nextPlayer.getId(), gameData.nextPlayer);
        this.server.in(game.getId()).emit("nextPlayer", nextPlayer.getId());
        const tableCard = game.getCardOnTable();
        this.server.in(game.getId()).emit("tableCard", tableCard);
      } else {
        printLog("warning", "CLIENT", "Folding card failed. folded card is lower than currently on table ", this.socket.id);
      }
    } else {
      printLog("warning", "CLIENT", "Folding card failed. Player not found ", data.playerId);
    }
  }
  passToNextPlayer(params) {
    const game = games.find((game2) => game2.getId() === params.gameId);
    if (!game) {
      printLog("warning", "CLIENT", "Passing to next player failed. Game not found ", this.socket.id);
      return;
    }
    game.setFreeFold(true);
    const nextPlayer = game.getNextPlayer();
    game.setNextPlayer(nextPlayer.getId());
    this.server.in(game.getId()).emit("nextPlayer", nextPlayer.getId());
    const tableCard = game.getCardOnTable();
    this.server.in(game.getId()).emit("tableCard", tableCard);
  }
};

// app/controllers/connection.ts
var clients = [];
var ConnectionController = class {
  constructor(io2) {
    this.io = io2;
  }
  start() {
    this.io.on("connection", (socket) => {
      printLog("default", "SOCKET", "connected: ", socket.id);
      const client = new ClientController(socket, this.io);
      clients.push(client);
    });
  }
};
var connection_default = ConnectionController;

// server.js
var app = (0, import_express2.default)();
var server = import_http.default.createServer(app);
var io = new import_socket2.Server(server, {
  cors: {
    origin: "*"
  },
  transports: ["websocket"],
  allowUpgrades: false
});
var socketConn = new connection_default(io);
socketConn.start();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express2.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express2.default.static("public", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL3N0b3Jlcy9pbmRleC50cyIsICIuLi9hcHAvc3RvcmVzL2dhbWVTdGF0ZS50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvZ2FtZS50cyIsICIuLi9hcHAvdXRpbHMvaGVscGVyLnRzIiwgIi4uL2FwcC9jb250cm9sbGVycy9kZWNrLnRzIiwgIi4uL2FwcC9zdG9yZXMvc29ja2V0U3RhdGUudHMiLCAiLi4vYXBwL3N0b3Jlcy9jb25maWcudHMiLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CdXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1J1YmJlclRleHQudHN4IiwgInJvdXRlOi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3JvdXRlcy8kaWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0FsZXJ0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9HYW1lVGFibGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NhcmQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3BsYXllckF2YXRhci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVG9vbGJhci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2FpdGluZ1Jvb20udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0IiwgIi4uL2FwcC9jb250cm9sbGVycy9jb25uZWN0aW9uLnRzIiwgIi4uL2FwcC9jb250cm9sbGVycy9jbGllbnQudHMiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL3BsYXllci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tIFwic29ja2V0LmlvXCI7XG5pbXBvcnQgQ29ubmVjdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vYXBwL2NvbnRyb2xsZXJzL2Nvbm5lY3Rpb25cIjtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuLy8gY3JlYXRlIGN1c3RvbSBleHByZXNzIHNlcnZlclxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuLy9jcmVhdGUgc2VydmVyIHNvY2tldCBpbyBhbmQgYXR0YWNoIHRvIGN1c3RvbSBleHByZXNzIHNlcnZlclxuY29uc3QgaW8gPSBuZXcgU2VydmVyKHNlcnZlciwge1xuICBjb3JzOiB7XG4gICAgb3JpZ2luOiBcIipcIixcbiAgfSxcbiAgdHJhbnNwb3J0czogW1wid2Vic29ja2V0XCJdLFxuICBhbGxvd1VwZ3JhZGVzOiBmYWxzZSxcbn0pO1xuXG4vLyBhdHRhY2ggc29ja2V0IGNvbm5lY3Rpb24gY29udHJvbGxlclxuY29uc3Qgc29ja2V0Q29ubiA9IG5ldyBDb25uZWN0aW9uQ29udHJvbGxlcihpbyk7XG5zb2NrZXRDb25uLnN0YXJ0KCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWNcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5cbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XG5cbmFwcC5hbGwoXG4gIFwiKlwiLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuc2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvcGFwdXEvV29yay9tYWluLXJlbWl4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzLyRpZC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzLyRpZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvJGlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIjppZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBpbyBhcyBzb2NrZXRDbGllbnQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IGFuaW1hdGlvblN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL2FuaW1hdGlvbi5jc3NcIjtcbmltcG9ydCBhcHBTdHlsZXMgZnJvbSBcIn4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5pbXBvcnQgdGFpbHdpbmRTdHlsZXMgZnJvbSBcIn4vYXNzZXRzL3N0eWxlcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCBpbml0aWFsQXBwU3RhdGUgfSBmcm9tIFwiLi9zdG9yZXNcIjtcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwifi9zdG9yZXMvY29uZmlnXCI7XG5pbXBvcnQgeyBzb2NrZXRBY3Rpb25zIH0gZnJvbSBcIn4vc3RvcmVzL3NvY2tldFN0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgYXM6IFwiZm9udFwiLFxuICAgICAgaHJlZjogXCIvZm9udHMvVmlyZ2lsM1lPRkYud29mZjJcIixcbiAgICAgIHR5cGU6IFwiZm9udC93b2ZmMlwiLFxuICAgICAgY3Jvc3NPcmlnaW46IFwiYW5vbnltb3VzXCIsXG4gICAgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRhaWx3aW5kU3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGFuaW1hdGlvblN0eWxlcyB9LFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgdGl0bGU6IFwiTWFpbiBSZW1peFwiLFxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXG59KTtcblxuY29uc3QgcGVyc2lzdGVkU3RhdGU6IEFwcFN0YXRlID0ge1xuICAuLi5pbml0aWFsQXBwU3RhdGUsXG59O1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShwZXJzaXN0ZWRTdGF0ZSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBzb2NrZXRBY3Rpb25zLmluaXQoXG4gICAgICAgIHNvY2tldENsaWVudCh7XG4gICAgICAgICAgdHJhbnNwb3J0czogW1wid2Vic29ja2V0XCJdLFxuICAgICAgICAgIHVwZ3JhZGU6IGZhbHNlLFxuICAgICAgICB9KSxcbiAgICAgICAgKGRhdGEpID0+IHt9XG4gICAgICApXG4gICAgKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxodG1sXG4gICAgICBsYW5nPVwiZW5cIlxuICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHRleHQtc2xhdGUtMTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCJcbiAgICA+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbi8vIGxvYWRlciBmdW5jdGlvbiB0byBnZXQgZW52aXJvbm1lbnQgZnJvbSBzZXJ2ZXJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ganNvbih7IGVudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSk7XG59O1xuXG4vLyBkZWNsYXJlIHdpbmRvdyBvYmplY3QgYXMgYW55IHRvIGF2b2lkIHRzIGVycm9yXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBXaXRoUmVkdXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPHsgZW52OiBzdHJpbmcgfT4oKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzdG9yZSBlbnYgaW4gZ2xvYmFsIHdpbmRvdyBvYmplY3RcbiAgICB3aW5kb3cuRU5WID0gZGF0YS5lbnY7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IEdhbWVSZWR1Y2VyLCBHYW1lU3RhdGUsIGluaXRpYWxHYW1lU3RhdGUgfSBmcm9tIFwiLi9nYW1lU3RhdGVcIjtcbmltcG9ydCB7IGluaXRpYWxTb2NrZXRTdGF0ZSwgU29ja2V0UmVkdWNlciwgU29ja2V0U3RhdGUgfSBmcm9tIFwiLi9zb2NrZXRTdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgc29ja2V0OiBTb2NrZXRTdGF0ZTtcbiAgZ2FtZTogR2FtZVN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbEFwcFN0YXRlID0ge1xuICBzb2NrZXQ6IGluaXRpYWxTb2NrZXRTdGF0ZSxcbiAgZ2FtZTogaW5pdGlhbEdhbWVTdGF0ZSxcbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcbiAgc29ja2V0OiBTb2NrZXRSZWR1Y2VyLFxuICBnYW1lOiBHYW1lUmVkdWNlcixcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xuICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBTdGF0ZSk6IHZvaWQ7XG59XG4iLCAiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgSm9pbkRhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9jbGllbnRcIjtcbmltcG9ydCB7IENhcmQsIEdhbWVEYXRhLCBHYW1lU3RhdHVzIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYW1lLCBwcmVsb2FkSW1hZ2UgfSBmcm9tIFwifi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB7IFRodW5rQWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNvY2tldEFjdGlvbnMsIFNvY2tldEFjdGlvbnMgfSBmcm9tIFwiLi9zb2NrZXRTdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTdGF0ZSB7XG4gIHN0YXR1czogR2FtZVN0YXR1cztcbiAgZGF0YTogSm9pbkRhdGEgfCBudWxsO1xuICBub3RGb3VuZDogYm9vbGVhbjtcbiAgcGxheWVyczogUGxheWVyRGF0YVtdO1xuICBjYXJkczogQ2FyZFtdO1xuICB0YWJsZUNhcmQ6IENhcmRbXTtcbiAgY3VycmVudFBsYXllcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbEdhbWVTdGF0ZTogR2FtZVN0YXRlID0ge1xuICBkYXRhOiBudWxsLFxuICBub3RGb3VuZDogZmFsc2UsXG4gIHBsYXllcnM6IFtdLFxuICBjYXJkczogW10sXG4gIHN0YXR1czogR2FtZVN0YXR1cy5XQUlUSU5HLFxuICB0YWJsZUNhcmQ6IFtdLFxuICBjdXJyZW50UGxheWVyOiBcIlwiLFxufTtcblxuaW50ZXJmYWNlIEdhbWVBY3Rpb25UeXBlcyB7XG4gIHJlYWRvbmx5IFNFVF9HQU1FX0RBVEE6IFwiU0VUX0dBTUVfREFUQVwiO1xuICByZWFkb25seSBTRVRfR0FNRV9OT1RfRk9VTkQ6IFwiU0VUX0dBTUVfTk9UX0ZPVU5EXCI7XG4gIHJlYWRvbmx5IFNFVF9QTEFZRVJTOiBcIlNFVF9QTEFZRVJTXCI7XG4gIHJlYWRvbmx5IFNFVF9HQU1FX1NUQVRVUzogXCJTRVRfR0FNRV9TVEFUVVNcIjtcbiAgcmVhZG9ubHkgU0VUX0NBUkRTOiBcIlNFVF9DQVJEU1wiO1xuICByZWFkb25seSBTRVRfVEFCTEVfQ0FSRDogXCJTRVRfVEFCTEVfQ0FSRFwiO1xuICByZWFkb25seSBTRVRfQ1VSUkVOVF9QTEFZRVI6IFwiU0VUX0NVUlJFTlRfUExBWUVSXCI7XG59XG5cbmNvbnN0IEdhbWVBY3Rpb25zVHlwZXM6IEdhbWVBY3Rpb25UeXBlcyA9IHtcbiAgU0VUX0dBTUVfREFUQTogXCJTRVRfR0FNRV9EQVRBXCIsXG4gIFNFVF9HQU1FX05PVF9GT1VORDogXCJTRVRfR0FNRV9OT1RfRk9VTkRcIixcbiAgU0VUX1BMQVlFUlM6IFwiU0VUX1BMQVlFUlNcIixcbiAgU0VUX0dBTUVfU1RBVFVTOiBcIlNFVF9HQU1FX1NUQVRVU1wiLFxuICBTRVRfQ0FSRFM6IFwiU0VUX0NBUkRTXCIsXG4gIFNFVF9UQUJMRV9DQVJEOiBcIlNFVF9UQUJMRV9DQVJEXCIsXG4gIFNFVF9DVVJSRU5UX1BMQVlFUjogXCJTRVRfQ1VSUkVOVF9QTEFZRVJcIixcbn07XG5cbmludGVyZmFjZSBTZXRHYW1lRGF0YSB7XG4gIHR5cGU6IFwiU0VUX0dBTUVfREFUQVwiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5kYXRhO1xufVxuaW50ZXJmYWNlIFNldEN1cnJlbnRQbGF5ZXIge1xuICB0eXBlOiBcIlNFVF9DVVJSRU5UX1BMQVlFUlwiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5jdXJyZW50UGxheWVyO1xufVxuaW50ZXJmYWNlIFNldFRhYmxlQ2FyZCB7XG4gIHR5cGU6IFwiU0VUX1RBQkxFX0NBUkRcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxHYW1lU3RhdGUudGFibGVDYXJkO1xufVxuaW50ZXJmYWNlIFNldEdhbWVDYXJkIHtcbiAgdHlwZTogXCJTRVRfQ0FSRFNcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxHYW1lU3RhdGUuY2FyZHM7XG59XG5pbnRlcmZhY2UgU2V0R2FtZVN0YXR1cyB7XG4gIHR5cGU6IFwiU0VUX0dBTUVfU1RBVFVTXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLnN0YXR1cztcbn1cbmludGVyZmFjZSBTZXRQbGF5ZXJzIHtcbiAgdHlwZTogXCJTRVRfUExBWUVSU1wiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5wbGF5ZXJzO1xufVxuaW50ZXJmYWNlIFNldEdhbWVOb3RGb3VuZCB7XG4gIHR5cGU6IFwiU0VUX0dBTUVfTk9UX0ZPVU5EXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLm5vdEZvdW5kO1xufVxuXG5leHBvcnQgdHlwZSBHYW1lQWN0aW9ucyA9XG4gIHwgU2V0R2FtZURhdGFcbiAgfCBTZXRHYW1lTm90Rm91bmRcbiAgfCBTZXRQbGF5ZXJzXG4gIHwgU2V0R2FtZUNhcmRcbiAgfCBTZXRDdXJyZW50UGxheWVyXG4gIHwgU2V0VGFibGVDYXJkXG4gIHwgU2V0R2FtZVN0YXR1cztcblxuZXhwb3J0IGNvbnN0IGdhbWVBY3Rpb25zID0ge1xuICAvL2dhbWUgYWN0aW9uIHRvIHNldCBjdXJyZW50IHBsYXllclxuICBzZXRDdXJyZW50UGxheWVyOiAoXG4gICAgcGxheWVySWQ6IHN0cmluZ1xuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9DVVJSRU5UX1BMQVlFUixcbiAgICAgICAgcGF5bG9hZDogcGxheWVySWQsXG4gICAgICB9KTtcbiAgICAgIC8vIHVwZGF0ZSBjdXJyZW50IG5leHRQbGF5ZXIgaW4gZ2FtZURhdGFcbiAgICAgIGNvbnN0IGdhbWVEYXRhID0gZ2V0U3RhdGUoKS5nYW1lLmRhdGE7XG4gICAgICBpZiAoZ2FtZURhdGEpIHtcbiAgICAgICAgZ2FtZURhdGEuZ2FtZURhdGEubmV4dFBsYXllciA9IHBsYXllcklkO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9EQVRBLFxuICAgICAgICAgIHBheWxvYWQ6IGdhbWVEYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIC8vIGdhbWUgYWN0aW9uIHRvIHNldCBjYXJkIG9uIHRhYmxlXG4gIHNldFRhYmxlQ2FyZDogKFxuICAgIGNhcmRzOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS50YWJsZUNhcmRcbiAgKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfVEFCTEVfQ0FSRCxcbiAgICAgICAgcGF5bG9hZDogY2FyZHMsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuICBwYXNzVG9OZXh0UGxheWVyOiAoKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG4gICAgICBzb2NrZXQuZW1pdChcInBhc3NUb05leHRQbGF5ZXJcIiwge1xuICAgICAgICBnYW1lSWQ6IGdldFN0YXRlKCkuZ2FtZS5kYXRhPy5nYW1lRGF0YS5pZCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2FtZSBhY3Rpb24gdG8gZm9sZCBhIGNhcmQgdG8gdGFibGVcbiAgZm9sZENhcmQ6IChjYXJkOiBDYXJkKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGNvbnN0IGRhdGEgPSBnZXRTdGF0ZSgpLmdhbWUuZGF0YTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJUdXJuID0gZ2V0U3RhdGUoKS5nYW1lLmN1cnJlbnRQbGF5ZXI7XG4gICAgICBpZiAoIXNvY2tldCB8fCAhZGF0YSkgcmV0dXJuO1xuICAgICAgLy9pZiB0aGUgdHVybiBpcyBub3QgZm9yIGN1cnJlbnQgcGxheWVyIHRoZW4gcmV0dXJuXG4gICAgICBpZiAoY3VycmVudFBsYXllclR1cm4gIT09IGRhdGEucGxheWVyRGF0YS5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCB5b3VyIHR1cm5cIiwgY3VycmVudFBsYXllclR1cm4sIGRhdGEucGxheWVyRGF0YS5pZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc29ja2V0LmVtaXQoXCJmb2xkQ2FyZFwiLCB7XG4gICAgICAgIGNhcmQsXG4gICAgICAgIHBsYXllcklkOiBkYXRhLnBsYXllckRhdGEuaWQsXG4gICAgICAgIGdhbWVJZDogZGF0YS5nYW1lRGF0YS5pZCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2FtZSBhY3Rpb24gdG8gc2V0IHBsYXllcnMgaW4gdGhlIGdhbWVcbiAgc2V0UGxheWVyczogKFxuICAgIHBsYXllcnM6IFBsYXllckRhdGFbXVxuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9QTEFZRVJTLFxuICAgICAgICBwYXlsb2FkOiBwbGF5ZXJzLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyBnYW1lIGFjdGlvbiB0byBzZXQgdGhlIGdhbWUgY2FyZHNcbiAgc2V0Q2FyZHM6IChjYXJkczogQ2FyZFtdKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGZvciAoY29uc3QgY2FyZCBvZiBjYXJkcykge1xuICAgICAgICBwcmVsb2FkSW1hZ2UoY2FyZC5pbWFnZSk7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0NBUkRTLFxuICAgICAgICBwYXlsb2FkOiBjYXJkcyxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2FtZSBhY3Rpb24gdG8gYWRkIHBsYXllciB0byBjdXJyZW50IGdhbWUgcGxheWVycyBsaXN0XG4gIGFkZFBsYXllcjogKHBsYXllcjogUGxheWVyRGF0YSk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiBwbGF5ZXIgYWxyZWFkeSBleGlzdFxuICAgICAgY29uc3QgcGxheWVycyA9IGdldFN0YXRlKCkuZ2FtZS5wbGF5ZXJzO1xuICAgICAgY29uc3QgcGxheWVyRXhpc3QgPSBwbGF5ZXJzLmZpbmQoKHApID0+IHAuaWQgPT09IHBsYXllci5pZCk7XG4gICAgICBpZiAocGxheWVyRXhpc3QpIHJldHVybjtcblxuICAgICAgLy8gYWRkIHBsYXllciB0byB0aGUgcGxheWVyIGxpc3RcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfUExBWUVSUyxcbiAgICAgICAgcGF5bG9hZDogWy4uLnBsYXllcnMsIHBsYXllcl0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGFkZGVkXCIsIHBsYXllcik7XG4gICAgfTtcbiAgfSxcblxuICAvLyBnYW1lIGFjdGlvbiB0byByZW1vdmUgcGxheWVyIGZyb20gY3VycmVudCBnYW1lIHBsYXllcnMgbGlzdFxuICByZW1vdmVQbGF5ZXI6IChcbiAgICBwbGF5ZXJJZDogc3RyaW5nXG4gICk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiBwbGF5ZXIgYWxyZWFkeSBleGlzdFxuICAgICAgY29uc3QgcGxheWVycyA9IGdldFN0YXRlKCkuZ2FtZS5wbGF5ZXJzO1xuICAgICAgY29uc3QgcGxheWVyRXhpc3QgPSBwbGF5ZXJzLmZpbmQoKHApID0+IHAuaWQgPT09IHBsYXllcklkKTtcbiAgICAgIGlmICghcGxheWVyRXhpc3QpIHJldHVybjtcblxuICAgICAgLy8gcmVtb3ZlIHBsYXllciBmcm9tIHRoZSBwbGF5ZXIgbGlzdFxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9QTEFZRVJTLFxuICAgICAgICBwYXlsb2FkOiBwbGF5ZXJzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gcGxheWVySWQpLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyByZWR1eCBhY3Rpb24gdG8gc2V0IGdhbWUgbm90IGZvdW5kIHN0YXRlXG4gIHNldEdhbWVOb3RGb3VuZDogKFxuICAgIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLm5vdEZvdW5kXG4gICk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9OT1RfRk9VTkQsXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBzZXQgZ2FtZSBkYXRhXG4gIHNldEdhbWVEYXRhOiAoZGF0YTogSm9pbkRhdGEpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhLmdhbWVEYXRhLmlkLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIGNyZWF0ZSB0aGUgZ2FtZVxuICBjcmVhdGU6IChwbGF5ZXJOYW1lPzogc3RyaW5nKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG4gICAgICBjb25zdCBnYW1lRGF0YTogR2FtZURhdGEgPSB7XG4gICAgICAgIGlkOiBnZW5lcmF0ZU5hbWUoKSxcbiAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgIG93bmVyOiBcIlwiLFxuICAgICAgICBuZXh0UGxheWVyOiBcIlwiLFxuICAgICAgfTtcbiAgICAgIHNvY2tldC5lbWl0KFwiY3JlYXRlXCIsIHsgcGxheWVyTmFtZSwgZ2FtZURhdGEgfSk7XG5cbiAgICAgIC8vIHdoZW4gZ2FtZSBjcmVhdGVkLCBzdGFydCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gICAgICBzb2NrZXRBY3Rpb25zLnN0YXJ0TGluc3RlbmluZ0dhbWVFdmVudHMoKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIGpvaW4gdGhlIGdhbWVcbiAgam9pbjogKFxuICAgIGdhbWVJZDogc3RyaW5nLFxuICAgIHBsYXllck5hbWU6IHN0cmluZ1xuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc29ja2V0ID0gZ2V0U3RhdGUoKS5zb2NrZXQuY2xpZW50O1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcblxuICAgICAgLy8gd2hlbiBqb2luaW5nIGEgZ2FtZSwgc3RhcnQgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgc29ja2V0QWN0aW9ucy5zdGFydExpbnN0ZW5pbmdHYW1lRXZlbnRzKCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcblxuICAgICAgbGV0IGpvaW5EYXRhID0gZ2V0U3RhdGUoKS5nYW1lLmRhdGE7XG5cbiAgICAgIC8vIGxvYWQgam9pbiBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgY29uc3QgcGVyc2lzdGFudEdhbWVEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2FtZUlkKTtcblxuICAgICAgLy8gaWYgZ2FtZURhdGEgaXMgbnVsbCwgdGhlbiB0cnkgdG8gdXNlIHBlcnNpc3RhbnRHYW1lRGF0YVxuICAgICAgaWYgKCFqb2luRGF0YSkge1xuICAgICAgICBpZiAocGVyc2lzdGFudEdhbWVEYXRhKSB7XG4gICAgICAgICAgam9pbkRhdGEgPSBKU09OLnBhcnNlKHBlcnNpc3RhbnRHYW1lRGF0YSk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9EQVRBLFxuICAgICAgICAgICAgcGF5bG9hZDogam9pbkRhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgY3VycmVudCBnYW1lRGF0YSBpZCBpcyB0aGUgc2FtZSBhcyB0aGUgZ2FtZUlkXG4gICAgICBpZiAoam9pbkRhdGE/LmdhbWVEYXRhLmlkID09PSBnYW1lSWQpIHtcbiAgICAgICAgLy9qdXN0IHVwZGF0ZSB0aGUgc29ja2V0SWQgZm9yIHRoaXMgZ2FtZVxuICAgICAgICBqb2luRGF0YS5wbGF5ZXJEYXRhLnNvY2tldElkID0gc29ja2V0LmlkO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9EQVRBLFxuICAgICAgICAgIHBheWxvYWQ6IGpvaW5EYXRhLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBqb2luRGF0YSBzdGlsbCBudWxsLCB0aGVuIHVzZSBpbml0aWFsIGRhdGFcbiAgICAgIGlmICgham9pbkRhdGEpIHtcbiAgICAgICAgam9pbkRhdGEgPSB7XG4gICAgICAgICAgZ2FtZURhdGE6IHtcbiAgICAgICAgICAgIGlkOiBnYW1lSWQsXG4gICAgICAgICAgICBsZXZlbDogMSxcbiAgICAgICAgICAgIG93bmVyOiBcIlwiLFxuICAgICAgICAgICAgbmV4dFBsYXllcjogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsYXllckRhdGE6IHtcbiAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICAgICAgICAgIHNvY2tldElkOiBzb2NrZXQuaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBqb2luIGRhdGFcIiwgam9pbkRhdGEpO1xuICAgICAgLy8gc2VuZCB0aGUgam9pbiByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXJcbiAgICAgIHNvY2tldC5lbWl0KFwiam9pblwiLCBqb2luRGF0YSk7XG4gICAgfTtcbiAgfSxcblxuICAvL3JlZHV4IGFjdGlvbiB0byBsZWF2ZSB0aGUgZ2FtZVxuICBsZWF2ZTogKCk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBjb25zdCBnYW1lRGF0YSA9IGdldFN0YXRlKCkuZ2FtZS5kYXRhO1xuICAgICAgaWYgKCFzb2NrZXQgfHwgIWdhbWVEYXRhKSByZXR1cm47XG4gICAgICBzb2NrZXQuZW1pdChcImxlYXZlXCIsIGdhbWVEYXRhKTtcblxuICAgICAgLy8gd2hlbiBsZWF2aW5nIGEgZ2FtZSwgc3RvcCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gICAgICBzb2NrZXRBY3Rpb25zLnN0b3BMaXN0ZW5pbmdHYW1lRXZlbnRzKCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcblxuICAgICAgLy8gcmVtb3ZlIHRoZSBnYW1lIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShnYW1lRGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgICAvLyByZW1vdmUgZ2FtZSBkYXRhIGZyb20gcmVkdXggc3RvcmVcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9EQVRBLFxuICAgICAgICBwYXlsb2FkOiBudWxsLFxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IFwiL1wiO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIHRvZ2dsZSBpZiB0aGUgZ2FtZSBpcyBub3QgZm91bmRcbiAgdG9nZ2xlTm90Rm91bmQ6ICgpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBub3RGb3VuZCA9IGdldFN0YXRlKCkuZ2FtZS5ub3RGb3VuZDtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9OT1RfRk9VTkQsXG4gICAgICAgIHBheWxvYWQ6ICFub3RGb3VuZCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIHNldCBnYW1lIHN0YXR1c1xuICBzZXRHYW1lU3RhdHVzOiAoc3RhdHVzOiBHYW1lU3RhdHVzKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX1NUQVRVUyxcbiAgICAgICAgcGF5bG9hZDogc3RhdHVzLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyByZWR1eCBhY3Rpb24gdG8gc3RhcnQgdGhlIGdhbWVcbiAgc3RhcnQ6ICgpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc29ja2V0ID0gZ2V0U3RhdGUoKS5zb2NrZXQuY2xpZW50O1xuICAgICAgY29uc3QgZ2FtZURhdGEgPSBnZXRTdGF0ZSgpLmdhbWUuZGF0YTtcbiAgICAgIGlmICghc29ja2V0IHx8ICFnYW1lRGF0YSkgcmV0dXJuO1xuICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIHN0YXJ0IGdhbWUgcmVxdWVzdFwiKTtcbiAgICAgIHNvY2tldC5lbWl0KFwic3RhcnRcIiwgZ2FtZURhdGEpO1xuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgR2FtZVJlZHVjZXI6IFJlZHVjZXI8R2FtZVN0YXRlLCBHYW1lQWN0aW9ucz4gPSAoXG4gIHN0YXRlOiBHYW1lU3RhdGUgfCB1bmRlZmluZWQsXG4gIGFjdGlvbjogR2FtZUFjdGlvbnNcbik6IEdhbWVTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGluaXRpYWxHYW1lU3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9DVVJSRU5UX1BMQVlFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50UGxheWVyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG5cbiAgICBjYXNlIEdhbWVBY3Rpb25zVHlwZXMuU0VUX1RBQkxFX0NBUkQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGFibGVDYXJkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG5cbiAgICBjYXNlIEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX05PVF9GT1VORDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3RGb3VuZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgR2FtZUFjdGlvbnNUeXBlcy5TRVRfUExBWUVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwbGF5ZXJzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX1NUQVRVUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0dXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIEdhbWVBY3Rpb25zVHlwZXMuU0VUX0NBUkRTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcmRzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIiwgImltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gXCJ+L3V0aWxzL2hlbHBlclwiO1xuaW1wb3J0IHsgRGVjayB9IGZyb20gXCIuL2RlY2tcIjtcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuL3BsYXllclwiO1xuLyoqXG4gKiBUaGlzIGNvbnN0YW50IGlzIHVzZWQgdG8gc3RvcmUgdGhlIGdhbWUgY3JlYXRlZCBieSB0aGUgY2xpZW50XG4gKiBAY29uc3RhbnQge0dhbWVDb250cm9sbGVyW119XG4gKiBAZGVmYXVsdCBbXVxuICovXG5leHBvcnQgbGV0IGdhbWVzOiBHYW1lQ29udHJvbGxlcltdID0gW107XG5leHBvcnQgdHlwZSBHYW1lRXZlbnQgPSBcImtpY2tcIiB8IFwia2lja2VkXCI7XG5leHBvcnQgZW51bSBHYW1lU3RhdHVzIHtcbiAgV0FJVElORyA9IFwiV0FJVElOR1wiLFxuICBTVEFSVEVEID0gXCJTVEFSVEVEXCIsXG4gIEZJTklTSEVEID0gXCJGSU5JU0hFRFwiLFxuICBCVVNZID0gXCJCVVNZXCIsXG4gIFJFQURZID0gXCJSRUFEWVwiLFxuICBVTkRFRklORUQgPSBcIlVOREVGSU5FRFwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmQge1xuICBpbWFnZTogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBzdWl0OiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lRGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIG93bmVyOiBzdHJpbmc7XG4gIHBsYXllckNvdW50PzogbnVtYmVyO1xuICBjYXJkT25UYWJsZT86IENhcmRbXTsgLy8gc3RhY2sgb2YgY2FyZCBvbiB0YWJsZSwgdGhlIGxhc3QgY2FyZCBpcyB0aGUgdG9wIGNhcmRcbiAgbmV4dFBsYXllcjogc3RyaW5nOyAvLyBwbGF5ZXIgaWQgb2YgdGhlIG5leHQgdHVyblxufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBtYW5hZ2UgdGhlIGdhbWVcbiAqIEBjbGFzcyBHYW1lQ29udHJvbGxlclxuICogQHBhcmFtIHtHYW1lRGF0YX0gZGF0YSAtIFRoZSBnYW1lIGlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkYXRhOiBHYW1lRGF0YSA9IHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgbGV2ZWw6IDEsXG4gICAgb3duZXI6IFwiXCIsXG4gICAgcGxheWVyQ291bnQ6IDAsXG4gICAgY2FyZE9uVGFibGU6IFtdLFxuICAgIG5leHRQbGF5ZXI6IFwiXCIsXG4gIH07XG4gIHByaXZhdGUgc3RhdHVzOiBHYW1lU3RhdHVzID0gR2FtZVN0YXR1cy5XQUlUSU5HO1xuICBwcml2YXRlIHBsYXllcnM6IFBsYXllckNvbnRyb2xsZXJbXSA9IFtdO1xuICBwcml2YXRlIGRlY2s6IERlY2s7XG4gIHByaXZhdGUgZnJlZUZvbGQ6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKGRhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHBsYXllckNvdW50OiB0aGlzLnBsYXllcnMubGVuZ3RoLFxuICAgICAgbmV4dFBsYXllcjogZGF0YS5vd25lcixcbiAgICB9O1xuICAgIHRoaXMuZnJlZUZvbGQgPSBmYWxzZTtcbiAgICAvLyBpbml0IGRlY2tcbiAgICB0aGlzLmRlY2sgPSBuZXcgRGVjaygpO1xuICB9XG5cbiAgc2V0RnJlZUZvbGQoZnJlZUZvbGQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZyZWVGb2xkID0gZnJlZUZvbGQ7XG4gIH1cbiAgaXNGcmVlRm9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmVlRm9sZDtcbiAgfVxuXG4gIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllckNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgIHByaW50TG9nKFxuICAgICAgXCJpbmZvXCIsXG4gICAgICBcIkdBTUVcIixcbiAgICAgIFwiUGxheWVyIFwiLFxuICAgICAgcGxheWVyLmdldElkKCksXG4gICAgICBcIiBhZGRlZCB0byBnYW1lOiBcIixcbiAgICAgIHRoaXMuZGF0YS5pZFxuICAgICk7XG4gICAgdGhpcy5kYXRhLnBsYXllckNvdW50ID0gdGhpcy5wbGF5ZXJzLmxlbmd0aDtcbiAgICByZXR1cm4gcGxheWVyO1xuICB9XG4gIHNldElkKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGEuaWQgPSBpZDtcbiAgfVxuICBzZXRPd25lcihwbGF5ZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhLm93bmVyID0gcGxheWVySWQ7XG4gICAgdGhpcy5kYXRhLm5leHRQbGF5ZXIgPSBwbGF5ZXJJZDtcbiAgfVxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmlkO1xuICB9XG4gIGdldFBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycztcbiAgfVxuICBnZXRUb3RhbFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzLmxlbmd0aDtcbiAgfVxuICBnZXRQbGF5ZXJCeUlkKHBsYXllcklkOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoIXBsYXllcklkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLnBsYXllcnMuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuZ2V0SWQoKSA9PT0gcGxheWVySWQpO1xuICB9XG4gIGdldFBsYXllckJ5U29ja2V0SWQoc29ja2V0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnMuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuZ2V0U29ja2V0SWQoKSA9PT0gc29ja2V0SWQpO1xuICB9XG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICByZW1vdmVQbGF5ZXIocGxheWVyOiBQbGF5ZXJDb250cm9sbGVyKSB7XG4gICAgY29uc3QgcGxheWVySW5kZXggPSB0aGlzLnBsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgIHRoaXMucGxheWVycy5zcGxpY2UocGxheWVySW5kZXgsIDEpO1xuICAgIHByaW50TG9nKFxuICAgICAgXCJpbmZvXCIsXG4gICAgICBcIkdBTUVcIixcbiAgICAgIFwiUGxheWVyIFwiLFxuICAgICAgcGxheWVyLmdldElkKCksXG4gICAgICBcIiByZW1vdmVkIGZyb20gZ2FtZTogXCIsXG4gICAgICB0aGlzLmRhdGEuaWRcbiAgICApO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJDb3VudCA9IHRoaXMucGxheWVycy5sZW5ndGg7XG4gIH1cbiAgYXN5bmMgZHJhd0NhcmRUb1RhYmxlKCkge1xuICAgIGNvbnN0IGNhcmRzID0gYXdhaXQgdGhpcy5kZWNrLmRyYXcoKTtcbiAgICB0aGlzLmRhdGEuY2FyZE9uVGFibGUgPSBjYXJkcztcbiAgfVxuICBnZXRDYXJkT25UYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmNhcmRPblRhYmxlO1xuICB9XG4gIHB1c2hDYXJkT25UYWJsZShjYXJkOiBDYXJkKSB7XG4gICAgdGhpcy5kYXRhLmNhcmRPblRhYmxlPy5wdXNoKGNhcmQpO1xuICB9XG4gIGFzeW5jIHN0YXJ0KCkge1xuICAgIGF3YWl0IHRoaXMuZGVjay5zaHVmZmxlKCk7XG4gICAgY29uc3QgY2FyZFBlclBsYXllciA9IE1hdGguZmxvb3IoNTEgLyB0aGlzLnBsYXllcnMubGVuZ3RoKTtcbiAgICAvLyBkcmF3IGNhcmQgZm9yIGVhY2ggcGxheWVyIGFuZCBzZW5kIHRvIGNsaWVudFxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgY29uc3QgY2FyZHMgPSBhd2FpdCB0aGlzLmRlY2suZHJhdyhjYXJkUGVyUGxheWVyKTtcbiAgICAgIHBsYXllci5zZXRDYXJkcyhjYXJkcyk7XG4gICAgfVxuICAgIC8vIGRyYXcgb25lIGNhcmQgZm9yIHRoZSBnYW1lIHRhYmxlXG4gICAgYXdhaXQgdGhpcy5kcmF3Q2FyZFRvVGFibGUoKTtcblxuICAgIHByaW50TG9nKFwiaW5mb1wiLCBcIkdBTUVcIiwgXCJHYW1lIHN0YXJ0ZWQ6IFwiLCB0aGlzLmRhdGEuaWQpO1xuICAgIHRoaXMuc3RhdHVzID0gR2FtZVN0YXR1cy5TVEFSVEVEO1xuICB9XG4gIHNldE5leHRQbGF5ZXIocGxheWVySWQ6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YS5uZXh0UGxheWVyID0gcGxheWVySWQ7XG4gIH1cbiAgZ2V0TmV4dFBsYXllcigpIHtcbiAgICAvL2dldCBjdXJyZW50IHBsYXllciBpbmRleFxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJbmRleCA9IHRoaXMucGxheWVycy5maW5kSW5kZXgoXG4gICAgICAocGxheWVyKSA9PiBwbGF5ZXIuZ2V0SWQoKSA9PT0gdGhpcy5kYXRhLm5leHRQbGF5ZXJcbiAgICApO1xuICAgIC8vZ2V0IG5leHQgcGxheWVyIGluZGV4XG4gICAgbGV0IG5leHRQbGF5ZXJJbmRleCA9IGN1cnJlbnRQbGF5ZXJJbmRleCArIDE7XG4gICAgaWYgKG5leHRQbGF5ZXJJbmRleCA+IHRoaXMucGxheWVycy5sZW5ndGggLSAxKSB7XG4gICAgICBuZXh0UGxheWVySW5kZXggPSAwO1xuICAgIH1cbiAgICBjb25zdCBuZXh0UGxheWVyID0gdGhpcy5wbGF5ZXJzW25leHRQbGF5ZXJJbmRleF07XG4gICAgdGhpcy5kYXRhLm5leHRQbGF5ZXIgPSBuZXh0UGxheWVyLmdldElkKCk7XG4gICAgcmV0dXJuIG5leHRQbGF5ZXI7XG4gIH1cbiAgZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQbGF5ZXJCeUlkKHRoaXMuZGF0YS5uZXh0UGxheWVyKTtcbiAgfVxuICBzZXRTdGF0dXMoc3RhdHVzOiBHYW1lU3RhdHVzKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuICBpc1N0YXJ0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBHYW1lU3RhdHVzLlNUQVJURUQ7XG4gIH1cbiAgaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IEdhbWVTdGF0dXMuUkVBRFk7XG4gIH1cbiAgaXNGaW5pc2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IEdhbWVTdGF0dXMuRklOSVNIRUQ7XG4gIH1cbiAgaXNXYWl0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gR2FtZVN0YXR1cy5XQUlUSU5HO1xuICB9XG4gIGlzQnVzeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IEdhbWVTdGF0dXMuQlVTWTtcbiAgfVxufVxuIiwgImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgZW51bSBUZXJtaW5hbENvbG9yIHtcbiAgUmVzZXQgPSBcIlxceDFiWzBtXCIsXG4gIEJyaWdodCA9IFwiXFx4MWJbMW1cIixcbiAgRGltID0gXCJcXHgxYlsybVwiLFxuICBVbmRlcnNjb3JlID0gXCJcXHgxYls0bVwiLFxuICBCbGluayA9IFwiXFx4MWJbNW1cIixcbiAgUmV2ZXJzZSA9IFwiXFx4MWJbN21cIixcbiAgSGlkZGVuID0gXCJcXHgxYls4bVwiLFxuXG4gIEZnQmxhY2sgPSBcIlxceDFiWzMwbVwiLFxuICBGZ1JlZCA9IFwiXFx4MWJbMzFtXCIsXG4gIEZnR3JlZW4gPSBcIlxceDFiWzMybVwiLFxuICBGZ1llbGxvdyA9IFwiXFx4MWJbMzNtXCIsXG4gIEZnQmx1ZSA9IFwiXFx4MWJbMzRtXCIsXG4gIEZnTWFnZW50YSA9IFwiXFx4MWJbMzVtXCIsXG4gIEZnQ3lhbiA9IFwiXFx4MWJbMzZtXCIsXG4gIEZnV2hpdGUgPSBcIlxceDFiWzM3bVwiLFxuXG4gIEJnQmxhY2sgPSBcIlxceDFiWzQwbVwiLFxuICBCZ1JlZCA9IFwiXFx4MWJbNDFtXCIsXG4gIEJnR3JlZW4gPSBcIlxceDFiWzQybVwiLFxuICBCZ1llbGxvdyA9IFwiXFx4MWJbNDNtXCIsXG4gIEJnQmx1ZSA9IFwiXFx4MWJbNDRtXCIsXG4gIEJnTWFnZW50YSA9IFwiXFx4MWJbNDVtXCIsXG4gIEJnQ3lhbiA9IFwiXFx4MWJbNDZtXCIsXG4gIEJnV2hpdGUgPSBcIlxceDFiWzQ3bVwiLFxufVxuXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9ICgpID0+IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIik7XG5cbmV4cG9ydCBjb25zdCBwcmludExvZyA9IChcbiAgdHlwZTogXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJkZWZhdWx0XCIgPSBcImRlZmF1bHRcIixcbiAgbGFiZWw6IHN0cmluZyA9IFwiXCIsXG4gIC4uLm1lc3NhZ2U6IGFueVtdXG4pID0+IHtcbiAgLy8gc2V0IGRlZmF1bHQgZm9yZ3JvdW5kIGNvbG9yIHRvIEZnV2hpdGVcbiAgbGV0IGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1doaXRlO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiaW5mb1wiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnQmx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ3YXJuaW5nXCI6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdZZWxsb3c7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnR3JlZW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1JlZDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdXaGl0ZTtcbiAgfVxuICBjb25zb2xlLmxvZyhcbiAgICBgWyR7VGVybWluYWxDb2xvci5GZ01hZ2VudGF9JHtjdXJyZW50VGltZXN0YW1wKCkgKyBUZXJtaW5hbENvbG9yLlJlc2V0fV1bJHtcbiAgICAgIFRlcm1pbmFsQ29sb3IuRmdDeWFuXG4gICAgfSR7bGFiZWx9JHtUZXJtaW5hbENvbG9yLlJlc2V0fV1gLFxuICAgIGNvbG9yLFxuICAgIC4uLm1lc3NhZ2UsXG4gICAgVGVybWluYWxDb2xvci5SZXNldFxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcEZpcnN0KHRleHQ6IHN0cmluZykge1xuICByZXR1cm4gdGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRleHQuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDk5OSkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKHdvcmRMZW46IG51bWJlciA9IDIpIHtcbiAgY29uc3Qgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjb25zb25hbnRzID0gXCJiY2RmZ2hqa2xtbnBxcnN0dnd4eXpcIjtcbiAgY29uc3Qgdm93ZWxzID0gXCJhZWlvdVwiO1xuICBmb3IgKGxldCB3ID0gMDsgdyA8IHdvcmRMZW47IHcrKykge1xuICAgIGNvbnN0IHdvcmRDaGFyTGVuID0gZ2V0UmFuZG9tSW50KDMsIDEwKTtcbiAgICBjb25zdCBuYW1lID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkQ2hhckxlbjsgaSsrKSB7XG4gICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgbmFtZS5wdXNoKGNvbnNvbmFudHMuY2hhckF0KGdldFJhbmRvbUludCgwLCBjb25zb25hbnRzLmxlbmd0aCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUucHVzaCh2b3dlbHMuY2hhckF0KGdldFJhbmRvbUludCgwLCB2b3dlbHMubGVuZ3RoKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBvdXRwdXQucHVzaChjYXBGaXJzdChuYW1lLmpvaW4oXCJcIikpKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9ICgpID0+XG4gIGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWA7XG5cbi8qKlxuICogQG1ldGhvZCBwcmVsb2FkSW1hZ2UgLSBMb2FkcyBhbiBpbWFnZSBmcm9tIGFuIFVSTCB0byBwcmUtY2FjaGUgaW4gdGhlIGJyb3dzZXIgYW5kIHJldHVybnMgYSBwcm9taXNlXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1nUGF0aCAtIFRoZSBVUkwgdG8gdGhlIGltYWdlXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IHByZWxvYWRJbWFnZSA9IGFzeW5jIChcbiAgaW1nUGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICBjb25zdCBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdJbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmVzKG5ld0ltZyk7XG4gICAgfTtcbiAgICBuZXdJbWcuc3JjID0gaW1nUGF0aDtcbiAgfSk7XG4iLCAiaW1wb3J0IHsgcHJpbnRMb2cgfSBmcm9tIFwifi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0ZWRDYXJkVmFsdWU6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gIFwiMlwiOiAyLFxuICBcIjNcIjogMyxcbiAgXCI0XCI6IDQsXG4gIFwiNVwiOiA1LFxuICBcIjZcIjogNixcbiAgXCI3XCI6IDcsXG4gIFwiOFwiOiA4LFxuICBcIjlcIjogOSxcbiAgXCIxMFwiOiAxMCxcbiAgSkFDSzogMTEsXG4gIFFVRUVOOiAxMixcbiAgS0lORzogMTMsXG4gIEFDRTogMTQsXG59O1xuXG5leHBvcnQgY2xhc3MgRGVjayB7XG4gIHByaXZhdGUgQkFTRV9VUkwgPSBcImh0dHBzOi8vZGVja29mY2FyZHNhcGkuY29tL2FwaS9kZWNrXCI7XG4gIHByaXZhdGUgcmVtYWluaW5nOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGRlY2tJZDogc3RyaW5nID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBuZXcgZGVja1xuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt0aGlzLkJBU0VfVVJMfS9uZXcvc2h1ZmZsZS8/ZGVja19jb3VudD0xYCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdGhpcy5kZWNrSWQgPSBqc29uLmRlY2tfaWQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhIGNhcmQgZnJvbSB0aGUgZGVja1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVja0lkIGRlY2sgaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IGhvdyBtYW55IGNhcmQgdG8gZHJhd1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDYXJkPn0gY2FyZFxuICAgKi9cbiAgYXN5bmMgZHJhdyhjb3VudDogbnVtYmVyID0gMSk6IFByb21pc2U8Q2FyZFtdPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHt0aGlzLkJBU0VfVVJMfS8ke3RoaXMuZGVja0lkfS9kcmF3Lz9jb3VudD0ke2NvdW50fWBcbiAgICApO1xuICAgIC8vIGlmIHJlcyBzdGF0dXMgaXMgbm90IDIwMCwgcmV0dXJuIGVtcHR5IGFycmF5XG4gICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdGhpcy5yZW1haW5pbmcgPSBqc29uLnJlbWFpbmluZztcbiAgICBwcmludExvZyhcbiAgICAgIFwiaW5mb1wiLFxuICAgICAgXCJERUNLXCIsXG4gICAgICBgZHJhdyAke2NvdW50fSBjYXJkIGZyb20gZGVjayAke3RoaXMuZGVja0lkfSByZW1haW5pbmcgJHt0aGlzLnJlbWFpbmluZ31gXG4gICAgKTtcbiAgICByZXR1cm4ganNvbi5jYXJkcy5tYXAoKGM6IENhcmQpID0+ICh7XG4gICAgICBjb2RlOiBjLmNvZGUsXG4gICAgICBpbWFnZTogYy5pbWFnZSxcbiAgICAgIHN1aXQ6IGMuc3VpdCxcbiAgICAgIHZhbHVlOiBjb252ZXJ0ZWRDYXJkVmFsdWVbYy52YWx1ZV0sXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNodWZmbGUgdGhlIGRlY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBhc3luYyBzaHVmZmxlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7dGhpcy5CQVNFX1VSTH0vJHt0aGlzLmRlY2tJZH0vc2h1ZmZsZS8/cmVtYWluaW5nPXRydWVgXG4gICAgKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBwcmludExvZyhcImluZm9cIiwgXCJERUNLXCIsIGBzaHVmZmxlIGRlY2sgJHt0aGlzLmRlY2tJZH1gKTtcbiAgICB0aGlzLnJlbWFpbmluZyA9IGpzb24ucmVtYWluaW5nO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCB7IENhcmQsIEdhbWVTdGF0dXMgfSBmcm9tIFwifi9jb250cm9sbGVycy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvcGxheWVyXCI7XG5pbXBvcnQgeyBKb2luRGF0YSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9jbGllbnRcIjtcbmltcG9ydCB7IGdhbWVBY3Rpb25zLCBHYW1lQWN0aW9ucyB9IGZyb20gXCIuL2dhbWVTdGF0ZVwiO1xuaW1wb3J0IHsgVGh1bmtBY3Rpb24gfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvY2tldFN0YXRlIHtcbiAgY2xpZW50OiBTb2NrZXQgfCBudWxsO1xuICBjb25uZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU29ja2V0U3RhdGU6IFNvY2tldFN0YXRlID0ge1xuICBjbGllbnQ6IG51bGwsXG4gIGNvbm5lY3RlZDogZmFsc2UsXG59O1xuXG5pbnRlcmZhY2UgU29ja2V0QWN0aW9uVHlwZXMge1xuICByZWFkb25seSBTRVRfU09DS0VUOiBcIlNFVF9TT0NLRVRcIjtcbiAgcmVhZG9ubHkgU0VUX0NPTk5FQ1RFRDogXCJTRVRfQ09OTkVDVEVEXCI7XG59XG5cbmNvbnN0IFNvY2tldEFjdGlvbnNUeXBlczogU29ja2V0QWN0aW9uVHlwZXMgPSB7XG4gIFNFVF9TT0NLRVQ6IFwiU0VUX1NPQ0tFVFwiLFxuICBTRVRfQ09OTkVDVEVEOiBcIlNFVF9DT05ORUNURURcIixcbn07XG5cbmludGVyZmFjZSBTZXRTb2NrZXQge1xuICB0eXBlOiBcIlNFVF9TT0NLRVRcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxTb2NrZXRTdGF0ZS5jbGllbnQ7XG59XG5pbnRlcmZhY2UgU2V0Q29ubmVjdGVkIHtcbiAgdHlwZTogXCJTRVRfQ09OTkVDVEVEXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsU29ja2V0U3RhdGUuY29ubmVjdGVkO1xufVxuXG5leHBvcnQgdHlwZSBTb2NrZXRBY3Rpb25zID0gU2V0U29ja2V0IHwgU2V0Q29ubmVjdGVkO1xuXG5leHBvcnQgY29uc3Qgc29ja2V0QWN0aW9ucyA9IHtcbiAgLy8gc29ja2V0IGFjdGlvbiB0byBzZXQgdGhlIGNvbm5lY3RlZCBzb2NrZXQgY2xpZW50XG4gIGluaXQ6IChcbiAgICBzb2NrZXQ6IHR5cGVvZiBpbml0aWFsU29ja2V0U3RhdGUuY2xpZW50LFxuICAgIG9uRGF0YTogKGRhdGE6IGFueSkgPT4gdm9pZFxuICApOiBUaHVua0FjdGlvbjxTb2NrZXRBY3Rpb25zIHwgR2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcblxuICAgICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBTb2NrZXRBY3Rpb25zVHlwZXMuU0VUX0NPTk5FQ1RFRCxcbiAgICAgICAgICBwYXlsb2FkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfU09DS0VULFxuICAgICAgICBwYXlsb2FkOiBzb2NrZXQsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNvY2tldCBhY3Rpb24gdG8gc3RhcnQgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICBzdGFydExpbnN0ZW5pbmdHYW1lRXZlbnRzOiAoKTogVGh1bmtBY3Rpb248U29ja2V0QWN0aW9ucyB8IEdhbWVBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG4gICAgICAvLyBsaXN0ZW4gcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgd2hlbiBnYW1lIGNyZWF0ZWRcbiAgICAgIHNvY2tldC5vbihcImNyZWF0ZWRcIiwgKHBheWxvYWQ6IEpvaW5EYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBjcmVhdGVkXCIsIHBheWxvYWQpO1xuICAgICAgICAvLyBkaXNwYXRjaCBnYW1lIGFjdGlvbiB0byBzZXQgdGhlIGdhbWUgZGF0YVxuICAgICAgICBnYW1lQWN0aW9ucy5zZXRHYW1lRGF0YShwYXlsb2FkKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgICBnYW1lQWN0aW9ucy5zZXRDdXJyZW50UGxheWVyKHBheWxvYWQuZ2FtZURhdGEubmV4dFBsYXllcikoXG4gICAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgICAgZ2V0U3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgLy8gYWRkIHBsYXllciB0byB0aGUgZ2FtZVxuICAgICAgICBnYW1lQWN0aW9ucy5hZGRQbGF5ZXIocGF5bG9hZC5wbGF5ZXJEYXRhKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxpc3RlbiB0byBuZXcgcGxheWVyIGpvaW5lZCBldmVudFxuICAgICAgc29ja2V0Lm9uKFwicGxheWVyc1wiLCAocGF5bG9hZDogUGxheWVyRGF0YVtdKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHBsYXllciBsaXN0XCIsIHBheWxvYWQpO1xuICAgICAgICAvLyBhZGQgcGxheWVyIHRvIHRoZSBnYW1lXG4gICAgICAgIGdhbWVBY3Rpb25zLnNldFBsYXllcnMocGF5bG9hZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gaWYgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gICAgICBzb2NrZXQub24oXCJub3RGb3VuZFwiLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICBnYW1lQWN0aW9ucy5zZXRHYW1lTm90Rm91bmQodHJ1ZSkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gdG8gdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgICAgc29ja2V0Lm9uKFwiam9pbmVkXCIsIChwYXlsb2FkOiBKb2luRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImpvaW5lZFwiLCBwYXlsb2FkKTtcbiAgICAgICAgLy8gZGlzcGF0Y2ggZ2FtZSBhY3Rpb24gdG8gc2V0IHRoZSBnYW1lIGRhdGFcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0R2FtZURhdGEocGF5bG9hZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0Q3VycmVudFBsYXllcihwYXlsb2FkLmdhbWVEYXRhLm5leHRQbGF5ZXIpKFxuICAgICAgICAgIGRpc3BhdGNoLFxuICAgICAgICAgIGdldFN0YXRlXG4gICAgICAgICk7XG4gICAgICAgIC8vIGFkZCBwbGF5ZXIgdG8gdGhlIGdhbWUgcGxheWVycyBsaXN0XG4gICAgICAgIGdhbWVBY3Rpb25zLmFkZFBsYXllcihwYXlsb2FkLnBsYXllckRhdGEpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gbGlzdGVuIGZvciB0aGUgcGxheWVyIGxlZnQgdGhlIGdhbWUgZXZlbnRcbiAgICAgIHNvY2tldC5vbihcImxlZnRcIiwgKHBheWxvYWQ6IFBsYXllckRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZC5uYW1lLCBcImhhcyBsZWZ0IHRoZSBnYW1lXCIpO1xuICAgICAgICAvLyByZW1vdmUgcGxheWVyIGZyb20gdGhlIHBsYXllciBsaXN0XG4gICAgICAgIGdhbWVBY3Rpb25zLnJlbW92ZVBsYXllcihwYXlsb2FkLmlkKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxpc3RlbiBmb3IgdGhlIGdhbWUgc3RhcnQgZXZlbnRcbiAgICAgIHNvY2tldC5vbihcInN0YXJ0ZWRcIiwgKHBheWxvYWQ6IEpvaW5EYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBzdGFydGVkXCIsIHBheWxvYWQpO1xuICAgICAgICAvLyBkaXNwYXRjaCBnYW1lIGFjdGlvbiB0byBzZXQgdGhlIGdhbWUgZGF0YVxuICAgICAgICBnYW1lQWN0aW9ucy5zZXRHYW1lRGF0YShwYXlsb2FkKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgICBnYW1lQWN0aW9ucy5zZXRDdXJyZW50UGxheWVyKHBheWxvYWQuZ2FtZURhdGEubmV4dFBsYXllcikoXG4gICAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgICAgZ2V0U3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0R2FtZVN0YXR1cyhHYW1lU3RhdHVzLlNUQVJURUQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy9saXN0ZW4gZm9yIGNhcmRzIGRhdGEgZXZlbnRcbiAgICAgIHNvY2tldC5vbihcImNhcmRzXCIsIChwYXlsb2FkOiBDYXJkW10pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXJkc1wiLCBwYXlsb2FkKTtcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0Q2FyZHMocGF5bG9hZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gZm9yIGN1cnJlbnQgY2FyZCBvbiB0aGUgdGFibGVcbiAgICAgIHNvY2tldC5vbihcInRhYmxlQ2FyZFwiLCAocGF5bG9hZDogQ2FyZFtdKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFibGVDYXJkXCIsIHBheWxvYWQpO1xuICAgICAgICBnYW1lQWN0aW9ucy5zZXRUYWJsZUNhcmQocGF5bG9hZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gZm9yIHRoZSBnYW1lIGRhdGEgZXZlbnRcbiAgICAgIHNvY2tldC5vbihcIm5leHRQbGF5ZXJcIiwgKHBsYXllcklkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXh0UGxheWVyXCIsIHBsYXllcklkKTtcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0Q3VycmVudFBsYXllcihwbGF5ZXJJZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gc29ja2V0IGFjdGlvbiB0byBzdG9wIGxpc3RlbmluZyBhbGwgZ2FtZSBldmVudHNcbiAgc3RvcExpc3RlbmluZ0dhbWVFdmVudHM6ICgpOiBUaHVua0FjdGlvbjxTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG4gICAgICAvLyBzdG9wIGxpc3RlbmluZyByZXNwb25zZSBmcm9tIHNlcnZlciB3aGVuIGdhbWUgY3JlYXRlZFxuICAgICAgc29ja2V0Lm9mZihcImNyZWF0ZWRcIik7XG5cbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIHRvIG5ldyBwbGF5ZXIgam9pbmVkIGV2ZW50XG4gICAgICBzb2NrZXQub2ZmKFwibmV3UGxheWVyXCIpO1xuXG4gICAgICAvLyBzdG9wIGxpc3RlbmluZyBpZiB0aGUgZ2FtZSBpcyBub3QgZm91bmRcbiAgICAgIHNvY2tldC5vZmYoXCJub3RGb3VuZFwiKTtcblxuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgICAgc29ja2V0Lm9mZihcImpvaW5lZFwiKTtcblxuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgZm9yIGEgcGxheWVyIGxlZnQgdGhlIGdhbWUgZXZlbnRcbiAgICAgIHNvY2tldC5vZmYoXCJsZWZ0XCIpO1xuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgU29ja2V0UmVkdWNlcjogUmVkdWNlcjxTb2NrZXRTdGF0ZSwgU29ja2V0QWN0aW9ucz4gPSAoXG4gIHN0YXRlOiBTb2NrZXRTdGF0ZSB8IHVuZGVmaW5lZCxcbiAgYWN0aW9uOiBTb2NrZXRBY3Rpb25zXG4pOiBTb2NrZXRTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGluaXRpYWxTb2NrZXRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfU09DS0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgU29ja2V0QWN0aW9uc1R5cGVzLlNFVF9DT05ORUNURUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29ubmVjdGVkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCByZWR1Y2VycyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IGFueSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gSSByZXF1aXJlIHRoaXMgb25seSBpbiBkZXYgZW52aXJvbm1lbnRcbiAgICAvLyBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7XG4gICAgLy8gcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XG4gIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAuLi5yZWR1Y2VycyxcbiAgfSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGJpbmRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpXG4gICk7XG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgcGxheWluZ0NhcmRCYWNrZ3JvdW5kIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3BsYXlpbmctY2FyZHMucG5nXCI7XG5pbXBvcnQgUnViYmVyVGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9SdWJiZXJUZXh0XCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZXNcIjtcbmltcG9ydCB7IGdhbWVBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3Jlcy9nYW1lU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtqb2luSWQsIHNldEpvaW5JZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BsYXllck5hbWUsIHNldFBsYXllck5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLmRhdGEpO1xuICBjb25zdCBub3RGb3VuZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUubm90Rm91bmQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGpvaW5JZFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcGxheWVyTmFtZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgaGFuZGxlUm9vbUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICBzZXRKb2luSWQodmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVOYW1lSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgIHNldFBsYXllck5hbWUodmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVKb2luID0gKCkgPT4ge1xuICAgIC8vIGlmIHBsYXllciBuYW1lIGlzIGVtcHR5LCBzZXQgZm9jdXMgdGhlIGlucHV0XG4gICAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgICBwbGF5ZXJOYW1lUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIGpvaW4gaWQgaXMgZW1wdHksIHNldCBmb2N1cyB0aGUgaW5wdXRcbiAgICBpZiAoIWpvaW5JZCkge1xuICAgICAgam9pbklkUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gb3RoZXIgdGhhbiB0aGF0LCBqb2luIHRoZSByb29tXG4gICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuam9pbihqb2luSWQsIHBsYXllck5hbWUpKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ3JlYXRlR2FtZSA9ICgpID0+IHtcbiAgICAvLyBpZiBwbGF5ZXIgbmFtZSBpcyBlbXB0eSwgc2V0IGZvY3VzIHRoZSBpbnB1dFxuICAgIGlmICghcGxheWVyTmFtZSkge1xuICAgICAgcGxheWVyTmFtZVJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaXNwYXRjaChnYW1lQWN0aW9ucy5jcmVhdGUocGxheWVyTmFtZSkpO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbmF2KGRhdGEuZ2FtZURhdGEuaWQpO1xuICB9LCBbZGF0YV0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5vdEZvdW5kKSB7XG4gICAgICBhbGVydChcIkdhbWUgbm90IGZvdW5kXCIpO1xuICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMudG9nZ2xlTm90Rm91bmQoKSk7XG4gICAgfVxuICB9LCBbbm90Rm91bmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LXNjcmVlbiBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtwbGF5aW5nQ2FyZEJhY2tncm91bmR9XG4gICAgICAgIGFsdD1cImJnXCJcbiAgICAgICAgd2lkdGg9ezUxMn1cbiAgICAgICAgY2xhc3NOYW1lPVwiLXotMTAgYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCBvcGFjaXR5LTIwIGJvdW5jZUluVXBcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxSdWJiZXJUZXh0IHRleHQ9XCJIZWxsb1wiIHJvb3RDbGFzcz1cIm1yLThcIiAvPlxuICAgICAgICAgIDxSdWJiZXJUZXh0IHRleHQ9XCJ0aGVyZSFcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgPFJ1YmJlclRleHRcbiAgICAgICAgICAgIHRleHQ9XCJMZXQnc1wiXG4gICAgICAgICAgICBib3VuY2VJbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIHJvb3RDbGFzcz1cIm1yLThcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC12aXJnaWwgeGw6dGV4dC04eGwgbGc6bWQ6dGV4dC02eGwgdGV4dC00eGwgaG92ZXI6YW5pbWF0ZS1ydWJiZXIgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1saW1lLTQwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UnViYmVyVGV4dFxuICAgICAgICAgICAgdGV4dD1cIlBMQVkhXCJcbiAgICAgICAgICAgIGJvdW5jZUluPVwicmlnaHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leG8geGw6dGV4dC04eGwgbGc6bWQ6dGV4dC02eGwgdGV4dC00eGwgaG92ZXI6YW5pbWF0ZS1ydWJiZXIgcHgtMiBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LWxpbWUtNDAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBtdC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBib3JkZXIgYm9yZGVyLWxpbWUtNTAwIGl0ZW1zLWNlbnRlciBzbTp3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9e3BsYXllck5hbWVSZWZ9XG4gICAgICAgICAgICAgIG1heExlbmd0aD17MjB9XG4gICAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXJOYW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMCBmbGV4IGZsZXgtZ3JvdyBiZy10cmFuc3BhcmVudCBweS00ICBvdXRsaW5lLW5vbmUgcHgtNCB0ZXh0LWxpbWUtNTAwICB4bDp0ZXh0LXhsIGxnOnRleHQtbGcgbWQ6dGV4dC1tZCB0ZXh0LXNtIGZvbnQtYm9sZCBmb250LWV4b1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWUgaGVyZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOYW1lSW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1saW1lLTUwMCBmb250LXZpcmdpbCBweS00IHhsOnRleHQteGwgbGc6dGV4dC1sZyBtZDp0ZXh0LW1kIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgYW5kXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtqb2luSWRSZWZ9XG4gICAgICAgICAgICAgIHZhbHVlPXtqb2luSWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAwIGZsZXggZmxleC1ncm93IGJnLXRyYW5zcGFyZW50IHB5LTQgb3V0bGluZS1ub25lIHB4LTQgdGV4dC1saW1lLTUwMCAgeGw6dGV4dC14bCBsZzp0ZXh0LWxnIG1kOnRleHQtbWQgdGV4dC1zbSBmb250LWJvbGQgZm9udC1leG9cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBnYW1lIElEIGhlcmVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUm9vbUlucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlSm9pbn0+UGxheTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXItMCB4czptci0wIHhsOm1yLTQgbGc6bXItNCBtZDptci00IHNtOnctZnVsbCB4czp3LWZ1bGwgdGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVHYW1lfT5DcmVhdGUgeW91ciBvd24gZ2FtZTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn07XG5jb25zdCBCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIG9uQ2xpY2ssXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgXCJiZy1saW1lLTUwMCBmb250LWV4byBob3ZlcjpiZy1saW1lLTcwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTkwMCBmb250LWJvbGQgcHktNCBweC04XCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAge1xuICAgICAgICAgIFwiYmctc2xhdGUtNDAwIGN1cnNvci1ub3QtYWxsb3dlZCBob3ZlcjpiZy1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS01MDBcIjpcbiAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICB9XG4gICAgICApfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8cD57Y2hpbGRyZW59PC9wPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwgImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGJvdW5jZUluPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInVwXCIgfCBcImRvd25cIjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICByb290Q2xhc3M/OiBzdHJpbmc7XG59O1xuY29uc3QgUnViYmVyVGV4dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgdGV4dCA9IFwiXCIsXG4gIGJvdW5jZUluLFxuICByb290Q2xhc3MgPSBcIlwiLFxuICBjbGFzc05hbWUgPSBcImZvbnQtdmlyZ2lsIHhsOnRleHQtOHhsIGxnOm1kOnRleHQtNnhsIHRleHQtNHhsIGhvdmVyOmFuaW1hdGUtcnViYmVyIGhvdmVyOnRleHQtbGltZS00MDAgY3Vyc29yLXBvaW50ZXJcIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXCJmbGV4IGZsZXgtcm93XCIsIHJvb3RDbGFzcywge1xuICAgICAgICBib3VuY2VJbkxlZnQ6IGJvdW5jZUluID09PSBcImxlZnRcIiB8fCAhYm91bmNlSW4sXG4gICAgICAgIGJvdW5jZUluUmlnaHQ6IGJvdW5jZUluID09PSBcInJpZ2h0XCIsXG4gICAgICAgIGJvdW5jZUluVXA6IGJvdW5jZUluID09PSBcInVwXCIsXG4gICAgICAgIGJvdW5jZUluRG93bjogYm91bmNlSW4gPT09IFwiZG93blwiLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3RleHQuc3BsaXQoXCJcIikubWFwKChjLCBpKSA9PiAoXG4gICAgICAgIDxoMSBrZXk9e2l9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7Y31cbiAgICAgICAgPC9oMT5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUnViYmVyVGV4dDtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJ+L2NvbXBvbmVudHMvQWxlcnRcIjtcbmltcG9ydCBHYW1lVGFibGUgZnJvbSBcIn4vY29tcG9uZW50cy9HYW1lVGFibGVcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvVG9vbGJhclwiO1xuaW1wb3J0IFdhaXRpbmdSb29tIGZyb20gXCJ+L2NvbXBvbmVudHMvV2FpdGluZ1Jvb21cIjtcbmltcG9ydCB7IEpvaW5EYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvY2xpZW50XCI7XG5pbXBvcnQgeyBDYXJkLCBHYW1lRGF0YSwgZ2FtZXMsIEdhbWVTdGF0dXMgfSBmcm9tIFwifi9jb250cm9sbGVycy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvcGxheWVyXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCJ+L3N0b3Jlc1wiO1xuaW1wb3J0IHsgZ2FtZUFjdGlvbnMgfSBmcm9tIFwifi9zdG9yZXMvZ2FtZVN0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgLy8gZ2V0IHJlbGF0ZWQgZ2FtZSBmcm9tIGdhbWUgbGlzdFxuICBjb25zdCBnYW1lID0gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBwYXJhbXMuaWQpO1xuXG4gIC8vIGlmIGdhbWUgaXMgbm90IGZvdW5kLCBzZXQgZ2FtZUV4aXN0IHRvIGZhbHNlXG4gIGlmICghZ2FtZSkge1xuICAgIHJldHVybiBqc29uKHsgLi4ucGFyYW1zLCBwbGF5ZXJzOiBbXSwgc3RhdHVzOiBHYW1lU3RhdHVzLlVOREVGSU5FRCB9KTtcbiAgfVxuXG4gIC8vIGlmIGdhbWUgaXMgZm91bmQgYW5kIGdhbWUgaXMgc3RpbGwgaW4gd2FpdGluZyBzdGF0ZSwgcmV0dXJuIGdhbWUgZGF0YVxuICByZXR1cm4ganNvbih7XG4gICAgLi4uZ2FtZS5nZXREYXRhKCksXG4gICAgcGxheWVyczogZ2FtZS5nZXRQbGF5ZXJzKCkubWFwKChwKSA9PiBwLmdldElkKCkpLFxuICAgIHN0YXR1czogZ2FtZS5nZXRTdGF0dXMoKSxcbiAgICAuLi5wYXJhbXMsXG4gIH0pO1xufTtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEgZXh0ZW5kcyBHYW1lRGF0YSB7XG4gIHN0YXR1czogR2FtZVN0YXR1cztcbiAgaWQ6IHN0cmluZztcbiAgcGxheWVyczogc3RyaW5nW107XG59XG5cbmNvbnN0IEdhbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLnNvY2tldC5jbGllbnQpO1xuICBjb25zdCBkYXRhU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLmRhdGEpO1xuICBjb25zdCBjdXJyZW50UGxheWVyID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5jdXJyZW50UGxheWVyXG4gICk7XG4gIGNvbnN0IGNhcmRzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5jYXJkcyk7XG4gIGNvbnN0IHBsYXllcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLnBsYXllcnMpO1xuICBjb25zdCBnYW1lU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5zdGF0dXMpO1xuICBjb25zdCBjYXJkT25UYWJsZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUudGFibGVDYXJkKTtcbiAgY29uc3QgW3Nob3dBbGVydCwgc2V0U2hvd0FsZXJ0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBoYW5kbGVMZWF2ZSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChnYW1lQWN0aW9ucy5sZWF2ZSgpKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlRm9sZCA9IChjYXJkOiBDYXJkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJGb2xkXCIsIGNhcmQpO1xuICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLmZvbGRDYXJkKGNhcmQpKTtcbiAgfTtcbiAgLy8gdXNlIGVmZmVjdCB0byBkZXRlY3QgaWYgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSBHYW1lU3RhdHVzLlVOREVGSU5FRCkge1xuICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMudG9nZ2xlTm90Rm91bmQoKSk7XG4gICAgICAvLyByZWRpcmVjdCB0byBob21lIHdoZW4gZ2FtZSBpcyBub3QgZm91bmRcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pZCAmJiBzb2NrZXQpIHtcbiAgICAgIGxldCBwbGF5ZXJOYW1lID0gXCJBbm9ueW1vdXNcIjtcbiAgICAgIC8vIGdldCBsb2NhbCBzdG9yYWdlIGRhdGFcbiAgICAgIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEuaWQpO1xuICAgICAgaWYgKGxvY2FsRGF0YSkge1xuICAgICAgICAvLyBpZiBsb2NhbCBkYXRhIGlzIGZvdW5kLCBnZXQgcGxheWVyIG5hbWUgdGhlcmUgYW5kIGpvaW4gdGhlIGdhbWVcbiAgICAgICAgY29uc3QgbG9jYWxEYXRhT2JqOiBKb2luRGF0YSA9IEpTT04ucGFyc2UobG9jYWxEYXRhKSBhcyBKb2luRGF0YTtcbiAgICAgICAgcGxheWVyTmFtZSA9IGxvY2FsRGF0YU9iai5wbGF5ZXJEYXRhLm5hbWUgfHwgXCJBbm9ueW1vdXNcIjtcbiAgICAgICAgaWYgKGRhdGEucGxheWVycy5pbmNsdWRlcyhsb2NhbERhdGFPYmoucGxheWVyRGF0YS5pZCkpIHtcbiAgICAgICAgICBkaXNwYXRjaChnYW1lQWN0aW9ucy5qb2luKGRhdGEuaWQsIHBsYXllck5hbWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChnYW1lQWN0aW9ucy5zdGFydCgpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgbG9jYWwgZGF0YSBpcyBub3QgZm91bmQsIGNyZWF0ZSBhIG5ldyBwbGF5ZXIgYW5kIGpvaW4gdGhlIGdhbWUgaWYgdGhlIGdhbWUgaXMgbm90IGZ1bGwgb3Igc3RpbGwgaW4gd2FpdGluZyBzdGF0ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgZGF0YS5zdGF0dXMgPT09IEdhbWVTdGF0dXMuV0FJVElORyAmJlxuICAgICAgICAgIGRhdGEucGxheWVyQ291bnQgJiZcbiAgICAgICAgICBkYXRhLnBsYXllckNvdW50IDwgNFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQbGF5ZXJOYW1lID0gcHJvbXB0KFwiRW50ZXIgeW91ciBuYW1lXCIsIFwiQW5vbnltb3VzXCIpO1xuICAgICAgICAgIGlmIChuZXdQbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lID0gbmV3UGxheWVyTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuam9pbihkYXRhLmlkLCBwbGF5ZXJOYW1lKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2RhdGEsIGRpc3BhdGNoLCBzb2NrZXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIHtnYW1lU3RhdHVzID09PSBHYW1lU3RhdHVzLldBSVRJTkcgJiZcbiAgICAgICAgZGF0YS5zdGF0dXMgPT09IEdhbWVTdGF0dXMuV0FJVElORyAmJlxuICAgICAgICBjYXJkcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgIDxXYWl0aW5nUm9vbVxuICAgICAgICAgICAgcGxheWVycz17cGxheWVyc31cbiAgICAgICAgICAgIG93bmVySWQ9e2RhdGFTdGF0ZT8uZ2FtZURhdGEub3duZXJ9XG4gICAgICAgICAgICBzaG93U3RhcnQ9e2RhdGFTdGF0ZT8uZ2FtZURhdGEub3duZXIgPT09IGRhdGFTdGF0ZT8ucGxheWVyRGF0YS5pZH1cbiAgICAgICAgICAgIG9uQWJvcnQ9eygpID0+IGRpc3BhdGNoKGdhbWVBY3Rpb25zLmxlYXZlKCkpfVxuICAgICAgICAgICAgb25TdGFydD17KCkgPT4gZGlzcGF0Y2goZ2FtZUFjdGlvbnMuc3RhcnQoKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDxHYW1lVGFibGVcbiAgICAgICAgcGxheWVycz17cGxheWVyc31cbiAgICAgICAgY2FyZE9uVGFibGU9e2NhcmRPblRhYmxlfVxuICAgICAgICBibHVyPXtcbiAgICAgICAgICBnYW1lU3RhdHVzID09PSBHYW1lU3RhdHVzLldBSVRJTkcgJiZcbiAgICAgICAgICBkYXRhLnN0YXR1cyA9PT0gR2FtZVN0YXR1cy5XQUlUSU5HICYmXG4gICAgICAgICAgY2FyZHMubGVuZ3RoID09PSAwXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBsYXllcj17ZGF0YVN0YXRlPy5wbGF5ZXJEYXRhfVxuICAgICAgICBvd25lcklkPXtkYXRhU3RhdGU/LmdhbWVEYXRhLm93bmVyfVxuICAgICAgICBuZXh0UGxheWVyPXtjdXJyZW50UGxheWVyfVxuICAgICAgICBjYXJkcz17Y2FyZHN9XG4gICAgICAgIG9uRm9sZD17aGFuZGxlRm9sZH1cbiAgICAgIC8+XG4gICAgICA8VG9vbGJhclxuICAgICAgICBibHVyPXtcbiAgICAgICAgICBnYW1lU3RhdHVzID09PSBHYW1lU3RhdHVzLldBSVRJTkcgJiZcbiAgICAgICAgICBkYXRhLnN0YXR1cyA9PT0gR2FtZVN0YXR1cy5XQUlUSU5HICYmXG4gICAgICAgICAgY2FyZHMubGVuZ3RoID09PSAwXG4gICAgICAgIH1cbiAgICAgICAgY2FuUGFzcz17ZGF0YVN0YXRlPy5wbGF5ZXJEYXRhLmlkID09PSBjdXJyZW50UGxheWVyfVxuICAgICAgICBvbkxlYXZlPXsoKSA9PiBzZXRTaG93QWxlcnQodHJ1ZSl9XG4gICAgICAgIG9uUGFzcz17KCkgPT4gZGlzcGF0Y2goZ2FtZUFjdGlvbnMucGFzc1RvTmV4dFBsYXllcigpKX1cbiAgICAgIC8+XG4gICAgICA8QWxlcnRcbiAgICAgICAgc2hvdz17c2hvd0FsZXJ0fVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0U2hvd0FsZXJ0KGZhbHNlKX1cbiAgICAgICAgb25Db25maXJtPXtoYW5kbGVMZWF2ZX1cbiAgICAgID5cbiAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHdhbnQgdG8gbGVhdmUgdGhlIGdhbWUgbm93PzwvcD5cbiAgICAgIDwvQWxlcnQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU2NyZWVuO1xuIiwgImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG50eXBlIFByb3BzID0ge1xuICBzaG93PzogYm9vbGVhbjtcbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkO1xuICBvbkNvbmZpcm0/OiAoKSA9PiB2b2lkO1xufTtcbmNvbnN0IEFsZXJ0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzaG93LCBjaGlsZHJlbiwgb25DYW5jZWwsIG9uQ29uZmlybSB9KSA9PiB7XG4gIHJldHVybiBzaG93ID8gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgXCJhYnNvbHV0ZSB6LTQwIHctc2NyZWVuIGgtc2NyZWVuIHRvcC0wIGxlZnQtMCBiYWNrZHJvcC1ibHVyLW1kIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcbiAgICAgICl9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgXCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXZpcmdpbFwiLFxuICAgICAgICAgIFwidy1bMzIwcHhdIGgtWzI0MHB4XVwiLFxuICAgICAgICAgIFwiYmctc2xhdGUtNjAwXCIsXG4gICAgICAgICAgXCJib3JkZXItMiBib3JkZXItc2xhdGUtOTAwXCIsXG4gICAgICAgICAgXCJyb3VuZGVkLWxnIHNoYWRvdy1sZ1wiLFxuICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IHAtMTAgXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtcm93IGJvcmRlci10LTIganVzdGlmeS1zcGFjZS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwMCBmb250LWV4byBob3ZlcjpiZy1zbGF0ZS03MDAgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS05MDAgZm9udC1ib2xkIHB5LTIgcHgtNCB0ZXh0LXNtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpbWUtNTAwIG1sLWF1dG8gZm9udC1leG8gaG92ZXI6YmctbGltZS03MDAgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS05MDAgZm9udC1ib2xkIHB5LTIgcHgtNCB0ZXh0LXNtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlybX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBZZXNcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSA6IChcbiAgICA8PjwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgYXMgQ2FyZFR5cGUgfSBmcm9tIFwifi9jb250cm9sbGVycy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvcGxheWVyXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XG5pbXBvcnQgUGxheWVyQXZhdGFyIGZyb20gXCIuL1BsYXllckF2YXRhclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBwbGF5ZXJzOiBQbGF5ZXJEYXRhW107XG4gIGNhcmRzOiBDYXJkVHlwZVtdO1xuICBjdXJyZW50UGxheWVyPzogUGxheWVyRGF0YTtcbiAgY2FyZE9uVGFibGU6IENhcmRUeXBlW107XG4gIG1lPzogYm9vbGVhbjtcbiAgb3duZXJJZD86IHN0cmluZztcbiAgYmx1cj86IGJvb2xlYW47XG4gIG5leHRQbGF5ZXI/OiBzdHJpbmc7XG4gIG9uRm9sZD86IChjYXJkOiBDYXJkVHlwZSkgPT4gdm9pZDtcbiAgYXZhdGFyQ29sb3I/OiBzdHJpbmc7XG59O1xuY29uc3QgR2FtZVRhYmxlOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBwbGF5ZXJzLFxuICBtZSxcbiAgb3duZXJJZCxcbiAgYmx1cixcbiAgY2FyZHMsXG4gIGN1cnJlbnRQbGF5ZXIsXG4gIGNhcmRPblRhYmxlID0gW10sXG4gIG5leHRQbGF5ZXIsXG4gIG9uRm9sZCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIFwiYWJzb2x1dGUgei0wIGluc2V0LTAgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGJsdXI6IGJsdXIsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVs5NSVdIGgtWzcwJV0gbWluLWgtWzMyMHB4XSBtaW4tdy1bNjQwcHhdIG1heC1oLVs0ODBweF0gbWF4LXctWzEwMjRweF0gYmctc2xhdGUtNzAwIHJvdW5kZWQtWzZyZW1dIGJvcmRlci1bMXJlbV0gdGFibGUtc2hhZG93IHNoYWRvdy1zbGF0ZS0xMDAgYm9yZGVyLXNsYXRlLTkwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgXCJhYnNvbHV0ZSAgc2hhZG93LVswcHhfMHB4XzEwcHhfIzAwMF0gdy1bMTI4cHhdIGgtWzEyOHB4XSBib3JkZXItWzhweF0gcm91bmRlZC1mdWxsIGJnLXNsYXRlLTcwMCBib3JkZXItc2xhdGUtOTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICBcIi1ib3R0b20tWzY0cHhdXCJcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPFBsYXllckF2YXRhclxuICAgICAgICAgICAgbmFtZT17Y3VycmVudFBsYXllcj8ubmFtZX1cbiAgICAgICAgICAgIG1lPXt0cnVlfVxuICAgICAgICAgICAgcGxheVR1cm49e1xuICAgICAgICAgICAgICBuZXh0UGxheWVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgY3VycmVudFBsYXllciAmJlxuICAgICAgICAgICAgICBjdXJyZW50UGxheWVyLmlkID09PSBuZXh0UGxheWVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvcj1cIiMyOUFFRUZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cGxheWVyc1xuICAgICAgICAgIC5maWx0ZXIoKHApID0+IHAuaWQgIT09IGN1cnJlbnRQbGF5ZXI/LmlkKVxuICAgICAgICAgIC5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgIFwiYWJzb2x1dGUgIHNoYWRvdy1bMHB4XzBweF8xMHB4XyMwMDBdIHctWzEyOHB4XSBoLVsxMjhweF0gYm9yZGVyLVs4cHhdIHJvdW5kZWQtZnVsbCBiZy1zbGF0ZS03MDAgYm9yZGVyLXNsYXRlLTkwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwiLWxlZnQtWzc3cHhdXCI6IGluZGV4ID09PSAwLFxuICAgICAgICAgICAgICAgICAgXCItcmlnaHQtWzc3cHhdXCI6IGluZGV4ID09PSAxLFxuICAgICAgICAgICAgICAgICAgXCItdG9wLVs3N3B4XVwiOiBpbmRleCA9PT0gMixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQbGF5ZXJBdmF0YXJcbiAgICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cbiAgICAgICAgICAgICAgICBtZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgY29sb3I9e3BsYXllci5jb2xvcnN9XG4gICAgICAgICAgICAgICAgcGxheVR1cm49e3BsYXllci5pZCA9PT0gbmV4dFBsYXllcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJwbGF5ZXItY2FyZHNcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgIFwiYWJzb2x1dGUgYm90dG9tLTAgY2FyZC1kZWNrIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXJvd1wiLFxuICAgICAgICAgICAgYC1zcGFjZS14LVszcmVtXWBcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaSkgPT4gKFxuICAgICAgICAgICAgPENhcmQgY2FyZD17Y2FyZH0ga2V5PXtjYXJkLmNvZGV9IG9uQ2xpY2s9e29uRm9sZH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cInRhYmxlLWNhcmRzXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICBcImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXJvd1wiLFxuICAgICAgICAgICAgYC1zcGFjZS14LVszcmVtXWBcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge2NhcmRPblRhYmxlLm1hcCgoY2FyZCwgaSkgPT4gKFxuICAgICAgICAgICAgPENhcmQgY2FyZD17Y2FyZH0ga2V5PXtjYXJkLmNvZGV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lVGFibGU7XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgYXMgQ2FyZFR5cGUgfSBmcm9tIFwifi9jb250cm9sbGVycy9nYW1lXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21JbnQsIHByZWxvYWRJbWFnZSB9IGZyb20gXCJ+L3V0aWxzL2hlbHBlclwiO1xuXG4vLyBwcm9wcyB0eXBlIGZvciBDYXJkIGNvbXBvbmVudFxudHlwZSBDYXJkUHJvcHMgPSB7XG4gIGNhcmQ6IENhcmRUeXBlO1xuICBvbkNsaWNrPzogKGNhcmQ6IENhcmRUeXBlKSA9PiB2b2lkO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGFuaW1hdGU/OiBib29sZWFuO1xufTtcbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoeyBjYXJkLCBvbkNsaWNrLCBjbGFzc05hbWUsIGFuaW1hdGUgfSkgPT4ge1xuICBjb25zdCBjYXJkUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2ltZywgc2V0SW1nXSA9IFJlYWN0LnVzZVN0YXRlPEhUTUxJbWFnZUVsZW1lbnQ+KCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJlbG9hZEltYWdlKGNhcmQuaW1hZ2UpLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICBzZXRJbWcoaW1hZ2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPXtjYXJkLmltYWdlfVxuICAgICAgYWx0PXtjYXJkLmNvZGV9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrICYmIG9uQ2xpY2soY2FyZCl9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICBjbGFzc05hbWUgfHxcbiAgICAgICAgXCJmbGV4IHctWzVyZW1dIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyIGhvdmVyOnotMTAgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNoYWRvdy1zbGF0ZS05MDBcIlxuICAgICAgfVxuICAgICAgc3R5bGU9e1xuICAgICAgICBhbmltYXRlXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogXCJib3VuY2VJblJpZ2h0XCIsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBnZXRSYW5kb21JbnQoMzAwLCAyMDAwKSArIFwibXNcIixcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IFwiMXNcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJhbmRvbUNvbG9yIH0gZnJvbSBcIn4vdXRpbHMvaGVscGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lPzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgcGxheVR1cm4/OiBib29sZWFuO1xuICBjb2xvcj86IHN0cmluZztcbn07XG5jb25zdCBQbGF5ZXJBdmF0YXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIG5hbWUgPSBcIlwiLFxuICBtZSxcbiAgcGxheVR1cm4gPSBmYWxzZSxcbiAgY29sb3IsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIHctWzEyOHB4XSBoLVsxMjhweF0gdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBib3JkZXJDb2xvcjogbmFtZSAmJiAhbWUgPyBgJHtjb2xvcn1gIDogXCJpbmhlcml0XCIsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImFic29sdXRlIHotMCB3LVsxMjhweF0gaC1bMTI4cHhdIHJvdW5kZWQtZnVsbFwiLCB7XG4gICAgICAgICAgXCJob3ZlcjphbmltYXRlLXJ1YmJlciBib3JkZXItOCBib3JkZXItc2t5LTQwMCBiZy1za3ktNTAwXCI6IG5hbWUgJiYgbWUsXG4gICAgICAgICAgXCJob3ZlcjphbmltYXRlLXJ1YmJlciBib3JkZXItOCBib3JkZXItY3lhbi00MDAgYmctY3lhbi01MDBcIjpcbiAgICAgICAgICAgIG5hbWUgJiYgIW1lLFxuICAgICAgICAgIFwiYm9yZGVyLTggYm9yZGVyLWRhc2hlZCBhbmltYXRlLXNwaW4tc2xvd1wiOiAhbmFtZSB8fCBwbGF5VHVybixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmFtZSAmJiAhbWUgPyBgJHtjb2xvcn1jY2AgOiBcImluaGVyaXRcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwidy1bMTIwcHhdIGgtWzEyMHB4XSByb3VuZGVkLWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC12aXJnaWwgei0xMCBvdyB0ZXh0LXhsIHB4LTRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRleHQtc2xhdGUtMTAwIGFuaW1hdGUtcHVsc2UgYmctc2xhdGUtNzAwXCI6ICFuYW1lIHx8IHBsYXlUdXJuLFxuICAgICAgICAgICAgXCJ0ZXh0LXNsYXRlLTkwMFwiOiBuYW1lLFxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPHA+e25hbWUgfHwgXCJ3YWl0aW5nIHBsYXllclwifTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQXZhdGFyO1xuIiwgImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG50eXBlIFByb3BzID0ge1xuICBibHVyPzogYm9vbGVhbjtcbiAgb25MZWF2ZT86ICgpID0+IHZvaWQ7XG4gIG9uUGFzcz86ICgpID0+IHZvaWQ7XG4gIGNhblBhc3M/OiBib29sZWFuO1xufTtcbmNvbnN0IFRvb2xiYXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGJsdXIsIG9uTGVhdmUsIG9uUGFzcywgY2FuUGFzcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBcImFic29sdXRlIGJvdHRvbS0wXCIsXG4gICAgICAgIFwiZmxleCBmbGV4LXJvdyBhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICBcInctc2NyZWVuXCIsXG4gICAgICAgIFwiYmctc2xhdGUtNjAwXCIsXG4gICAgICAgIFwiYm9yZGVyLTIgYm9yZGVyLXNsYXRlLTkwMFwiLFxuICAgICAgICB7IGJsdXI6IGJsdXIgfVxuICAgICAgKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC1ncm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtZ3JvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXshY2FuUGFzc31cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIGZvbnQtZXhvIGhvdmVyOmJnLW9yYW5nZS03MDAgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS05MDAgZm9udC1ib2xkIHB5LTIgcHgtNCB0ZXh0LW1kXCJcbiAgICAgICAgICBvbkNsaWNrPXtvblBhc3N9XG4gICAgICAgID5cbiAgICAgICAgICBQYXNzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC1ncm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGltZS01MDAgZm9udC1leG8gaG92ZXI6YmctbGltZS03MDAgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS05MDAgZm9udC1ib2xkIHB5LTIgcHgtNCB0ZXh0LW1kXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkxlYXZlfVxuICAgICAgICA+XG4gICAgICAgICAgTGVhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSBcIi4vcGxheWVyQXZhdGFyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG93bmVySWQ/OiBzdHJpbmc7XG4gIHBsYXllcnM6IFBsYXllckRhdGFbXTtcbiAgc2hvd1N0YXJ0PzogYm9vbGVhbjtcbiAgYWJvcnRUZXh0Pzogc3RyaW5nO1xuICBzdGFydFRleHQ/OiBzdHJpbmc7XG4gIG9uQWJvcnQ/OiAoKSA9PiB2b2lkO1xuICBvblN0YXJ0PzogKCkgPT4gdm9pZDtcbiAgbWF4UGxheWVycz86IG51bWJlcjtcbn07XG5cbmNvbnN0IFdhaXRpbmdSb29tOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBvd25lcklkID0gXCJcIixcbiAgcGxheWVycyA9IFtdLFxuICBhYm9ydFRleHQgPSBcIkFib3J0IVwiLFxuICBzdGFydFRleHQgPSBcIkxhdW5jaCB0aGUgZ2FtZSFcIixcbiAgbWF4UGxheWVycyA9IDQsXG4gIG9uQWJvcnQsXG4gIG9uU3RhcnQsXG4gIHNob3dTdGFydCxcbn0pID0+IHtcbiAgY29uc3QgW2Rpc2FibGVTdGFydCwgc2V0RGlzYWJsZVN0YXJ0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgei0xMCB3LXNjcmVlbiBoLXNjcmVlbiBiYWNrZHJvcC1ibHVyLTJ4bCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtZXhvIG1iLThcIj5cbiAgICAgICAge3BsYXllcnMubGVuZ3RoID09PSBtYXhQbGF5ZXJzXG4gICAgICAgICAgPyBgU3RhcnRpbmcgdGhlIGdhbWUsIHBsZWFzZSBzdGFuZGJ5IS4uLmBcbiAgICAgICAgICA6IGBXYWl0aW5nIGFub3RoZXIgcGxheWVyLi4uYH1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBzcGFjZS14LTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiAoXG4gICAgICAgICAgPFBsYXllckF2YXRhclxuICAgICAgICAgICAgbWU9e3BsYXllci5pZCA9PT0gb3duZXJJZH1cbiAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIHtBcnJheShtYXhQbGF5ZXJzIC0gcGxheWVycy5sZW5ndGgpXG4gICAgICAgICAgLmZpbGwoMClcbiAgICAgICAgICAubWFwKChpKSA9PiAoXG4gICAgICAgICAgICA8UGxheWVyQXZhdGFyIGtleT17aX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXIgbXQtOFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAwIGZvbnQtZXhvIGhvdmVyOmJnLXNsYXRlLTYwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTkwMCBmb250LWJvbGQgcHktNCBweC04XCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkFib3J0fVxuICAgICAgICA+XG4gICAgICAgICAge2Fib3J0VGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHtzaG93U3RhcnQgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlU3RhcnR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBvblN0YXJ0ICYmIG9uU3RhcnQoKTtcbiAgICAgICAgICAgICAgc2V0RGlzYWJsZVN0YXJ0KHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3RhcnRUZXh0fVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYWl0aW5nUm9vbTtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidlZGYzNTQ3NicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtNklJWFlGQ0QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVlTSlROVzZPLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1RVTZDRVA1Sy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV09aUVJZSksuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvJGlkJzp7J2lkJzoncm91dGVzLyRpZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOic6aWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvJGlkLUlQUjdTSkFHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CM1RaVzdEQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1VNklUQkdKNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQjNUWlc3REIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1FREYzNTQ3Ni5qcyd9OyIsICJpbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tIFwic29ja2V0LmlvXCI7XG5pbXBvcnQgQ2xpZW50Q29udHJvbGxlciBmcm9tIFwiLi9jbGllbnRcIjtcbmltcG9ydCB7IHByaW50TG9nIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgY2xpZW50czogQ2xpZW50Q29udHJvbGxlcltdID0gW107XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIG1hbmFnZSB0aGUgc29ja2V0IGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc2VydmVyIGFuZCB0aGUgY2xpZW50XG4gKiBAY2xhc3MgQ29ubmVjdGlvbkNvbnRyb2xsZXJcbiAqIEBwYXJhbSB7U2VydmVyfSBpbyAtIFRoZSBzb2NrZXQgaW8gY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIHRoZSBjbGllbnRcbiAqXG4gKi9cbmNsYXNzIENvbm5lY3Rpb25Db250cm9sbGVyIHtcbiAgaW86IFNlcnZlcjtcbiAgY29uc3RydWN0b3IoaW86IFNlcnZlcikge1xuICAgIHRoaXMuaW8gPSBpbztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHN0YXJ0IGxpc3RlbmluZyB0byB0aGUgc29ja2V0IGNvbm5lY3Rpb25cbiAgICogQG1ldGhvZCBzdGFydFxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuaW8ub24oXCJjb25uZWN0aW9uXCIsIChzb2NrZXQpID0+IHtcbiAgICAgIHByaW50TG9nKFwiZGVmYXVsdFwiLCBcIlNPQ0tFVFwiLCBcImNvbm5lY3RlZDogXCIsIHNvY2tldC5pZCk7XG4gICAgICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50Q29udHJvbGxlcihzb2NrZXQsIHRoaXMuaW8pO1xuICAgICAgY2xpZW50cy5wdXNoKGNsaWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGlvbkNvbnRyb2xsZXI7XG4iLCAiaW1wb3J0IHsgU2VydmVyLCBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5hbWUsIHByaW50TG9nIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuaW1wb3J0IHsgY2xpZW50cyB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCBHYW1lQ29udHJvbGxlciwgeyBDYXJkLCBHYW1lRGF0YSwgZ2FtZXMgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciwgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgdHlwZSBDbGllbnRFdmVudCA9IFwiam9pblwiIHwgXCJqb2luZWRcIiB8IFwibGVhdmVcIiB8IFwibGVmdFwiO1xuZXhwb3J0IGludGVyZmFjZSBKb2luRGF0YSB7XG4gIGdhbWVEYXRhOiBHYW1lRGF0YTtcbiAgcGxheWVyRGF0YTogUGxheWVyRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdHYW1lRGF0YSB7XG4gIHBsYXllck5hbWU6IHN0cmluZztcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xufVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gbWFuYWdlIHRoZSBzb2NrZXQgY29ubmVjdGlvbiBjcmVhdGVkIGJ5IHRoZSBjbGllbnRcbiAqIEBjbGFzcyBDbGllbnRDb250cm9sbGVyXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0IC0gVGhlIHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRDb250cm9sbGVyIHtcbiAgc29ja2V0OiBTb2NrZXQ7XG4gIHNlcnZlcjogU2VydmVyO1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHNvY2tldCBzb2NrZXQgY29ubmVjdGlvbiBjcmVhdGVkIGJ5IHRoZSBjbGllbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvY2tldDogU29ja2V0LCBpbzogU2VydmVyKSB7XG4gICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgdGhpcy5zZXJ2ZXIgPSBpbztcbiAgICBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsIHRoaXMuZGlzY29ubmVjdC5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oXCJjcmVhdGVcIiwgdGhpcy5jcmVhdGUuYmluZCh0aGlzKSk7XG4gICAgc29ja2V0Lm9uKFwiam9pblwiLCB0aGlzLmpvaW4uYmluZCh0aGlzKSk7XG4gICAgc29ja2V0Lm9uKFwibGVhdmVcIiwgdGhpcy5sZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oXCJzdGFydFwiLCB0aGlzLnN0YXJ0LmJpbmQodGhpcykpO1xuICAgIHNvY2tldC5vbihcImZvbGRDYXJkXCIsIHRoaXMuZm9sZENhcmQuYmluZCh0aGlzKSk7XG4gICAgc29ja2V0Lm9uKFwicGFzc1RvTmV4dFBsYXllclwiLCB0aGlzLnBhc3NUb05leHRQbGF5ZXIuYmluZCh0aGlzKSk7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGlzY29ubmVjdCB0aGUgc29ja2V0IGNvbm5lY3Rpb25cbiAgICogQG1ldGhvZCBkaXNjb25uZWN0XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiU09DS0VUXCIsIFwiZGlzY29ubmVjdGVkOiBcIiwgdGhpcy5zb2NrZXQuaWQpO1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICBjb25zdCBjbGllbnRJbmRleCA9IGNsaWVudHMuaW5kZXhPZih0aGlzKTtcbiAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJDTElFTlRcIiwgXCJSZW1vdmluZyBDTElFTlQjXCIsIGNsaWVudEluZGV4KTtcbiAgICBjbGllbnRzLnNwbGljZShjbGllbnRJbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtOZXdHYW1lRGF0YX0gZGF0YSBnYW1lIGRhdGEgc2VudCBieSB0aGUgY2xpZW50IHRvIGNyZWF0ZSBhIG5ldyBnYW1lXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY3JlYXRlKGRhdGE6IE5ld0dhbWVEYXRhKTogdm9pZCB7XG4gICAgLy8gcHJlcGFyZSBnYW1lIG93bmVyIGRhdGFcbiAgICBjb25zdCBvd25lckRhdGE6IFBsYXllckRhdGEgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBuYW1lOiBkYXRhLnBsYXllck5hbWUgfHwgXCJPd25lclwiLFxuICAgICAgc29ja2V0SWQ6IHRoaXMuc29ja2V0LmlkLFxuICAgICAgY2FyZHM6IFtdLFxuICAgIH07XG4gICAgLy8gZGVmaW5lIG5ldyBnYW1lRGF0YVxuICAgIGNvbnN0IG5ld0dhbWVEYXRhOiBHYW1lRGF0YSA9IHsgLi4uZGF0YS5nYW1lRGF0YSwgb3duZXI6IG93bmVyRGF0YS5pZCB9O1xuXG4gICAgLy8gY3JlYXRlIG93bmVyIGFzIGEgcGxheWVyIHRvb1xuICAgIGNvbnN0IG93bmVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIob3duZXJEYXRhKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgZ2FtZVxuICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIobmV3R2FtZURhdGEpO1xuXG4gICAgLy8gYWRkIHRoZSBvd25lciB0byB0aGUgZ2FtZVxuICAgIG5ld0dhbWUuYWRkUGxheWVyKG93bmVyKTtcblxuICAgIC8vIGFkZCB0aGUgZ2FtZSB0byB0aGUgZ2FtZSBsaXN0XG4gICAgZ2FtZXMucHVzaChuZXdHYW1lKTtcblxuICAgIC8vIHByZXBhcmUgdGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgY2xpZW50XG4gICAgY29uc3Qgam9pbkRhdGE6IEpvaW5EYXRhID0ge1xuICAgICAgZ2FtZURhdGE6IG5ld0dhbWUuZ2V0RGF0YSgpLFxuICAgICAgcGxheWVyRGF0YTogb3duZXJEYXRhLFxuICAgIH07XG5cbiAgICAvLyBqb2luIHRoZSBnYW1lIHJvb21cbiAgICBwcmludExvZyhcImluZm9cIiwgXCJDTElFTlRcIiwgXCJKb2luaW5nIGdhbWUgcm9vbTogXCIsIG5ld0dhbWUuZ2V0SWQoKSk7XG4gICAgdGhpcy5zb2NrZXQuam9pbihuZXdHYW1lLmdldElkKCkpO1xuXG4gICAgLy8gc2VuZCB0aGUgZGF0YSB0byB0aGUgY2xpZW50XG4gICAgdGhpcy5zb2NrZXQuZW1pdChcImNyZWF0ZWRcIiwgam9pbkRhdGEpO1xuICAgIHByaW50TG9nKFwiaW5mb1wiLCBcIkNMSUVOVFwiLCBcIk5ldyBnYW1lIGNyZWF0ZWQ6IFwiLCBuZXdHYW1lLmdldElkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7Sm9pbkRhdGF9IGRhdGEgZ2FtZSBqb2luIGRhdGEgc2VudCBieSBwbGF5ZXIgKGdhbWVEYXRhIGFuZCBwbGF5ZXJEYXRhKVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGpvaW4oZGF0YTogSm9pbkRhdGEpOiB2b2lkIHtcbiAgICBsZXQgbmV3UGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIoe1xuICAgICAgaWQ6IGRhdGEucGxheWVyRGF0YS5pZCB8fCB1dWlkdjQoKSxcbiAgICAgIG5hbWU6IGRhdGEucGxheWVyRGF0YS5uYW1lIHx8IGdlbmVyYXRlTmFtZSgxKSxcbiAgICAgIHNvY2tldElkOiB0aGlzLnNvY2tldC5pZCxcbiAgICAgIGNhcmRzOiBkYXRhLnBsYXllckRhdGEuY2FyZHMgfHwgW10sXG4gICAgfSk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgYWxyZWFkeSBjcmVhdGVkXG4gICAgbGV0IGdhbWUgPSBnYW1lcy5maW5kKChnYW1lKSA9PiBnYW1lLmdldElkKCkgPT09IGRhdGEuZ2FtZURhdGEuaWQpO1xuXG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJDTElFTlRcIiwgXCJHYW1lIG5vdCBmb3VuZCBcIiwgZGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgICAvLyB0ZWxsIHRoZSBjbGllbnQgdGhhdCB0aGUgZ2FtZSBpcyBub3QgZm91bmRcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJub3RGb3VuZFwiLCBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBlbWl0IGdhbWUgbm90IGZvdW5kIHdoZW4gdGhlIGdhbWUgaXMgYWxyZWFkeSBzdGFydGVkIGFuZCB0aGUgcGxheWVyIGlzIG5vdCBpbiB0aGUgZ2FtZVxuICAgIGlmIChcbiAgICAgIGdhbWUuaXNTdGFydGVkKCkgJiZcbiAgICAgIGdhbWUuZ2V0UGxheWVyQnlJZChkYXRhLnBsYXllckRhdGEuaWQpID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIkNMSUVOVFwiLCBcIkdhbWUgYWxyZWFkeSBzdGFydGVkIFwiLCBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJub3RGb3VuZFwiLCBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBjdXJyZW50IHBsYXllciBpcyBhbHJlYWR5IGluIHRoZSBnYW1lXG4gICAgY29uc3QgZXhpc3RpbmdQbGF5ZXIgPSBnYW1lLmdldFBsYXllckJ5SWQobmV3UGxheWVyLmdldERhdGEoKS5pZCk7XG4gICAgaWYgKCFleGlzdGluZ1BsYXllcikge1xuICAgICAgLy8gY3JlYXRlIHRoZSBwbGF5ZXIgaWYgdGhlIGdhbWUgaXMgbm90IGZ1bGxcbiAgICAgIGlmIChnYW1lLmdldFRvdGFsUGxheWVyKCkgPCA0KSB7XG4gICAgICAgIC8vIGFkZCB0aGUgcGxheWVyIHRvIHRoZSBnYW1lXG4gICAgICAgIGdhbWUuYWRkUGxheWVyKG5ld1BsYXllcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZW5kIGVycm9yIG1lc3NhZ2UgdG8gdGhlIGNsaWVudFxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwiZXJyb3JcIiwge1xuICAgICAgICAgIG1lc3NhZ2U6IFwiR2FtZSBpcyBmdWxsXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgcGxheWVyIHNvY2tldCBpZFxuICAgICAgZXhpc3RpbmdQbGF5ZXIuc2V0U29ja2V0SWQobmV3UGxheWVyLmdldERhdGEoKS5zb2NrZXRJZCk7XG4gICAgICBleGlzdGluZ1BsYXllci5zZXROYW1lKG5ld1BsYXllci5nZXREYXRhKCkubmFtZSk7XG4gICAgICBuZXdQbGF5ZXIuc2V0Q2FyZHMoZXhpc3RpbmdQbGF5ZXIuZ2V0Q2FyZHMoKSk7XG4gICAgfVxuXG4gICAgLy8gam9pbiB0aGUgZ2FtZSByb29tXG4gICAgcHJpbnRMb2coXCJpbmZvXCIsIFwiQ0xJRU5UXCIsIFwiSm9pbmluZyBnYW1lIHJvb206IFwiLCBnYW1lLmdldElkKCkpO1xuICAgIHRoaXMuc29ja2V0LmpvaW4oZ2FtZS5nZXRJZCgpKTtcblxuICAgIC8vIHByZXBhcmUgdGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgY2xpZW50XG4gICAgY29uc3Qgam9pbkRhdGE6IEpvaW5EYXRhID0ge1xuICAgICAgZ2FtZURhdGE6IGdhbWUuZ2V0RGF0YSgpLFxuICAgICAgcGxheWVyRGF0YTogbmV3UGxheWVyLmdldERhdGEoKSxcbiAgICB9O1xuICAgIC8vIHNlbmQgdGhlIGRhdGEgdG8gdGhlIGNsaWVudCBpZiB0aGUgZ2FtZSBpcyBub3Qgc3RhcnRlZFxuICAgIHRoaXMuc29ja2V0LmVtaXQoXCJqb2luZWRcIiwgam9pbkRhdGEpO1xuXG4gICAgLy8gc2VuZCBwbGF5ZXIgbGlzdCB0byB0aGUgZ2FtZSByb29tXG4gICAgLy8gZ2V0IGFsbCBwbGF5ZXIgaW4gdGhlIGdhbWVcbiAgICBjb25zdCBwbGF5ZXJzID0gZ2FtZS5nZXRQbGF5ZXJzKCk7XG4gICAgLy8gbWFwIHRoZSBwbGF5ZXIgZGF0YSB0byBzZW5kIHRvIHRoZSBjbGllbnRcbiAgICBjb25zdCBwbGF5ZXJEYXRhID0gcGxheWVycy5tYXAoKHBsYXllcikgPT5cbiAgICAgIHBsYXllci5nZXREYXRhKHsgaW5jbHVkZUNhcmRzOiBmYWxzZSB9KVxuICAgICk7XG5cbiAgICAvL3NlbmQgdGhlIGRhdGEgdG8gdGhlIGNsaWVudFxuICAgIHRoaXMuc2VydmVyLmluKGdhbWUuZ2V0SWQoKSkuZW1pdChcInBsYXllcnNcIiwgcGxheWVyRGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBsZWF2ZSB0aGUgZ2FtZVxuICAgKiBAbWV0aG9kIGxlYXZlXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgbGVhdmUoZGF0YTogSm9pbkRhdGEpOiB2b2lkIHtcbiAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJDTElFTlRcIiwgXCJMZWF2aW5nIGdhbWU6IFwiLCBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAvLyBnZXQgZ2FtZSBkYXRhIGZyb20gc29ja2V0IGRhdGFcbiAgICBjb25zdCBnYW1lID0gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAvLyBpZiBnYW1lIGlzIGRlZmluZWQsIHByb2NlZWQgcmVtb3ZpbmcgdGhlIHBsYXllciBmcm9tIHRoZSBnYW1lXG4gICAgaWYgKGdhbWUpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IGdhbWUuZ2V0UGxheWVyQnlJZChkYXRhLnBsYXllckRhdGEuaWQpO1xuICAgICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiUExBWUVSXCIsIFwiTGVhdmluZyBnYW1lOiBcIiwgZGF0YS5wbGF5ZXJEYXRhLmlkKTtcblxuICAgICAgLy8gaWYgdGhlIHBsYXllciBpcyBmb3VuZCwgdGhlbiB3ZSBjYW4gcmVtb3ZlIHRoZSBwbGF5ZXIgZnJvbSB0aGUgZ2FtZVxuICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAvLyBicm9hZGNhc3QgdG8gb3RoZXIgcGxheWVycyB0aGF0IHRoZSBwbGF5ZXIgbGVmdFxuICAgICAgICB0aGlzLnNlcnZlclxuICAgICAgICAgIC5pbihnYW1lLmdldElkKCkpXG4gICAgICAgICAgLmVtaXQoXCJsZWZ0XCIsIHBsYXllci5nZXREYXRhKHsgaW5jbHVkZUNhcmRzOiBmYWxzZSB9KSk7XG4gICAgICAgIGdhbWUucmVtb3ZlUGxheWVyKHBsYXllcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3RhcnQgdGhlIGdhbWVcbiAgICogQG1ldGhvZCBzdGFydFxuICAgKiBAcGFyYW1zIHtKb2luRGF0YX0gZGF0YSBUaGUgZ2FtZSBpZFxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGFzeW5jIHN0YXJ0KGRhdGE6IEpvaW5EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcHJpbnRMb2coXCJpbmZvXCIsIFwiQ0xJRU5UXCIsIFwiU3RhcnRpbmcgZ2FtZTogXCIsIGRhdGEpO1xuICAgIC8vIGdldCBnYW1lIGRhdGEgZnJvbSBnYW1lIGxpc3RcbiAgICBjb25zdCBnYW1lID0gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBkYXRhLmdhbWVEYXRhLmlkKTtcblxuICAgIC8vIGlmIGdhbWUgaXMgZGVmaW5lZCwgcHJvY2VlZCBzdGFydGluZyB0aGUgZ2FtZVxuICAgIGlmIChnYW1lKSB7XG4gICAgICAvLyBzdGFydCB0aGUgZ2FtZSwgdGhpcyB3aWxsIHRha2UgY2FyZSBvZiBjcmVhdGluZyB0aGUgZ2FtZSBib2FyZFxuICAgICAgLy8gY3JlYXRpbmcgdGhlIGNhcmQgZGVjayBhbmQgc2h1ZmZsaW5nIGl0XG4gICAgICAvLyBhbmQgZHJhdyBpbml0aWFsIDUgY2FyZHMgdG8gdGhlIHBsYXllcnNcbiAgICAgIC8vIHNpbmNlIHdlIHVzZSBleHRlcm5hbCBBUEksIGl0IHdpbGwgdGFrZSBzb21lIHRpbWUgdG8gc3RhcnQgdGhlIGdhbWVcbiAgICAgIC8vIHNvIHdlIHVzZSBwcm9taXNlIHRvIHdhaXQgZm9yIHRoZSBnYW1lIHRvIGJlIHN0YXJ0ZWRcbiAgICAgIGF3YWl0IGdhbWUuc3RhcnQoKTtcblxuICAgICAgLy8gc2VuZCBjYXJkcyB0byB0aGUgcGxheWVyc1xuICAgICAgY29uc3QgcGxheWVycyA9IGdhbWUuZ2V0UGxheWVycygpO1xuICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgICAgICB0aGlzLnNlcnZlci5pbihwbGF5ZXIuZ2V0U29ja2V0SWQoKSkuZW1pdChcImNhcmRzXCIsIHBsYXllci5nZXRDYXJkcygpKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2VuZCB0aGUgY3VycmVudCBjYXJkIG9uIHRhYmxlIGFsbCBwbGF5ZXJzXG4gICAgICBjb25zdCB0YWJsZUNhcmQgPSBnYW1lLmdldENhcmRPblRhYmxlKCk7XG4gICAgICB0aGlzLnNlcnZlci5pbihnYW1lLmdldElkKCkpLmVtaXQoXCJ0YWJsZUNhcmRcIiwgdGFibGVDYXJkKTtcblxuICAgICAgLy8gYnJvYWRjYXN0IHRvIG90aGVyIHBsYXllcnMgdGhhdCB0aGUgZ2FtZSBzdGFydGVkXG4gICAgICB0aGlzLnNlcnZlci5pbihnYW1lLmdldElkKCkpLmVtaXQoXCJzdGFydGVkXCIsIGdhbWUuZ2V0RGF0YSgpKTtcbiAgICB9XG4gIH1cblxuICBmb2xkQ2FyZChkYXRhOiB7IGNhcmQ6IENhcmQ7IHBsYXllcklkOiBzdHJpbmc7IGdhbWVJZDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBwcmludExvZyhcImluZm9cIiwgXCJDTElFTlRcIiwgXCJGb2xkaW5nIGNhcmQ6IFwiLCBkYXRhKTtcbiAgICAvLyBnZXQgZ2FtZSBkYXRhIGZyb20gZ2FtZSBsaXN0XG4gICAgY29uc3QgZ2FtZSA9IGdhbWVzLmZpbmQoKGdhbWUpID0+IGdhbWUuZ2V0SWQoKSA9PT0gZGF0YS5nYW1lSWQpO1xuICAgIGlmICghZ2FtZSkge1xuICAgICAgcHJpbnRMb2coXG4gICAgICAgIFwid2FybmluZ1wiLFxuICAgICAgICBcIkNMSUVOVFwiLFxuICAgICAgICBcIkZvbGRpbmcgY2FyZCBmYWlsZWQuIEdhbWUgbm90IGZvdW5kIFwiLFxuICAgICAgICB0aGlzLnNvY2tldC5pZFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9nZXQgcGxheWVyXG4gICAgY29uc3QgcGxheWVyID0gZ2FtZS5nZXRQbGF5ZXJCeUlkKGRhdGEucGxheWVySWQpO1xuICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgIC8vY29tcGFyZSBsYXN0IGNhcmQgb24gdGFibGUgd2l0aCBjYXJkIHRoYXQgZm9sZGVkXG4gICAgICAvKipcbiAgICAgICAqIFRPRE86IGZvciBub3cgd2UgYXJlIG5vdCBjaGVja2luZyBpZiB0aGUgY2FyZCBzdWl0IGlzIG1hdGNoIG9yIG5vdC4ganVzdCBjb21wYXJpbmcgdGhlIGhpZ2VzdCB2YWx1ZVxuICAgICAgICovXG5cbiAgICAgIGNvbnN0IGNhcmRPblRhYmxlID0gZ2FtZS5nZXRDYXJkT25UYWJsZSgpO1xuICAgICAgaWYgKCFjYXJkT25UYWJsZSkgcmV0dXJuO1xuICAgICAgY29uc3QgbGFzdENhcmRPblRhYmxlID0gY2FyZE9uVGFibGVbY2FyZE9uVGFibGUubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoXG4gICAgICAgIChsYXN0Q2FyZE9uVGFibGUudmFsdWUgPCBkYXRhLmNhcmQudmFsdWUgJiZcbiAgICAgICAgICBsYXN0Q2FyZE9uVGFibGUuc3VpdCA9PT0gZGF0YS5jYXJkLnN1aXQpIHx8XG4gICAgICAgIGdhbWUuaXNGcmVlRm9sZCgpXG4gICAgICApIHtcbiAgICAgICAgZ2FtZS5zZXRGcmVlRm9sZChmYWxzZSk7XG4gICAgICAgIC8vIGFkZCBjYXJkIHRvIHRhYmxlXG4gICAgICAgIGdhbWUucHVzaENhcmRPblRhYmxlKGRhdGEuY2FyZCk7XG4gICAgICAgIC8vIHJlbW92ZSBjYXJkIGZyb20gcGxheWVyXG4gICAgICAgIHBsYXllci5yZW1vdmVDYXJkKGRhdGEuY2FyZCk7XG4gICAgICAgIC8vIGdldCBwbGF5ZXIgY3VycmVudCBjYXJkXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gcGxheWVyLmdldENhcmRzKCk7XG4gICAgICAgIC8vIGVtaXQgbmV3IGNhcmRzIHRvIHBsYXllclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwiY2FyZHNcIiwgY3VycmVudENhcmQpO1xuICAgICAgICBwcmludExvZyhcImluZm9cIiwgXCJDTElFTlRcIiwgXCJjdXJyZW50IHBsYXllciBjYXJkOiBcIiwgY3VycmVudENhcmQpO1xuXG4gICAgICAgIGNvbnN0IG5leHRQbGF5ZXIgPSBnYW1lLmdldE5leHRQbGF5ZXIoKTtcbiAgICAgICAgLy8gc2VuZCBnYW1lIGRhdGEgdG8gYWxsIHBsYXllcnNcbiAgICAgICAgY29uc3QgZ2FtZURhdGEgPSBnYW1lLmdldERhdGEoKTtcblxuICAgICAgICBwcmludExvZyhcbiAgICAgICAgICBcImluZm9cIixcbiAgICAgICAgICBcIkNMSUVOVFwiLFxuICAgICAgICAgIFwibmV4dCBwbGF5ZXI6IFwiLFxuICAgICAgICAgIG5leHRQbGF5ZXIuZ2V0SWQoKSxcbiAgICAgICAgICBnYW1lRGF0YS5uZXh0UGxheWVyXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2VydmVyLmluKGdhbWUuZ2V0SWQoKSkuZW1pdChcIm5leHRQbGF5ZXJcIiwgbmV4dFBsYXllci5nZXRJZCgpKTtcblxuICAgICAgICAvLyBzZW5kIHRoZSBjdXJyZW50IGNhcmQgb24gdGFibGUgYWxsIHBsYXllcnNcbiAgICAgICAgY29uc3QgdGFibGVDYXJkID0gZ2FtZS5nZXRDYXJkT25UYWJsZSgpO1xuICAgICAgICB0aGlzLnNlcnZlci5pbihnYW1lLmdldElkKCkpLmVtaXQoXCJ0YWJsZUNhcmRcIiwgdGFibGVDYXJkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW50TG9nKFxuICAgICAgICAgIFwid2FybmluZ1wiLFxuICAgICAgICAgIFwiQ0xJRU5UXCIsXG4gICAgICAgICAgXCJGb2xkaW5nIGNhcmQgZmFpbGVkLiBmb2xkZWQgY2FyZCBpcyBsb3dlciB0aGFuIGN1cnJlbnRseSBvbiB0YWJsZSBcIixcbiAgICAgICAgICB0aGlzLnNvY2tldC5pZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmludExvZyhcbiAgICAgICAgXCJ3YXJuaW5nXCIsXG4gICAgICAgIFwiQ0xJRU5UXCIsXG4gICAgICAgIFwiRm9sZGluZyBjYXJkIGZhaWxlZC4gUGxheWVyIG5vdCBmb3VuZCBcIixcbiAgICAgICAgZGF0YS5wbGF5ZXJJZFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyB0aGlzIG1ldGhvZCBpcyB1c2VkIHRvIHBhc3MgdGhlIHR1cm4gdG8gdGhlIG5leHQgcGxheWVyXG4gIHBhc3NUb05leHRQbGF5ZXIocGFyYW1zOiB7IGdhbWVJZDogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBnYW1lID0gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBwYXJhbXMuZ2FtZUlkKTtcbiAgICBpZiAoIWdhbWUpIHtcbiAgICAgIHByaW50TG9nKFxuICAgICAgICBcIndhcm5pbmdcIixcbiAgICAgICAgXCJDTElFTlRcIixcbiAgICAgICAgXCJQYXNzaW5nIHRvIG5leHQgcGxheWVyIGZhaWxlZC4gR2FtZSBub3QgZm91bmQgXCIsXG4gICAgICAgIHRoaXMuc29ja2V0LmlkXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnYW1lLnNldEZyZWVGb2xkKHRydWUpO1xuICAgIGNvbnN0IG5leHRQbGF5ZXIgPSBnYW1lLmdldE5leHRQbGF5ZXIoKTtcbiAgICBnYW1lLnNldE5leHRQbGF5ZXIobmV4dFBsYXllci5nZXRJZCgpKTtcbiAgICAvLyBzZW5kIG5leHQgcGxheWVyIHVwZGF0ZSB0byBhbGwgcGxheWVyc1xuICAgIHRoaXMuc2VydmVyLmluKGdhbWUuZ2V0SWQoKSkuZW1pdChcIm5leHRQbGF5ZXJcIiwgbmV4dFBsYXllci5nZXRJZCgpKTtcblxuICAgIC8vIHNlbmQgdGhlIGN1cnJlbnQgY2FyZCBvbiB0YWJsZSBhbGwgcGxheWVyc1xuICAgIGNvbnN0IHRhYmxlQ2FyZCA9IGdhbWUuZ2V0Q2FyZE9uVGFibGUoKTtcbiAgICB0aGlzLnNlcnZlci5pbihnYW1lLmdldElkKCkpLmVtaXQoXCJ0YWJsZUNhcmRcIiwgdGFibGVDYXJkKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHByaW50TG9nLCByYW5kb21Db2xvciB9IGZyb20gXCJ+L3V0aWxzL2hlbHBlclwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzb2NrZXRJZDogc3RyaW5nO1xuICBjYXJkcz86IENhcmRbXTtcbiAgY29sb3JzPzogc3RyaW5nO1xufVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gbWFuYWdlIHBsYXllciBpbiB0aGUgZ2FtZVxuICogQGNsYXNzIFBsYXllckNvbnRyb2xsZXJcbiAqIEBwYXJhbSB7UGxheWVyRGF0YX0gZGF0YSAtIFRoZSBwbGF5ZXIgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkYXRhOiBQbGF5ZXJEYXRhO1xuICBjb25zdHJ1Y3RvcihkYXRhOiBQbGF5ZXJEYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmRhdGEuY29sb3JzID0gcmFuZG9tQ29sb3IoKTtcbiAgfVxuICBnZXRTb2NrZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNvY2tldElkO1xuICB9XG4gIHNldE5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lO1xuICB9XG4gIHNldFNvY2tldElkKHNvY2tldElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGEuc29ja2V0SWQgPSBzb2NrZXRJZDtcbiAgfVxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmlkO1xuICB9XG4gIGdldERhdGEob3B0cz86IHsgaW5jbHVkZUNhcmRzPzogYm9vbGVhbiB9KSB7XG4gICAgcmV0dXJuIG9wdHM/LmluY2x1ZGVDYXJkcyA/IHRoaXMuZGF0YSA6IHsgLi4udGhpcy5kYXRhLCBjYXJkczogW10gfTtcbiAgfVxuICBzZXRDYXJkcyhjYXJkczogQ2FyZFtdKSB7XG4gICAgdGhpcy5kYXRhLmNhcmRzID0gY2FyZHM7XG4gIH1cbiAgcmVtb3ZlQ2FyZChjYXJkOiBDYXJkKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEuY2FyZHMpIHJldHVybjtcbiAgICBwcmludExvZyhcImluZm9cIiwgXCJQTEFZRVJcIiwgXCJSZW1vdmluZyBjYXJkOiBcIiwgY2FyZCk7XG4gICAgY29uc3QgbmV3Q2FyZHMgPSB0aGlzLmRhdGEuY2FyZHMuZmlsdGVyKChjKSA9PiBjLmNvZGUgIT09IGNhcmQuY29kZSk7XG4gICAgdGhpcy5kYXRhLmNhcmRzID0gbmV3Q2FyZHM7XG4gICAgcHJpbnRMb2coXG4gICAgICBcImluZm9cIixcbiAgICAgIFwiUExBWUVSXCIsXG4gICAgICBcImNhcmQgcmVtb3ZlZC4gY3VycmVudCBjYXJkczogXCIsXG4gICAgICB0aGlzLmRhdGEuY2FyZHNcbiAgICApO1xuICB9XG4gIGdldENhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY2FyZHMgfHwgW107XG4gIH1cbiAgbGVhdmUoKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgaWQ6IFwiXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgc29ja2V0SWQ6IFwiXCIsXG4gICAgICBjYXJk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
