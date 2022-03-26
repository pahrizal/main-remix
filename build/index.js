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
var app_default = "/build/_assets/app-I23AVGTB.css";

// app/assets/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-66KGEGBY.css";

// app/stores/index.ts
init_react();

// app/stores/gameState.ts
init_react();

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
  console.log(`[${"\x1B[35m" /* FgMagenta */}${currentTimestamp() + "\x1B[0m" /* Reset */}][${"\x1B[36m" /* FgCyan */}${label}${"\x1B[0m" /* Reset */}]`, `${color}${message.join("")}${"\x1B[0m" /* Reset */}`);
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
  },
  startGame: (onStarted) => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      const gameData = getState().game.data;
      if (!socket)
        return;
      socket.emit("start", gameData);
      socket.on("started", onStarted);
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
  SET_GAME_STATE: "SET_GAME_STATE"
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
  start: () => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      const gameData = getState().game.data;
      if (!socket || !gameData)
        return;
      console.log("sending start game request");
      socketActions.startGame((gameData2) => {
        console.log("game started", gameData2);
        dispatch({
          type: GameActionsTypes.SET_GAME_STATE,
          payload: "STARTED" /* STARTED */
        });
      })(dispatch, getState);
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
    case GameActionsTypes.SET_GAME_STATE:
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
var import_react5 = __toESM(require("react"));
var GameTable = () => {
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "absolute z-0 inset-0 w-screen h-screen flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "w-[95%] h-[70%] bg-lime-800 rounded-[6rem] ring-[1rem] shadow-inner shadow-lg shadow-slate-100 ring-lime-900 flex flex-col justify-center items-center"
  }, "test"));
};
var GameTable_default = GameTable;

// app/components/WaitingRoom.tsx
init_react();
var import_react7 = __toESM(require("react"));

// app/components/playerAvatar.tsx
init_react();
var import_clsx3 = __toESM(require("clsx"));
var import_react6 = __toESM(require("react"));
var PlayerAvatar = ({ name = "", me }) => {
  const color = randomColor();
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "relative w-[128px] h-[128px] text-center flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    style: {
      borderColor: name && !me ? `${color}` : "inherit"
    },
    className: (0, import_clsx3.default)("absolute z-0 w-[128px] h-[128px] rounded-full", {
      "hover:animate-rubber border-8 border-sky-400 bg-sky-500": name && me,
      "hover:animate-rubber border-8 border-cyan-400 bg-cyan-500": name && !me,
      "border-8 border-dashed animate-spin-slow": !name
    })
  }, " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    style: {
      backgroundColor: name && !me ? `${color}cc` : "inherit"
    },
    className: (0, import_clsx3.default)("w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center font-virgil z-10 ow text-xl px-4", {
      "text-slate-100 animate-pulse bg-slate-700": !name,
      "text-slate-900": name
    })
  }, /* @__PURE__ */ import_react6.default.createElement("p", null, name || "waiting player")));
};
var playerAvatar_default = PlayerAvatar;

// app/components/WaitingRoom.tsx
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
  }, players.map((player) => /* @__PURE__ */ import_react7.default.createElement(playerAvatar_default, {
    me: player.id === ownerId,
    key: player.id,
    name: player.name
  })), Array(maxPlayers - players.length).fill(0).map((i) => /* @__PURE__ */ import_react7.default.createElement(playerAvatar_default, {
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
  return (0, import_remix5.json)(__spreadValues({}, params));
};
var GameScreen = () => {
  const nav = (0, import_remix5.useNavigate)();
  const data = (0, import_remix5.useLoaderData)();
  const socket = (0, import_react_redux3.useSelector)((state) => state.socket.client);
  const notFound = (0, import_react_redux3.useSelector)((state) => state.game.notFound);
  const dataState = (0, import_react_redux3.useSelector)((state) => state.game.data);
  const players = (0, import_react_redux3.useSelector)((state) => state.game.players);
  const gameStatus = (0, import_react_redux3.useSelector)((state) => state.game.status);
  const dispatch = (0, import_react_redux3.useDispatch)();
  import_react8.default.useEffect(() => {
    if (notFound) {
      dispatch(gameActions.toggleNotFound());
      window.location.href = "/";
    }
  }, [dispatch, nav, notFound]);
  import_react8.default.useEffect(() => {
    if (data && data.id && socket) {
      let playerName = "Anonymous";
      const localData = localStorage.getItem(data.id);
      if (localData) {
        const localDataObj = JSON.parse(localData);
        playerName = localDataObj.playerData.name || "Anonymous";
      } else {
        const newPlayerName = prompt("Enter your name", "Anonymous");
        if (newPlayerName) {
          playerName = newPlayerName;
        }
      }
      dispatch(gameActions.join(data.id, playerName));
    }
  }, [data, dispatch, socket]);
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "w-screen h-screen flex flex-col justify-center items-center"
  }, gameStatus === "WAITING" /* WAITING */ && /* @__PURE__ */ import_react8.default.createElement(WaitingRoom_default, {
    players,
    ownerId: dataState == null ? void 0 : dataState.gameData.owner,
    showStart: (dataState == null ? void 0 : dataState.gameData.owner) === (dataState == null ? void 0 : dataState.playerData.id),
    onAbort: () => dispatch(gameActions.leave()),
    onStart: () => dispatch(gameActions.start())
  }), /* @__PURE__ */ import_react8.default.createElement(GameTable_default, null));
};
var id_default = GameScreen;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3c7c314a", "entry": { "module": "/build/entry.client-6IIXYFCD.js", "imports": ["/build/_shared/chunk-YSJTNW6O.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2Z2YUJIK.js", "imports": ["/build/_shared/chunk-UYUV2UQY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$id": { "id": "routes/$id", "parentId": "root", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$id-NXFVMOGA.js", "imports": ["/build/_shared/chunk-FGOLCKP5.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BHLL2LVT.js", "imports": ["/build/_shared/chunk-FGOLCKP5.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3C7C314A.js" };

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

// app/controllers/game.ts
init_react();
var import_uuid = require("uuid");
var games = [];
var GameController = class {
  constructor(data) {
    this.data = {
      id: (0, import_uuid.v4)(),
      level: 1,
      owner: "",
      playerCount: 0
    };
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
  }
};

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
    console.log(data);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL3N0b3Jlcy9pbmRleC50cyIsICIuLi9hcHAvc3RvcmVzL2dhbWVTdGF0ZS50cyIsICIuLi9hcHAvdXRpbHMvaGVscGVyLnRzIiwgIi4uL2FwcC9zdG9yZXMvc29ja2V0U3RhdGUudHMiLCAiLi4vYXBwL3N0b3Jlcy9jb25maWcudHMiLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CdXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1J1YmJlclRleHQudHN4IiwgInJvdXRlOi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3JvdXRlcy8kaWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0dhbWVUYWJsZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2FpdGluZ1Jvb20udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3BsYXllckF2YXRhci50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2Nvbm5lY3Rpb24udHMiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2NsaWVudC50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvZ2FtZS50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvcGxheWVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCBDb25uZWN0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9hcHAvY29udHJvbGxlcnMvY29ubmVjdGlvblwiO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBjcmVhdGUgY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG4vL2NyZWF0ZSBzZXJ2ZXIgc29ja2V0IGlvIGFuZCBhdHRhY2ggdG8gY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCB7XG4gIGNvcnM6IHtcbiAgICBvcmlnaW46IFwiKlwiLFxuICB9LFxuICB0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIl0sXG4gIGFsbG93VXBncmFkZXM6IGZhbHNlLFxufSk7XG5cbi8vIGF0dGFjaCBzb2NrZXQgY29ubmVjdGlvbiBjb250cm9sbGVyXG5jb25zdCBzb2NrZXRDb25uID0gbmV3IENvbm5lY3Rpb25Db250cm9sbGVyKGlvKTtcbnNvY2tldENvbm4uc3RhcnQoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5zZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcGFwdXEvV29yay9tYWluLXJlbWl4L2FwcC9yb3V0ZXMvJGlkLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvJGlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGlvIGFzIHNvY2tldENsaWVudCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgYW5pbWF0aW9uU3R5bGVzIGZyb20gXCJ+L2Fzc2V0cy9zdHlsZXMvYW5pbWF0aW9uLmNzc1wiO1xuaW1wb3J0IGFwcFN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCB0YWlsd2luZFN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IHsgQXBwU3RhdGUsIGluaXRpYWxBcHBTdGF0ZSB9IGZyb20gXCIuL3N0b3Jlc1wiO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCJ+L3N0b3Jlcy9jb25maWdcIjtcbmltcG9ydCB7IHNvY2tldEFjdGlvbnMgfSBmcm9tIFwifi9zdG9yZXMvc29ja2V0U3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICBhczogXCJmb250XCIsXG4gICAgICBocmVmOiBcIi9mb250cy9WaXJnaWwzWU9GRi53b2ZmMlwiLFxuICAgICAgdHlwZTogXCJmb250L3dvZmYyXCIsXG4gICAgICBjcm9zc09yaWdpbjogXCJhbm9ueW1vdXNcIixcbiAgICB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZXMgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGFwcFN0eWxlcyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogYW5pbWF0aW9uU3R5bGVzIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJNYWluIFJlbWl4XCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5jb25zdCBwZXJzaXN0ZWRTdGF0ZTogQXBwU3RhdGUgPSB7XG4gIC4uLmluaXRpYWxBcHBTdGF0ZSxcbn07XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHBlcnNpc3RlZFN0YXRlKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIHNvY2tldEFjdGlvbnMuaW5pdChcbiAgICAgICAgc29ja2V0Q2xpZW50KHtcbiAgICAgICAgICB0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIl0sXG4gICAgICAgICAgdXBncmFkZTogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgICAgICAoZGF0YSkgPT4ge31cbiAgICAgIClcbiAgICApO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIGxhbmc9XCJlblwiXG4gICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgdGV4dC1zbGF0ZS0xMDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIlxuICAgID5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuLy8gbG9hZGVyIGZ1bmN0aW9uIHRvIGdldCBlbnZpcm9ubWVudCBmcm9tIHNlcnZlclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBqc29uKHsgZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOViB9KTtcbn07XG5cbi8vIGRlY2xhcmUgd2luZG93IG9iamVjdCBhcyBhbnkgdG8gYXZvaWQgdHMgZXJyb3JcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcFdpdGhSZWR1eCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8eyBlbnY6IHN0cmluZyB9PigpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHN0b3JlIGVudiBpbiBnbG9iYWwgd2luZG93IG9iamVjdFxuICAgIHdpbmRvdy5FTlYgPSBkYXRhLmVudjtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEFwcCAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgR2FtZVJlZHVjZXIsIEdhbWVTdGF0ZSwgaW5pdGlhbEdhbWVTdGF0ZSB9IGZyb20gXCIuL2dhbWVTdGF0ZVwiO1xuaW1wb3J0IHsgaW5pdGlhbFNvY2tldFN0YXRlLCBTb2NrZXRSZWR1Y2VyLCBTb2NrZXRTdGF0ZSB9IGZyb20gXCIuL3NvY2tldFN0YXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICBzb2NrZXQ6IFNvY2tldFN0YXRlO1xuICBnYW1lOiBHYW1lU3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQXBwU3RhdGUgPSB7XG4gIHNvY2tldDogaW5pdGlhbFNvY2tldFN0YXRlLFxuICBnYW1lOiBpbml0aWFsR2FtZVN0YXRlLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xuICBzb2NrZXQ6IFNvY2tldFJlZHVjZXIsXG4gIGdhbWU6IEdhbWVSZWR1Y2VyLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcFN0YXRlKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBKb2luRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL2NsaWVudFwiO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvcGxheWVyXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5hbWUgfSBmcm9tIFwifi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB7IFRodW5rQWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNvY2tldEFjdGlvbnMsIFNvY2tldEFjdGlvbnMgfSBmcm9tIFwiLi9zb2NrZXRTdGF0ZVwiO1xuXG5leHBvcnQgZW51bSBHYW1lU3RhdHVzIHtcbiAgV0FJVElORyA9IFwiV0FJVElOR1wiLFxuICBTVEFSVEVEID0gXCJTVEFSVEVEXCIsXG4gIEZJTklTSEVEID0gXCJGSU5JU0hFRFwiLFxuICBCVVNZID0gXCJCVVNZXCIsXG59XG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTdGF0ZSB7XG4gIHN0YXR1czogR2FtZVN0YXR1cztcbiAgZGF0YTogSm9pbkRhdGEgfCBudWxsO1xuICBub3RGb3VuZDogYm9vbGVhbjtcbiAgcGxheWVyczogUGxheWVyRGF0YVtdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbEdhbWVTdGF0ZTogR2FtZVN0YXRlID0ge1xuICBkYXRhOiBudWxsLFxuICBub3RGb3VuZDogZmFsc2UsXG4gIHBsYXllcnM6IFtdLFxuICBzdGF0dXM6IEdhbWVTdGF0dXMuV0FJVElORyxcbn07XG5cbmludGVyZmFjZSBHYW1lQWN0aW9uVHlwZXMge1xuICByZWFkb25seSBTRVRfR0FNRV9EQVRBOiBcIlNFVF9HQU1FX0RBVEFcIjtcbiAgcmVhZG9ubHkgU0VUX0dBTUVfTk9UX0ZPVU5EOiBcIlNFVF9HQU1FX05PVF9GT1VORFwiO1xuICByZWFkb25seSBTRVRfUExBWUVSUzogXCJTRVRfUExBWUVSU1wiO1xuICByZWFkb25seSBTRVRfR0FNRV9TVEFURTogXCJTRVRfR0FNRV9TVEFURVwiO1xufVxuXG5jb25zdCBHYW1lQWN0aW9uc1R5cGVzOiBHYW1lQWN0aW9uVHlwZXMgPSB7XG4gIFNFVF9HQU1FX0RBVEE6IFwiU0VUX0dBTUVfREFUQVwiLFxuICBTRVRfR0FNRV9OT1RfRk9VTkQ6IFwiU0VUX0dBTUVfTk9UX0ZPVU5EXCIsXG4gIFNFVF9QTEFZRVJTOiBcIlNFVF9QTEFZRVJTXCIsXG4gIFNFVF9HQU1FX1NUQVRFOiBcIlNFVF9HQU1FX1NUQVRFXCIsXG59O1xuXG5pbnRlcmZhY2UgU2V0R2FtZURhdGEge1xuICB0eXBlOiBcIlNFVF9HQU1FX0RBVEFcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxHYW1lU3RhdGUuZGF0YTtcbn1cblxuaW50ZXJmYWNlIFNldEdhbWVTdGF0dXMge1xuICB0eXBlOiBcIlNFVF9HQU1FX1NUQVRFXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLnN0YXR1cztcbn1cbmludGVyZmFjZSBTZXRQbGF5ZXJzIHtcbiAgdHlwZTogXCJTRVRfUExBWUVSU1wiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5wbGF5ZXJzO1xufVxuaW50ZXJmYWNlIFNldEdhbWVOb3RGb3VuZCB7XG4gIHR5cGU6IFwiU0VUX0dBTUVfTk9UX0ZPVU5EXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLm5vdEZvdW5kO1xufVxuXG5leHBvcnQgdHlwZSBHYW1lQWN0aW9ucyA9XG4gIHwgU2V0R2FtZURhdGFcbiAgfCBTZXRHYW1lTm90Rm91bmRcbiAgfCBTZXRQbGF5ZXJzXG4gIHwgU2V0R2FtZVN0YXR1cztcblxuZXhwb3J0IGNvbnN0IGdhbWVBY3Rpb25zID0ge1xuICAvLyBnYW1lIGFjdGlvbiB0byBzZXQgcGxheWVycyBpbiB0aGUgZ2FtZVxuICBzZXRQbGF5ZXJzOiAoXG4gICAgcGxheWVyczogUGxheWVyRGF0YVtdXG4gICk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX1BMQVlFUlMsXG4gICAgICAgIHBheWxvYWQ6IHBsYXllcnMsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIGdhbWUgYWN0aW9uIHRvIGFkZCBwbGF5ZXIgdG8gY3VycmVudCBnYW1lIHBsYXllcnMgbGlzdFxuICBhZGRQbGF5ZXI6IChwbGF5ZXI6IFBsYXllckRhdGEpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgcGxheWVyIGFscmVhZHkgZXhpc3RcbiAgICAgIGNvbnN0IHBsYXllcnMgPSBnZXRTdGF0ZSgpLmdhbWUucGxheWVycztcbiAgICAgIGNvbnN0IHBsYXllckV4aXN0ID0gcGxheWVycy5maW5kKChwKSA9PiBwLmlkID09PSBwbGF5ZXIuaWQpO1xuICAgICAgaWYgKHBsYXllckV4aXN0KSByZXR1cm47XG5cbiAgICAgIC8vIGFkZCBwbGF5ZXIgdG8gdGhlIHBsYXllciBsaXN0XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX1BMQVlFUlMsXG4gICAgICAgIHBheWxvYWQ6IFsuLi5wbGF5ZXJzLCBwbGF5ZXJdLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcInBsYXllciBhZGRlZFwiLCBwbGF5ZXIpO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2FtZSBhY3Rpb24gdG8gcmVtb3ZlIHBsYXllciBmcm9tIGN1cnJlbnQgZ2FtZSBwbGF5ZXJzIGxpc3RcbiAgcmVtb3ZlUGxheWVyOiAoXG4gICAgcGxheWVySWQ6IHN0cmluZ1xuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgcGxheWVyIGFscmVhZHkgZXhpc3RcbiAgICAgIGNvbnN0IHBsYXllcnMgPSBnZXRTdGF0ZSgpLmdhbWUucGxheWVycztcbiAgICAgIGNvbnN0IHBsYXllckV4aXN0ID0gcGxheWVycy5maW5kKChwKSA9PiBwLmlkID09PSBwbGF5ZXJJZCk7XG4gICAgICBpZiAoIXBsYXllckV4aXN0KSByZXR1cm47XG5cbiAgICAgIC8vIHJlbW92ZSBwbGF5ZXIgZnJvbSB0aGUgcGxheWVyIGxpc3RcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfUExBWUVSUyxcbiAgICAgICAgcGF5bG9hZDogcGxheWVycy5maWx0ZXIoKHApID0+IHAuaWQgIT09IHBsYXllcklkKSxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIHNldCBnYW1lIG5vdCBmb3VuZCBzdGF0ZVxuICBzZXRHYW1lTm90Rm91bmQ6IChcbiAgICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5ub3RGb3VuZFxuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfTk9UX0ZPVU5ELFxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyByZWR1eCBhY3Rpb24gdG8gc2V0IGdhbWUgZGF0YVxuICBzZXRHYW1lRGF0YTogKGRhdGE6IEpvaW5EYXRhKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YS5nYW1lRGF0YS5pZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX0RBVEEsXG4gICAgICAgIHBheWxvYWQ6IGRhdGEsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBjcmVhdGUgdGhlIGdhbWVcbiAgY3JlYXRlOiAocGxheWVyTmFtZT86IHN0cmluZyk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgICAgY29uc3QgZ2FtZURhdGE6IEdhbWVEYXRhID0ge1xuICAgICAgICBpZDogZ2VuZXJhdGVOYW1lKCksXG4gICAgICAgIGxldmVsOiAxLFxuICAgICAgICBvd25lcjogXCJcIixcbiAgICAgIH07XG4gICAgICBzb2NrZXQuZW1pdChcImNyZWF0ZVwiLCB7IHBsYXllck5hbWUsIGdhbWVEYXRhIH0pO1xuXG4gICAgICAvLyB3aGVuIGdhbWUgY3JlYXRlZCwgc3RhcnQgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgc29ja2V0QWN0aW9ucy5zdGFydExpbnN0ZW5pbmdHYW1lRXZlbnRzKCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBqb2luIHRoZSBnYW1lXG4gIGpvaW46IChcbiAgICBnYW1lSWQ6IHN0cmluZyxcbiAgICBwbGF5ZXJOYW1lOiBzdHJpbmdcbiAgKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG5cbiAgICAgIC8vIHdoZW4gam9pbmluZyBhIGdhbWUsIHN0YXJ0IGxpc3RlbmluZyBhbGwgZ2FtZSBldmVudHNcbiAgICAgIHNvY2tldEFjdGlvbnMuc3RhcnRMaW5zdGVuaW5nR2FtZUV2ZW50cygpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG5cbiAgICAgIGxldCBqb2luRGF0YSA9IGdldFN0YXRlKCkuZ2FtZS5kYXRhO1xuXG4gICAgICAvLyBsb2FkIGpvaW4gZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGNvbnN0IHBlcnNpc3RhbnRHYW1lRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdhbWVJZCk7XG5cbiAgICAgIC8vIGlmIGdhbWVEYXRhIGlzIG51bGwsIHRoZW4gdHJ5IHRvIHVzZSBwZXJzaXN0YW50R2FtZURhdGFcbiAgICAgIGlmICgham9pbkRhdGEpIHtcbiAgICAgICAgaWYgKHBlcnNpc3RhbnRHYW1lRGF0YSkge1xuICAgICAgICAgIGpvaW5EYXRhID0gSlNPTi5wYXJzZShwZXJzaXN0YW50R2FtZURhdGEpO1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgICAgIHBheWxvYWQ6IGpvaW5EYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgZ2FtZURhdGEgaWQgaXMgdGhlIHNhbWUgYXMgdGhlIGdhbWVJZFxuICAgICAgaWYgKGpvaW5EYXRhPy5nYW1lRGF0YS5pZCA9PT0gZ2FtZUlkKSB7XG4gICAgICAgIC8vanVzdCB1cGRhdGUgdGhlIHNvY2tldElkIGZvciB0aGlzIGdhbWVcbiAgICAgICAgam9pbkRhdGEucGxheWVyRGF0YS5zb2NrZXRJZCA9IHNvY2tldC5pZDtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgICBwYXlsb2FkOiBqb2luRGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgam9pbkRhdGEgc3RpbGwgbnVsbCwgdGhlbiB1c2UgaW5pdGlhbCBkYXRhXG4gICAgICBpZiAoIWpvaW5EYXRhKSB7XG4gICAgICAgIGpvaW5EYXRhID0ge1xuICAgICAgICAgIGdhbWVEYXRhOiB7XG4gICAgICAgICAgICBpZDogZ2FtZUlkLFxuICAgICAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgICAgICBvd25lcjogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsYXllckRhdGE6IHtcbiAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICAgICAgICAgIHNvY2tldElkOiBzb2NrZXQuaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBqb2luIGRhdGFcIiwgam9pbkRhdGEpO1xuICAgICAgLy8gc2VuZCB0aGUgam9pbiByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXJcbiAgICAgIHNvY2tldC5lbWl0KFwiam9pblwiLCBqb2luRGF0YSk7XG4gICAgfTtcbiAgfSxcblxuICAvL3JlZHV4IGFjdGlvbiB0byBsZWF2ZSB0aGUgZ2FtZVxuICBsZWF2ZTogKCk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBjb25zdCBnYW1lRGF0YSA9IGdldFN0YXRlKCkuZ2FtZS5kYXRhO1xuICAgICAgaWYgKCFzb2NrZXQgfHwgIWdhbWVEYXRhKSByZXR1cm47XG4gICAgICBzb2NrZXQuZW1pdChcImxlYXZlXCIsIGdhbWVEYXRhKTtcblxuICAgICAgLy8gd2hlbiBsZWF2aW5nIGEgZ2FtZSwgc3RvcCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gICAgICBzb2NrZXRBY3Rpb25zLnN0b3BMaXN0ZW5pbmdHYW1lRXZlbnRzKCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcblxuICAgICAgLy8gcmVtb3ZlIHRoZSBnYW1lIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShnYW1lRGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgICAvLyByZW1vdmUgZ2FtZSBkYXRhIGZyb20gcmVkdXggc3RvcmVcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9EQVRBLFxuICAgICAgICBwYXlsb2FkOiBudWxsLFxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IFwiL1wiO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIHRvZ2dsZSBpZiB0aGUgZ2FtZSBpcyBub3QgZm91bmRcbiAgdG9nZ2xlTm90Rm91bmQ6ICgpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBub3RGb3VuZCA9IGdldFN0YXRlKCkuZ2FtZS5ub3RGb3VuZDtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9OT1RfRk9VTkQsXG4gICAgICAgIHBheWxvYWQ6ICFub3RGb3VuZCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIHN0YXJ0IHRoZSBnYW1lXG4gIHN0YXJ0OiAoKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGNvbnN0IGdhbWVEYXRhID0gZ2V0U3RhdGUoKS5nYW1lLmRhdGE7XG4gICAgICBpZiAoIXNvY2tldCB8fCAhZ2FtZURhdGEpIHJldHVybjtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBzdGFydCBnYW1lIHJlcXVlc3RcIik7XG4gICAgICBzb2NrZXRBY3Rpb25zLnN0YXJ0R2FtZSgoZ2FtZURhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIHN0YXJ0ZWRcIiwgZ2FtZURhdGEpO1xuICAgICAgICAvLyBzZXQgZ2FtZSBzdGF0ZSB0byBzdGFydGVkXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX1NUQVRFLFxuICAgICAgICAgIHBheWxvYWQ6IEdhbWVTdGF0dXMuU1RBUlRFRCxcbiAgICAgICAgfSk7XG4gICAgICB9KShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgR2FtZVJlZHVjZXI6IFJlZHVjZXI8R2FtZVN0YXRlLCBHYW1lQWN0aW9ucz4gPSAoXG4gIHN0YXRlOiBHYW1lU3RhdGUgfCB1bmRlZmluZWQsXG4gIGFjdGlvbjogR2FtZUFjdGlvbnNcbik6IEdhbWVTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGluaXRpYWxHYW1lU3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX0RBVEE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9OT1RfRk9VTkQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm90Rm91bmQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIEdhbWVBY3Rpb25zVHlwZXMuU0VUX1BMQVlFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGxheWVyczogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9TVEFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0dXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIiwgImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgZW51bSBUZXJtaW5hbENvbG9yIHtcbiAgUmVzZXQgPSBcIlxceDFiWzBtXCIsXG4gIEJyaWdodCA9IFwiXFx4MWJbMW1cIixcbiAgRGltID0gXCJcXHgxYlsybVwiLFxuICBVbmRlcnNjb3JlID0gXCJcXHgxYls0bVwiLFxuICBCbGluayA9IFwiXFx4MWJbNW1cIixcbiAgUmV2ZXJzZSA9IFwiXFx4MWJbN21cIixcbiAgSGlkZGVuID0gXCJcXHgxYls4bVwiLFxuXG4gIEZnQmxhY2sgPSBcIlxceDFiWzMwbVwiLFxuICBGZ1JlZCA9IFwiXFx4MWJbMzFtXCIsXG4gIEZnR3JlZW4gPSBcIlxceDFiWzMybVwiLFxuICBGZ1llbGxvdyA9IFwiXFx4MWJbMzNtXCIsXG4gIEZnQmx1ZSA9IFwiXFx4MWJbMzRtXCIsXG4gIEZnTWFnZW50YSA9IFwiXFx4MWJbMzVtXCIsXG4gIEZnQ3lhbiA9IFwiXFx4MWJbMzZtXCIsXG4gIEZnV2hpdGUgPSBcIlxceDFiWzM3bVwiLFxuXG4gIEJnQmxhY2sgPSBcIlxceDFiWzQwbVwiLFxuICBCZ1JlZCA9IFwiXFx4MWJbNDFtXCIsXG4gIEJnR3JlZW4gPSBcIlxceDFiWzQybVwiLFxuICBCZ1llbGxvdyA9IFwiXFx4MWJbNDNtXCIsXG4gIEJnQmx1ZSA9IFwiXFx4MWJbNDRtXCIsXG4gIEJnTWFnZW50YSA9IFwiXFx4MWJbNDVtXCIsXG4gIEJnQ3lhbiA9IFwiXFx4MWJbNDZtXCIsXG4gIEJnV2hpdGUgPSBcIlxceDFiWzQ3bVwiLFxufVxuXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9ICgpID0+IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIik7XG5cbmV4cG9ydCBjb25zdCBwcmludExvZyA9IChcbiAgdHlwZTogXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJkZWZhdWx0XCIgPSBcImRlZmF1bHRcIixcbiAgbGFiZWw6IHN0cmluZyA9IFwiXCIsXG4gIC4uLm1lc3NhZ2U6IGFueVtdXG4pID0+IHtcbiAgLy8gc2V0IGRlZmF1bHQgZm9yZ3JvdW5kIGNvbG9yIHRvIEZnV2hpdGVcbiAgbGV0IGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1doaXRlO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiaW5mb1wiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnQmx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ3YXJuaW5nXCI6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdZZWxsb3c7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnR3JlZW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1JlZDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdXaGl0ZTtcbiAgfVxuICBjb25zb2xlLmxvZyhcbiAgICBgWyR7VGVybWluYWxDb2xvci5GZ01hZ2VudGF9JHtjdXJyZW50VGltZXN0YW1wKCkgKyBUZXJtaW5hbENvbG9yLlJlc2V0fV1bJHtcbiAgICAgIFRlcm1pbmFsQ29sb3IuRmdDeWFuXG4gICAgfSR7bGFiZWx9JHtUZXJtaW5hbENvbG9yLlJlc2V0fV1gLFxuICAgIGAke2NvbG9yfSR7bWVzc2FnZS5qb2luKFwiXCIpfSR7VGVybWluYWxDb2xvci5SZXNldH1gXG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwRmlyc3QodGV4dDogc3RyaW5nKSB7XG4gIHJldHVybiB0ZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGV4dC5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gOTk5KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5hbWUod29yZExlbjogbnVtYmVyID0gMikge1xuICBjb25zdCBvdXRwdXQ6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGNvbnNvbmFudHMgPSBcImJjZGZnaGprbG1ucHFyc3R2d3h5elwiO1xuICBjb25zdCB2b3dlbHMgPSBcImFlaW91XCI7XG4gIGZvciAobGV0IHcgPSAwOyB3IDwgd29yZExlbjsgdysrKSB7XG4gICAgY29uc3Qgd29yZENoYXJMZW4gPSBnZXRSYW5kb21JbnQoMywgMTApO1xuICAgIGNvbnN0IG5hbWUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRDaGFyTGVuOyBpKyspIHtcbiAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICBuYW1lLnB1c2goY29uc29uYW50cy5jaGFyQXQoZ2V0UmFuZG9tSW50KDAsIGNvbnNvbmFudHMubGVuZ3RoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZS5wdXNoKHZvd2Vscy5jaGFyQXQoZ2V0UmFuZG9tSW50KDAsIHZvd2Vscy5sZW5ndGgpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIG91dHB1dC5wdXNoKGNhcEZpcnN0KG5hbWUuam9pbihcIlwiKSkpO1xuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbihcIlwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gKCkgPT5cbiAgYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcbiIsICJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvcGxheWVyXCI7XG5pbXBvcnQgeyBKb2luRGF0YSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9jbGllbnRcIjtcbmltcG9ydCB7IGdhbWVBY3Rpb25zLCBHYW1lQWN0aW9ucyB9IGZyb20gXCIuL2dhbWVTdGF0ZVwiO1xuaW1wb3J0IHsgVGh1bmtBY3Rpb24gfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvY2tldFN0YXRlIHtcbiAgY2xpZW50OiBTb2NrZXQgfCBudWxsO1xuICBjb25uZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU29ja2V0U3RhdGU6IFNvY2tldFN0YXRlID0ge1xuICBjbGllbnQ6IG51bGwsXG4gIGNvbm5lY3RlZDogZmFsc2UsXG59O1xuXG5pbnRlcmZhY2UgU29ja2V0QWN0aW9uVHlwZXMge1xuICByZWFkb25seSBTRVRfU09DS0VUOiBcIlNFVF9TT0NLRVRcIjtcbiAgcmVhZG9ubHkgU0VUX0NPTk5FQ1RFRDogXCJTRVRfQ09OTkVDVEVEXCI7XG59XG5cbmNvbnN0IFNvY2tldEFjdGlvbnNUeXBlczogU29ja2V0QWN0aW9uVHlwZXMgPSB7XG4gIFNFVF9TT0NLRVQ6IFwiU0VUX1NPQ0tFVFwiLFxuICBTRVRfQ09OTkVDVEVEOiBcIlNFVF9DT05ORUNURURcIixcbn07XG5cbmludGVyZmFjZSBTZXRTb2NrZXQge1xuICB0eXBlOiBcIlNFVF9TT0NLRVRcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxTb2NrZXRTdGF0ZS5jbGllbnQ7XG59XG5pbnRlcmZhY2UgU2V0Q29ubmVjdGVkIHtcbiAgdHlwZTogXCJTRVRfQ09OTkVDVEVEXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsU29ja2V0U3RhdGUuY29ubmVjdGVkO1xufVxuXG5leHBvcnQgdHlwZSBTb2NrZXRBY3Rpb25zID0gU2V0U29ja2V0IHwgU2V0Q29ubmVjdGVkO1xuXG5leHBvcnQgY29uc3Qgc29ja2V0QWN0aW9ucyA9IHtcbiAgLy8gc29ja2V0IGFjdGlvbiB0byBzZXQgdGhlIGNvbm5lY3RlZCBzb2NrZXQgY2xpZW50XG4gIGluaXQ6IChcbiAgICBzb2NrZXQ6IHR5cGVvZiBpbml0aWFsU29ja2V0U3RhdGUuY2xpZW50LFxuICAgIG9uRGF0YTogKGRhdGE6IGFueSkgPT4gdm9pZFxuICApOiBUaHVua0FjdGlvbjxTb2NrZXRBY3Rpb25zIHwgR2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcblxuICAgICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBTb2NrZXRBY3Rpb25zVHlwZXMuU0VUX0NPTk5FQ1RFRCxcbiAgICAgICAgICBwYXlsb2FkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfU09DS0VULFxuICAgICAgICBwYXlsb2FkOiBzb2NrZXQsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNvY2tldCBhY3Rpb24gdG8gc3RhcnQgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICBzdGFydExpbnN0ZW5pbmdHYW1lRXZlbnRzOiAoKTogVGh1bmtBY3Rpb248U29ja2V0QWN0aW9ucyB8IEdhbWVBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG4gICAgICAvLyBsaXN0ZW4gcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgd2hlbiBnYW1lIGNyZWF0ZWRcbiAgICAgIHNvY2tldC5vbihcImNyZWF0ZWRcIiwgKHBheWxvYWQ6IEpvaW5EYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBjcmVhdGVkXCIsIHBheWxvYWQpO1xuICAgICAgICAvLyBkaXNwYXRjaCBnYW1lIGFjdGlvbiB0byBzZXQgdGhlIGdhbWUgZGF0YVxuICAgICAgICBnYW1lQWN0aW9ucy5zZXRHYW1lRGF0YShwYXlsb2FkKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgICAvLyBhZGQgcGxheWVyIHRvIHRoZSBnYW1lXG4gICAgICAgIGdhbWVBY3Rpb25zLmFkZFBsYXllcihwYXlsb2FkLnBsYXllckRhdGEpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gbGlzdGVuIHRvIG5ldyBwbGF5ZXIgam9pbmVkIGV2ZW50XG4gICAgICBzb2NrZXQub24oXCJwbGF5ZXJzXCIsIChwYXlsb2FkOiBQbGF5ZXJEYXRhW10pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgcGxheWVyIGxpc3RcIiwgcGF5bG9hZCk7XG4gICAgICAgIC8vIGFkZCBwbGF5ZXIgdG8gdGhlIGdhbWVcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0UGxheWVycyhwYXlsb2FkKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxpc3RlbiBpZiB0aGUgZ2FtZSBpcyBub3QgZm91bmRcbiAgICAgIHNvY2tldC5vbihcIm5vdEZvdW5kXCIsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgIGdhbWVBY3Rpb25zLnNldEdhbWVOb3RGb3VuZCh0cnVlKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGxpc3RlbiB0byB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAgICBzb2NrZXQub24oXCJqb2luZWRcIiwgKHBheWxvYWQ6IEpvaW5EYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiam9pbmVkXCIsIHBheWxvYWQpO1xuICAgICAgICAvLyBkaXNwYXRjaCBnYW1lIGFjdGlvbiB0byBzZXQgdGhlIGdhbWUgZGF0YVxuICAgICAgICBnYW1lQWN0aW9ucy5zZXRHYW1lRGF0YShwYXlsb2FkKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuXG4gICAgICAgIC8vIGFkZCBwbGF5ZXIgdG8gdGhlIGdhbWUgcGxheWVycyBsaXN0XG4gICAgICAgIGdhbWVBY3Rpb25zLmFkZFBsYXllcihwYXlsb2FkLnBsYXllckRhdGEpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gbGlzdGVuIGZvciB0aGUgcGxheWVyIGxlZnQgdGhlIGdhbWUgZXZlbnRcbiAgICAgIHNvY2tldC5vbihcImxlZnRcIiwgKHBheWxvYWQ6IFBsYXllckRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZC5uYW1lLCBcImhhcyBsZWZ0IHRoZSBnYW1lXCIpO1xuICAgICAgICAvLyByZW1vdmUgcGxheWVyIGZyb20gdGhlIHBsYXllciBsaXN0XG4gICAgICAgIGdhbWVBY3Rpb25zLnJlbW92ZVBsYXllcihwYXlsb2FkLmlkKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyBzb2NrZXQgYWN0aW9uIHRvIHN0b3AgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICBzdG9wTGlzdGVuaW5nR2FtZUV2ZW50czogKCk6IFRodW5rQWN0aW9uPFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc29ja2V0ID0gZ2V0U3RhdGUoKS5zb2NrZXQuY2xpZW50O1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIHJlc3BvbnNlIGZyb20gc2VydmVyIHdoZW4gZ2FtZSBjcmVhdGVkXG4gICAgICBzb2NrZXQub2ZmKFwiY3JlYXRlZFwiKTtcblxuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgdG8gbmV3IHBsYXllciBqb2luZWQgZXZlbnRcbiAgICAgIHNvY2tldC5vZmYoXCJuZXdQbGF5ZXJcIik7XG5cbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIGlmIHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICAgICAgc29ja2V0Lm9mZihcIm5vdEZvdW5kXCIpO1xuXG4gICAgICAvLyBzdG9wIGxpc3RlbmluZyB0byB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAgICBzb2NrZXQub2ZmKFwiam9pbmVkXCIpO1xuXG4gICAgICAvLyBzdG9wIGxpc3RlbmluZyBmb3IgYSBwbGF5ZXIgbGVmdCB0aGUgZ2FtZSBldmVudFxuICAgICAgc29ja2V0Lm9mZihcImxlZnRcIik7XG4gICAgfTtcbiAgfSxcblxuICAvLyBzb2NrZXQgYWN0aW9uIHRvIHN0YXJ0IHRoZSBnYW1lXG4gIHN0YXJ0R2FtZTogKFxuICAgIG9uU3RhcnRlZDogKGRhdGE6IEdhbWVEYXRhKSA9PiB2b2lkXG4gICk6IFRodW5rQWN0aW9uPFNvY2tldEFjdGlvbnMgfCBHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBjb25zdCBnYW1lRGF0YSA9IGdldFN0YXRlKCkuZ2FtZS5kYXRhO1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcbiAgICAgIC8vIGVtaXQgdGhlIHN0YXJ0IGdhbWUgZXZlbnRcbiAgICAgIHNvY2tldC5lbWl0KFwic3RhcnRcIiwgZ2FtZURhdGEpO1xuICAgICAgc29ja2V0Lm9uKFwic3RhcnRlZFwiLCBvblN0YXJ0ZWQpO1xuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgU29ja2V0UmVkdWNlcjogUmVkdWNlcjxTb2NrZXRTdGF0ZSwgU29ja2V0QWN0aW9ucz4gPSAoXG4gIHN0YXRlOiBTb2NrZXRTdGF0ZSB8IHVuZGVmaW5lZCxcbiAgYWN0aW9uOiBTb2NrZXRBY3Rpb25zXG4pOiBTb2NrZXRTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGluaXRpYWxTb2NrZXRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfU09DS0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgU29ja2V0QWN0aW9uc1R5cGVzLlNFVF9DT05ORUNURUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29ubmVjdGVkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCByZWR1Y2VycyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IGFueSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gSSByZXF1aXJlIHRoaXMgb25seSBpbiBkZXYgZW52aXJvbm1lbnRcbiAgICAvLyBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7XG4gICAgLy8gcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XG4gIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAuLi5yZWR1Y2VycyxcbiAgfSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGJpbmRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpXG4gICk7XG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgcGxheWluZ0NhcmRCYWNrZ3JvdW5kIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3BsYXlpbmctY2FyZHMucG5nXCI7XG5pbXBvcnQgUnViYmVyVGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9SdWJiZXJUZXh0XCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZXNcIjtcbmltcG9ydCB7IGdhbWVBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3Jlcy9nYW1lU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtqb2luSWQsIHNldEpvaW5JZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BsYXllck5hbWUsIHNldFBsYXllck5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLmRhdGEpO1xuICBjb25zdCBub3RGb3VuZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUubm90Rm91bmQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGpvaW5JZFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcGxheWVyTmFtZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgaGFuZGxlUm9vbUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICBzZXRKb2luSWQodmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVOYW1lSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgIHNldFBsYXllck5hbWUodmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVKb2luID0gKCkgPT4ge1xuICAgIC8vIGlmIHBsYXllciBuYW1lIGlzIGVtcHR5LCBzZXQgZm9jdXMgdGhlIGlucHV0XG4gICAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgICBwbGF5ZXJOYW1lUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIGpvaW4gaWQgaXMgZW1wdHksIHNldCBmb2N1cyB0aGUgaW5wdXRcbiAgICBpZiAoIWpvaW5JZCkge1xuICAgICAgam9pbklkUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gb3RoZXIgdGhhbiB0aGF0LCBqb2luIHRoZSByb29tXG4gICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuam9pbihqb2luSWQsIHBsYXllck5hbWUpKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ3JlYXRlR2FtZSA9ICgpID0+IHtcbiAgICAvLyBpZiBwbGF5ZXIgbmFtZSBpcyBlbXB0eSwgc2V0IGZvY3VzIHRoZSBpbnB1dFxuICAgIGlmICghcGxheWVyTmFtZSkge1xuICAgICAgcGxheWVyTmFtZVJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaXNwYXRjaChnYW1lQWN0aW9ucy5jcmVhdGUocGxheWVyTmFtZSkpO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbmF2KGRhdGEuZ2FtZURhdGEuaWQpO1xuICB9LCBbZGF0YV0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5vdEZvdW5kKSB7XG4gICAgICBhbGVydChcIkdhbWUgbm90IGZvdW5kXCIpO1xuICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMudG9nZ2xlTm90Rm91bmQoKSk7XG4gICAgfVxuICB9LCBbbm90Rm91bmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LXNjcmVlbiBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtwbGF5aW5nQ2FyZEJhY2tncm91bmR9XG4gICAgICAgIGFsdD1cImJnXCJcbiAgICAgICAgd2lkdGg9ezUxMn1cbiAgICAgICAgY2xhc3NOYW1lPVwiLXotMTAgYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCBvcGFjaXR5LTIwIGJvdW5jZUluVXBcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxSdWJiZXJUZXh0IHRleHQ9XCJIZWxsb1wiIHJvb3RDbGFzcz1cIm1yLThcIiAvPlxuICAgICAgICAgIDxSdWJiZXJUZXh0IHRleHQ9XCJ0aGVyZSFcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgPFJ1YmJlclRleHRcbiAgICAgICAgICAgIHRleHQ9XCJMZXQnc1wiXG4gICAgICAgICAgICBib3VuY2VJbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIHJvb3RDbGFzcz1cIm1yLThcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC12aXJnaWwgeGw6dGV4dC04eGwgbGc6bWQ6dGV4dC02eGwgdGV4dC00eGwgaG92ZXI6YW5pbWF0ZS1ydWJiZXIgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1saW1lLTQwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UnViYmVyVGV4dFxuICAgICAgICAgICAgdGV4dD1cIlBMQVkhXCJcbiAgICAgICAgICAgIGJvdW5jZUluPVwicmlnaHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leG8geGw6dGV4dC04eGwgbGc6bWQ6dGV4dC02eGwgdGV4dC00eGwgaG92ZXI6YW5pbWF0ZS1ydWJiZXIgcHgtMiBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LWxpbWUtNDAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBtdC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBib3JkZXIgYm9yZGVyLWxpbWUtNTAwIGl0ZW1zLWNlbnRlciBzbTp3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9e3BsYXllck5hbWVSZWZ9XG4gICAgICAgICAgICAgIG1heExlbmd0aD17MjB9XG4gICAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXJOYW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMCBmbGV4IGZsZXgtZ3JvdyBiZy10cmFuc3BhcmVudCBweS00ICBvdXRsaW5lLW5vbmUgcHgtNCB0ZXh0LWxpbWUtNTAwICB4bDp0ZXh0LXhsIGxnOnRleHQtbGcgbWQ6dGV4dC1tZCB0ZXh0LXNtIGZvbnQtYm9sZCBmb250LWV4b1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWUgaGVyZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOYW1lSW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1saW1lLTUwMCBmb250LXZpcmdpbCBweS00IHhsOnRleHQteGwgbGc6dGV4dC1sZyBtZDp0ZXh0LW1kIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgYW5kXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtqb2luSWRSZWZ9XG4gICAgICAgICAgICAgIHZhbHVlPXtqb2luSWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAwIGZsZXggZmxleC1ncm93IGJnLXRyYW5zcGFyZW50IHB5LTQgb3V0bGluZS1ub25lIHB4LTQgdGV4dC1saW1lLTUwMCAgeGw6dGV4dC14bCBsZzp0ZXh0LWxnIG1kOnRleHQtbWQgdGV4dC1zbSBmb250LWJvbGQgZm9udC1leG9cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBnYW1lIElEIGhlcmVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUm9vbUlucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlSm9pbn0+UGxheTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXItMCB4czptci0wIHhsOm1yLTQgbGc6bXItNCBtZDptci00IHNtOnctZnVsbCB4czp3LWZ1bGwgdGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVHYW1lfT5DcmVhdGUgeW91ciBvd24gZ2FtZTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59O1xuY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvbkNsaWNrLCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIFwiYmctbGltZS01MDAgZm9udC1leG8gaG92ZXI6YmctbGltZS03MDAgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS05MDAgZm9udC1ib2xkIHB5LTQgcHgtOFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxwPntjaGlsZHJlbn08L3A+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGV4dD86IHN0cmluZztcbiAgYm91bmNlSW4/OiBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidXBcIiB8IFwiZG93blwiO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHJvb3RDbGFzcz86IHN0cmluZztcbn07XG5jb25zdCBSdWJiZXJUZXh0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICB0ZXh0ID0gXCJcIixcbiAgYm91bmNlSW4sXG4gIHJvb3RDbGFzcyA9IFwiXCIsXG4gIGNsYXNzTmFtZSA9IFwiZm9udC12aXJnaWwgeGw6dGV4dC04eGwgbGc6bWQ6dGV4dC02eGwgdGV4dC00eGwgaG92ZXI6YW5pbWF0ZS1ydWJiZXIgaG92ZXI6dGV4dC1saW1lLTQwMCBjdXJzb3ItcG9pbnRlclwiLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcImZsZXggZmxleC1yb3dcIiwgcm9vdENsYXNzLCB7XG4gICAgICAgIGJvdW5jZUluTGVmdDogYm91bmNlSW4gPT09IFwibGVmdFwiIHx8ICFib3VuY2VJbixcbiAgICAgICAgYm91bmNlSW5SaWdodDogYm91bmNlSW4gPT09IFwicmlnaHRcIixcbiAgICAgICAgYm91bmNlSW5VcDogYm91bmNlSW4gPT09IFwidXBcIixcbiAgICAgICAgYm91bmNlSW5Eb3duOiBib3VuY2VJbiA9PT0gXCJkb3duXCIsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICB7dGV4dC5zcGxpdChcIlwiKS5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgPGgxIGtleT17aX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIHtjfVxuICAgICAgICA8L2gxPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSdWJiZXJUZXh0O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgR2FtZVRhYmxlIGZyb20gXCJ+L2NvbXBvbmVudHMvR2FtZVRhYmxlXCI7XG5pbXBvcnQgV2FpdGluZ1Jvb20gZnJvbSBcIn4vY29tcG9uZW50cy9XYWl0aW5nUm9vbVwiO1xuaW1wb3J0IHsgSm9pbkRhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9jbGllbnRcIjtcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwifi9zdG9yZXNcIjtcbmltcG9ydCB7IGdhbWVBY3Rpb25zLCBHYW1lU3RhdHVzIH0gZnJvbSBcIn4vc3RvcmVzL2dhbWVTdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIHJldHVybiBqc29uKHsgLi4ucGFyYW1zIH0pO1xufTtcblxuY29uc3QgR2FtZVNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8R2FtZURhdGE+KCk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLnNvY2tldC5jbGllbnQpO1xuICBjb25zdCBub3RGb3VuZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUubm90Rm91bmQpO1xuICBjb25zdCBkYXRhU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLmRhdGEpO1xuICBjb25zdCBwbGF5ZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5wbGF5ZXJzKTtcbiAgY29uc3QgZ2FtZVN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUuc3RhdHVzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vIHVzZSBlZmZlY3QgdG8gZGV0ZWN0IGlmIHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChub3RGb3VuZCkge1xuICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMudG9nZ2xlTm90Rm91bmQoKSk7XG4gICAgICAvLyByZWRpcmVjdCB0byBob21lIHdoZW4gZ2FtZSBpcyBub3QgZm91bmRcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2gsIG5hdiwgbm90Rm91bmRdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmIGRhdGEuaWQgJiYgc29ja2V0KSB7XG4gICAgICBsZXQgcGxheWVyTmFtZSA9IFwiQW5vbnltb3VzXCI7XG4gICAgICAvLyBnZXQgbG9jYWwgc3RvcmFnZSBkYXRhXG4gICAgICBjb25zdCBsb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhLmlkKTtcbiAgICAgIGlmIChsb2NhbERhdGEpIHtcbiAgICAgICAgLy8gaWYgbG9jYWwgZGF0YSBpcyBmb3VuZCwgZ2V0IHBsYXllciBuYW1lIHRoZXJlXG4gICAgICAgIGNvbnN0IGxvY2FsRGF0YU9iajogSm9pbkRhdGEgPSBKU09OLnBhcnNlKGxvY2FsRGF0YSkgYXMgSm9pbkRhdGE7XG4gICAgICAgIHBsYXllck5hbWUgPSBsb2NhbERhdGFPYmoucGxheWVyRGF0YS5uYW1lIHx8IFwiQW5vbnltb3VzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdQbGF5ZXJOYW1lID0gcHJvbXB0KFwiRW50ZXIgeW91ciBuYW1lXCIsIFwiQW5vbnltb3VzXCIpO1xuICAgICAgICBpZiAobmV3UGxheWVyTmFtZSkge1xuICAgICAgICAgIHBsYXllck5hbWUgPSBuZXdQbGF5ZXJOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwYXRjaChnYW1lQWN0aW9ucy5qb2luKGRhdGEuaWQsIHBsYXllck5hbWUpKTtcbiAgICB9XG4gIH0sIFtkYXRhLCBkaXNwYXRjaCwgc29ja2V0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICB7Z2FtZVN0YXR1cyA9PT0gR2FtZVN0YXR1cy5XQUlUSU5HICYmIChcbiAgICAgICAgPFdhaXRpbmdSb29tXG4gICAgICAgICAgcGxheWVycz17cGxheWVyc31cbiAgICAgICAgICBvd25lcklkPXtkYXRhU3RhdGU/LmdhbWVEYXRhLm93bmVyfVxuICAgICAgICAgIHNob3dTdGFydD17ZGF0YVN0YXRlPy5nYW1lRGF0YS5vd25lciA9PT0gZGF0YVN0YXRlPy5wbGF5ZXJEYXRhLmlkfVxuICAgICAgICAgIG9uQWJvcnQ9eygpID0+IGRpc3BhdGNoKGdhbWVBY3Rpb25zLmxlYXZlKCkpfVxuICAgICAgICAgIG9uU3RhcnQ9eygpID0+IGRpc3BhdGNoKGdhbWVBY3Rpb25zLnN0YXJ0KCkpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxHYW1lVGFibGUgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTY3JlZW47XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBHYW1lVGFibGUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTAgaW5zZXQtMCB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5NSVdIGgtWzcwJV0gYmctbGltZS04MDAgcm91bmRlZC1bNnJlbV0gcmluZy1bMXJlbV0gc2hhZG93LWlubmVyIHNoYWRvdy1sZyBzaGFkb3ctc2xhdGUtMTAwIHJpbmctbGltZS05MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgdGVzdFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lVGFibGU7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSBcIi4vcGxheWVyQXZhdGFyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG93bmVySWQ/OiBzdHJpbmc7XG4gIHBsYXllcnM6IFBsYXllckRhdGFbXTtcbiAgc2hvd1N0YXJ0PzogYm9vbGVhbjtcbiAgYWJvcnRUZXh0Pzogc3RyaW5nO1xuICBzdGFydFRleHQ/OiBzdHJpbmc7XG4gIG9uQWJvcnQ/OiAoKSA9PiB2b2lkO1xuICBvblN0YXJ0PzogKCkgPT4gdm9pZDtcbiAgbWF4UGxheWVycz86IG51bWJlcjtcbn07XG5cbmNvbnN0IFdhaXRpbmdSb29tOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBvd25lcklkID0gXCJcIixcbiAgcGxheWVycyA9IFtdLFxuICBhYm9ydFRleHQgPSBcIkFib3J0IVwiLFxuICBzdGFydFRleHQgPSBcIkxhdW5jaCB0aGUgZ2FtZSFcIixcbiAgbWF4UGxheWVycyA9IDQsXG4gIG9uQWJvcnQsXG4gIG9uU3RhcnQsXG4gIHNob3dTdGFydCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgei0xMCB3LXNjcmVlbiBoLXNjcmVlbiBiYWNrZHJvcC1ibHVyLTJ4bCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtZXhvIG1iLThcIj5cbiAgICAgICAge3BsYXllcnMubGVuZ3RoID09PSBtYXhQbGF5ZXJzXG4gICAgICAgICAgPyBgU3RhcnRpbmcgdGhlIGdhbWUsIHBsZWFzZSBzdGFuZGJ5IS4uLmBcbiAgICAgICAgICA6IGBXYWl0aW5nIGFub3RoZXIgcGxheWVyLi4uYH1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBzcGFjZS14LTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiAoXG4gICAgICAgICAgPFBsYXllckF2YXRhclxuICAgICAgICAgICAgbWU9e3BsYXllci5pZCA9PT0gb3duZXJJZH1cbiAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIHtBcnJheShtYXhQbGF5ZXJzIC0gcGxheWVycy5sZW5ndGgpXG4gICAgICAgICAgLmZpbGwoMClcbiAgICAgICAgICAubWFwKChpKSA9PiAoXG4gICAgICAgICAgICA8UGxheWVyQXZhdGFyIGtleT17aX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXIgbXQtOFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAwIGZvbnQtZXhvIGhvdmVyOmJnLXNsYXRlLTcwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTkwMCBmb250LWJvbGQgcHktNCBweC04XCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkFib3J0fVxuICAgICAgICA+XG4gICAgICAgICAge2Fib3J0VGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHtzaG93U3RhcnQgJiYgPEJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0fT57c3RhcnRUZXh0fTwvQnV0dG9uPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FpdGluZ1Jvb207XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJhbmRvbUNvbG9yIH0gZnJvbSBcIn4vdXRpbHMvaGVscGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lPzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbn07XG5jb25zdCBQbGF5ZXJBdmF0YXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG5hbWUgPSBcIlwiLCBtZSB9KSA9PiB7XG4gIGNvbnN0IGNvbG9yID0gcmFuZG9tQ29sb3IoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctWzEyOHB4XSBoLVsxMjhweF0gdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBib3JkZXJDb2xvcjogbmFtZSAmJiAhbWUgPyBgJHtjb2xvcn1gIDogXCJpbmhlcml0XCIsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImFic29sdXRlIHotMCB3LVsxMjhweF0gaC1bMTI4cHhdIHJvdW5kZWQtZnVsbFwiLCB7XG4gICAgICAgICAgXCJob3ZlcjphbmltYXRlLXJ1YmJlciBib3JkZXItOCBib3JkZXItc2t5LTQwMCBiZy1za3ktNTAwXCI6IG5hbWUgJiYgbWUsXG4gICAgICAgICAgXCJob3ZlcjphbmltYXRlLXJ1YmJlciBib3JkZXItOCBib3JkZXItY3lhbi00MDAgYmctY3lhbi01MDBcIjpcbiAgICAgICAgICAgIG5hbWUgJiYgIW1lLFxuICAgICAgICAgIFwiYm9yZGVyLTggYm9yZGVyLWRhc2hlZCBhbmltYXRlLXNwaW4tc2xvd1wiOiAhbmFtZSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmFtZSAmJiAhbWUgPyBgJHtjb2xvcn1jY2AgOiBcImluaGVyaXRcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwidy1bMTIwcHhdIGgtWzEyMHB4XSByb3VuZGVkLWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC12aXJnaWwgei0xMCBvdyB0ZXh0LXhsIHB4LTRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRleHQtc2xhdGUtMTAwIGFuaW1hdGUtcHVsc2UgYmctc2xhdGUtNzAwXCI6ICFuYW1lLFxuICAgICAgICAgICAgXCJ0ZXh0LXNsYXRlLTkwMFwiOiBuYW1lLFxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPHA+e25hbWUgfHwgXCJ3YWl0aW5nIHBsYXllclwifTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQXZhdGFyO1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzNjN2MzMTRhJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC02SUlYWUZDRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWVNKVE5XNk8uanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTJaMllVSklLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VWVVWMlVRWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy8kaWQnOnsnaWQnOidyb3V0ZXMvJGlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6JzppZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy8kaWQtTlhGVk1PR0EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZHT0xDS1A1LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUJITEwyTFZULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GR09MQ0tQNS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTNDN0MzMTRBLmpzJ307IiwgImltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCBDbGllbnRDb250cm9sbGVyIGZyb20gXCIuL2NsaWVudFwiO1xuaW1wb3J0IHsgcHJpbnRMb2cgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjbGllbnRzOiBDbGllbnRDb250cm9sbGVyW10gPSBbXTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gbWFuYWdlIHRoZSBzb2NrZXQgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIHRoZSBjbGllbnRcbiAqIEBjbGFzcyBDb25uZWN0aW9uQ29udHJvbGxlclxuICogQHBhcmFtIHtTZXJ2ZXJ9IGlvIC0gVGhlIHNvY2tldCBpbyBjb25uZWN0aW9uIGJldHdlZW4gdGhlIHNlcnZlciBhbmQgdGhlIGNsaWVudFxuICpcbiAqL1xuY2xhc3MgQ29ubmVjdGlvbkNvbnRyb2xsZXIge1xuICBpbzogU2VydmVyO1xuICBjb25zdHJ1Y3RvcihpbzogU2VydmVyKSB7XG4gICAgdGhpcy5pbyA9IGlvO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3RhcnQgbGlzdGVuaW5nIHRvIHRoZSBzb2NrZXQgY29ubmVjdGlvblxuICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5pby5vbihcImNvbm5lY3Rpb25cIiwgKHNvY2tldCkgPT4ge1xuICAgICAgcHJpbnRMb2coXCJkZWZhdWx0XCIsIFwiU09DS0VUXCIsIFwiY29ubmVjdGVkOiBcIiwgc29ja2V0LmlkKTtcbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnRDb250cm9sbGVyKHNvY2tldCwgdGhpcy5pbyk7XG4gICAgICBjbGllbnRzLnB1c2goY2xpZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uQ29udHJvbGxlcjtcbiIsICJpbXBvcnQgeyBTZXJ2ZXIsIFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCB7IGdlbmVyYXRlTmFtZSwgcHJpbnRMb2cgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5pbXBvcnQgeyBjbGllbnRzIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuaW1wb3J0IEdhbWVDb250cm9sbGVyLCB7IEdhbWVEYXRhLCBnYW1lcyB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyLCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCB0eXBlIENsaWVudEV2ZW50ID0gXCJqb2luXCIgfCBcImpvaW5lZFwiIHwgXCJsZWF2ZVwiIHwgXCJsZWZ0XCI7XG5leHBvcnQgaW50ZXJmYWNlIEpvaW5EYXRhIHtcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xuICBwbGF5ZXJEYXRhOiBQbGF5ZXJEYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ld0dhbWVEYXRhIHtcbiAgcGxheWVyTmFtZTogc3RyaW5nO1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG59XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBtYW5hZ2UgdGhlIHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICogQGNsYXNzIENsaWVudENvbnRyb2xsZXJcbiAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXQgLSBUaGUgc29ja2V0IGNvbm5lY3Rpb24gY3JlYXRlZCBieSB0aGUgY2xpZW50XG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudENvbnRyb2xsZXIge1xuICBzb2NrZXQ6IFNvY2tldDtcbiAgc2VydmVyOiBTZXJ2ZXI7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc29ja2V0IHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc29ja2V0OiBTb2NrZXQsIGlvOiBTZXJ2ZXIpIHtcbiAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICB0aGlzLnNlcnZlciA9IGlvO1xuICAgIHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgdGhpcy5kaXNjb25uZWN0LmJpbmQodGhpcykpO1xuICAgIHNvY2tldC5vbihcImNyZWF0ZVwiLCB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oXCJqb2luXCIsIHRoaXMuam9pbi5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oXCJsZWF2ZVwiLCB0aGlzLmxlYXZlLmJpbmQodGhpcykpO1xuICAgIHNvY2tldC5vbihcInN0YXJ0XCIsIHRoaXMuc3RhcnQuYmluZCh0aGlzKSk7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGlzY29ubmVjdCB0aGUgc29ja2V0IGNvbm5lY3Rpb25cbiAgICogQG1ldGhvZCBkaXNjb25uZWN0XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiU09DS0VUXCIsIFwiZGlzY29ubmVjdGVkOiBcIiwgdGhpcy5zb2NrZXQuaWQpO1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICBjb25zdCBjbGllbnRJbmRleCA9IGNsaWVudHMuaW5kZXhPZih0aGlzKTtcbiAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJDTElFTlRcIiwgXCJSZW1vdmluZyBDTElFTlQjXCIsIGNsaWVudEluZGV4KTtcbiAgICBjbGllbnRzLnNwbGljZShjbGllbnRJbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtOZXdHYW1lRGF0YX0gZGF0YSBnYW1lIGRhdGEgc2VudCBieSB0aGUgY2xpZW50IHRvIGNyZWF0ZSBhIG5ldyBnYW1lXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY3JlYXRlKGRhdGE6IE5ld0dhbWVEYXRhKTogdm9pZCB7XG4gICAgLy8gcHJlcGFyZSBnYW1lIG93bmVyIGRhdGFcbiAgICBjb25zdCBvd25lckRhdGE6IFBsYXllckRhdGEgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBuYW1lOiBkYXRhLnBsYXllck5hbWUgfHwgXCJPd25lclwiLFxuICAgICAgc29ja2V0SWQ6IHRoaXMuc29ja2V0LmlkLFxuICAgIH07XG4gICAgLy8gZGVmaW5lIG5ldyBnYW1lRGF0YVxuICAgIGNvbnN0IG5ld0dhbWVEYXRhOiBHYW1lRGF0YSA9IHsgLi4uZGF0YS5nYW1lRGF0YSwgb3duZXI6IG93bmVyRGF0YS5pZCB9O1xuXG4gICAgLy8gY3JlYXRlIG93bmVyIGFzIGEgcGxheWVyIHRvb1xuICAgIGNvbnN0IG93bmVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIob3duZXJEYXRhKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgZ2FtZVxuICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIobmV3R2FtZURhdGEpO1xuXG4gICAgLy8gYWRkIHRoZSBvd25lciB0byB0aGUgZ2FtZVxuICAgIG5ld0dhbWUuYWRkUGxheWVyKG93bmVyKTtcblxuICAgIC8vIGFkZCB0aGUgZ2FtZSB0byB0aGUgZ2FtZSBsaXN0XG4gICAgZ2FtZXMucHVzaChuZXdHYW1lKTtcblxuICAgIC8vIHByZXBhcmUgdGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgY2xpZW50XG4gICAgY29uc3Qgam9pbkRhdGE6IEpvaW5EYXRhID0ge1xuICAgICAgZ2FtZURhdGE6IG5ld0dhbWUuZ2V0RGF0YSgpLFxuICAgICAgcGxheWVyRGF0YTogb3duZXJEYXRhLFxuICAgIH07XG5cbiAgICAvLyBqb2luIHRoZSBnYW1lIHJvb21cbiAgICBwcmludExvZyhcImluZm9cIiwgXCJDTElFTlRcIiwgXCJKb2luaW5nIGdhbWUgcm9vbTogXCIsIG5ld0dhbWUuZ2V0SWQoKSk7XG4gICAgdGhpcy5zb2NrZXQuam9pbihuZXdHYW1lLmdldElkKCkpO1xuXG4gICAgLy8gc2VuZCB0aGUgZGF0YSB0byB0aGUgY2xpZW50XG4gICAgdGhpcy5zb2NrZXQuZW1pdChcImNyZWF0ZWRcIiwgam9pbkRhdGEpO1xuICAgIHByaW50TG9nKFwiaW5mb1wiLCBcIkNMSUVOVFwiLCBcIk5ldyBnYW1lIGNyZWF0ZWQ6IFwiLCBuZXdHYW1lLmdldElkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7Sm9pbkRhdGF9IGRhdGEgZ2FtZSBqb2luIGRhdGEgc2VudCBieSBwbGF5ZXIgKGdhbWVEYXRhIGFuZCBwbGF5ZXJEYXRhKVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGpvaW4oZGF0YTogSm9pbkRhdGEpOiB2b2lkIHtcbiAgICBsZXQgbmV3UGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIoe1xuICAgICAgaWQ6IGRhdGEucGxheWVyRGF0YS5pZCB8fCB1dWlkdjQoKSxcbiAgICAgIG5hbWU6IGRhdGEucGxheWVyRGF0YS5uYW1lIHx8IGdlbmVyYXRlTmFtZSgxKSxcbiAgICAgIHNvY2tldElkOiB0aGlzLnNvY2tldC5pZCxcbiAgICB9KTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZ2FtZSBpcyBhbHJlYWR5IGNyZWF0ZWRcbiAgICBsZXQgZ2FtZSA9IGdhbWVzLmZpbmQoKGdhbWUpID0+IGdhbWUuZ2V0SWQoKSA9PT0gZGF0YS5nYW1lRGF0YS5pZCk7XG5cbiAgICBpZiAoIWdhbWUpIHtcbiAgICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIkNMSUVOVFwiLCBcIkdhbWUgbm90IGZvdW5kIFwiLCBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAgIC8vIHRlbGwgdGhlIGNsaWVudCB0aGF0IHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICAgICAgdGhpcy5zb2NrZXQuZW1pdChcIm5vdEZvdW5kXCIsIGRhdGEuZ2FtZURhdGEuaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBjaGVjayBpZiBjdXJyZW50IHBsYXllciBpcyBhbHJlYWR5IGluIHRoZSBnYW1lXG4gICAgY29uc3QgZXhpc3RpbmdQbGF5ZXIgPSBnYW1lLmdldFBsYXllckJ5SWQoZGF0YS5wbGF5ZXJEYXRhLmlkKTtcbiAgICBpZiAoIWV4aXN0aW5nUGxheWVyKSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIHBsYXllciBpZiB0aGUgZ2FtZSBpcyBub3QgZnVsbFxuICAgICAgaWYgKGdhbWUuZ2V0VG90YWxQbGF5ZXIoKSA8IDQpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBwbGF5ZXIgdG8gdGhlIGdhbWVcbiAgICAgICAgZ2FtZS5hZGRQbGF5ZXIobmV3UGxheWVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNlbmQgZXJyb3IgbWVzc2FnZSB0byB0aGUgY2xpZW50XG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJlcnJvclwiLCB7XG4gICAgICAgICAgbWVzc2FnZTogXCJHYW1lIGlzIGZ1bGxcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gam9pbiB0aGUgZ2FtZSByb29tXG4gICAgcHJpbnRMb2coXCJpbmZvXCIsIFwiQ0xJRU5UXCIsIFwiSm9pbmluZyBnYW1lIHJvb206IFwiLCBnYW1lLmdldElkKCkpO1xuICAgIHRoaXMuc29ja2V0LmpvaW4oZ2FtZS5nZXRJZCgpKTtcblxuICAgIC8vIHByZXBhcmUgdGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgY2xpZW50XG4gICAgY29uc3Qgam9pbkRhdGE6IEpvaW5EYXRhID0ge1xuICAgICAgZ2FtZURhdGE6IGdhbWUuZ2V0RGF0YSgpLFxuICAgICAgcGxheWVyRGF0YTogbmV3UGxheWVyLmdldERhdGEoKSxcbiAgICB9O1xuICAgIC8vIHNlbmQgdGhlIGRhdGEgdG8gdGhlIGNsaWVudFxuICAgIHRoaXMuc29ja2V0LmVtaXQoXCJqb2luZWRcIiwgam9pbkRhdGEpO1xuXG4gICAgLy8gc2VuZCBwbGF5ZXIgbGlzdCB0byB0aGUgZ2FtZSByb29tXG4gICAgLy8gZ2V0IGFsbCBwbGF5ZXIgaW4gdGhlIGdhbWVcbiAgICBjb25zdCBwbGF5ZXJzID0gZ2FtZS5nZXRQbGF5ZXJzKCk7XG4gICAgLy8gbWFwIHRoZSBwbGF5ZXIgZGF0YSB0byBzZW5kIHRvIHRoZSBjbGllbnRcbiAgICBjb25zdCBwbGF5ZXJEYXRhID0gcGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmdldERhdGEoKSk7XG4gICAgLy9zZW5kIHRoZSBkYXRhIHRvIHRoZSBjbGllbnRcbiAgICB0aGlzLnNlcnZlci5pbihnYW1lLmdldElkKCkpLmVtaXQoXCJwbGF5ZXJzXCIsIHBsYXllckRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gbGVhdmUgdGhlIGdhbWVcbiAgICogQG1ldGhvZCBsZWF2ZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGxlYXZlKGRhdGE6IEpvaW5EYXRhKTogdm9pZCB7XG4gICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiQ0xJRU5UXCIsIFwiTGVhdmluZyBnYW1lOiBcIiwgZGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgLy8gZ2V0IGdhbWUgZGF0YSBmcm9tIHNvY2tldCBkYXRhXG4gICAgY29uc3QgZ2FtZSA9IGdhbWVzLmZpbmQoKGdhbWUpID0+IGdhbWUuZ2V0SWQoKSA9PT0gZGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgLy8gaWYgZ2FtZSBpcyBkZWZpbmVkLCBwcm9jZWVkIHJlbW92aW5nIHRoZSBwbGF5ZXIgZnJvbSB0aGUgZ2FtZVxuICAgIGlmIChnYW1lKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSBnYW1lLmdldFBsYXllckJ5SWQoZGF0YS5wbGF5ZXJEYXRhLmlkKTtcbiAgICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIlBMQVlFUlwiLCBcIkxlYXZpbmcgZ2FtZTogXCIsIGRhdGEucGxheWVyRGF0YS5pZCk7XG5cbiAgICAgIC8vIGlmIHRoZSBwbGF5ZXIgaXMgZm91bmQsIHRoZW4gd2UgY2FuIHJlbW92ZSB0aGUgcGxheWVyIGZyb20gdGhlIGdhbWVcbiAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgLy8gYnJvYWRjYXN0IHRvIG90aGVyIHBsYXllcnMgdGhhdCB0aGUgcGxheWVyIGxlZnRcbiAgICAgICAgdGhpcy5zZXJ2ZXIuaW4oZ2FtZS5nZXRJZCgpKS5lbWl0KFwibGVmdFwiLCBwbGF5ZXIuZ2V0RGF0YSgpKTtcbiAgICAgICAgZ2FtZS5yZW1vdmVQbGF5ZXIocGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzdGFydCB0aGUgZ2FtZVxuICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAqIEBwYXJhbXMge0pvaW5EYXRhfSBkYXRhIFRoZSBnYW1lIGlkXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgc3RhcnQoZGF0YTogSm9pbkRhdGEpOiB2b2lkIHtcbiAgICBwcmludExvZyhcImluZm9cIiwgXCJDTElFTlRcIiwgXCJTdGFydGluZyBnYW1lOiBcIiwgZGF0YSk7XG4gICAgLy8gZ2V0IGdhbWUgZGF0YSBmcm9tIGdhbWUgbGlzdFxuICAgIGNvbnN0IGdhbWUgPSBnYW1lcy5maW5kKChnYW1lKSA9PiBnYW1lLmdldElkKCkgPT09IGRhdGEuZ2FtZURhdGEuaWQpO1xuXG4gICAgLy8gaWYgZ2FtZSBpcyBkZWZpbmVkLCBwcm9jZWVkIHN0YXJ0aW5nIHRoZSBnYW1lXG4gICAgaWYgKGdhbWUpIHtcbiAgICAgIC8vIHN0YXJ0IHRoZSBnYW1lXG4gICAgICBnYW1lLnN0YXJ0KCk7XG4gICAgICAvLyBicm9hZGNhc3QgdG8gb3RoZXIgcGxheWVycyB0aGF0IHRoZSBnYW1lIHN0YXJ0ZWRcbiAgICAgIHRoaXMuc2VydmVyLmluKGdhbWUuZ2V0SWQoKSkuZW1pdChcInN0YXJ0ZWRcIiwgZ2FtZS5nZXREYXRhKCkpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gXCJ+L3V0aWxzL2hlbHBlclwiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4vcGxheWVyXCI7XG4vKipcbiAqIFRoaXMgY29uc3RhbnQgaXMgdXNlZCB0byBzdG9yZSB0aGUgZ2FtZSBjcmVhdGVkIGJ5IHRoZSBjbGllbnRcbiAqIEBjb25zdGFudCB7R2FtZUNvbnRyb2xsZXJbXX1cbiAqIEBkZWZhdWx0IFtdXG4gKi9cbmV4cG9ydCBsZXQgZ2FtZXM6IEdhbWVDb250cm9sbGVyW10gPSBbXTtcbmV4cG9ydCB0eXBlIEdhbWVFdmVudCA9IFwia2lja1wiIHwgXCJraWNrZWRcIjtcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZURhdGEge1xuICBpZDogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBvd25lcjogc3RyaW5nO1xuICBwbGF5ZXJDb3VudD86IG51bWJlcjtcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIG1hbmFnZSB0aGUgZ2FtZVxuICogQGNsYXNzIEdhbWVDb250cm9sbGVyXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0IC0gVGhlIHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICogQHBhcmFtIHtHYW1lRGF0YX0gZGF0YSAtIFRoZSBnYW1lIGlkXG4gKiBAcGFyYW0ge1BsYXllckNvbnRyb2xsZXJbXX0gcGxheWVycyAtIFRoZSBwbGF5ZXIgbGlzdCBpbnNpZGUgdGhlIGdhbWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIGRhdGE6IEdhbWVEYXRhID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBsZXZlbDogMSxcbiAgICBvd25lcjogXCJcIixcbiAgICBwbGF5ZXJDb3VudDogMCxcbiAgfTtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBQbGF5ZXJDb250cm9sbGVyW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IHsgLi4uZGF0YSwgcGxheWVyQ291bnQ6IHRoaXMucGxheWVycy5sZW5ndGggfTtcbiAgfVxuICBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXJDb250cm9sbGVyKSB7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICBwcmludExvZyhcbiAgICAgIFwiaW5mb1wiLFxuICAgICAgXCJHQU1FXCIsXG4gICAgICBcIlBsYXllciBcIixcbiAgICAgIHBsYXllci5nZXRJZCgpLFxuICAgICAgXCIgYWRkZWQgdG8gZ2FtZTogXCIsXG4gICAgICB0aGlzLmRhdGEuaWRcbiAgICApO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJDb3VudCA9IHRoaXMucGxheWVycy5sZW5ndGg7XG4gICAgcmV0dXJuIHBsYXllcjtcbiAgfVxuICBzZXRJZChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhLmlkID0gaWQ7XG4gIH1cbiAgc2V0T3duZXIocGxheWVySWQ6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YS5vd25lciA9IHBsYXllcklkO1xuICB9XG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuaWQ7XG4gIH1cbiAgZ2V0UGxheWVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzO1xuICB9XG4gIGdldFRvdGFsUGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICB9XG4gIGdldFBsYXllckJ5SWQocGxheWVySWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghcGxheWVySWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5nZXRJZCgpID09PSBwbGF5ZXJJZCk7XG4gIH1cbiAgZ2V0UGxheWVyQnlTb2NrZXRJZChzb2NrZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5nZXRTb2NrZXRJZCgpID09PSBzb2NrZXRJZCk7XG4gIH1cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIHJlbW92ZVBsYXllcihwbGF5ZXI6IFBsYXllckNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBwbGF5ZXJJbmRleCA9IHRoaXMucGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgdGhpcy5wbGF5ZXJzLnNwbGljZShwbGF5ZXJJbmRleCwgMSk7XG4gICAgcHJpbnRMb2coXG4gICAgICBcImluZm9cIixcbiAgICAgIFwiR0FNRVwiLFxuICAgICAgXCJQbGF5ZXIgXCIsXG4gICAgICBwbGF5ZXIuZ2V0SWQoKSxcbiAgICAgIFwiIHJlbW92ZWQgZnJvbSBnYW1lOiBcIixcbiAgICAgIHRoaXMuZGF0YS5pZFxuICAgICk7XG4gICAgdGhpcy5kYXRhLnBsYXllckNvdW50ID0gdGhpcy5wbGF5ZXJzLmxlbmd0aDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHByaW50TG9nKFwiaW5mb1wiLCBcIkdBTUVcIiwgXCJHYW1lIHN0YXJ0ZWQ6IFwiLCB0aGlzLmRhdGEuaWQpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllckRhdGEge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNvY2tldElkOiBzdHJpbmc7XG59XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBtYW5hZ2UgcGxheWVyIGluIHRoZSBnYW1lXG4gKiBAY2xhc3MgUGxheWVyQ29udHJvbGxlclxuICogQHBhcmFtIHtQbGF5ZXJEYXRhfSBkYXRhIC0gVGhlIHBsYXllciBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIge1xuICBwcml2YXRlIGRhdGE6IFBsYXllckRhdGE7XG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBsYXllckRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG4gIGdldFNvY2tldElkKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc29ja2V0SWQ7XG4gIH1cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5pZDtcbiAgfVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgbGVhdmUoKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgaWQ6IFwiXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgc29ja2V0SWQ6IFwiXCIsXG4gICAgfTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjog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
