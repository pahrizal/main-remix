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
var animation_default = "/build/_assets/animation-2KLKVNUX.css";

// app/assets/styles/app.css
var app_default = "/build/_assets/app-BCGGNUNM.css";

// app/assets/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VIFXMCJT.css";

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

// app/controllers/game.ts
var games = [];
var GameController = class {
  constructor(data) {
    this.data = {
      id: (0, import_uuid.v4)(),
      level: 1,
      owner: "",
      playerCount: 0
    };
    this.status = "WAITING" /* WAITING */;
    this.players = [];
    this.data = __spreadProps(__spreadValues({}, data), { playerCount: this.players.length });
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
  start() {
    printLog("info", "GAME", "Game started: ", this.data.id);
    this.status = "STARTED" /* STARTED */;
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
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
      });
      socket.on("left", (payload) => {
        console.log(payload.name, "has left the game");
        gameActions.removePlayer(payload.id)(dispatch, getState);
      });
      socket.on("started", (payload) => {
        console.log("game started", payload);
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setGameStatus("STARTED" /* STARTED */)(dispatch, getState);
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
  status: "WAITING" /* WAITING */
};
var GameActionsTypes = {
  SET_GAME_DATA: "SET_GAME_DATA",
  SET_GAME_NOT_FOUND: "SET_GAME_NOT_FOUND",
  SET_PLAYERS: "SET_PLAYERS",
  SET_GAME_STATUS: "SET_GAME_STATUS"
};
var gameActions = {
  setPlayers: (players) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: players
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
        owner: ""
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
            owner: ""
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
var Button = ({ onClick, className, children }) => {
  return /* @__PURE__ */ import_react2.default.createElement("button", {
    className: (0, import_clsx.default)("bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-4 px-8", className),
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
var import_react8 = __toESM(require("react"));
var import_react_redux3 = require("react-redux");
var import_remix5 = __toESM(require_remix());

// app/components/GameTable.tsx
init_react();
var import_clsx4 = __toESM(require("clsx"));
var import_react6 = __toESM(require("react"));

// app/components/PlayerAvatar.tsx
init_react();
var import_clsx3 = __toESM(require("clsx"));
var import_react5 = __toESM(require("react"));
var PlayerAvatar = ({ name = "", me }) => {
  const color = randomColor();
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "relative w-[128px] h-[128px] text-center flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    style: {
      borderColor: name && !me ? `${color}` : "inherit"
    },
    className: (0, import_clsx3.default)("absolute z-0 w-[128px] h-[128px] rounded-full", {
      "hover:animate-rubber border-8 border-sky-400 bg-sky-500": name && me,
      "hover:animate-rubber border-8 border-cyan-400 bg-cyan-500": name && !me,
      "border-8 border-dashed animate-spin-slow": !name
    })
  }, " "), /* @__PURE__ */ import_react5.default.createElement("div", {
    style: {
      backgroundColor: name && !me ? `${color}cc` : "inherit"
    },
    className: (0, import_clsx3.default)("w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center font-virgil z-10 ow text-xl px-4", {
      "text-slate-100 animate-pulse bg-slate-700": !name,
      "text-slate-900": name
    })
  }, /* @__PURE__ */ import_react5.default.createElement("p", null, name || "waiting player")));
};
var PlayerAvatar_default = PlayerAvatar;

// app/components/GameTable.tsx
var GameTable = ({ players, me, ownerId, blur }) => {
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: (0, import_clsx4.default)("absolute z-0 inset-0 w-screen h-screen flex flex-col justify-center items-center", {
      blur
    })
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "relative w-[95%] h-[70%] min-h-[320px] min-w-[640px] max-h-[480px] max-w-[1024px] bg-slate-700 rounded-[6rem] border-[1rem] table-shadow shadow-slate-100 border-slate-900 flex flex-col justify-center items-center"
  }, players.map((player, index) => /* @__PURE__ */ import_react6.default.createElement("div", {
    key: index,
    className: (0, import_clsx4.default)("absolute  shadow-[0px_0px_10px_#000] w-[128px] h-[128px] border-[8px] rounded-full bg-slate-700 border-slate-900 flex flex-col justify-center items-center", {
      "-bottom-[64px]": index === 0,
      "-left-[77px]": index === 1,
      "-right-[77px]": index === 2,
      "-top-[77px]": index === 3
    })
  }, /* @__PURE__ */ import_react6.default.createElement(PlayerAvatar_default, {
    name: player.name,
    me: player.id === ownerId
  })))));
};
var GameTable_default = GameTable;

// app/components/WaitingRoom.tsx
init_react();
var import_react7 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex flex-col z-10 w-screen h-screen backdrop-blur-2xl justify-center items-center"
  }, /* @__PURE__ */ import_react7.default.createElement("p", {
    className: "text-center text-2xl font-exo mb-8"
  }, players.length === maxPlayers ? `Starting the game, please standby!...` : `Waiting another player...`), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex flex-row space-x-4 items-center"
  }, players.map((player) => /* @__PURE__ */ import_react7.default.createElement(PlayerAvatar_default, {
    me: player.id === ownerId,
    key: player.id,
    name: player.name
  })), Array(maxPlayers - players.length).fill(0).map((i) => /* @__PURE__ */ import_react7.default.createElement(PlayerAvatar_default, {
    key: i
  }))), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex flex-row space-x-4 items-center mt-8"
  }, /* @__PURE__ */ import_react7.default.createElement(Button_default, {
    className: "bg-slate-500 font-exo hover:bg-slate-700 hover:text-slate-100 text-slate-900 font-bold py-4 px-8",
    onClick: onAbort
  }, abortText), showStart && /* @__PURE__ */ import_react7.default.createElement(Button_default, {
    onClick: onStart
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
  const notFound = (0, import_react_redux3.useSelector)((state) => state.game.notFound);
  const dataState = (0, import_react_redux3.useSelector)((state) => state.game.data);
  const players = (0, import_react_redux3.useSelector)((state) => state.game.players);
  const gameStatus = (0, import_react_redux3.useSelector)((state) => state.game.status);
  const dispatch = (0, import_react_redux3.useDispatch)();
  import_react8.default.useEffect(() => {
    if (data.status === "UNDEFINED" /* UNDEFINED */) {
      dispatch(gameActions.toggleNotFound());
      window.location.href = "/";
    }
  }, [data]);
  import_react8.default.useEffect(() => {
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
  console.log("game status", data);
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "w-screen h-screen flex flex-col justify-center items-center"
  }, gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */ && /* @__PURE__ */ import_react8.default.createElement(WaitingRoom_default, {
    players,
    ownerId: dataState == null ? void 0 : dataState.gameData.owner,
    showStart: (dataState == null ? void 0 : dataState.gameData.owner) === (dataState == null ? void 0 : dataState.playerData.id),
    onAbort: () => dispatch(gameActions.leave()),
    onStart: () => dispatch(gameActions.start())
  }), /* @__PURE__ */ import_react8.default.createElement(GameTable_default, {
    players,
    blur: gameStatus === "WAITING" /* WAITING */ && data.status === "WAITING" /* WAITING */,
    ownerId: dataState == null ? void 0 : dataState.gameData.owner
  }));
};
var id_default = GameScreen;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "84426132", "entry": { "module": "/build/entry.client-6IIXYFCD.js", "imports": ["/build/_shared/chunk-YSJTNW6O.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-XTZV5GND.js", "imports": ["/build/_shared/chunk-NJNBNQFG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$id": { "id": "routes/$id", "parentId": "root", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$id-NDM22XBG.js", "imports": ["/build/_shared/chunk-44BCMDZQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-U7SYC5XQ.js", "imports": ["/build/_shared/chunk-44BCMDZQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-84426132.js" };

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
  }
  getSocketId() {
    return this.data.socketId;
  }
  getId() {
    return this.data.id;
  }
  getData() {
    return this.data;
  }
  leave() {
    this.data = {
      id: "",
      name: "",
      socketId: ""
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
      socketId: this.socket.id
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
      socketId: this.socket.id
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
    const existingPlayer = game.getPlayerById(data.playerData.id);
    if (!existingPlayer) {
      if (game.getTotalPlayer() < 4) {
        game.addPlayer(newPlayer);
      } else {
        this.socket.emit("error", {
          message: "Game is full"
        });
      }
    }
    printLog("info", "CLIENT", "Joining game room: ", game.getId());
    this.socket.join(game.getId());
    const joinData = {
      gameData: game.getData(),
      playerData: newPlayer.getData()
    };
    this.socket.emit("joined", joinData);
    const players = game.getPlayers();
    const playerData = players.map((player) => player.getData());
    this.server.in(game.getId()).emit("players", playerData);
  }
  leave(data) {
    printLog("warning", "CLIENT", "Leaving game: ", data.gameData.id);
    const game = games.find((game2) => game2.getId() === data.gameData.id);
    if (game) {
      const player = game.getPlayerById(data.playerData.id);
      printLog("warning", "PLAYER", "Leaving game: ", data.playerData.id);
      if (player) {
        this.server.in(game.getId()).emit("left", player.getData());
        game.removePlayer(player);
      }
    }
  }
  start(data) {
    printLog("info", "CLIENT", "Starting game: ", data);
    const game = games.find((game2) => game2.getId() === data.gameData.id);
    if (game) {
      game.start();
      this.server.in(game.getId()).emit("started", game.getData());
    }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL3N0b3Jlcy9pbmRleC50cyIsICIuLi9hcHAvc3RvcmVzL2dhbWVTdGF0ZS50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvZ2FtZS50cyIsICIuLi9hcHAvdXRpbHMvaGVscGVyLnRzIiwgIi4uL2FwcC9zdG9yZXMvc29ja2V0U3RhdGUudHMiLCAiLi4vYXBwL3N0b3Jlcy9jb25maWcudHMiLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CdXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1J1YmJlclRleHQudHN4IiwgInJvdXRlOi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3JvdXRlcy8kaWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0dhbWVUYWJsZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGxheWVyQXZhdGFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9XYWl0aW5nUm9vbS50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2Nvbm5lY3Rpb24udHMiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2NsaWVudC50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvcGxheWVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCBDb25uZWN0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9hcHAvY29udHJvbGxlcnMvY29ubmVjdGlvblwiO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBjcmVhdGUgY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG4vL2NyZWF0ZSBzZXJ2ZXIgc29ja2V0IGlvIGFuZCBhdHRhY2ggdG8gY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCB7XG4gIGNvcnM6IHtcbiAgICBvcmlnaW46IFwiKlwiLFxuICB9LFxuICB0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIl0sXG4gIGFsbG93VXBncmFkZXM6IGZhbHNlLFxufSk7XG5cbi8vIGF0dGFjaCBzb2NrZXQgY29ubmVjdGlvbiBjb250cm9sbGVyXG5jb25zdCBzb2NrZXRDb25uID0gbmV3IENvbm5lY3Rpb25Db250cm9sbGVyKGlvKTtcbnNvY2tldENvbm4uc3RhcnQoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5zZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcGFwdXEvV29yay9tYWluLXJlbWl4L2FwcC9yb3V0ZXMvJGlkLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvJGlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGlvIGFzIHNvY2tldENsaWVudCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgYW5pbWF0aW9uU3R5bGVzIGZyb20gXCJ+L2Fzc2V0cy9zdHlsZXMvYW5pbWF0aW9uLmNzc1wiO1xuaW1wb3J0IGFwcFN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCB0YWlsd2luZFN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IHsgQXBwU3RhdGUsIGluaXRpYWxBcHBTdGF0ZSB9IGZyb20gXCIuL3N0b3Jlc1wiO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCJ+L3N0b3Jlcy9jb25maWdcIjtcbmltcG9ydCB7IHNvY2tldEFjdGlvbnMgfSBmcm9tIFwifi9zdG9yZXMvc29ja2V0U3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICBhczogXCJmb250XCIsXG4gICAgICBocmVmOiBcIi9mb250cy9WaXJnaWwzWU9GRi53b2ZmMlwiLFxuICAgICAgdHlwZTogXCJmb250L3dvZmYyXCIsXG4gICAgICBjcm9zc09yaWdpbjogXCJhbm9ueW1vdXNcIixcbiAgICB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZXMgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGFwcFN0eWxlcyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogYW5pbWF0aW9uU3R5bGVzIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJNYWluIFJlbWl4XCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5jb25zdCBwZXJzaXN0ZWRTdGF0ZTogQXBwU3RhdGUgPSB7XG4gIC4uLmluaXRpYWxBcHBTdGF0ZSxcbn07XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHBlcnNpc3RlZFN0YXRlKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIHNvY2tldEFjdGlvbnMuaW5pdChcbiAgICAgICAgc29ja2V0Q2xpZW50KHtcbiAgICAgICAgICB0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIl0sXG4gICAgICAgICAgdXBncmFkZTogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgICAgICAoZGF0YSkgPT4ge31cbiAgICAgIClcbiAgICApO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIGxhbmc9XCJlblwiXG4gICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgdGV4dC1zbGF0ZS0xMDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIlxuICAgID5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuLy8gbG9hZGVyIGZ1bmN0aW9uIHRvIGdldCBlbnZpcm9ubWVudCBmcm9tIHNlcnZlclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBqc29uKHsgZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOViB9KTtcbn07XG5cbi8vIGRlY2xhcmUgd2luZG93IG9iamVjdCBhcyBhbnkgdG8gYXZvaWQgdHMgZXJyb3JcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcFdpdGhSZWR1eCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8eyBlbnY6IHN0cmluZyB9PigpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHN0b3JlIGVudiBpbiBnbG9iYWwgd2luZG93IG9iamVjdFxuICAgIHdpbmRvdy5FTlYgPSBkYXRhLmVudjtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEFwcCAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgR2FtZVJlZHVjZXIsIEdhbWVTdGF0ZSwgaW5pdGlhbEdhbWVTdGF0ZSB9IGZyb20gXCIuL2dhbWVTdGF0ZVwiO1xuaW1wb3J0IHsgaW5pdGlhbFNvY2tldFN0YXRlLCBTb2NrZXRSZWR1Y2VyLCBTb2NrZXRTdGF0ZSB9IGZyb20gXCIuL3NvY2tldFN0YXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICBzb2NrZXQ6IFNvY2tldFN0YXRlO1xuICBnYW1lOiBHYW1lU3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQXBwU3RhdGUgPSB7XG4gIHNvY2tldDogaW5pdGlhbFNvY2tldFN0YXRlLFxuICBnYW1lOiBpbml0aWFsR2FtZVN0YXRlLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xuICBzb2NrZXQ6IFNvY2tldFJlZHVjZXIsXG4gIGdhbWU6IEdhbWVSZWR1Y2VyLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcFN0YXRlKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBKb2luRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL2NsaWVudFwiO1xuaW1wb3J0IHsgR2FtZURhdGEsIEdhbWVTdGF0dXMgfSBmcm9tIFwifi9jb250cm9sbGVycy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvcGxheWVyXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5hbWUgfSBmcm9tIFwifi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB7IFRodW5rQWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNvY2tldEFjdGlvbnMsIFNvY2tldEFjdGlvbnMgfSBmcm9tIFwiLi9zb2NrZXRTdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTdGF0ZSB7XG4gIHN0YXR1czogR2FtZVN0YXR1cztcbiAgZGF0YTogSm9pbkRhdGEgfCBudWxsO1xuICBub3RGb3VuZDogYm9vbGVhbjtcbiAgcGxheWVyczogUGxheWVyRGF0YVtdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbEdhbWVTdGF0ZTogR2FtZVN0YXRlID0ge1xuICBkYXRhOiBudWxsLFxuICBub3RGb3VuZDogZmFsc2UsXG4gIHBsYXllcnM6IFtdLFxuICBzdGF0dXM6IEdhbWVTdGF0dXMuV0FJVElORyxcbn07XG5cbmludGVyZmFjZSBHYW1lQWN0aW9uVHlwZXMge1xuICByZWFkb25seSBTRVRfR0FNRV9EQVRBOiBcIlNFVF9HQU1FX0RBVEFcIjtcbiAgcmVhZG9ubHkgU0VUX0dBTUVfTk9UX0ZPVU5EOiBcIlNFVF9HQU1FX05PVF9GT1VORFwiO1xuICByZWFkb25seSBTRVRfUExBWUVSUzogXCJTRVRfUExBWUVSU1wiO1xuICByZWFkb25seSBTRVRfR0FNRV9TVEFUVVM6IFwiU0VUX0dBTUVfU1RBVFVTXCI7XG59XG5cbmNvbnN0IEdhbWVBY3Rpb25zVHlwZXM6IEdhbWVBY3Rpb25UeXBlcyA9IHtcbiAgU0VUX0dBTUVfREFUQTogXCJTRVRfR0FNRV9EQVRBXCIsXG4gIFNFVF9HQU1FX05PVF9GT1VORDogXCJTRVRfR0FNRV9OT1RfRk9VTkRcIixcbiAgU0VUX1BMQVlFUlM6IFwiU0VUX1BMQVlFUlNcIixcbiAgU0VUX0dBTUVfU1RBVFVTOiBcIlNFVF9HQU1FX1NUQVRVU1wiLFxufTtcblxuaW50ZXJmYWNlIFNldEdhbWVEYXRhIHtcbiAgdHlwZTogXCJTRVRfR0FNRV9EQVRBXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLmRhdGE7XG59XG5cbmludGVyZmFjZSBTZXRHYW1lU3RhdHVzIHtcbiAgdHlwZTogXCJTRVRfR0FNRV9TVEFUVVNcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxHYW1lU3RhdGUuc3RhdHVzO1xufVxuaW50ZXJmYWNlIFNldFBsYXllcnMge1xuICB0eXBlOiBcIlNFVF9QTEFZRVJTXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLnBsYXllcnM7XG59XG5pbnRlcmZhY2UgU2V0R2FtZU5vdEZvdW5kIHtcbiAgdHlwZTogXCJTRVRfR0FNRV9OT1RfRk9VTkRcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxHYW1lU3RhdGUubm90Rm91bmQ7XG59XG5cbmV4cG9ydCB0eXBlIEdhbWVBY3Rpb25zID1cbiAgfCBTZXRHYW1lRGF0YVxuICB8IFNldEdhbWVOb3RGb3VuZFxuICB8IFNldFBsYXllcnNcbiAgfCBTZXRHYW1lU3RhdHVzO1xuXG5leHBvcnQgY29uc3QgZ2FtZUFjdGlvbnMgPSB7XG4gIC8vIGdhbWUgYWN0aW9uIHRvIHNldCBwbGF5ZXJzIGluIHRoZSBnYW1lXG4gIHNldFBsYXllcnM6IChcbiAgICBwbGF5ZXJzOiBQbGF5ZXJEYXRhW11cbiAgKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfUExBWUVSUyxcbiAgICAgICAgcGF5bG9hZDogcGxheWVycyxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2FtZSBhY3Rpb24gdG8gYWRkIHBsYXllciB0byBjdXJyZW50IGdhbWUgcGxheWVycyBsaXN0XG4gIGFkZFBsYXllcjogKHBsYXllcjogUGxheWVyRGF0YSk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiBwbGF5ZXIgYWxyZWFkeSBleGlzdFxuICAgICAgY29uc3QgcGxheWVycyA9IGdldFN0YXRlKCkuZ2FtZS5wbGF5ZXJzO1xuICAgICAgY29uc3QgcGxheWVyRXhpc3QgPSBwbGF5ZXJzLmZpbmQoKHApID0+IHAuaWQgPT09IHBsYXllci5pZCk7XG4gICAgICBpZiAocGxheWVyRXhpc3QpIHJldHVybjtcblxuICAgICAgLy8gYWRkIHBsYXllciB0byB0aGUgcGxheWVyIGxpc3RcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfUExBWUVSUyxcbiAgICAgICAgcGF5bG9hZDogWy4uLnBsYXllcnMsIHBsYXllcl0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGFkZGVkXCIsIHBsYXllcik7XG4gICAgfTtcbiAgfSxcblxuICAvLyBnYW1lIGFjdGlvbiB0byByZW1vdmUgcGxheWVyIGZyb20gY3VycmVudCBnYW1lIHBsYXllcnMgbGlzdFxuICByZW1vdmVQbGF5ZXI6IChcbiAgICBwbGF5ZXJJZDogc3RyaW5nXG4gICk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiBwbGF5ZXIgYWxyZWFkeSBleGlzdFxuICAgICAgY29uc3QgcGxheWVycyA9IGdldFN0YXRlKCkuZ2FtZS5wbGF5ZXJzO1xuICAgICAgY29uc3QgcGxheWVyRXhpc3QgPSBwbGF5ZXJzLmZpbmQoKHApID0+IHAuaWQgPT09IHBsYXllcklkKTtcbiAgICAgIGlmICghcGxheWVyRXhpc3QpIHJldHVybjtcblxuICAgICAgLy8gcmVtb3ZlIHBsYXllciBmcm9tIHRoZSBwbGF5ZXIgbGlzdFxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9QTEFZRVJTLFxuICAgICAgICBwYXlsb2FkOiBwbGF5ZXJzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gcGxheWVySWQpLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyByZWR1eCBhY3Rpb24gdG8gc2V0IGdhbWUgbm90IGZvdW5kIHN0YXRlXG4gIHNldEdhbWVOb3RGb3VuZDogKFxuICAgIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLm5vdEZvdW5kXG4gICk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9OT1RfRk9VTkQsXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBzZXQgZ2FtZSBkYXRhXG4gIHNldEdhbWVEYXRhOiAoZGF0YTogSm9pbkRhdGEpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhLmdhbWVEYXRhLmlkLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIGNyZWF0ZSB0aGUgZ2FtZVxuICBjcmVhdGU6IChwbGF5ZXJOYW1lPzogc3RyaW5nKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG4gICAgICBjb25zdCBnYW1lRGF0YTogR2FtZURhdGEgPSB7XG4gICAgICAgIGlkOiBnZW5lcmF0ZU5hbWUoKSxcbiAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgIG93bmVyOiBcIlwiLFxuICAgICAgfTtcbiAgICAgIHNvY2tldC5lbWl0KFwiY3JlYXRlXCIsIHsgcGxheWVyTmFtZSwgZ2FtZURhdGEgfSk7XG5cbiAgICAgIC8vIHdoZW4gZ2FtZSBjcmVhdGVkLCBzdGFydCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gICAgICBzb2NrZXRBY3Rpb25zLnN0YXJ0TGluc3RlbmluZ0dhbWVFdmVudHMoKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIGpvaW4gdGhlIGdhbWVcbiAgam9pbjogKFxuICAgIGdhbWVJZDogc3RyaW5nLFxuICAgIHBsYXllck5hbWU6IHN0cmluZ1xuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc29ja2V0ID0gZ2V0U3RhdGUoKS5zb2NrZXQuY2xpZW50O1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcblxuICAgICAgLy8gd2hlbiBqb2luaW5nIGEgZ2FtZSwgc3RhcnQgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgc29ja2V0QWN0aW9ucy5zdGFydExpbnN0ZW5pbmdHYW1lRXZlbnRzKCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcblxuICAgICAgbGV0IGpvaW5EYXRhID0gZ2V0U3RhdGUoKS5nYW1lLmRhdGE7XG5cbiAgICAgIC8vIGxvYWQgam9pbiBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgY29uc3QgcGVyc2lzdGFudEdhbWVEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2FtZUlkKTtcblxuICAgICAgLy8gaWYgZ2FtZURhdGEgaXMgbnVsbCwgdGhlbiB0cnkgdG8gdXNlIHBlcnNpc3RhbnRHYW1lRGF0YVxuICAgICAgaWYgKCFqb2luRGF0YSkge1xuICAgICAgICBpZiAocGVyc2lzdGFudEdhbWVEYXRhKSB7XG4gICAgICAgICAgam9pbkRhdGEgPSBKU09OLnBhcnNlKHBlcnNpc3RhbnRHYW1lRGF0YSk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9EQVRBLFxuICAgICAgICAgICAgcGF5bG9hZDogam9pbkRhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgY3VycmVudCBnYW1lRGF0YSBpZCBpcyB0aGUgc2FtZSBhcyB0aGUgZ2FtZUlkXG4gICAgICBpZiAoam9pbkRhdGE/LmdhbWVEYXRhLmlkID09PSBnYW1lSWQpIHtcbiAgICAgICAgLy9qdXN0IHVwZGF0ZSB0aGUgc29ja2V0SWQgZm9yIHRoaXMgZ2FtZVxuICAgICAgICBqb2luRGF0YS5wbGF5ZXJEYXRhLnNvY2tldElkID0gc29ja2V0LmlkO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9EQVRBLFxuICAgICAgICAgIHBheWxvYWQ6IGpvaW5EYXRhLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBqb2luRGF0YSBzdGlsbCBudWxsLCB0aGVuIHVzZSBpbml0aWFsIGRhdGFcbiAgICAgIGlmICgham9pbkRhdGEpIHtcbiAgICAgICAgam9pbkRhdGEgPSB7XG4gICAgICAgICAgZ2FtZURhdGE6IHtcbiAgICAgICAgICAgIGlkOiBnYW1lSWQsXG4gICAgICAgICAgICBsZXZlbDogMSxcbiAgICAgICAgICAgIG93bmVyOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxheWVyRGF0YToge1xuICAgICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgICAgICAgICAgc29ja2V0SWQ6IHNvY2tldC5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGpvaW4gZGF0YVwiLCBqb2luRGF0YSk7XG4gICAgICAvLyBzZW5kIHRoZSBqb2luIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxuICAgICAgc29ja2V0LmVtaXQoXCJqb2luXCIsIGpvaW5EYXRhKTtcbiAgICB9O1xuICB9LFxuXG4gIC8vcmVkdXggYWN0aW9uIHRvIGxlYXZlIHRoZSBnYW1lXG4gIGxlYXZlOiAoKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGNvbnN0IGdhbWVEYXRhID0gZ2V0U3RhdGUoKS5nYW1lLmRhdGE7XG4gICAgICBpZiAoIXNvY2tldCB8fCAhZ2FtZURhdGEpIHJldHVybjtcbiAgICAgIHNvY2tldC5lbWl0KFwibGVhdmVcIiwgZ2FtZURhdGEpO1xuXG4gICAgICAvLyB3aGVuIGxlYXZpbmcgYSBnYW1lLCBzdG9wIGxpc3RlbmluZyBhbGwgZ2FtZSBldmVudHNcbiAgICAgIHNvY2tldEFjdGlvbnMuc3RvcExpc3RlbmluZ0dhbWVFdmVudHMoKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuXG4gICAgICAvLyByZW1vdmUgdGhlIGdhbWUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGdhbWVEYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAgIC8vIHJlbW92ZSBnYW1lIGRhdGEgZnJvbSByZWR1eCBzdG9yZVxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX0RBVEEsXG4gICAgICAgIHBheWxvYWQ6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgfTtcbiAgfSxcblxuICAvLyByZWR1eCBhY3Rpb24gdG8gdG9nZ2xlIGlmIHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICB0b2dnbGVOb3RGb3VuZDogKCk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IG5vdEZvdW5kID0gZ2V0U3RhdGUoKS5nYW1lLm5vdEZvdW5kO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX05PVF9GT1VORCxcbiAgICAgICAgcGF5bG9hZDogIW5vdEZvdW5kLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyByZWR1eCBhY3Rpb24gdG8gc2V0IGdhbWUgc3RhdHVzXG4gIHNldEdhbWVTdGF0dXM6IChzdGF0dXM6IEdhbWVTdGF0dXMpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfU1RBVFVTLFxuICAgICAgICBwYXlsb2FkOiBzdGF0dXMsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBzdGFydCB0aGUgZ2FtZVxuICBzdGFydDogKCk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBjb25zdCBnYW1lRGF0YSA9IGdldFN0YXRlKCkuZ2FtZS5kYXRhO1xuICAgICAgaWYgKCFzb2NrZXQgfHwgIWdhbWVEYXRhKSByZXR1cm47XG4gICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgc3RhcnQgZ2FtZSByZXF1ZXN0XCIpO1xuICAgICAgc29ja2V0LmVtaXQoXCJzdGFydFwiLCBnYW1lRGF0YSk7XG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBHYW1lUmVkdWNlcjogUmVkdWNlcjxHYW1lU3RhdGUsIEdhbWVBY3Rpb25zPiA9IChcbiAgc3RhdGU6IEdhbWVTdGF0ZSB8IHVuZGVmaW5lZCxcbiAgYWN0aW9uOiBHYW1lQWN0aW9uc1xuKTogR2FtZVN0YXRlID0+IHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaW5pdGlhbEdhbWVTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX05PVF9GT1VORDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3RGb3VuZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgR2FtZUFjdGlvbnNUeXBlcy5TRVRfUExBWUVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwbGF5ZXJzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX1NUQVRVUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0dXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIiwgImltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gXCJ+L3V0aWxzL2hlbHBlclwiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4vcGxheWVyXCI7XG4vKipcbiAqIFRoaXMgY29uc3RhbnQgaXMgdXNlZCB0byBzdG9yZSB0aGUgZ2FtZSBjcmVhdGVkIGJ5IHRoZSBjbGllbnRcbiAqIEBjb25zdGFudCB7R2FtZUNvbnRyb2xsZXJbXX1cbiAqIEBkZWZhdWx0IFtdXG4gKi9cbmV4cG9ydCBsZXQgZ2FtZXM6IEdhbWVDb250cm9sbGVyW10gPSBbXTtcbmV4cG9ydCB0eXBlIEdhbWVFdmVudCA9IFwia2lja1wiIHwgXCJraWNrZWRcIjtcbmV4cG9ydCBlbnVtIEdhbWVTdGF0dXMge1xuICBXQUlUSU5HID0gXCJXQUlUSU5HXCIsXG4gIFNUQVJURUQgPSBcIlNUQVJURURcIixcbiAgRklOSVNIRUQgPSBcIkZJTklTSEVEXCIsXG4gIEJVU1kgPSBcIkJVU1lcIixcbiAgUkVBRFkgPSBcIlJFQURZXCIsXG4gIFVOREVGSU5FRCA9IFwiVU5ERUZJTkVEXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZURhdGEge1xuICBpZDogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBvd25lcjogc3RyaW5nO1xuICBwbGF5ZXJDb3VudD86IG51bWJlcjtcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIG1hbmFnZSB0aGUgZ2FtZVxuICogQGNsYXNzIEdhbWVDb250cm9sbGVyXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0IC0gVGhlIHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICogQHBhcmFtIHtHYW1lRGF0YX0gZGF0YSAtIFRoZSBnYW1lIGlkXG4gKiBAcGFyYW0ge1BsYXllckNvbnRyb2xsZXJbXX0gcGxheWVycyAtIFRoZSBwbGF5ZXIgbGlzdCBpbnNpZGUgdGhlIGdhbWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIGRhdGE6IEdhbWVEYXRhID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBsZXZlbDogMSxcbiAgICBvd25lcjogXCJcIixcbiAgICBwbGF5ZXJDb3VudDogMCxcbiAgfTtcbiAgcHJpdmF0ZSBzdGF0dXM6IEdhbWVTdGF0dXMgPSBHYW1lU3RhdHVzLldBSVRJTkc7XG4gIHByaXZhdGUgcGxheWVyczogUGxheWVyQ29udHJvbGxlcltdID0gW107XG5cbiAgY29uc3RydWN0b3IoZGF0YTogR2FtZURhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSB7IC4uLmRhdGEsIHBsYXllckNvdW50OiB0aGlzLnBsYXllcnMubGVuZ3RoIH07XG4gIH1cbiAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyQ29udHJvbGxlcikge1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgcHJpbnRMb2coXG4gICAgICBcImluZm9cIixcbiAgICAgIFwiR0FNRVwiLFxuICAgICAgXCJQbGF5ZXIgXCIsXG4gICAgICBwbGF5ZXIuZ2V0SWQoKSxcbiAgICAgIFwiIGFkZGVkIHRvIGdhbWU6IFwiLFxuICAgICAgdGhpcy5kYXRhLmlkXG4gICAgKTtcbiAgICB0aGlzLmRhdGEucGxheWVyQ291bnQgPSB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICAgIHJldHVybiBwbGF5ZXI7XG4gIH1cbiAgc2V0SWQoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YS5pZCA9IGlkO1xuICB9XG4gIHNldE93bmVyKHBsYXllcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGEub3duZXIgPSBwbGF5ZXJJZDtcbiAgfVxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmlkO1xuICB9XG4gIGdldFBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycztcbiAgfVxuICBnZXRUb3RhbFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzLmxlbmd0aDtcbiAgfVxuICBnZXRQbGF5ZXJCeUlkKHBsYXllcklkOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoIXBsYXllcklkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLnBsYXllcnMuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuZ2V0SWQoKSA9PT0gcGxheWVySWQpO1xuICB9XG4gIGdldFBsYXllckJ5U29ja2V0SWQoc29ja2V0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnMuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuZ2V0U29ja2V0SWQoKSA9PT0gc29ja2V0SWQpO1xuICB9XG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICByZW1vdmVQbGF5ZXIocGxheWVyOiBQbGF5ZXJDb250cm9sbGVyKSB7XG4gICAgY29uc3QgcGxheWVySW5kZXggPSB0aGlzLnBsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgIHRoaXMucGxheWVycy5zcGxpY2UocGxheWVySW5kZXgsIDEpO1xuICAgIHByaW50TG9nKFxuICAgICAgXCJpbmZvXCIsXG4gICAgICBcIkdBTUVcIixcbiAgICAgIFwiUGxheWVyIFwiLFxuICAgICAgcGxheWVyLmdldElkKCksXG4gICAgICBcIiByZW1vdmVkIGZyb20gZ2FtZTogXCIsXG4gICAgICB0aGlzLmRhdGEuaWRcbiAgICApO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJDb3VudCA9IHRoaXMucGxheWVycy5sZW5ndGg7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBwcmludExvZyhcImluZm9cIiwgXCJHQU1FXCIsIFwiR2FtZSBzdGFydGVkOiBcIiwgdGhpcy5kYXRhLmlkKTtcbiAgICB0aGlzLnN0YXR1cyA9IEdhbWVTdGF0dXMuU1RBUlRFRDtcbiAgfVxuICBzZXRTdGF0dXMoc3RhdHVzOiBHYW1lU3RhdHVzKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuICBpc1N0YXJ0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBHYW1lU3RhdHVzLlNUQVJURUQ7XG4gIH1cbiAgaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IEdhbWVTdGF0dXMuUkVBRFk7XG4gIH1cbiAgaXNGaW5pc2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IEdhbWVTdGF0dXMuRklOSVNIRUQ7XG4gIH1cbiAgaXNXYWl0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gR2FtZVN0YXR1cy5XQUlUSU5HO1xuICB9XG4gIGlzQnVzeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IEdhbWVTdGF0dXMuQlVTWTtcbiAgfVxufVxuIiwgImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgZW51bSBUZXJtaW5hbENvbG9yIHtcbiAgUmVzZXQgPSBcIlxceDFiWzBtXCIsXG4gIEJyaWdodCA9IFwiXFx4MWJbMW1cIixcbiAgRGltID0gXCJcXHgxYlsybVwiLFxuICBVbmRlcnNjb3JlID0gXCJcXHgxYls0bVwiLFxuICBCbGluayA9IFwiXFx4MWJbNW1cIixcbiAgUmV2ZXJzZSA9IFwiXFx4MWJbN21cIixcbiAgSGlkZGVuID0gXCJcXHgxYls4bVwiLFxuXG4gIEZnQmxhY2sgPSBcIlxceDFiWzMwbVwiLFxuICBGZ1JlZCA9IFwiXFx4MWJbMzFtXCIsXG4gIEZnR3JlZW4gPSBcIlxceDFiWzMybVwiLFxuICBGZ1llbGxvdyA9IFwiXFx4MWJbMzNtXCIsXG4gIEZnQmx1ZSA9IFwiXFx4MWJbMzRtXCIsXG4gIEZnTWFnZW50YSA9IFwiXFx4MWJbMzVtXCIsXG4gIEZnQ3lhbiA9IFwiXFx4MWJbMzZtXCIsXG4gIEZnV2hpdGUgPSBcIlxceDFiWzM3bVwiLFxuXG4gIEJnQmxhY2sgPSBcIlxceDFiWzQwbVwiLFxuICBCZ1JlZCA9IFwiXFx4MWJbNDFtXCIsXG4gIEJnR3JlZW4gPSBcIlxceDFiWzQybVwiLFxuICBCZ1llbGxvdyA9IFwiXFx4MWJbNDNtXCIsXG4gIEJnQmx1ZSA9IFwiXFx4MWJbNDRtXCIsXG4gIEJnTWFnZW50YSA9IFwiXFx4MWJbNDVtXCIsXG4gIEJnQ3lhbiA9IFwiXFx4MWJbNDZtXCIsXG4gIEJnV2hpdGUgPSBcIlxceDFiWzQ3bVwiLFxufVxuXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9ICgpID0+IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIik7XG5cbmV4cG9ydCBjb25zdCBwcmludExvZyA9IChcbiAgdHlwZTogXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJkZWZhdWx0XCIgPSBcImRlZmF1bHRcIixcbiAgbGFiZWw6IHN0cmluZyA9IFwiXCIsXG4gIC4uLm1lc3NhZ2U6IGFueVtdXG4pID0+IHtcbiAgLy8gc2V0IGRlZmF1bHQgZm9yZ3JvdW5kIGNvbG9yIHRvIEZnV2hpdGVcbiAgbGV0IGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1doaXRlO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiaW5mb1wiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnQmx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ3YXJuaW5nXCI6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdZZWxsb3c7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnR3JlZW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1JlZDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdXaGl0ZTtcbiAgfVxuICBjb25zb2xlLmxvZyhcbiAgICBgWyR7VGVybWluYWxDb2xvci5GZ01hZ2VudGF9JHtjdXJyZW50VGltZXN0YW1wKCkgKyBUZXJtaW5hbENvbG9yLlJlc2V0fV1bJHtcbiAgICAgIFRlcm1pbmFsQ29sb3IuRmdDeWFuXG4gICAgfSR7bGFiZWx9JHtUZXJtaW5hbENvbG9yLlJlc2V0fV1gLFxuICAgIGNvbG9yLFxuICAgIC4uLm1lc3NhZ2UsXG4gICAgVGVybWluYWxDb2xvci5SZXNldFxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcEZpcnN0KHRleHQ6IHN0cmluZykge1xuICByZXR1cm4gdGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRleHQuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDk5OSkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKHdvcmRMZW46IG51bWJlciA9IDIpIHtcbiAgY29uc3Qgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjb25zb25hbnRzID0gXCJiY2RmZ2hqa2xtbnBxcnN0dnd4eXpcIjtcbiAgY29uc3Qgdm93ZWxzID0gXCJhZWlvdVwiO1xuICBmb3IgKGxldCB3ID0gMDsgdyA8IHdvcmRMZW47IHcrKykge1xuICAgIGNvbnN0IHdvcmRDaGFyTGVuID0gZ2V0UmFuZG9tSW50KDMsIDEwKTtcbiAgICBjb25zdCBuYW1lID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkQ2hhckxlbjsgaSsrKSB7XG4gICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgbmFtZS5wdXNoKGNvbnNvbmFudHMuY2hhckF0KGdldFJhbmRvbUludCgwLCBjb25zb25hbnRzLmxlbmd0aCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUucHVzaCh2b3dlbHMuY2hhckF0KGdldFJhbmRvbUludCgwLCB2b3dlbHMubGVuZ3RoKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBvdXRwdXQucHVzaChjYXBGaXJzdChuYW1lLmpvaW4oXCJcIikpKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9ICgpID0+XG4gIGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWA7XG4iLCAiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCB7IEdhbWVEYXRhLCBHYW1lU3RhdHVzIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IHsgSm9pbkRhdGEgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvY2xpZW50XCI7XG5pbXBvcnQgeyBnYW1lQWN0aW9ucywgR2FtZUFjdGlvbnMgfSBmcm9tIFwiLi9nYW1lU3RhdGVcIjtcbmltcG9ydCB7IFRodW5rQWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTb2NrZXRTdGF0ZSB7XG4gIGNsaWVudDogU29ja2V0IHwgbnVsbDtcbiAgY29ubmVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFNvY2tldFN0YXRlOiBTb2NrZXRTdGF0ZSA9IHtcbiAgY2xpZW50OiBudWxsLFxuICBjb25uZWN0ZWQ6IGZhbHNlLFxufTtcblxuaW50ZXJmYWNlIFNvY2tldEFjdGlvblR5cGVzIHtcbiAgcmVhZG9ubHkgU0VUX1NPQ0tFVDogXCJTRVRfU09DS0VUXCI7XG4gIHJlYWRvbmx5IFNFVF9DT05ORUNURUQ6IFwiU0VUX0NPTk5FQ1RFRFwiO1xufVxuXG5jb25zdCBTb2NrZXRBY3Rpb25zVHlwZXM6IFNvY2tldEFjdGlvblR5cGVzID0ge1xuICBTRVRfU09DS0VUOiBcIlNFVF9TT0NLRVRcIixcbiAgU0VUX0NPTk5FQ1RFRDogXCJTRVRfQ09OTkVDVEVEXCIsXG59O1xuXG5pbnRlcmZhY2UgU2V0U29ja2V0IHtcbiAgdHlwZTogXCJTRVRfU09DS0VUXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsU29ja2V0U3RhdGUuY2xpZW50O1xufVxuaW50ZXJmYWNlIFNldENvbm5lY3RlZCB7XG4gIHR5cGU6IFwiU0VUX0NPTk5FQ1RFRFwiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbFNvY2tldFN0YXRlLmNvbm5lY3RlZDtcbn1cblxuZXhwb3J0IHR5cGUgU29ja2V0QWN0aW9ucyA9IFNldFNvY2tldCB8IFNldENvbm5lY3RlZDtcblxuZXhwb3J0IGNvbnN0IHNvY2tldEFjdGlvbnMgPSB7XG4gIC8vIHNvY2tldCBhY3Rpb24gdG8gc2V0IHRoZSBjb25uZWN0ZWQgc29ja2V0IGNsaWVudFxuICBpbml0OiAoXG4gICAgc29ja2V0OiB0eXBlb2YgaW5pdGlhbFNvY2tldFN0YXRlLmNsaWVudCxcbiAgICBvbkRhdGE6IChkYXRhOiBhbnkpID0+IHZvaWRcbiAgKTogVGh1bmtBY3Rpb248U29ja2V0QWN0aW9ucyB8IEdhbWVBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG5cbiAgICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogU29ja2V0QWN0aW9uc1R5cGVzLlNFVF9DT05ORUNURUQsXG4gICAgICAgICAgcGF5bG9hZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTb2NrZXRBY3Rpb25zVHlwZXMuU0VUX1NPQ0tFVCxcbiAgICAgICAgcGF5bG9hZDogc29ja2V0LFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyBzb2NrZXQgYWN0aW9uIHRvIHN0YXJ0IGxpc3RlbmluZyBhbGwgZ2FtZSBldmVudHNcbiAgc3RhcnRMaW5zdGVuaW5nR2FtZUV2ZW50czogKCk6IFRodW5rQWN0aW9uPFNvY2tldEFjdGlvbnMgfCBHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgICAgLy8gbGlzdGVuIHJlc3BvbnNlIGZyb20gc2VydmVyIHdoZW4gZ2FtZSBjcmVhdGVkXG4gICAgICBzb2NrZXQub24oXCJjcmVhdGVkXCIsIChwYXlsb2FkOiBKb2luRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWUgY3JlYXRlZFwiLCBwYXlsb2FkKTtcbiAgICAgICAgLy8gZGlzcGF0Y2ggZ2FtZSBhY3Rpb24gdG8gc2V0IHRoZSBnYW1lIGRhdGFcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0R2FtZURhdGEocGF5bG9hZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgICAgLy8gYWRkIHBsYXllciB0byB0aGUgZ2FtZVxuICAgICAgICBnYW1lQWN0aW9ucy5hZGRQbGF5ZXIocGF5bG9hZC5wbGF5ZXJEYXRhKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxpc3RlbiB0byBuZXcgcGxheWVyIGpvaW5lZCBldmVudFxuICAgICAgc29ja2V0Lm9uKFwicGxheWVyc1wiLCAocGF5bG9hZDogUGxheWVyRGF0YVtdKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHBsYXllciBsaXN0XCIsIHBheWxvYWQpO1xuICAgICAgICAvLyBhZGQgcGxheWVyIHRvIHRoZSBnYW1lXG4gICAgICAgIGdhbWVBY3Rpb25zLnNldFBsYXllcnMocGF5bG9hZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gaWYgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gICAgICBzb2NrZXQub24oXCJub3RGb3VuZFwiLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICBnYW1lQWN0aW9ucy5zZXRHYW1lTm90Rm91bmQodHJ1ZSkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gdG8gdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgICAgc29ja2V0Lm9uKFwiam9pbmVkXCIsIChwYXlsb2FkOiBKb2luRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImpvaW5lZFwiLCBwYXlsb2FkKTtcbiAgICAgICAgLy8gZGlzcGF0Y2ggZ2FtZSBhY3Rpb24gdG8gc2V0IHRoZSBnYW1lIGRhdGFcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0R2FtZURhdGEocGF5bG9hZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcblxuICAgICAgICAvLyBhZGQgcGxheWVyIHRvIHRoZSBnYW1lIHBsYXllcnMgbGlzdFxuICAgICAgICBnYW1lQWN0aW9ucy5hZGRQbGF5ZXIocGF5bG9hZC5wbGF5ZXJEYXRhKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxpc3RlbiBmb3IgdGhlIHBsYXllciBsZWZ0IHRoZSBnYW1lIGV2ZW50XG4gICAgICBzb2NrZXQub24oXCJsZWZ0XCIsIChwYXlsb2FkOiBQbGF5ZXJEYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQubmFtZSwgXCJoYXMgbGVmdCB0aGUgZ2FtZVwiKTtcbiAgICAgICAgLy8gcmVtb3ZlIHBsYXllciBmcm9tIHRoZSBwbGF5ZXIgbGlzdFxuICAgICAgICBnYW1lQWN0aW9ucy5yZW1vdmVQbGF5ZXIocGF5bG9hZC5pZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gZm9yIHRoZSBnYW1lIHN0YXJ0IGV2ZW50XG4gICAgICBzb2NrZXQub24oXCJzdGFydGVkXCIsIChwYXlsb2FkOiBKb2luRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWUgc3RhcnRlZFwiLCBwYXlsb2FkKTtcbiAgICAgICAgLy8gZGlzcGF0Y2ggZ2FtZSBhY3Rpb24gdG8gc2V0IHRoZSBnYW1lIGRhdGFcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0R2FtZURhdGEocGF5bG9hZCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0R2FtZVN0YXR1cyhHYW1lU3RhdHVzLlNUQVJURUQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNvY2tldCBhY3Rpb24gdG8gc3RvcCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gIHN0b3BMaXN0ZW5pbmdHYW1lRXZlbnRzOiAoKTogVGh1bmtBY3Rpb248U29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgd2hlbiBnYW1lIGNyZWF0ZWRcbiAgICAgIHNvY2tldC5vZmYoXCJjcmVhdGVkXCIpO1xuXG4gICAgICAvLyBzdG9wIGxpc3RlbmluZyB0byBuZXcgcGxheWVyIGpvaW5lZCBldmVudFxuICAgICAgc29ja2V0Lm9mZihcIm5ld1BsYXllclwiKTtcblxuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgaWYgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gICAgICBzb2NrZXQub2ZmKFwibm90Rm91bmRcIik7XG5cbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIHNvY2tldC5vZmYoXCJqb2luZWRcIik7XG5cbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIGZvciBhIHBsYXllciBsZWZ0IHRoZSBnYW1lIGV2ZW50XG4gICAgICBzb2NrZXQub2ZmKFwibGVmdFwiKTtcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFNvY2tldFJlZHVjZXI6IFJlZHVjZXI8U29ja2V0U3RhdGUsIFNvY2tldEFjdGlvbnM+ID0gKFxuICBzdGF0ZTogU29ja2V0U3RhdGUgfCB1bmRlZmluZWQsXG4gIGFjdGlvbjogU29ja2V0QWN0aW9uc1xuKTogU29ja2V0U3RhdGUgPT4ge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBpbml0aWFsU29ja2V0U3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTb2NrZXRBY3Rpb25zVHlwZXMuU0VUX1NPQ0tFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfQ09OTkVDVEVEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbm5lY3RlZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgcmVkdWNlcnMgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlOiBhbnkpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vIEkgcmVxdWlyZSB0aGlzIG9ubHkgaW4gZGV2IGVudmlyb25tZW50XG4gICAgLy8gY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpO1xuICAgIC8vIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XG4gIH1cbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xuICBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgLi4ucmVkdWNlcnMsXG4gIH0pO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBiaW5kTWlkZGxld2FyZShtaWRkbGV3YXJlKVxuICApO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHBsYXlpbmdDYXJkQmFja2dyb3VuZCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5aW5nLWNhcmRzLnBuZ1wiO1xuaW1wb3J0IFJ1YmJlclRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUnViYmVyVGV4dFwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVzXCI7XG5pbXBvcnQgeyBnYW1lQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZXMvZ2FtZVN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbam9pbklkLCBzZXRKb2luSWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwbGF5ZXJOYW1lLCBzZXRQbGF5ZXJOYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5kYXRhKTtcbiAgY29uc3Qgbm90Rm91bmQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLm5vdEZvdW5kKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBqb2luSWRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHBsYXllck5hbWVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGhhbmRsZVJvb21JbnB1dCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgc2V0Sm9pbklkKHZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTmFtZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICBzZXRQbGF5ZXJOYW1lKHZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlSm9pbiA9ICgpID0+IHtcbiAgICAvLyBpZiBwbGF5ZXIgbmFtZSBpcyBlbXB0eSwgc2V0IGZvY3VzIHRoZSBpbnB1dFxuICAgIGlmICghcGxheWVyTmFtZSkge1xuICAgICAgcGxheWVyTmFtZVJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBqb2luIGlkIGlzIGVtcHR5LCBzZXQgZm9jdXMgdGhlIGlucHV0XG4gICAgaWYgKCFqb2luSWQpIHtcbiAgICAgIGpvaW5JZFJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG90aGVyIHRoYW4gdGhhdCwgam9pbiB0aGUgcm9vbVxuICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLmpvaW4oam9pbklkLCBwbGF5ZXJOYW1lKSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUdhbWUgPSAoKSA9PiB7XG4gICAgLy8gaWYgcGxheWVyIG5hbWUgaXMgZW1wdHksIHNldCBmb2N1cyB0aGUgaW5wdXRcbiAgICBpZiAoIXBsYXllck5hbWUpIHtcbiAgICAgIHBsYXllck5hbWVSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuY3JlYXRlKHBsYXllck5hbWUpKTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIG5hdihkYXRhLmdhbWVEYXRhLmlkKTtcbiAgfSwgW2RhdGFdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChub3RGb3VuZCkge1xuICAgICAgYWxlcnQoXCJHYW1lIG5vdCBmb3VuZFwiKTtcbiAgICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLnRvZ2dsZU5vdEZvdW5kKCkpO1xuICAgIH1cbiAgfSwgW25vdEZvdW5kXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1zY3JlZW4gaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17cGxheWluZ0NhcmRCYWNrZ3JvdW5kfVxuICAgICAgICBhbHQ9XCJiZ1wiXG4gICAgICAgIHdpZHRoPXs1MTJ9XG4gICAgICAgIGNsYXNzTmFtZT1cIi16LTEwIGFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgb3BhY2l0eS0yMCBib3VuY2VJblVwXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICA8UnViYmVyVGV4dCB0ZXh0PVwiSGVsbG9cIiByb290Q2xhc3M9XCJtci04XCIgLz5cbiAgICAgICAgICA8UnViYmVyVGV4dCB0ZXh0PVwidGhlcmUhXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxSdWJiZXJUZXh0XG4gICAgICAgICAgICB0ZXh0PVwiTGV0J3NcIlxuICAgICAgICAgICAgYm91bmNlSW49XCJyaWdodFwiXG4gICAgICAgICAgICByb290Q2xhc3M9XCJtci04XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtdmlyZ2lsIHhsOnRleHQtOHhsIGxnOm1kOnRleHQtNnhsIHRleHQtNHhsIGhvdmVyOmFuaW1hdGUtcnViYmVyIGhvdmVyOnRleHQtc2xhdGUtMTAwIHRleHQtbGltZS00MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJ1YmJlclRleHRcbiAgICAgICAgICAgIHRleHQ9XCJQTEFZIVwiXG4gICAgICAgICAgICBib3VuY2VJbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXhvIHhsOnRleHQtOHhsIGxnOm1kOnRleHQtNnhsIHRleHQtNHhsIGhvdmVyOmFuaW1hdGUtcnViYmVyIHB4LTIgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1saW1lLTQwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgbXQtOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYm9yZGVyIGJvcmRlci1saW1lLTUwMCBpdGVtcy1jZW50ZXIgc206dy1mdWxsXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtwbGF5ZXJOYW1lUmVmfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezIwfVxuICAgICAgICAgICAgICB2YWx1ZT17cGxheWVyTmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMDAgZmxleCBmbGV4LWdyb3cgYmctdHJhbnNwYXJlbnQgcHktNCAgb3V0bGluZS1ub25lIHB4LTQgdGV4dC1saW1lLTUwMCAgeGw6dGV4dC14bCBsZzp0ZXh0LWxnIG1kOnRleHQtbWQgdGV4dC1zbSBmb250LWJvbGQgZm9udC1leG9cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmFtZUlucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGltZS01MDAgZm9udC12aXJnaWwgcHktNCB4bDp0ZXh0LXhsIGxnOnRleHQtbGcgbWQ6dGV4dC1tZCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIGFuZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlZj17am9pbklkUmVmfVxuICAgICAgICAgICAgICB2YWx1ZT17am9pbklkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMCBmbGV4IGZsZXgtZ3JvdyBiZy10cmFuc3BhcmVudCBweS00IG91dGxpbmUtbm9uZSBweC00IHRleHQtbGltZS01MDAgIHhsOnRleHQteGwgbGc6dGV4dC1sZyBtZDp0ZXh0LW1kIHRleHQtc20gZm9udC1ib2xkIGZvbnQtZXhvXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgZ2FtZSBJRCBoZXJlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJvb21JbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUpvaW59PlBsYXk8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm1yLTAgeHM6bXItMCB4bDptci00IGxnOm1yLTQgbWQ6bXItNCBzbTp3LWZ1bGwgeHM6dy1mdWxsIHRleHQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlR2FtZX0+Q3JlYXRlIHlvdXIgb3duIGdhbWU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvbkNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufTtcbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DbGljaywgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBcImJnLWxpbWUtNTAwIGZvbnQtZXhvIGhvdmVyOmJnLWxpbWUtNzAwIGhvdmVyOnRleHQtc2xhdGUtMTAwIHRleHQtc2xhdGUtOTAwIGZvbnQtYm9sZCBweS00IHB4LThcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8cD57Y2hpbGRyZW59PC9wPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwgImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGJvdW5jZUluPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInVwXCIgfCBcImRvd25cIjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICByb290Q2xhc3M/OiBzdHJpbmc7XG59O1xuY29uc3QgUnViYmVyVGV4dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgdGV4dCA9IFwiXCIsXG4gIGJvdW5jZUluLFxuICByb290Q2xhc3MgPSBcIlwiLFxuICBjbGFzc05hbWUgPSBcImZvbnQtdmlyZ2lsIHhsOnRleHQtOHhsIGxnOm1kOnRleHQtNnhsIHRleHQtNHhsIGhvdmVyOmFuaW1hdGUtcnViYmVyIGhvdmVyOnRleHQtbGltZS00MDAgY3Vyc29yLXBvaW50ZXJcIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXCJmbGV4IGZsZXgtcm93XCIsIHJvb3RDbGFzcywge1xuICAgICAgICBib3VuY2VJbkxlZnQ6IGJvdW5jZUluID09PSBcImxlZnRcIiB8fCAhYm91bmNlSW4sXG4gICAgICAgIGJvdW5jZUluUmlnaHQ6IGJvdW5jZUluID09PSBcInJpZ2h0XCIsXG4gICAgICAgIGJvdW5jZUluVXA6IGJvdW5jZUluID09PSBcInVwXCIsXG4gICAgICAgIGJvdW5jZUluRG93bjogYm91bmNlSW4gPT09IFwiZG93blwiLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3RleHQuc3BsaXQoXCJcIikubWFwKChjLCBpKSA9PiAoXG4gICAgICAgIDxoMSBrZXk9e2l9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7Y31cbiAgICAgICAgPC9oMT5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUnViYmVyVGV4dDtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEdhbWVUYWJsZSBmcm9tIFwifi9jb21wb25lbnRzL0dhbWVUYWJsZVwiO1xuaW1wb3J0IFdhaXRpbmdSb29tIGZyb20gXCJ+L2NvbXBvbmVudHMvV2FpdGluZ1Jvb21cIjtcbmltcG9ydCB7IEpvaW5EYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvY2xpZW50XCI7XG5pbXBvcnQgeyBHYW1lRGF0YSwgZ2FtZXMsIEdhbWVTdGF0dXMgfSBmcm9tIFwifi9jb250cm9sbGVycy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvcGxheWVyXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCJ+L3N0b3Jlc1wiO1xuaW1wb3J0IHsgZ2FtZUFjdGlvbnMgfSBmcm9tIFwifi9zdG9yZXMvZ2FtZVN0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgLy8gZ2V0IHJlbGF0ZWQgZ2FtZSBmcm9tIGdhbWUgbGlzdFxuICBjb25zdCBnYW1lID0gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBwYXJhbXMuaWQpO1xuXG4gIC8vIGlmIGdhbWUgaXMgbm90IGZvdW5kLCBzZXQgZ2FtZUV4aXN0IHRvIGZhbHNlXG4gIGlmICghZ2FtZSkge1xuICAgIHJldHVybiBqc29uKHsgLi4ucGFyYW1zLCBwbGF5ZXJzOiBbXSwgc3RhdHVzOiBHYW1lU3RhdHVzLlVOREVGSU5FRCB9KTtcbiAgfVxuXG4gIC8vIGlmIGdhbWUgaXMgZm91bmQgYW5kIGdhbWUgaXMgc3RpbGwgaW4gd2FpdGluZyBzdGF0ZSwgcmV0dXJuIGdhbWUgZGF0YVxuICByZXR1cm4ganNvbih7XG4gICAgLi4uZ2FtZS5nZXREYXRhKCksXG4gICAgcGxheWVyczogZ2FtZS5nZXRQbGF5ZXJzKCkubWFwKChwKSA9PiBwLmdldElkKCkpLFxuICAgIHN0YXR1czogZ2FtZS5nZXRTdGF0dXMoKSxcbiAgICAuLi5wYXJhbXMsXG4gIH0pO1xufTtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEgZXh0ZW5kcyBHYW1lRGF0YSB7XG4gIHN0YXR1czogR2FtZVN0YXR1cztcbiAgaWQ6IHN0cmluZztcbiAgcGxheWVyczogc3RyaW5nW107XG59XG5cbmNvbnN0IEdhbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLnNvY2tldC5jbGllbnQpO1xuICBjb25zdCBub3RGb3VuZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUubm90Rm91bmQpO1xuICBjb25zdCBkYXRhU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLmRhdGEpO1xuICBjb25zdCBwbGF5ZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5wbGF5ZXJzKTtcbiAgY29uc3QgZ2FtZVN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUuc3RhdHVzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vIHVzZSBlZmZlY3QgdG8gZGV0ZWN0IGlmIHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gR2FtZVN0YXR1cy5VTkRFRklORUQpIHtcbiAgICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLnRvZ2dsZU5vdEZvdW5kKCkpO1xuICAgICAgLy8gcmVkaXJlY3QgdG8gaG9tZSB3aGVuIGdhbWUgaXMgbm90IGZvdW5kXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmIGRhdGEuaWQgJiYgc29ja2V0KSB7XG4gICAgICBsZXQgcGxheWVyTmFtZSA9IFwiQW5vbnltb3VzXCI7XG4gICAgICAvLyBnZXQgbG9jYWwgc3RvcmFnZSBkYXRhXG4gICAgICBjb25zdCBsb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhLmlkKTtcbiAgICAgIGlmIChsb2NhbERhdGEpIHtcbiAgICAgICAgLy8gaWYgbG9jYWwgZGF0YSBpcyBmb3VuZCwgZ2V0IHBsYXllciBuYW1lIHRoZXJlIGFuZCBqb2luIHRoZSBnYW1lXG4gICAgICAgIGNvbnN0IGxvY2FsRGF0YU9iajogSm9pbkRhdGEgPSBKU09OLnBhcnNlKGxvY2FsRGF0YSkgYXMgSm9pbkRhdGE7XG4gICAgICAgIHBsYXllck5hbWUgPSBsb2NhbERhdGFPYmoucGxheWVyRGF0YS5uYW1lIHx8IFwiQW5vbnltb3VzXCI7XG4gICAgICAgIGlmIChkYXRhLnBsYXllcnMuaW5jbHVkZXMobG9jYWxEYXRhT2JqLnBsYXllckRhdGEuaWQpKSB7XG4gICAgICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuam9pbihkYXRhLmlkLCBwbGF5ZXJOYW1lKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuc3RhcnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIGxvY2FsIGRhdGEgaXMgbm90IGZvdW5kLCBjcmVhdGUgYSBuZXcgcGxheWVyIGFuZCBqb2luIHRoZSBnYW1lIGlmIHRoZSBnYW1lIGlzIG5vdCBmdWxsIG9yIHN0aWxsIGluIHdhaXRpbmcgc3RhdGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRhdGEuc3RhdHVzID09PSBHYW1lU3RhdHVzLldBSVRJTkcgJiZcbiAgICAgICAgICBkYXRhLnBsYXllckNvdW50ICYmXG4gICAgICAgICAgZGF0YS5wbGF5ZXJDb3VudCA8IDRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3UGxheWVyTmFtZSA9IHByb21wdChcIkVudGVyIHlvdXIgbmFtZVwiLCBcIkFub255bW91c1wiKTtcbiAgICAgICAgICBpZiAobmV3UGxheWVyTmFtZSkge1xuICAgICAgICAgICAgcGxheWVyTmFtZSA9IG5ld1BsYXllck5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLmpvaW4oZGF0YS5pZCwgcGxheWVyTmFtZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtkYXRhLCBkaXNwYXRjaCwgc29ja2V0XSk7XG4gIGNvbnNvbGUubG9nKFwiZ2FtZSBzdGF0dXNcIiwgZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAge2dhbWVTdGF0dXMgPT09IEdhbWVTdGF0dXMuV0FJVElORyAmJlxuICAgICAgICBkYXRhLnN0YXR1cyA9PT0gR2FtZVN0YXR1cy5XQUlUSU5HICYmIChcbiAgICAgICAgICA8V2FpdGluZ1Jvb21cbiAgICAgICAgICAgIHBsYXllcnM9e3BsYXllcnN9XG4gICAgICAgICAgICBvd25lcklkPXtkYXRhU3RhdGU/LmdhbWVEYXRhLm93bmVyfVxuICAgICAgICAgICAgc2hvd1N0YXJ0PXtkYXRhU3RhdGU/LmdhbWVEYXRhLm93bmVyID09PSBkYXRhU3RhdGU/LnBsYXllckRhdGEuaWR9XG4gICAgICAgICAgICBvbkFib3J0PXsoKSA9PiBkaXNwYXRjaChnYW1lQWN0aW9ucy5sZWF2ZSgpKX1cbiAgICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGRpc3BhdGNoKGdhbWVBY3Rpb25zLnN0YXJ0KCkpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8R2FtZVRhYmxlXG4gICAgICAgIHBsYXllcnM9e3BsYXllcnN9XG4gICAgICAgIGJsdXI9e1xuICAgICAgICAgIGdhbWVTdGF0dXMgPT09IEdhbWVTdGF0dXMuV0FJVElORyAmJlxuICAgICAgICAgIGRhdGEuc3RhdHVzID09PSBHYW1lU3RhdHVzLldBSVRJTkdcbiAgICAgICAgfVxuICAgICAgICBvd25lcklkPXtkYXRhU3RhdGU/LmdhbWVEYXRhLm93bmVyfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTY3JlZW47XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9wbGF5ZXJcIjtcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSBcIi4vUGxheWVyQXZhdGFyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsYXllcnM6IFBsYXllckRhdGFbXTtcbiAgbWU/OiBib29sZWFuO1xuICBvd25lcklkPzogc3RyaW5nO1xuICBibHVyPzogYm9vbGVhbjtcbn07XG5jb25zdCBHYW1lVGFibGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHBsYXllcnMsIG1lLCBvd25lcklkLCBibHVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIFwiYWJzb2x1dGUgei0wIGluc2V0LTAgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGJsdXI6IGJsdXIsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVs5NSVdIGgtWzcwJV0gbWluLWgtWzMyMHB4XSBtaW4tdy1bNjQwcHhdIG1heC1oLVs0ODBweF0gbWF4LXctWzEwMjRweF0gYmctc2xhdGUtNzAwIHJvdW5kZWQtWzZyZW1dIGJvcmRlci1bMXJlbV0gdGFibGUtc2hhZG93IHNoYWRvdy1zbGF0ZS0xMDAgYm9yZGVyLXNsYXRlLTkwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7cGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICBcImFic29sdXRlICBzaGFkb3ctWzBweF8wcHhfMTBweF8jMDAwXSB3LVsxMjhweF0gaC1bMTI4cHhdIGJvcmRlci1bOHB4XSByb3VuZGVkLWZ1bGwgYmctc2xhdGUtNzAwIGJvcmRlci1zbGF0ZS05MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiLWJvdHRvbS1bNjRweF1cIjogaW5kZXggPT09IDAsXG4gICAgICAgICAgICAgICAgXCItbGVmdC1bNzdweF1cIjogaW5kZXggPT09IDEsXG4gICAgICAgICAgICAgICAgXCItcmlnaHQtWzc3cHhdXCI6IGluZGV4ID09PSAyLFxuICAgICAgICAgICAgICAgIFwiLXRvcC1bNzdweF1cIjogaW5kZXggPT09IDMsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBsYXllckF2YXRhciBuYW1lPXtwbGF5ZXIubmFtZX0gbWU9e3BsYXllci5pZCA9PT0gb3duZXJJZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVUYWJsZTtcbiIsICJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmFuZG9tQ29sb3IgfSBmcm9tIFwifi91dGlscy9oZWxwZXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgbWU/OiBib29sZWFuO1xuICBuYW1lPzogc3RyaW5nO1xufTtcbmNvbnN0IFBsYXllckF2YXRhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbmFtZSA9IFwiXCIsIG1lIH0pID0+IHtcbiAgY29uc3QgY29sb3IgPSByYW5kb21Db2xvcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1bMTI4cHhdIGgtWzEyOHB4XSB0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBuYW1lICYmICFtZSA/IGAke2NvbG9yfWAgOiBcImluaGVyaXRcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiYWJzb2x1dGUgei0wIHctWzEyOHB4XSBoLVsxMjhweF0gcm91bmRlZC1mdWxsXCIsIHtcbiAgICAgICAgICBcImhvdmVyOmFuaW1hdGUtcnViYmVyIGJvcmRlci04IGJvcmRlci1za3ktNDAwIGJnLXNreS01MDBcIjogbmFtZSAmJiBtZSxcbiAgICAgICAgICBcImhvdmVyOmFuaW1hdGUtcnViYmVyIGJvcmRlci04IGJvcmRlci1jeWFuLTQwMCBiZy1jeWFuLTUwMFwiOlxuICAgICAgICAgICAgbmFtZSAmJiAhbWUsXG4gICAgICAgICAgXCJib3JkZXItOCBib3JkZXItZGFzaGVkIGFuaW1hdGUtc3Bpbi1zbG93XCI6ICFuYW1lLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge1wiIFwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuYW1lICYmICFtZSA/IGAke2NvbG9yfWNjYCA6IFwiaW5oZXJpdFwiLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgXCJ3LVsxMjBweF0gaC1bMTIwcHhdIHJvdW5kZWQtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXZpcmdpbCB6LTEwIG93IHRleHQteGwgcHgtNFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGV4dC1zbGF0ZS0xMDAgYW5pbWF0ZS1wdWxzZSBiZy1zbGF0ZS03MDBcIjogIW5hbWUsXG4gICAgICAgICAgICBcInRleHQtc2xhdGUtOTAwXCI6IG5hbWUsXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8cD57bmFtZSB8fCBcIndhaXRpbmcgcGxheWVyXCJ9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJBdmF0YXI7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSBcIi4vcGxheWVyQXZhdGFyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG93bmVySWQ/OiBzdHJpbmc7XG4gIHBsYXllcnM6IFBsYXllckRhdGFbXTtcbiAgc2hvd1N0YXJ0PzogYm9vbGVhbjtcbiAgYWJvcnRUZXh0Pzogc3RyaW5nO1xuICBzdGFydFRleHQ/OiBzdHJpbmc7XG4gIG9uQWJvcnQ/OiAoKSA9PiB2b2lkO1xuICBvblN0YXJ0PzogKCkgPT4gdm9pZDtcbiAgbWF4UGxheWVycz86IG51bWJlcjtcbn07XG5cbmNvbnN0IFdhaXRpbmdSb29tOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBvd25lcklkID0gXCJcIixcbiAgcGxheWVycyA9IFtdLFxuICBhYm9ydFRleHQgPSBcIkFib3J0IVwiLFxuICBzdGFydFRleHQgPSBcIkxhdW5jaCB0aGUgZ2FtZSFcIixcbiAgbWF4UGxheWVycyA9IDQsXG4gIG9uQWJvcnQsXG4gIG9uU3RhcnQsXG4gIHNob3dTdGFydCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgei0xMCB3LXNjcmVlbiBoLXNjcmVlbiBiYWNrZHJvcC1ibHVyLTJ4bCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtZXhvIG1iLThcIj5cbiAgICAgICAge3BsYXllcnMubGVuZ3RoID09PSBtYXhQbGF5ZXJzXG4gICAgICAgICAgPyBgU3RhcnRpbmcgdGhlIGdhbWUsIHBsZWFzZSBzdGFuZGJ5IS4uLmBcbiAgICAgICAgICA6IGBXYWl0aW5nIGFub3RoZXIgcGxheWVyLi4uYH1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBzcGFjZS14LTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiAoXG4gICAgICAgICAgPFBsYXllckF2YXRhclxuICAgICAgICAgICAgbWU9e3BsYXllci5pZCA9PT0gb3duZXJJZH1cbiAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIHtBcnJheShtYXhQbGF5ZXJzIC0gcGxheWVycy5sZW5ndGgpXG4gICAgICAgICAgLmZpbGwoMClcbiAgICAgICAgICAubWFwKChpKSA9PiAoXG4gICAgICAgICAgICA8UGxheWVyQXZhdGFyIGtleT17aX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXIgbXQtOFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAwIGZvbnQtZXhvIGhvdmVyOmJnLXNsYXRlLTcwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTkwMCBmb250LWJvbGQgcHktNCBweC04XCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkFib3J0fVxuICAgICAgICA+XG4gICAgICAgICAge2Fib3J0VGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHtzaG93U3RhcnQgJiYgPEJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0fT57c3RhcnRUZXh0fTwvQnV0dG9uPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FpdGluZ1Jvb207XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonODQ0MjYxMzInLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTZJSVhZRkNELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZU0pUTlc2Ty5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWFRaVjVHTkQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5KTkJOUUZHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzLyRpZCc6eydpZCc6J3JvdXRlcy8kaWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonOmlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzLyRpZC1ORE0yMlhCRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNDRCQ01EWlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVTdTWUM1WFEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTQ0QkNNRFpRLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtODQ0MjYxMzIuanMnfTsiLCAiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IENsaWVudENvbnRyb2xsZXIgZnJvbSBcIi4vY2xpZW50XCI7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNsaWVudHM6IENsaWVudENvbnRyb2xsZXJbXSA9IFtdO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBtYW5hZ2UgdGhlIHNvY2tldCBjb25uZWN0aW9uIGJldHdlZW4gdGhlIHNlcnZlciBhbmQgdGhlIGNsaWVudFxuICogQGNsYXNzIENvbm5lY3Rpb25Db250cm9sbGVyXG4gKiBAcGFyYW0ge1NlcnZlcn0gaW8gLSBUaGUgc29ja2V0IGlvIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc2VydmVyIGFuZCB0aGUgY2xpZW50XG4gKlxuICovXG5jbGFzcyBDb25uZWN0aW9uQ29udHJvbGxlciB7XG4gIGlvOiBTZXJ2ZXI7XG4gIGNvbnN0cnVjdG9yKGlvOiBTZXJ2ZXIpIHtcbiAgICB0aGlzLmlvID0gaW87XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzdGFydCBsaXN0ZW5pbmcgdG8gdGhlIHNvY2tldCBjb25uZWN0aW9uXG4gICAqIEBtZXRob2Qgc3RhcnRcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBzdGFydCgpIHtcbiAgICB0aGlzLmlvLm9uKFwiY29ubmVjdGlvblwiLCAoc29ja2V0KSA9PiB7XG4gICAgICBwcmludExvZyhcImRlZmF1bHRcIiwgXCJTT0NLRVRcIiwgXCJjb25uZWN0ZWQ6IFwiLCBzb2NrZXQuaWQpO1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudENvbnRyb2xsZXIoc29ja2V0LCB0aGlzLmlvKTtcbiAgICAgIGNsaWVudHMucHVzaChjbGllbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3Rpb25Db250cm9sbGVyO1xuIiwgImltcG9ydCB7IFNlcnZlciwgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYW1lLCBwcmludExvZyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB7IGNsaWVudHMgfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIsIHsgR2FtZURhdGEsIGdhbWVzIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIsIHsgUGxheWVyRGF0YSB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IHR5cGUgQ2xpZW50RXZlbnQgPSBcImpvaW5cIiB8IFwiam9pbmVkXCIgfCBcImxlYXZlXCIgfCBcImxlZnRcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSm9pbkRhdGEge1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIHBsYXllckRhdGE6IFBsYXllckRhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3R2FtZURhdGEge1xuICBwbGF5ZXJOYW1lOiBzdHJpbmc7XG4gIGdhbWVEYXRhOiBHYW1lRGF0YTtcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIG1hbmFnZSB0aGUgc29ja2V0IGNvbm5lY3Rpb24gY3JlYXRlZCBieSB0aGUgY2xpZW50XG4gKiBAY2xhc3MgQ2xpZW50Q29udHJvbGxlclxuICogQHBhcmFtIHtTb2NrZXR9IHNvY2tldCAtIFRoZSBzb2NrZXQgY29ubmVjdGlvbiBjcmVhdGVkIGJ5IHRoZSBjbGllbnRcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50Q29udHJvbGxlciB7XG4gIHNvY2tldDogU29ja2V0O1xuICBzZXJ2ZXI6IFNlcnZlcjtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzb2NrZXQgc29ja2V0IGNvbm5lY3Rpb24gY3JlYXRlZCBieSB0aGUgY2xpZW50XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihzb2NrZXQ6IFNvY2tldCwgaW86IFNlcnZlcikge1xuICAgIHRoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgIHRoaXMuc2VydmVyID0gaW87XG4gICAgc29ja2V0Lm9uKFwiZGlzY29ubmVjdFwiLCB0aGlzLmRpc2Nvbm5lY3QuYmluZCh0aGlzKSk7XG4gICAgc29ja2V0Lm9uKFwiY3JlYXRlXCIsIHRoaXMuY3JlYXRlLmJpbmQodGhpcykpO1xuICAgIHNvY2tldC5vbihcImpvaW5cIiwgdGhpcy5qb2luLmJpbmQodGhpcykpO1xuICAgIHNvY2tldC5vbihcImxlYXZlXCIsIHRoaXMubGVhdmUuYmluZCh0aGlzKSk7XG4gICAgc29ja2V0Lm9uKFwic3RhcnRcIiwgdGhpcy5zdGFydC5iaW5kKHRoaXMpKTtcbiAgfVxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkaXNjb25uZWN0IHRoZSBzb2NrZXQgY29ubmVjdGlvblxuICAgKiBAbWV0aG9kIGRpc2Nvbm5lY3RcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJTT0NLRVRcIiwgXCJkaXNjb25uZWN0ZWQ6IFwiLCB0aGlzLnNvY2tldC5pZCk7XG4gICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIGNvbnN0IGNsaWVudEluZGV4ID0gY2xpZW50cy5pbmRleE9mKHRoaXMpO1xuICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIkNMSUVOVFwiLCBcIlJlbW92aW5nIENMSUVOVCNcIiwgY2xpZW50SW5kZXgpO1xuICAgIGNsaWVudHMuc3BsaWNlKGNsaWVudEluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge05ld0dhbWVEYXRhfSBkYXRhIGdhbWUgZGF0YSBzZW50IGJ5IHRoZSBjbGllbnQgdG8gY3JlYXRlIGEgbmV3IGdhbWVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjcmVhdGUoZGF0YTogTmV3R2FtZURhdGEpOiB2b2lkIHtcbiAgICAvLyBwcmVwYXJlIGdhbWUgb3duZXIgZGF0YVxuICAgIGNvbnN0IG93bmVyRGF0YTogUGxheWVyRGF0YSA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIG5hbWU6IGRhdGEucGxheWVyTmFtZSB8fCBcIk93bmVyXCIsXG4gICAgICBzb2NrZXRJZDogdGhpcy5zb2NrZXQuaWQsXG4gICAgfTtcbiAgICAvLyBkZWZpbmUgbmV3IGdhbWVEYXRhXG4gICAgY29uc3QgbmV3R2FtZURhdGE6IEdhbWVEYXRhID0geyAuLi5kYXRhLmdhbWVEYXRhLCBvd25lcjogb3duZXJEYXRhLmlkIH07XG5cbiAgICAvLyBjcmVhdGUgb3duZXIgYXMgYSBwbGF5ZXIgdG9vXG4gICAgY29uc3Qgb3duZXIgPSBuZXcgUGxheWVyQ29udHJvbGxlcihvd25lckRhdGEpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBnYW1lXG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcihuZXdHYW1lRGF0YSk7XG5cbiAgICAvLyBhZGQgdGhlIG93bmVyIHRvIHRoZSBnYW1lXG4gICAgbmV3R2FtZS5hZGRQbGF5ZXIob3duZXIpO1xuXG4gICAgLy8gYWRkIHRoZSBnYW1lIHRvIHRoZSBnYW1lIGxpc3RcbiAgICBnYW1lcy5wdXNoKG5ld0dhbWUpO1xuXG4gICAgLy8gcHJlcGFyZSB0aGUgZGF0YSB0byBzZW5kIHRvIHRoZSBjbGllbnRcbiAgICBjb25zdCBqb2luRGF0YTogSm9pbkRhdGEgPSB7XG4gICAgICBnYW1lRGF0YTogbmV3R2FtZS5nZXREYXRhKCksXG4gICAgICBwbGF5ZXJEYXRhOiBvd25lckRhdGEsXG4gICAgfTtcblxuICAgIC8vIGpvaW4gdGhlIGdhbWUgcm9vbVxuICAgIHByaW50TG9nKFwiaW5mb1wiLCBcIkNMSUVOVFwiLCBcIkpvaW5pbmcgZ2FtZSByb29tOiBcIiwgbmV3R2FtZS5nZXRJZCgpKTtcbiAgICB0aGlzLnNvY2tldC5qb2luKG5ld0dhbWUuZ2V0SWQoKSk7XG5cbiAgICAvLyBzZW5kIHRoZSBkYXRhIHRvIHRoZSBjbGllbnRcbiAgICB0aGlzLnNvY2tldC5lbWl0KFwiY3JlYXRlZFwiLCBqb2luRGF0YSk7XG4gICAgcHJpbnRMb2coXCJpbmZvXCIsIFwiQ0xJRU5UXCIsIFwiTmV3IGdhbWUgY3JlYXRlZDogXCIsIG5ld0dhbWUuZ2V0SWQoKSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtKb2luRGF0YX0gZGF0YSBnYW1lIGpvaW4gZGF0YSBzZW50IGJ5IHBsYXllciAoZ2FtZURhdGEgYW5kIHBsYXllckRhdGEpXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgam9pbihkYXRhOiBKb2luRGF0YSk6IHZvaWQge1xuICAgIGxldCBuZXdQbGF5ZXI6IFBsYXllckNvbnRyb2xsZXIgPSBuZXcgUGxheWVyQ29udHJvbGxlcih7XG4gICAgICBpZDogZGF0YS5wbGF5ZXJEYXRhLmlkIHx8IHV1aWR2NCgpLFxuICAgICAgbmFtZTogZGF0YS5wbGF5ZXJEYXRhLm5hbWUgfHwgZ2VuZXJhdGVOYW1lKDEpLFxuICAgICAgc29ja2V0SWQ6IHRoaXMuc29ja2V0LmlkLFxuICAgIH0pO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBnYW1lIGlzIGFscmVhZHkgY3JlYXRlZFxuICAgIGxldCBnYW1lID0gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBkYXRhLmdhbWVEYXRhLmlkKTtcblxuICAgIGlmICghZ2FtZSkge1xuICAgICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiQ0xJRU5UXCIsIFwiR2FtZSBub3QgZm91bmQgXCIsIGRhdGEuZ2FtZURhdGEuaWQpO1xuICAgICAgLy8gdGVsbCB0aGUgY2xpZW50IHRoYXQgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gICAgICB0aGlzLnNvY2tldC5lbWl0KFwibm90Rm91bmRcIiwgZGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZW1pdCBnYW1lIG5vdCBmb3VuZCB3aGVuIHRoZSBnYW1lIGlzIGFscmVhZHkgc3RhcnRlZCBhbmQgdGhlIHBsYXllciBpcyBub3QgaW4gdGhlIGdhbWVcbiAgICBpZiAoXG4gICAgICBnYW1lLmlzU3RhcnRlZCgpICYmXG4gICAgICBnYW1lLmdldFBsYXllckJ5SWQoZGF0YS5wbGF5ZXJEYXRhLmlkKSA9PT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJDTElFTlRcIiwgXCJHYW1lIGFscmVhZHkgc3RhcnRlZCBcIiwgZGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KFwibm90Rm91bmRcIiwgZGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgY3VycmVudCBwbGF5ZXIgaXMgYWxyZWFkeSBpbiB0aGUgZ2FtZVxuICAgIGNvbnN0IGV4aXN0aW5nUGxheWVyID0gZ2FtZS5nZXRQbGF5ZXJCeUlkKGRhdGEucGxheWVyRGF0YS5pZCk7XG4gICAgaWYgKCFleGlzdGluZ1BsYXllcikge1xuICAgICAgLy8gY3JlYXRlIHRoZSBwbGF5ZXIgaWYgdGhlIGdhbWUgaXMgbm90IGZ1bGxcbiAgICAgIGlmIChnYW1lLmdldFRvdGFsUGxheWVyKCkgPCA0KSB7XG4gICAgICAgIC8vIGFkZCB0aGUgcGxheWVyIHRvIHRoZSBnYW1lXG4gICAgICAgIGdhbWUuYWRkUGxheWVyKG5ld1BsYXllcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZW5kIGVycm9yIG1lc3NhZ2UgdG8gdGhlIGNsaWVudFxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwiZXJyb3JcIiwge1xuICAgICAgICAgIG1lc3NhZ2U6IFwiR2FtZSBpcyBmdWxsXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGpvaW4gdGhlIGdhbWUgcm9vbVxuICAgIHByaW50TG9nKFwiaW5mb1wiLCBcIkNMSUVOVFwiLCBcIkpvaW5pbmcgZ2FtZSByb29tOiBcIiwgZ2FtZS5nZXRJZCgpKTtcbiAgICB0aGlzLnNvY2tldC5qb2luKGdhbWUuZ2V0SWQoKSk7XG5cbiAgICAvLyBwcmVwYXJlIHRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIGNsaWVudFxuICAgIGNvbnN0IGpvaW5EYXRhOiBKb2luRGF0YSA9IHtcbiAgICAgIGdhbWVEYXRhOiBnYW1lLmdldERhdGEoKSxcbiAgICAgIHBsYXllckRhdGE6IG5ld1BsYXllci5nZXREYXRhKCksXG4gICAgfTtcbiAgICAvLyBzZW5kIHRoZSBkYXRhIHRvIHRoZSBjbGllbnQgaWYgdGhlIGdhbWUgaXMgbm90IHN0YXJ0ZWRcbiAgICB0aGlzLnNvY2tldC5lbWl0KFwiam9pbmVkXCIsIGpvaW5EYXRhKTtcblxuICAgIC8vIHNlbmQgcGxheWVyIGxpc3QgdG8gdGhlIGdhbWUgcm9vbVxuICAgIC8vIGdldCBhbGwgcGxheWVyIGluIHRoZSBnYW1lXG4gICAgY29uc3QgcGxheWVycyA9IGdhbWUuZ2V0UGxheWVycygpO1xuICAgIC8vIG1hcCB0aGUgcGxheWVyIGRhdGEgdG8gc2VuZCB0byB0aGUgY2xpZW50XG4gICAgY29uc3QgcGxheWVyRGF0YSA9IHBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5nZXREYXRhKCkpO1xuICAgIC8vc2VuZCB0aGUgZGF0YSB0byB0aGUgY2xpZW50XG4gICAgdGhpcy5zZXJ2ZXIuaW4oZ2FtZS5nZXRJZCgpKS5lbWl0KFwicGxheWVyc1wiLCBwbGF5ZXJEYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGxlYXZlIHRoZSBnYW1lXG4gICAqIEBtZXRob2QgbGVhdmVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBsZWF2ZShkYXRhOiBKb2luRGF0YSk6IHZvaWQge1xuICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIkNMSUVOVFwiLCBcIkxlYXZpbmcgZ2FtZTogXCIsIGRhdGEuZ2FtZURhdGEuaWQpO1xuICAgIC8vIGdldCBnYW1lIGRhdGEgZnJvbSBzb2NrZXQgZGF0YVxuICAgIGNvbnN0IGdhbWUgPSBnYW1lcy5maW5kKChnYW1lKSA9PiBnYW1lLmdldElkKCkgPT09IGRhdGEuZ2FtZURhdGEuaWQpO1xuICAgIC8vIGlmIGdhbWUgaXMgZGVmaW5lZCwgcHJvY2VlZCByZW1vdmluZyB0aGUgcGxheWVyIGZyb20gdGhlIGdhbWVcbiAgICBpZiAoZ2FtZSkge1xuICAgICAgY29uc3QgcGxheWVyID0gZ2FtZS5nZXRQbGF5ZXJCeUlkKGRhdGEucGxheWVyRGF0YS5pZCk7XG4gICAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJQTEFZRVJcIiwgXCJMZWF2aW5nIGdhbWU6IFwiLCBkYXRhLnBsYXllckRhdGEuaWQpO1xuXG4gICAgICAvLyBpZiB0aGUgcGxheWVyIGlzIGZvdW5kLCB0aGVuIHdlIGNhbiByZW1vdmUgdGhlIHBsYXllciBmcm9tIHRoZSBnYW1lXG4gICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgIC8vIGJyb2FkY2FzdCB0byBvdGhlciBwbGF5ZXJzIHRoYXQgdGhlIHBsYXllciBsZWZ0XG4gICAgICAgIHRoaXMuc2VydmVyLmluKGdhbWUuZ2V0SWQoKSkuZW1pdChcImxlZnRcIiwgcGxheWVyLmdldERhdGEoKSk7XG4gICAgICAgIGdhbWUucmVtb3ZlUGxheWVyKHBsYXllcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3RhcnQgdGhlIGdhbWVcbiAgICogQG1ldGhvZCBzdGFydFxuICAgKiBAcGFyYW1zIHtKb2luRGF0YX0gZGF0YSBUaGUgZ2FtZSBpZFxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHN0YXJ0KGRhdGE6IEpvaW5EYXRhKTogdm9pZCB7XG4gICAgcHJpbnRMb2coXCJpbmZvXCIsIFwiQ0xJRU5UXCIsIFwiU3RhcnRpbmcgZ2FtZTogXCIsIGRhdGEpO1xuICAgIC8vIGdldCBnYW1lIGRhdGEgZnJvbSBnYW1lIGxpc3RcbiAgICBjb25zdCBnYW1lID0gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBkYXRhLmdhbWVEYXRhLmlkKTtcblxuICAgIC8vIGlmIGdhbWUgaXMgZGVmaW5lZCwgcHJvY2VlZCBzdGFydGluZyB0aGUgZ2FtZVxuICAgIGlmIChnYW1lKSB7XG4gICAgICAvLyBzdGFydCB0aGUgZ2FtZVxuICAgICAgZ2FtZS5zdGFydCgpO1xuICAgICAgLy8gYnJvYWRjYXN0IHRvIG90aGVyIHBsYXllcnMgdGhhdCB0aGUgZ2FtZSBzdGFydGVkXG4gICAgICB0aGlzLnNlcnZlci5pbihnYW1lLmdldElkKCkpLmVtaXQoXCJzdGFydGVkXCIsIGdhbWUuZ2V0RGF0YSgpKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyRGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc29ja2V0SWQ6IHN0cmluZztcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIG1hbmFnZSBwbGF5ZXIgaW4gdGhlIGdhbWVcbiAqIEBjbGFzcyBQbGF5ZXJDb250cm9sbGVyXG4gKiBAcGFyYW0ge1BsYXllckRhdGF9IGRhdGEgLSBUaGUgcGxheWVyIGRhdGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciB7XG4gIHByaXZhdGUgZGF0YTogUGxheWVyRGF0YTtcbiAgY29uc3RydWN0b3IoZGF0YTogUGxheWVyRGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cbiAgZ2V0U29ja2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zb2NrZXRJZDtcbiAgfVxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmlkO1xuICB9XG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICBsZWF2ZSgpIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBpZDogXCJcIixcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBzb2NrZXRJZDogXCJcIixcbiAgICB9O1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFD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
