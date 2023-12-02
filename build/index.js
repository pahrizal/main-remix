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

// empty-module:~/controllers/notification.client
var require_notification = __commonJS({
  "empty-module:~/controllers/notification.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// empty-module:~/controllers/videochat.client
var require_videochat = __commonJS({
  "empty-module:~/controllers/videochat.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// empty-module:./controllers/notification.client
var require_notification2 = __commonJS({
  "empty-module:./controllers/notification.client"(exports, module2) {
    init_react();
    module2.exports = {};
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

// route:/Users/pahrizalmarup/playground/main-remix/app/root.tsx
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
var animation_default = "/build/_assets/animation-O6NYA2OB.css";

// app/assets/styles/app.css
var app_default = "/build/_assets/app-BCGGNUNM.css";

// app/assets/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AEEVC4QQ.css";

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
    this.freeFoldOwner = "";
    this.deck = new Deck();
  }
  setFreeFold(state, owner) {
    this.freeFold = state;
    this.freeFoldOwner = owner;
  }
  setFreeFoldOwner(playerId) {
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
    this.resetFreeFold();
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
  getCurrentPlayerIndex() {
    const currentPlayerIndex = this.players.findIndex((player) => player.getId() === this.data.nextPlayer);
    return currentPlayerIndex;
  }
  getPreviousPlayer() {
    const currentPlayerIndex = this.getCurrentPlayerIndex();
    let previousPlayerIndex = currentPlayerIndex - 1;
    if (previousPlayerIndex < 0) {
      previousPlayerIndex = this.players.length - 1;
    }
    const previousPlayer = this.players[previousPlayerIndex];
    return previousPlayer;
  }
  getNextPlayer() {
    const currentPlayerIndex = this.getCurrentPlayerIndex();
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
  setWinner(player) {
    this.data.winner = player.getId();
    this.status = "FINISHED" /* FINISHED */;
  }
};

// app/stores/socketState.ts
init_react();
var import_notification = __toESM(require_notification());
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
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
      });
      socket.on("players", (payload) => {
        gameActions.setPlayers(payload)(dispatch, getState);
      });
      socket.on("notFound", (payload) => {
        gameActions.setGameNotFound(true)(dispatch, getState);
      });
      socket.on("joined", (payload) => {
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
      });
      socket.on("left", (payload) => {
        gameActions.removePlayer(payload.id)(dispatch, getState);
      });
      socket.on("started", (payload) => {
        gameActions.playSound(import_notification.Sound.shuffle)(dispatch, getState);
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
        gameActions.setGameStatus("STARTED" /* STARTED */)(dispatch, getState);
      });
      socket.on("cards", (payload) => {
        gameActions.setCards(payload)(dispatch, getState);
      });
      socket.on("tableCard", (payload) => {
        gameActions.playSound(import_notification.Sound.draw)(dispatch, getState);
        gameActions.setTableCard(payload)(dispatch, getState);
      });
      socket.on("nextPlayer", (playerId) => {
        gameActions.setCurrentPlayer(playerId)(dispatch, getState);
      });
      socket.on("freeFold", (state) => {
        gameActions.setHasFreeFold(state)(dispatch, getState);
      });
      socket.on("winner", (player) => {
        gameActions.setWinner(player)(dispatch, getState);
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
var import_notification2 = __toESM(require_notification());
var import_videochat = __toESM(require_videochat());
var initialGameState = {
  data: null,
  notFound: false,
  players: [],
  cards: [],
  status: "WAITING" /* WAITING */,
  tableCard: [],
  currentPlayer: "",
  hasFreeFold: false,
  notif: null,
  winner: null,
  videoDeviceId: "",
  audioDeviceId: "",
  videochat: null,
  peers: {}
};
var GameActionsTypes = {
  SET_GAME_DATA: "SET_GAME_DATA",
  SET_GAME_NOT_FOUND: "SET_GAME_NOT_FOUND",
  SET_PLAYERS: "SET_PLAYERS",
  SET_GAME_STATUS: "SET_GAME_STATUS",
  SET_CARDS: "SET_CARDS",
  SET_TABLE_CARD: "SET_TABLE_CARD",
  SET_CURRENT_PLAYER: "SET_CURRENT_PLAYER",
  SET_HAS_FREE_FOLD: "SET_HAS_FREE_FOLD",
  SET_NOTIF: "SET_NOTIF",
  SET_WINNER: "SET_WINNER",
  SET_VIDEO_DEVICE_ID: "SET_VIDEO_DEVICE_ID",
  SET_AUDIO_DEVICE_ID: "SET_AUDIO_DEVICE_ID",
  SET_VIDEOCHAT: "SET_VIDEOCHAT",
  SET_PEERS: "SET_PEERS"
};
var gameActions = {
  setCurrentPlayer: (playerId) => {
    return async (dispatch, getState) => {
      const notif = getState().game.notif;
      dispatch({
        type: GameActionsTypes.SET_CURRENT_PLAYER,
        payload: playerId
      });
      const gameData = getState().game.data;
      if (gameData) {
        if (gameData.playerData.id === playerId && notif) {
          notif.play(import_notification2.Sound.turn);
        }
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
  setHasFreeFold: (state) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_HAS_FREE_FOLD,
        payload: state
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
      const notif = getState().game.notif;
      const oldPlayers = getState().game.players;
      notif && notif.play("join");
      const newPlayers = players.map((player) => {
        const oldPlayer = oldPlayers.find((oldPlayer2) => oldPlayer2.id === player.id);
        if (oldPlayer) {
          return __spreadProps(__spreadValues({}, player), {
            stream: oldPlayer.stream
          });
        }
        return player;
      });
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: newPlayers
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
    };
  },
  removePlayer: (playerId) => {
    return async (dispatch, getState) => {
      const players = getState().game.players;
      const notif = getState().game.notif;
      const playerExist = players.find((p) => p.id === playerId);
      if (!playerExist)
        return;
      notif && notif.play("leave");
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
      if (!data.gameData || !data.playerData)
        return;
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
            socketId: socket.id,
            cards: [],
            bot: false
          }
        };
      }
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
      socket.emit("start", gameData);
    };
  },
  setNotif: (payload) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_NOTIF,
        payload
      });
    };
  },
  playSound(sound) {
    return async (dispatch, getState) => {
      const notif = getState().game.notif;
      notif && notif.play(sound);
    };
  },
  setWinner: (winner) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_WINNER,
        payload: winner
      });
    };
  },
  setAudioDeviceId: (audioId) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_AUDIO_DEVICE_ID,
        payload: audioId
      });
    };
  },
  setVideoDeviceId: (videoId) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_VIDEO_DEVICE_ID,
        payload: videoId
      });
    };
  },
  setPlayerStream: (playerId, stream) => {
    return async (dispatch, getState) => {
      const data = getState().game.data;
      const allPlayers = getState().game.players;
      if (!data)
        return;
      if (data.playerData.id === playerId) {
        data.playerData.stream = stream;
      }
      const players = allPlayers.map((player) => {
        if (player.id === playerId) {
          return __spreadProps(__spreadValues({}, player), {
            stream
          });
        }
        return player;
      });
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: players
      });
    };
  },
  initVideChatController: (stream, socket) => {
    return async (dispatch, getState) => {
      var _a;
      const oldController = getState().game.videochat;
      const gameData = (_a = getState().game.data) == null ? void 0 : _a.gameData;
      if (!oldController) {
        if (!gameData)
          return;
        const controller = new import_videochat.VideoChatController(gameData.id, stream, socket, (peers) => {
          gameActions.setPeers(peers)(dispatch, getState);
        });
        dispatch({
          type: GameActionsTypes.SET_VIDEOCHAT,
          payload: controller
        });
      } else {
        oldController.myStream = stream;
      }
    };
  },
  setPeers: (peers) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_PEERS,
        payload: peers
      });
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
    case GameActionsTypes.SET_HAS_FREE_FOLD:
      return __spreadProps(__spreadValues({}, state), {
        hasFreeFold: action.payload
      });
    case GameActionsTypes.SET_NOTIF:
      return __spreadProps(__spreadValues({}, state), {
        notif: action.payload
      });
    case GameActionsTypes.SET_WINNER:
      return __spreadProps(__spreadValues({}, state), {
        winner: action.payload
      });
    case GameActionsTypes.SET_AUDIO_DEVICE_ID:
      return __spreadProps(__spreadValues({}, state), {
        audioDeviceId: action.payload
      });
    case GameActionsTypes.SET_VIDEO_DEVICE_ID:
      return __spreadProps(__spreadValues({}, state), {
        videoDeviceId: action.payload
      });
    case GameActionsTypes.SET_VIDEOCHAT:
      return __spreadProps(__spreadValues({}, state), {
        videochat: action.payload
      });
    case GameActionsTypes.SET_PEERS:
      return __spreadProps(__spreadValues({}, state), {
        peers: action.payload
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
  if (false) {
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

// route:/Users/pahrizalmarup/playground/main-remix/app/root.tsx
var import_notification3 = __toESM(require_notification2());
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
    const notif = new import_notification3.NotificationController();
    dispatch(gameActions.setNotif(notif));
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en",
    className: "bg-slate-900 text-slate-100 flex flex-col justify-center items-center w-screen h-screen"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement(import_remix3.Meta, null), /* @__PURE__ */ import_react.default.createElement(import_remix3.Links, null)), /* @__PURE__ */ import_react.default.createElement("body", {
    className: "overflow-hidden"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix3.Outlet, null), /* @__PURE__ */ import_react.default.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ import_react.default.createElement(import_remix3.Scripts, null), /* @__PURE__ */ import_react.default.createElement(import_remix3.LiveReload, null)));
}
var loader = () => {
  return (0, import_remix2.json)({ env: "production" });
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

// route:/Users/pahrizalmarup/playground/main-remix/app/routes/index.tsx
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

// route:/Users/pahrizalmarup/playground/main-remix/app/routes/index.tsx
var import_clsx3 = __toESM(require("clsx"));
function Index() {
  const [gameId, setGameId] = import_react4.default.useState("");
  const [playerName, setPlayerName] = import_react4.default.useState("");
  const data = (0, import_react_redux2.useSelector)((state) => state.game.data);
  const notFound = (0, import_react_redux2.useSelector)((state) => state.game.notFound);
  const dispatch = (0, import_react_redux2.useDispatch)();
  const joinIdRef = import_react4.default.useRef(null);
  const playerNameRef = import_react4.default.useRef(null);
  const nav = (0, import_remix4.useNavigate)();
  const handleRoomInput = (event) => {
    const value = event.target.value;
    setGameId(value);
  };
  const handleNameInput = (event) => {
    const value = event.target.value;
    setPlayerName(value);
  };
  const handleJoin = () => {
    var _a, _b;
    if (!playerName) {
      (_a = playerNameRef.current) == null ? void 0 : _a.focus();
      return;
    }
    if (!gameId) {
      (_b = joinIdRef.current) == null ? void 0 : _b.focus();
      return;
    }
    dispatch(gameActions.join(gameId, playerName));
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
    ref: joinIdRef,
    value: gameId,
    className: "h-100 flex flex-grow bg-transparent py-4 outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo",
    placeholder: "Enter the game ID here",
    onChange: handleRoomInput
  }), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "text-lime-500 font-virgil py-4 xl:text-xl lg:text-lg md:text-md text-sm"
  }, "and"), /* @__PURE__ */ import_react4.default.createElement("input", {
    ref: playerNameRef,
    maxLength: 20,
    value: playerName,
    className: "h-100 flex flex-grow bg-transparent py-4  outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo",
    placeholder: "Type your name here",
    onChange: handleNameInput
  }), /* @__PURE__ */ import_react4.default.createElement(Button_default, {
    onClick: handleJoin
  }, "Play")), /* @__PURE__ */ import_react4.default.createElement("div", {
    style: {
      visibility: gameId ? "hidden" : "visible"
    },
    className: (0, import_clsx3.default)("sm:mr-0 xs:mr-0 xl:mr-4 lg:mr-4 md:mr-4 sm:w-full xs:w-full text-center mt-4")
  }, /* @__PURE__ */ import_react4.default.createElement(Button_default, {
    onClick: handleCreateGame
  }, "Create your own game")))));
}

// route:/Users/pahrizalmarup/playground/main-remix/app/routes/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default,
  loader: () => loader2
});
init_react();
var import_react14 = __toESM(require("react"));
var import_react_redux7 = require("react-redux");
var import_remix7 = __toESM(require_remix());

// app/components/Alert.tsx
init_react();
var import_clsx4 = __toESM(require("clsx"));
var import_react5 = __toESM(require("react"));
var Alert = ({ show, children, onCancel, onConfirm }) => {
  return show ? /* @__PURE__ */ import_react5.default.createElement("div", {
    className: (0, import_clsx4.default)("absolute z-40 w-screen h-screen top-0 left-0 backdrop-blur-md flex flex-col justify-center items-center")
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: (0, import_clsx4.default)("text-center text-2xl font-virgil", "w-[320px] h-[240px]", "bg-slate-600", "border-2 border-slate-900", "rounded-lg shadow-lg", "flex flex-col justify-center items-center")
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

// app/components/GameResult.tsx
init_react();
var import_clsx5 = __toESM(require("clsx"));
var import_react6 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());
var import_react_confetti = __toESM(require("react-confetti"));
var import_react_redux3 = require("react-redux");
var GameResult = (props) => {
  const nav = (0, import_remix5.useNavigate)();
  const dispatch = (0, import_react_redux3.useDispatch)();
  const audio = (0, import_react6.useRef)(null);
  import_react6.default.useEffect(() => {
    if (audio.current) {
      audio.current.play();
    }
  }, []);
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: (0, import_clsx5.default)("fixed top-0 left-0", "z-[99] flex flex-col justify-center items-center", "w-screen h-screen", "backdrop-blur-[3px]")
  }, /* @__PURE__ */ import_react6.default.createElement("audio", {
    ref: audio,
    src: props.isTheWinner ? "/audio/winner.wav" : "/audio/lost.mp3",
    autoPlay: true
  }), props.isTheWinner && /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(import_react_confetti.default, {
    className: "w-screen h-screen"
  })), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: (0, import_clsx5.default)("flex flex-col justify-center items-center", "w-[400px] p-8", "border-2 border-slate-100", "bg-slate-900 text-slate-100 font-exo text-4xl")
  }, /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "text-4xl"
  }, props.isTheWinner ? "You won! \u{1F389}\u{1F389}\u{1F389}" : "You lost! \u{1F62D}\u{1F62D}\u{1F62D}"), !props.isTheWinner && /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "text-2xl mt-4 font-virgil"
  }, "The winner is ", /* @__PURE__ */ import_react6.default.createElement("b", {
    className: "text-lime-500 font-exo"
  }, props.name)), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ import_react6.default.createElement(Button_default, {
    onClick: () => {
      location.href = "/";
    }
  }, "Back to lobby"))));
};
var GameResult_default = GameResult;

// app/components/GameTable.tsx
init_react();
var import_clsx7 = __toESM(require("clsx"));
var import_react10 = __toESM(require("react"));

// app/components/Card.tsx
init_react();
var import_react7 = __toESM(require("react"));
var Card = ({ card, onClick, className, animate }) => {
  const cardRef = (0, import_react7.useRef)(null);
  const [img, setImg] = import_react7.default.useState();
  import_react7.default.useEffect(() => {
    preloadImage(card.image).then((image) => {
      setImg(image);
    });
  }, []);
  return /* @__PURE__ */ import_react7.default.createElement("img", {
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

// app/components/PlayerAvatar.tsx
init_react();
var import_clsx6 = __toESM(require("clsx"));
var import_react9 = __toESM(require("react"));
var import_react_redux5 = require("react-redux");

// app/components/MediaSelector.tsx
init_react();
var import_react8 = __toESM(require("react"));
var import_react_redux4 = require("react-redux");
var MediaSelector = ({ show: showProp, onClose }) => {
  const [show, setShow] = (0, import_react8.useState)(showProp);
  const [videoDevices, setVideoDevices] = (0, import_react8.useState)([]);
  const [audioDevices, setAudioDevices] = (0, import_react8.useState)([]);
  const videoDeviceId = (0, import_react_redux4.useSelector)((state) => state.game.videoDeviceId);
  const audioDeviceId = (0, import_react_redux4.useSelector)((state) => state.game.audioDeviceId);
  const dispatch = (0, import_react_redux4.useDispatch)();
  import_react8.default.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices2 = devices.filter((device) => device.kind === "videoinput");
      const audioDevices2 = devices.filter((device) => device.kind === "audioinput");
      setVideoDevices(videoDevices2);
      setAudioDevices(audioDevices2);
    });
  }, []);
  return show ? /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "fixed top-0 left-0 z-50 flex flex-col z-10 w-screen h-screen justify-center items-center backdrop-blur-2xl"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "bg-slate-600 p-8 flex flex-col justify-center items-center rounded-md"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "flex flex-col space-y-2 w-full"
  }, /* @__PURE__ */ import_react8.default.createElement("p", {
    className: "text-white"
  }, "Select your video capture device"), /* @__PURE__ */ import_react8.default.createElement("select", {
    value: videoDeviceId,
    className: "px-4 py-2 w-full bg-slate-700 text-white font-exo",
    onChange: (e) => dispatch(gameActions.setVideoDeviceId(e.target.value))
  }, videoDevices.map((device, i) => /* @__PURE__ */ import_react8.default.createElement("option", {
    key: i,
    value: device.deviceId
  }, device.label)))), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "flex flex-col space-y-2 w-full mt-4"
  }, /* @__PURE__ */ import_react8.default.createElement("p", {
    className: "text-white"
  }, "Select your audio input"), /* @__PURE__ */ import_react8.default.createElement("select", {
    value: audioDeviceId,
    className: "px-4 py-2 w-full bg-slate-700 text-white font-exo",
    onChange: (e) => dispatch(gameActions.setAudioDeviceId(e.target.value))
  }, audioDevices.map((device, i) => /* @__PURE__ */ import_react8.default.createElement("option", {
    key: i,
    value: device.deviceId
  }, device.label)))), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "flex flex-row w-full justify-end items-center mt-4"
  }, /* @__PURE__ */ import_react8.default.createElement(Button_default, {
    className: "bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4",
    onClick: () => {
      setShow(false);
      onClose && onClose();
    }
  }, "OK")))) : null;
};
var MediaSelector_default = import_react8.default.memo(MediaSelector);

// app/assets/icons/Microphone.tsx
init_react();
var React10 = __toESM(require("react"));
var MicrophoneIcon = (props) => /* @__PURE__ */ React10.createElement("svg", __spreadValues({
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  id: "magicoon-Regular",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /* @__PURE__ */ React10.createElement("path", {
  id: "microphone-Regular-2",
  "data-name": "microphone-Regular",
  className: "cls-1",
  d: "M12,15.75A4.756,4.756,0,0,0,16.75,11V7a4.75,4.75,0,0,0-9.5,0v4A4.756,4.756,0,0,0,12,15.75ZM8.75,7a3.25,3.25,0,0,1,6.5,0v4a3.25,3.25,0,0,1-6.5,0Zm4,11.712V20.25H16a.75.75,0,0,1,0,1.5H8a.75.75,0,0,1,0-1.5h3.25V18.712A7.76,7.76,0,0,1,4.25,11a.75.75,0,0,1,1.5,0,6.25,6.25,0,0,0,12.5,0,.75.75,0,0,1,1.5,0A7.76,7.76,0,0,1,12.75,18.712Z"
}));
var Microphone_default = MicrophoneIcon;

// app/assets/icons/CameraIcon.tsx
init_react();
var React11 = __toESM(require("react"));
var CameraIcon = (props) => /* @__PURE__ */ React11.createElement("svg", __spreadValues({
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /* @__PURE__ */ React11.createElement("path", {
  d: "M5.25 6C4.00736 6 3 7.00736 3 8.25V15.75C3 16.9926 4.00736 18 5.25 18H14.25C15.4926 18 16.5 16.9926 16.5 15.75V13.6013L19.7699 16.3262C19.9934 16.5125 20.3046 16.5526 20.5681 16.4292C20.8317 16.3058 21 16.041 21 15.75V8.25C21 7.95899 20.8317 7.69424 20.5681 7.57081C20.3046 7.44737 19.9934 7.48753 19.7699 7.67383L16.5 10.3987V8.25C16.5 7.00736 15.4926 6 14.25 6H5.25Z",
  fill: props.fill
}));
var CameraIcon_default = CameraIcon;

// app/components/PlayerAvatar.tsx
var PlayerAvatar = (props) => {
  const dispatch = (0, import_react_redux5.useDispatch)();
  const videoRef = import_react9.default.useRef(null);
  const [cameraEnabled, setCameraEnabled] = (0, import_react9.useState)(props.stream ? props.stream.getVideoTracks()[0].enabled : true);
  const [micEnabled, setMicEnabled] = (0, import_react9.useState)(props.stream ? props.stream.getAudioTracks()[0].enabled : false);
  const [showMediaSelector, setShowMediaSelector] = (0, import_react9.useState)(false);
  const socket = (0, import_react_redux5.useSelector)((state) => state.socket.client);
  const gameData = (0, import_react_redux5.useSelector)((state) => {
    var _a;
    return (_a = state.game.data) == null ? void 0 : _a.gameData;
  });
  const vchat = (0, import_react_redux5.useSelector)((state) => state.game.videochat);
  const peers = (0, import_react_redux5.useSelector)((state) => state.game.peers);
  const videoDeviceId = (0, import_react_redux5.useSelector)((state) => state.game.videoDeviceId);
  const audioDeviceId = (0, import_react_redux5.useSelector)((state) => state.game.audioDeviceId);
  import_react9.default.useEffect(() => {
    if (props.me) {
      navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: videoDeviceId,
          height: 128
        },
        audio: {
          deviceId: audioDeviceId
        }
      }).then((stream) => {
        if (videoRef.current && socket) {
          try {
            const video = videoRef.current;
            video.srcObject = stream;
            stream.getAudioTracks()[0].enabled = false;
            dispatch(gameActions.setPlayerStream(props.id, stream));
            if (gameData) {
              dispatch(gameActions.initVideChatController(stream, socket));
            }
          } catch (error) {
          }
        }
      }).catch((err) => console.log(err));
    } else {
      if (!socket)
        return;
      const peer = peers[props.socketId];
      if (peer) {
        peer.peer.on("stream", (stream) => {
          if (videoRef.current) {
            const video = videoRef.current;
            video.srcObject = stream;
          }
          socket.on("muteVideo", (data) => {
            if (data.playerSocketId === props.socketId) {
              stream.getVideoTracks()[0].enabled = data.muted;
              if (videoRef.current) {
                const video = videoRef.current;
                video.muted = data.muted;
              }
            }
          });
        });
      }
    }
  }, [audioDeviceId, videoDeviceId, gameData, peers]);
  (0, import_react9.useEffect)(() => {
    if (props.stream)
      props.stream.getVideoTracks()[0].enabled = cameraEnabled;
    if (videoRef.current)
      videoRef.current.style.display = cameraEnabled ? "block" : "none";
    vchat && vchat.muteMyVideo(cameraEnabled);
  }, [cameraEnabled, props.stream, vchat]);
  return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: (0, import_clsx6.default)("relative z-10 h-[128px] text-center flex flex-col justify-center items-center")
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    style: {
      borderColor: props.name && !props.me ? `${props.colors}` : "inherit"
    },
    className: (0, import_clsx6.default)("absolute z-0 w-[128px] h-[128px] rounded-full bg-black", {
      "border-8 border-sky-400": props.name && props.me,
      "border-8 border-cyan-400 bg-cyan-500": props.name && !props.me,
      "border-8 border-dashed animate-spin-slow": !props.name || props.playTurn
    })
  }, " "), /* @__PURE__ */ import_react9.default.createElement("div", {
    onDoubleClick: () => setShowMediaSelector(true),
    style: {
      backgroundColor: props.name && !props.me ? `${props.colors}cc` : "inherit"
    },
    className: (0, import_clsx6.default)("relative w-[128px] h-[128px] rounded-full overflow-hidden flex flex-col items-center justify-center font-virgil z-10 ow text-xl px-4", {
      "text-slate-100 bg-slate-700": !props.name || props.playTurn,
      "text-slate-900": props.name,
      "border-2 border-slite-100": props.me
    })
  }, /* @__PURE__ */ import_react9.default.createElement("video", {
    ref: videoRef,
    style: { maxWidth: "unset" },
    title: "Double click to change the source",
    className: (0, import_clsx6.default)("h-[128px] relative"),
    autoPlay: true,
    playsInline: true
  })), props.name && /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "absolute items-center justify-center space-x-2 px-2 flex flex-row overflow-hidden -bottom-1 z-10 py-1 border-2 bg-slate-700 font-exo text-lime-500 w-full rounded-xl"
  }, props.me && props.stream && /* @__PURE__ */ import_react9.default.createElement(CameraIcon_default, {
    onClick: () => {
      setCameraEnabled(!cameraEnabled);
    },
    className: "cursor-pointer",
    stroke: cameraEnabled ? "#FFF" : "#FFFFFF22",
    fill: cameraEnabled ? "#FFF" : "#FFFFFF22"
  }), /* @__PURE__ */ import_react9.default.createElement("p", {
    style: { textAlign: "center" },
    className: "flex flex-grow overflow-clip flex-row items-center justify-center"
  }, props.name), props.me && props.stream && /* @__PURE__ */ import_react9.default.createElement(Microphone_default, {
    onClick: () => {
      if (props.stream) {
        props.stream.getAudioTracks()[0].enabled = !props.stream.getAudioTracks()[0].enabled;
        setMicEnabled(props.stream.getAudioTracks()[0].enabled);
      }
    },
    className: "cursor-pointer",
    stroke: micEnabled ? "#FFF" : "#FFFFFF22",
    fill: micEnabled ? "#FFF" : "#FFFFFF22"
  }))), showMediaSelector && /* @__PURE__ */ import_react9.default.createElement(MediaSelector_default, {
    show: showMediaSelector,
    onClose: () => setShowMediaSelector(false)
  }));
};
var PlayerAvatar_default = import_react9.default.memo(PlayerAvatar);

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
  onFold,
  hasFreeFold = false
}) => {
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: (0, import_clsx7.default)("absolute z-0 inset-0 w-screen h-screen flex flex-col justify-center items-center", {
      blur
    })
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "relative w-[95%] h-[70%] min-h-[320px] min-w-[640px] max-h-[480px] max-w-[1024px] bg-slate-700 rounded-[6rem] border-[1rem] table-shadow shadow-slate-100 border-slate-900 flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: (0, import_clsx7.default)("absolute  shadow-[0px_0px_10px_#000] w-[128px] h-[128px] border-[8px] rounded-full bg-slate-700 border-slate-900 flex flex-col justify-center items-center", "-bottom-[64px]")
  }, currentPlayer && /* @__PURE__ */ import_react10.default.createElement(PlayerAvatar_default, __spreadProps(__spreadValues({}, currentPlayer), {
    me: true,
    playTurn: nextPlayer !== void 0 && currentPlayer && currentPlayer.id === nextPlayer,
    colors: "#29AEEF"
  }))), players.filter((p) => p.id !== (currentPlayer == null ? void 0 : currentPlayer.id)).map((player, index) => /* @__PURE__ */ import_react10.default.createElement("div", {
    key: index,
    className: (0, import_clsx7.default)("absolute  shadow-[0px_0px_10px_#000] w-[128px] h-[128px] border-[8px] rounded-full bg-slate-700 border-slate-900 flex flex-col justify-center items-center", {
      "-left-[77px]": index === 0,
      "-right-[77px]": index === 1,
      "-top-[77px]": index === 2
    })
  }, /* @__PURE__ */ import_react10.default.createElement(PlayerAvatar_default, __spreadProps(__spreadValues({}, player), {
    me: false,
    colors: player.colors,
    playTurn: player.id === nextPlayer
  })))), /* @__PURE__ */ import_react10.default.createElement("div", {
    id: "player-cards",
    className: (0, import_clsx7.default)("absolute bottom-0 card-deck flex w-full justify-center items-center flex-row", {
      "-space-x-[4.2rem]": cards.length > 25,
      "-space-x-[3.6rem]": cards.length > 5 && cards.length <= 25,
      "-space-x-[2.4rem]": cards.length <= 5
    })
  }, cards.map((card, i) => /* @__PURE__ */ import_react10.default.createElement(Card_default, {
    card,
    key: card.code,
    onClick: onFold
  }))), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-col w-full"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    id: "info-message-container",
    className: "flex w-full justify-center mb-4 items-center flex-row"
  }, hasFreeFold && /* @__PURE__ */ import_react10.default.createElement("div", {
    id: "freefold-info",
    className: "text-white text-center flex-col"
  }, /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "font-exo text-xl text-lime-500"
  }, "Awesome!!"), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "text-md text-white"
  }, "You can fold any card if no one can't beat your card \u{1F60E}"))), /* @__PURE__ */ import_react10.default.createElement("div", {
    id: "table-cards",
    style: {},
    className: (0, import_clsx7.default)("flex w-full justify-center items-center flex-row", {
      "-space-x-[4.2rem]": cardOnTable.length > 25,
      "-space-x-[3.6rem]": cardOnTable.length > 5 && cardOnTable.length <= 25,
      "-space-x-[2.4rem]": cardOnTable.length <= 5
    })
  }, cardOnTable.map((card, i) => /* @__PURE__ */ import_react10.default.createElement(Card_default, {
    card,
    key: card.code
  }))))));
};
var GameTable_default = GameTable;

// app/components/Toolbar.tsx
init_react();
var import_clsx8 = __toESM(require("clsx"));
var import_react11 = __toESM(require("react"));
var Toolbar = ({ blur, onLeave, onPass, canPass }) => {
  return /* @__PURE__ */ import_react11.default.createElement("div", {
    className: (0, import_clsx8.default)("absolute bottom-0", "flex flex-row align-center", "justify-center", "w-screen", "bg-slate-600", "border-2 border-slate-900", { blur })
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "flex flex-row flex-grow justify-start items-center"
  }, " "), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "flex flex-row flex-grow justify-center items-center"
  }, /* @__PURE__ */ import_react11.default.createElement(Button_default, {
    disabled: !canPass,
    className: "bg-orange-500 font-exo hover:bg-orange-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-md",
    onClick: onPass
  }, "Pass")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "flex flex-row flex-grow justify-end items-center"
  }, /* @__PURE__ */ import_react11.default.createElement(Button_default, {
    className: "bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-md",
    onClick: onLeave
  }, "Leave")));
};
var Toolbar_default = Toolbar;

// app/components/WaitingRoom.tsx
init_react();
var import_react13 = __toESM(require("react"));

// app/components/ShareLink.tsx
init_react();
var import_clsx9 = __toESM(require("clsx"));
var import_react12 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());
var import_use_copy = __toESM(require("use-copy"));

// app/assets/icons/Copy.tsx
init_react();
var React15 = __toESM(require("react"));
var Copy = (props) => /* @__PURE__ */ React15.createElement("svg", __spreadValues({
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  id: "magicoon-Regular",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /* @__PURE__ */ React15.createElement("g", {
  id: "copy-Regular"
}, /* @__PURE__ */ React15.createElement("path", {
  d: "M21.237,6.177,17.823,2.763a1.736,1.736,0,0,0-1.237-.513H11A3.754,3.754,0,0,0,7.25,6v.25H6A3.754,3.754,0,0,0,2.25,10v8A3.754,3.754,0,0,0,6,21.75h7A3.754,3.754,0,0,0,16.75,18v-.25H18A3.754,3.754,0,0,0,21.75,14V7.414A1.736,1.736,0,0,0,21.237,6.177ZM17.75,4.811,19.189,6.25h-.377A1.064,1.064,0,0,1,17.75,5.188ZM15.25,18A2.252,2.252,0,0,1,13,20.25H6A2.252,2.252,0,0,1,3.75,18V10A2.252,2.252,0,0,1,6,7.75H7.25V14A3.754,3.754,0,0,0,11,17.75h4.25ZM18,16.25H11A2.252,2.252,0,0,1,8.75,14V6A2.252,2.252,0,0,1,11,3.75h5.25V5.188A2.565,2.565,0,0,0,18.812,7.75H20.25V14A2.252,2.252,0,0,1,18,16.25Z"
})));
var Copy_default = Copy;

// app/components/ShareLink.tsx
var ShareLink = () => {
  const loc = (0, import_remix6.useLocation)();
  const [gameUrl, setGameUrl] = (0, import_react12.useState)("");
  const [copied, copy, setCopied] = (0, import_use_copy.default)(gameUrl);
  const copyGameLink = () => {
    copy();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1e3);
  };
  import_react12.default.useEffect(() => {
    const msg = `Hi there!
This game is awesome, Main-Remix.
Join me here ${window.location.href}

Let's play!!`;
    setGameUrl(msg);
  }, []);
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    className: (0, import_clsx9.default)("flex flex-row border items-center border-slate-200 relative font-exo", "font-virgil px-4 pt-4 mb-8 before:text-slate-100 before:content-['Game_ID'] pb-3", "before:-top-3 before:absolute before:bg-slate-700 before:px-2 before:-ml-2")
  }, /* @__PURE__ */ import_react12.default.createElement("input", {
    value: loc.pathname.slice(1),
    className: "rounded bg-transparent h-full w-full outline-none font-exo text-lime-400 text-2xl",
    type: "text",
    readOnly: true
  }), /* @__PURE__ */ import_react12.default.createElement("button", {
    onClick: copyGameLink,
    className: (0, import_clsx9.default)("relative cursor-pointer font-virgil hover:before:content-['Copy_and_share']", "before:w-max hover:before:bg-slate-900 before:p-2 before:rounded-lg", "before:absolute before:-top-[40px] before:left-1/2 before:mr-2")
  }, /* @__PURE__ */ import_react12.default.createElement(Copy_default, {
    stroke: "#FFFFFF",
    fill: "#FFFFFF"
  })));
};
var ShareLink_default = ShareLink;

// app/components/WaitingRoom.tsx
var import_react_redux6 = require("react-redux");
var WaitingRoom = ({
  ownerId = "",
  players = [],
  abortText = "Abort!",
  startText = "Launch the game \u{1F680}",
  maxPlayers = 4,
  onAbort,
  onStart,
  showStart
}) => {
  const [disableStart, setDisableStart] = import_react13.default.useState(false);
  const myPlayerData = (0, import_react_redux6.useSelector)((state) => {
    var _a;
    return (_a = state.game.data) == null ? void 0 : _a.playerData;
  });
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "flex flex-col z-10 w-screen h-screen backdrop-blur-2xl justify-center items-center"
  }, /* @__PURE__ */ import_react13.default.createElement(ShareLink_default, null), /* @__PURE__ */ import_react13.default.createElement("p", {
    className: "text-center text-2xl font-exo mb-8"
  }, players.length === maxPlayers ? `Starting the game, please standby!...` : `Waiting another player...`), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "flex flex-row space-x-4 items-center"
  }, players.map((player, i) => /* @__PURE__ */ import_react13.default.createElement(PlayerAvatar_default, __spreadProps(__spreadValues({}, player), {
    me: player.id === (myPlayerData == null ? void 0 : myPlayerData.id),
    key: `player-${i}`
  })))), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "flex flex-row space-x-4 items-center mt-8"
  }, /* @__PURE__ */ import_react13.default.createElement(Button_default, {
    className: "bg-slate-500 font-exo hover:bg-slate-600 hover:text-slate-100 text-slate-900 font-bold py-4 px-8",
    onClick: onAbort
  }, abortText), showStart && /* @__PURE__ */ import_react13.default.createElement(Button_default, {
    disabled: disableStart,
    onClick: (e) => {
      onStart && onStart();
      setDisableStart(true);
    }
  }, players.length === 1 ? `Play with our bot \u{1F916}` : startText)));
};
var WaitingRoom_default = WaitingRoom;

// route:/Users/pahrizalmarup/playground/main-remix/app/routes/$id.tsx
var loader2 = async ({ params }) => {
  const game = games.find((game2) => game2.getId() === params.id);
  if (!game) {
    return (0, import_remix7.json)(__spreadProps(__spreadValues({}, params), { players: [], status: "UNDEFINED" /* UNDEFINED */ }));
  }
  return (0, import_remix7.json)(__spreadValues(__spreadProps(__spreadValues({}, game.getData()), {
    players: game.getPlayers().map((p) => p.getId()),
    status: game.getStatus()
  }), params));
};
var GameScreen = () => {
  const data = (0, import_remix7.useLoaderData)();
  const socket = (0, import_react_redux7.useSelector)((state) => state.socket.client);
  const dataState = (0, import_react_redux7.useSelector)((state) => state.game.data);
  const currentPlayer = (0, import_react_redux7.useSelector)((state) => state.game.currentPlayer);
  const cards = (0, import_react_redux7.useSelector)((state) => state.game.cards);
  const players = (0, import_react_redux7.useSelector)((state) => state.game.players);
  const gameStatus = (0, import_react_redux7.useSelector)((state) => state.game.status);
  const cardOnTable = (0, import_react_redux7.useSelector)((state) => state.game.tableCard);
  const hasFreeFold = (0, import_react_redux7.useSelector)((state) => state.game.hasFreeFold);
  const winner = (0, import_react_redux7.useSelector)((state) => state.game.winner);
  const [showAlert, setShowAlert] = import_react14.default.useState(false);
  const dispatch = (0, import_react_redux7.useDispatch)();
  const handleLeave = () => {
    dispatch(gameActions.leave());
  };
  const handleFold = (card) => {
    dispatch(gameActions.foldCard(card));
  };
  import_react14.default.useEffect(() => {
    if (data.status === "UNDEFINED" /* UNDEFINED */) {
      dispatch(gameActions.toggleNotFound());
      window.location.href = "/";
    }
  }, [data]);
  import_react14.default.useEffect(() => {
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
  return /* @__PURE__ */ import_react14.default.createElement("div", {
    className: "w-screen h-screen flex flex-col justify-center items-center"
  }, gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */ && cards.length === 0 && /* @__PURE__ */ import_react14.default.createElement(WaitingRoom_default, {
    players,
    ownerId: dataState == null ? void 0 : dataState.gameData.owner,
    showStart: (dataState == null ? void 0 : dataState.gameData.owner) === (dataState == null ? void 0 : dataState.playerData.id),
    onAbort: () => dispatch(gameActions.leave()),
    onStart: () => dispatch(gameActions.start())
  }), !winner && /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(GameTable_default, {
    players,
    cardOnTable,
    blur: gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */ && cards.length === 0,
    currentPlayer: dataState == null ? void 0 : dataState.playerData,
    ownerId: dataState == null ? void 0 : dataState.gameData.owner,
    nextPlayer: currentPlayer,
    cards,
    hasFreeFold,
    onFold: handleFold
  }), gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */ && cards.length === 0 ? /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null) : /* @__PURE__ */ import_react14.default.createElement(Toolbar_default, {
    blur: gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */ && cards.length === 0,
    canPass: (dataState == null ? void 0 : dataState.playerData.id) === currentPlayer,
    onLeave: () => setShowAlert(true),
    onPass: () => dispatch(gameActions.passToNextPlayer())
  }), /* @__PURE__ */ import_react14.default.createElement(Alert_default, {
    show: showAlert,
    onCancel: () => setShowAlert(false),
    onConfirm: handleLeave
  }, /* @__PURE__ */ import_react14.default.createElement("p", null, "Are you sure want to leave the game now?"))), winner && /* @__PURE__ */ import_react14.default.createElement(GameResult_default, __spreadProps(__spreadValues({}, winner), {
    isTheWinner: winner.id === (dataState == null ? void 0 : dataState.playerData.id)
  })));
};
var id_default = GameScreen;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "a4606425", "entry": { "module": "/build/entry.client-JZIKONJT.js", "imports": ["/build/_shared/chunk-RF577X2U.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-TRI33ZU2.js", "imports": ["/build/_shared/chunk-ELE4ZPL7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$id": { "id": "routes/$id", "parentId": "root", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$id-DSKUUVNW.js", "imports": ["/build/_shared/chunk-W2Q56LR2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-JWGQZ4CH.js", "imports": ["/build/_shared/chunk-W2Q56LR2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A4606425.js" };

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
  getName() {
    return this.data.name;
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
  }
  getCards() {
    return this.data.cards || [];
  }
  isBot() {
    return this.data.bot;
  }
  leave() {
    this.data = {
      id: "",
      name: "",
      socketId: "",
      cards: [],
      bot: false
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
    socket.on("join video chat", this.onJoinVideoChat.bind(this));
    socket.on("sending signal", this.onSendingSignal.bind(this));
    socket.on("returning signal", this.onReturningSignal.bind(this));
    socket.on("muteVideo", this.onMuteVideo.bind(this));
  }
  onMuteVideo(data) {
    printLog("info", this.socket.id, "mute his video:", data.muted);
    this.server.in(data.gameId).emit("muteVideo", { muted: data.muted, playerSocketId: this.socket.id });
  }
  onReturningSignal(payload) {
    printLog("info", this.socket.id, "returning his signal to", payload.callerId);
    this.server.to(payload.callerId).emit("receiving returned signal", { signal: payload.signal, id: this.socket.id });
  }
  onSendingSignal(data) {
    printLog("info", data.callerId, " sending his signal to ", data.remoteId);
    this.server.to(data.remoteId).emit("joined video chat", {
      signal: data.signal,
      callerId: data.callerId
    });
  }
  onJoinVideoChat(gameId) {
    printLog("info", "onJoinVideoChat", "getting game#", gameId);
    const game = games.find((game2) => game2.getId() === gameId);
    let playerSockets = [];
    if (game) {
      playerSockets = game.getPlayers().filter((p) => p.getSocketId() !== this.socket.id).map((p) => p.getSocketId());
    }
    this.socket.emit("peer list", playerSockets);
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
      cards: [],
      bot: false
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
    this.socket.join(newGame.getId());
    this.socket.emit("created", joinData);
    printLog("info", "CLIENT", "New game created: ", newGame.getId());
  }
  join(data) {
    let newPlayer = new PlayerController({
      id: data.playerData.id || (0, import_uuid2.v4)(),
      name: data.playerData.name || generateName(1),
      socketId: this.socket.id,
      cards: data.playerData.cards || [],
      bot: data.playerData.bot || false
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
    printLog("info", "PLAYER", "Joining game: ", newPlayer.getId(), "(", newPlayer.getName(), ")");
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
    const game = games.find((game2) => game2.getId() === data.gameData.id);
    if (game) {
      const player = game.getPlayerById(data.playerData.id);
      if (player) {
        printLog("warning", "PLAYER", "Leaving game: ", data.playerData.id, "(", player.getName(), ")");
        this.server.in(game.getId()).emit("left", player.getData({ includeCards: false }));
        game.removePlayer(player);
      }
    }
  }
  async start(data) {
    const game = games.find((game2) => game2.getId() === data.gameData.id);
    if (game) {
      if (game.getTotalPlayer() === 1) {
        const botPlayer = new PlayerController({
          id: (0, import_uuid2.v4)(),
          name: `BOT ${generateName(1)}`,
          socketId: "",
          cards: [],
          bot: true
        });
        game.addPlayer(botPlayer);
      }
      await game.start();
      const players = game.getPlayers();
      for (const player of players) {
        if (!player.isBot()) {
          this.server.in(player.getSocketId()).emit("cards", player.getCards());
        }
      }
      const tableCard = game.getCardOnTable();
      this.server.in(game.getId()).emit("tableCard", tableCard);
      this.server.in(game.getId()).emit("started", game.getData());
      const playerData = players.map((player) => player.getData({ includeCards: false }));
      this.server.in(game.getId()).emit("players", playerData);
    }
  }
  foldCard(data) {
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
      let lastCardOnTable = cardOnTable[cardOnTable.length - 1];
      if (lastCardOnTable.value < data.card.value && lastCardOnTable.suit === data.card.suit || game.isFreeFold() && game.getFreeFoldOwner() === data.playerId) {
        const freeFoldPlayer = game.getFreeFoldPlayer();
        if (freeFoldPlayer) {
          game.resetFreeFold();
          this.server.in(freeFoldPlayer.getSocketId()).emit("freeFold", game.isFreeFold());
        }
        game.pushCardOnTable(data.card);
        lastCardOnTable = data.card;
        player.removeCard(data.card);
        const currentCard = player.getCards();
        this.socket.emit("cards", currentCard);
        if (player.getCards().length === 0) {
          this.server.in(game.getId()).emit("winner", player.getData({ includeCards: false }));
          game.setWinner(player);
        } else {
          let nextPlayer = game.getNextPlayer();
          if (nextPlayer.isBot()) {
            const nextPlayerAfterBot = this.proceedBotPlay(nextPlayer, lastCardOnTable, game);
            if (!nextPlayerAfterBot)
              return;
            nextPlayer = nextPlayerAfterBot;
          }
          this.server.in(game.getId()).emit("nextPlayer", nextPlayer.getId());
        }
        const tableCard = game.getCardOnTable();
        this.server.in(game.getId()).emit("tableCard", tableCard);
      } else {
        printLog("warning", "CLIENT", "Folding card failed. folded card is lower than currently on table ", this.socket.id);
      }
    } else {
      printLog("warning", "CLIENT", "Folding card failed. Player not found ", data.playerId);
    }
  }
  proceedBotPlay(botPlayer, lastCardOnTable, game) {
    const botCards = botPlayer.getCards();
    let botCardToFold = botCards.find((card) => card.value > lastCardOnTable.value && card.suit === lastCardOnTable.suit);
    if (game.isFreeFold()) {
      botCardToFold = botCards[Math.floor(Math.random() * botCards.length)];
    }
    if (botCardToFold) {
      botPlayer.removeCard(botCardToFold);
      game.pushCardOnTable(botCardToFold);
      const tableCard = game.getCardOnTable();
      this.server.in(game.getId()).emit("tableCard", tableCard);
      if (botPlayer.getCards().length === 0) {
        this.server.in(game.getId()).emit("winner", botPlayer.getData({ includeCards: false }));
        game.setWinner(botPlayer);
        return;
      }
    } else {
      if (!game.isFreeFold()) {
        const prevPlayer = game.getPreviousPlayer();
        game.setFreeFold(true, prevPlayer.getId());
        this.server.in(prevPlayer.getSocketId()).emit("freeFold", game.isFreeFold());
        printLog("success", "CLIENT", "BOT Assigning FREE FOLD to player: ", prevPlayer.getId(), "(", prevPlayer.getName(), ")");
      }
    }
    botPlayer = game.getNextPlayer();
    return botPlayer;
  }
  passToNextPlayer(params) {
    const game = games.find((game2) => game2.getId() === params.gameId);
    if (!game) {
      printLog("warning", "CLIENT", "Passing to next player failed. Game not found ", this.socket.id);
      return;
    }
    if (!game.isFreeFold()) {
      const prevPlayer = game.getPreviousPlayer();
      game.setFreeFold(true, prevPlayer.getId());
      this.server.in(prevPlayer.getSocketId()).emit("freeFold", game.isFreeFold());
      printLog("success", "CLIENT", "Assigning FREE FOLD to player: ", prevPlayer.getId(), "(", prevPlayer.getName(), ")");
    }
    let nextPlayer = game.getNextPlayer();
    if (nextPlayer.isBot()) {
      const cardOnTable = game.getCardOnTable();
      if (!cardOnTable)
        return;
      let lastCardOnTable = cardOnTable[cardOnTable.length - 1];
      const nextPlayerAfterBot = this.proceedBotPlay(nextPlayer, lastCardOnTable, game);
      if (!nextPlayerAfterBot)
        return;
      nextPlayer = nextPlayerAfterBot;
    }
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
  mode: "production"
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
