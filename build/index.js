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
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
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
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
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
  meta: () => meta
});
init_react();
var import_react = __toESM(require("react"));
var import_react_redux = require("react-redux");
var import_remix2 = __toESM(require_remix());
var import_socket = require("socket.io-client");

// app/assets/styles/animation.css
var animation_default = "/build/_assets/animation-2KLKVNUX.css";

// app/assets/styles/app.css
var app_default = "/build/_assets/app-I23AVGTB.css";

// app/assets/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-4RSED6JL.css";

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
function getRandomInt(min, max) {
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
  players: []
};
var GameActionsTypes = {
  SET_GAME_DATA: "SET_GAME_DATA",
  SET_GAME_NOT_FOUND: "SET_GAME_NOT_FOUND",
  SET_PLAYERS: "SET_PLAYERS"
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
        return;
      }
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
      socketActions.startGame((gameData2) => {
        console.log("game started", gameData2);
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
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement(import_remix2.Meta, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.Links, null)), /* @__PURE__ */ import_react.default.createElement("body", {
    className: "overflow-hidden"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.Outlet, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.Scripts, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.LiveReload, null)));
}
function AppWithRedux() {
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
var import_remix3 = __toESM(require_remix());

// app/components/button.tsx
init_react();
var import_clsx = __toESM(require("clsx"));
var import_react2 = __toESM(require("react"));
var Button = ({ onClick, className, children }) => {
  return /* @__PURE__ */ import_react2.default.createElement("button", {
    className: (0, import_clsx.default)("bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-4 px-8", className),
    onClick
  }, /* @__PURE__ */ import_react2.default.createElement("p", null, children));
};
var button_default = Button;

// app/assets/images/playing-cards.png
var playing_cards_default = "/build/_assets/playing-cards-PK6EDUO4.png";

// app/components/rubberText.tsx
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
var rubberText_default = RubberText;

// route:/Users/papuq/Work/main-remix/app/routes/index.tsx
function Index() {
  const [joinId, setJoinId] = import_react4.default.useState("");
  const [playerName, setPlayerName] = import_react4.default.useState("");
  const data = (0, import_react_redux2.useSelector)((state) => state.game.data);
  const notFound = (0, import_react_redux2.useSelector)((state) => state.game.notFound);
  const dispatch = (0, import_react_redux2.useDispatch)();
  const joinIdRef = import_react4.default.useRef(null);
  const playerNameRef = import_react4.default.useRef(null);
  const nav = (0, import_remix3.useNavigate)();
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
  }, /* @__PURE__ */ import_react4.default.createElement(rubberText_default, {
    text: "Hello",
    rootClass: "mr-8"
  }), /* @__PURE__ */ import_react4.default.createElement(rubberText_default, {
    text: "there!"
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ import_react4.default.createElement(rubberText_default, {
    text: "Let's",
    bounceIn: "right",
    rootClass: "mr-8",
    className: "font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-slate-100 text-lime-400 cursor-pointer"
  }), /* @__PURE__ */ import_react4.default.createElement(rubberText_default, {
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
  }), /* @__PURE__ */ import_react4.default.createElement(button_default, {
    onClick: handleJoin
  }, "Play")), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "sm:mr-0 xs:mr-0 xl:mr-4 lg:mr-4 md:mr-4 sm:w-full xs:w-full text-center mt-4"
  }, /* @__PURE__ */ import_react4.default.createElement(button_default, {
    onClick: handleCreateGame
  }, "Create your own game")))));
}

// route:/Users/papuq/Work/main-remix/app/routes/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default,
  loader: () => loader
});
init_react();
var import_clsx4 = __toESM(require("clsx"));
var import_react6 = __toESM(require("react"));
var import_react_redux3 = require("react-redux");
var import_remix4 = __toESM(require_remix());

// app/components/playerAvatar.tsx
init_react();
var import_clsx3 = __toESM(require("clsx"));
var import_react5 = __toESM(require("react"));
var PlayerAvatar = ({ name = "", me }) => {
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "relative w-[128px] h-[128px] text-center flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: (0, import_clsx3.default)("absolute z-0 w-[128px] h-[128px] rounded-full", {
      "hover:animate-rubber border-8 border-sky-400 bg-sky-500": name && me,
      "hover:animate-rubber border-8 border-cyan-400 bg-cyan-500": name && !me,
      "border-8 border-dashed animate-spin-slow": !name
    })
  }, " "), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: (0, import_clsx3.default)("font-virgil z-10 ow text-xl px-4", {
      "text-slate-100": !name,
      "text-slate-900": name
    })
  }, name || "waiting player"));
};
var playerAvatar_default = PlayerAvatar;

// route:/Users/papuq/Work/main-remix/app/routes/$id.tsx
var loader = async ({ params }) => {
  return (0, import_remix4.json)(__spreadValues({}, params));
};
var GameScreen = () => {
  const notifRef = import_react6.default.useRef(null);
  const data = (0, import_remix4.useLoaderData)();
  const [leavingPlayer, setLeavingPlayer] = import_react6.default.useState(null);
  const socket = (0, import_react_redux3.useSelector)((state) => state.socket.client);
  const notFound = (0, import_react_redux3.useSelector)((state) => state.game.notFound);
  const dataState = (0, import_react_redux3.useSelector)((state) => state.game.data);
  const players = (0, import_react_redux3.useSelector)((state) => state.game.players);
  const dispatch = (0, import_react_redux3.useDispatch)();
  import_react6.default.useEffect(() => {
    if (notFound) {
      alert("Game not found");
      dispatch(gameActions.toggleNotFound());
      document.location = "/";
    }
  }, [notFound]);
  import_react6.default.useEffect(() => {
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
  import_react6.default.useEffect(() => {
    var _a;
    if (leavingPlayer) {
      (_a = notifRef.current) == null ? void 0 : _a.classList.add("show");
      setTimeout(() => {
        var _a2;
        (_a2 = notifRef.current) == null ? void 0 : _a2.classList.remove("show");
      }, 3e3);
    }
  }, [leavingPlayer]);
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "w-screen h-screen flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "hidden fixed top-0 right-0 m-4 text-sm"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: "font-exo mr-2"
  }, "Player Name:"), /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: ""
  }, dataState == null ? void 0 : dataState.playerData.name)), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: "font-exo mr-2"
  }, "Game ID:"), /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: ""
  }, dataState == null ? void 0 : dataState.gameData.id)), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: "font-exo mr-2"
  }, "Player ID:"), /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: ""
  }, dataState == null ? void 0 : dataState.playerData.id)), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: "font-exo mr-2"
  }, "Player Count:"), /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: ""
  }, players.length)), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: "font-exo mr-2"
  }, "is owner"), /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: ""
  }, dataState && dataState.gameData.owner === dataState.playerData.id ? "true" : "false")), /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    onClick: () => dispatch(gameActions.leave())
  }, "Leave"), /* @__PURE__ */ import_react6.default.createElement("div", {
    ref: notifRef,
    className: (0, import_clsx4.default)("fixed bottom-0 hidden right-0 mr-4 mb-4 bg-yellow-200 rounded-xl")
  }, /* @__PURE__ */ import_react6.default.createElement("p", null, "Player ", leavingPlayer && leavingPlayer.id, " has leaving the game"))), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "text-center text-2xl font-exo mb-8"
  }, "Waiting another player..."), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row space-x-4 items-center"
  }, players.map((player) => /* @__PURE__ */ import_react6.default.createElement(playerAvatar_default, {
    me: player.id === (dataState == null ? void 0 : dataState.gameData.owner),
    key: player.id,
    name: player.name
  })), [1, 2, 3, 4].slice(0, -players.length).map((i) => /* @__PURE__ */ import_react6.default.createElement(playerAvatar_default, {
    key: i
  }))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row space-x-4 items-center mt-8"
  }, /* @__PURE__ */ import_react6.default.createElement(button_default, {
    className: "bg-slate-500 font-exo hover:bg-slate-700 hover:text-slate-100 text-slate-900 font-bold py-4 px-8",
    onClick: () => dispatch(gameActions.leave())
  }, "Abort!"), /* @__PURE__ */ import_react6.default.createElement(button_default, {
    onClick: () => dispatch(gameActions.start())
  }, "Launch the game!")));
};
var id_default = GameScreen;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c47b3b1c", "entry": { "module": "/build/entry.client-I7OFIY3N.js", "imports": ["/build/_shared/chunk-DFATZYL6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-DI4V23P4.js", "imports": ["/build/_shared/chunk-OJMX7H4M.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$id": { "id": "routes/$id", "parentId": "root", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$id-O6UKZ6WY.js", "imports": ["/build/_shared/chunk-MJK35GE7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-27CLCIZ4.js", "imports": ["/build/_shared/chunk-MJK35GE7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C47B3B1C.js" };

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
    console.log(data);
    let game = games.find((game2) => game2.getId() === data.gameData.id);
    if (!game) {
      printLog("warning", "CLIENT", "Game not found ", data.gameData.id);
      this.socket.emit("notFound", data.gameData.id);
    } else {
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
 * @remix-run/node v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL3N0b3Jlcy9pbmRleC50cyIsICIuLi9hcHAvc3RvcmVzL2dhbWVTdGF0ZS50cyIsICIuLi9hcHAvdXRpbHMvaGVscGVyLnRzIiwgIi4uL2FwcC9zdG9yZXMvc29ja2V0U3RhdGUudHMiLCAiLi4vYXBwL3N0b3Jlcy9jb25maWcudHMiLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9idXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3J1YmJlclRleHQudHN4IiwgInJvdXRlOi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3JvdXRlcy8kaWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3BsYXllckF2YXRhci50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2Nvbm5lY3Rpb24udHMiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2NsaWVudC50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvZ2FtZS50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvcGxheWVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCBDb25uZWN0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9hcHAvY29udHJvbGxlcnMvY29ubmVjdGlvblwiO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBjcmVhdGUgY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG4vL2NyZWF0ZSBzZXJ2ZXIgc29ja2V0IGlvIGFuZCBhdHRhY2ggdG8gY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCB7XG4gIGNvcnM6IHtcbiAgICBvcmlnaW46IFwiKlwiLFxuICB9LFxuICB0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIl0sXG4gIGFsbG93VXBncmFkZXM6IGZhbHNlLFxufSk7XG5cbi8vIGF0dGFjaCBzb2NrZXQgY29ubmVjdGlvbiBjb250cm9sbGVyXG5jb25zdCBzb2NrZXRDb25uID0gbmV3IENvbm5lY3Rpb25Db250cm9sbGVyKGlvKTtcbnNvY2tldENvbm4uc3RhcnQoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5zZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcGFwdXEvV29yay9tYWluLXJlbWl4L2FwcC9yb3V0ZXMvJGlkLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvJGlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBpbyBhcyBzb2NrZXRDbGllbnQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IGFuaW1hdGlvblN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL2FuaW1hdGlvbi5jc3NcIjtcbmltcG9ydCBhcHBTdHlsZXMgZnJvbSBcIn4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5pbXBvcnQgdGFpbHdpbmRTdHlsZXMgZnJvbSBcIn4vYXNzZXRzL3N0eWxlcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCBpbml0aWFsQXBwU3RhdGUgfSBmcm9tIFwiLi9zdG9yZXNcIjtcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwifi9zdG9yZXMvY29uZmlnXCI7XG5pbXBvcnQgeyBzb2NrZXRBY3Rpb25zIH0gZnJvbSBcIn4vc3RvcmVzL3NvY2tldFN0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgYXM6IFwiZm9udFwiLFxuICAgICAgaHJlZjogXCIvZm9udHMvVmlyZ2lsM1lPRkYud29mZjJcIixcbiAgICAgIHR5cGU6IFwiZm9udC93b2ZmMlwiLFxuICAgICAgY3Jvc3NPcmlnaW46IFwiYW5vbnltb3VzXCIsXG4gICAgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRhaWx3aW5kU3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGFuaW1hdGlvblN0eWxlcyB9LFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgdGl0bGU6IFwiTWFpbiBSZW1peFwiLFxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXG59KTtcblxuY29uc3QgcGVyc2lzdGVkU3RhdGU6IEFwcFN0YXRlID0ge1xuICAuLi5pbml0aWFsQXBwU3RhdGUsXG59O1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShwZXJzaXN0ZWRTdGF0ZSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBzb2NrZXRBY3Rpb25zLmluaXQoXG4gICAgICAgIHNvY2tldENsaWVudCh7XG4gICAgICAgICAgdHJhbnNwb3J0czogW1wid2Vic29ja2V0XCJdLFxuICAgICAgICAgIHVwZ3JhZGU6IGZhbHNlLFxuICAgICAgICB9KSxcbiAgICAgICAgKGRhdGEpID0+IHt9XG4gICAgICApXG4gICAgKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxodG1sXG4gICAgICBsYW5nPVwiZW5cIlxuICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHRleHQtc2xhdGUtMTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCJcbiAgICA+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcFdpdGhSZWR1eCgpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IEdhbWVSZWR1Y2VyLCBHYW1lU3RhdGUsIGluaXRpYWxHYW1lU3RhdGUgfSBmcm9tIFwiLi9nYW1lU3RhdGVcIjtcbmltcG9ydCB7IGluaXRpYWxTb2NrZXRTdGF0ZSwgU29ja2V0UmVkdWNlciwgU29ja2V0U3RhdGUgfSBmcm9tIFwiLi9zb2NrZXRTdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgc29ja2V0OiBTb2NrZXRTdGF0ZTtcbiAgZ2FtZTogR2FtZVN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbEFwcFN0YXRlID0ge1xuICBzb2NrZXQ6IGluaXRpYWxTb2NrZXRTdGF0ZSxcbiAgZ2FtZTogaW5pdGlhbEdhbWVTdGF0ZSxcbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcbiAgc29ja2V0OiBTb2NrZXRSZWR1Y2VyLFxuICBnYW1lOiBHYW1lUmVkdWNlcixcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xuICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBTdGF0ZSk6IHZvaWQ7XG59XG4iLCAiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgSm9pbkRhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9jbGllbnRcIjtcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYW1lIH0gZnJvbSBcIn4vdXRpbHMvaGVscGVyXCI7XG5pbXBvcnQgeyBUaHVua0FjdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzb2NrZXRBY3Rpb25zLCBTb2NrZXRBY3Rpb25zIH0gZnJvbSBcIi4vc29ja2V0U3RhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHYW1lU3RhdGUge1xuICBkYXRhOiBKb2luRGF0YSB8IG51bGw7XG4gIG5vdEZvdW5kOiBib29sZWFuO1xuICBwbGF5ZXJzOiBQbGF5ZXJEYXRhW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsR2FtZVN0YXRlOiBHYW1lU3RhdGUgPSB7XG4gIGRhdGE6IG51bGwsXG4gIG5vdEZvdW5kOiBmYWxzZSxcbiAgcGxheWVyczogW10sXG59O1xuXG5pbnRlcmZhY2UgR2FtZUFjdGlvblR5cGVzIHtcbiAgcmVhZG9ubHkgU0VUX0dBTUVfREFUQTogXCJTRVRfR0FNRV9EQVRBXCI7XG4gIHJlYWRvbmx5IFNFVF9HQU1FX05PVF9GT1VORDogXCJTRVRfR0FNRV9OT1RfRk9VTkRcIjtcbiAgcmVhZG9ubHkgU0VUX1BMQVlFUlM6IFwiU0VUX1BMQVlFUlNcIjtcbn1cblxuY29uc3QgR2FtZUFjdGlvbnNUeXBlczogR2FtZUFjdGlvblR5cGVzID0ge1xuICBTRVRfR0FNRV9EQVRBOiBcIlNFVF9HQU1FX0RBVEFcIixcbiAgU0VUX0dBTUVfTk9UX0ZPVU5EOiBcIlNFVF9HQU1FX05PVF9GT1VORFwiLFxuICBTRVRfUExBWUVSUzogXCJTRVRfUExBWUVSU1wiLFxufTtcblxuaW50ZXJmYWNlIFNldEdhbWVEYXRhIHtcbiAgdHlwZTogXCJTRVRfR0FNRV9EQVRBXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLmRhdGE7XG59XG5cbmludGVyZmFjZSBTZXRQbGF5ZXJzIHtcbiAgdHlwZTogXCJTRVRfUExBWUVSU1wiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5wbGF5ZXJzO1xufVxuaW50ZXJmYWNlIFNldEdhbWVOb3RGb3VuZCB7XG4gIHR5cGU6IFwiU0VUX0dBTUVfTk9UX0ZPVU5EXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLm5vdEZvdW5kO1xufVxuXG5leHBvcnQgdHlwZSBHYW1lQWN0aW9ucyA9IFNldEdhbWVEYXRhIHwgU2V0R2FtZU5vdEZvdW5kIHwgU2V0UGxheWVycztcblxuZXhwb3J0IGNvbnN0IGdhbWVBY3Rpb25zID0ge1xuICAvLyBnYW1lIGFjdGlvbiB0byBzZXQgcGxheWVycyBpbiB0aGUgZ2FtZVxuICBzZXRQbGF5ZXJzOiAoXG4gICAgcGxheWVyczogUGxheWVyRGF0YVtdXG4gICk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX1BMQVlFUlMsXG4gICAgICAgIHBheWxvYWQ6IHBsYXllcnMsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIGdhbWUgYWN0aW9uIHRvIGFkZCBwbGF5ZXIgdG8gY3VycmVudCBnYW1lIHBsYXllcnMgbGlzdFxuICBhZGRQbGF5ZXI6IChwbGF5ZXI6IFBsYXllckRhdGEpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgcGxheWVyIGFscmVhZHkgZXhpc3RcbiAgICAgIGNvbnN0IHBsYXllcnMgPSBnZXRTdGF0ZSgpLmdhbWUucGxheWVycztcbiAgICAgIGNvbnN0IHBsYXllckV4aXN0ID0gcGxheWVycy5maW5kKChwKSA9PiBwLmlkID09PSBwbGF5ZXIuaWQpO1xuICAgICAgaWYgKHBsYXllckV4aXN0KSByZXR1cm47XG5cbiAgICAgIC8vIGFkZCBwbGF5ZXIgdG8gdGhlIHBsYXllciBsaXN0XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX1BMQVlFUlMsXG4gICAgICAgIHBheWxvYWQ6IFsuLi5wbGF5ZXJzLCBwbGF5ZXJdLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcInBsYXllciBhZGRlZFwiLCBwbGF5ZXIpO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2FtZSBhY3Rpb24gdG8gcmVtb3ZlIHBsYXllciBmcm9tIGN1cnJlbnQgZ2FtZSBwbGF5ZXJzIGxpc3RcbiAgcmVtb3ZlUGxheWVyOiAoXG4gICAgcGxheWVySWQ6IHN0cmluZ1xuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgcGxheWVyIGFscmVhZHkgZXhpc3RcbiAgICAgIGNvbnN0IHBsYXllcnMgPSBnZXRTdGF0ZSgpLmdhbWUucGxheWVycztcbiAgICAgIGNvbnN0IHBsYXllckV4aXN0ID0gcGxheWVycy5maW5kKChwKSA9PiBwLmlkID09PSBwbGF5ZXJJZCk7XG4gICAgICBpZiAoIXBsYXllckV4aXN0KSByZXR1cm47XG5cbiAgICAgIC8vIHJlbW92ZSBwbGF5ZXIgZnJvbSB0aGUgcGxheWVyIGxpc3RcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfUExBWUVSUyxcbiAgICAgICAgcGF5bG9hZDogcGxheWVycy5maWx0ZXIoKHApID0+IHAuaWQgIT09IHBsYXllcklkKSxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIHNldCBnYW1lIG5vdCBmb3VuZCBzdGF0ZVxuICBzZXRHYW1lTm90Rm91bmQ6IChcbiAgICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5ub3RGb3VuZFxuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfTk9UX0ZPVU5ELFxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyByZWR1eCBhY3Rpb24gdG8gc2V0IGdhbWUgZGF0YVxuICBzZXRHYW1lRGF0YTogKGRhdGE6IEpvaW5EYXRhKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YS5nYW1lRGF0YS5pZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX0RBVEEsXG4gICAgICAgIHBheWxvYWQ6IGRhdGEsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBjcmVhdGUgdGhlIGdhbWVcbiAgY3JlYXRlOiAocGxheWVyTmFtZT86IHN0cmluZyk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgICAgY29uc3QgZ2FtZURhdGE6IEdhbWVEYXRhID0ge1xuICAgICAgICBpZDogZ2VuZXJhdGVOYW1lKCksXG4gICAgICAgIGxldmVsOiAxLFxuICAgICAgICBvd25lcjogXCJcIixcbiAgICAgIH07XG4gICAgICBzb2NrZXQuZW1pdChcImNyZWF0ZVwiLCB7IHBsYXllck5hbWUsIGdhbWVEYXRhIH0pO1xuXG4gICAgICAvLyB3aGVuIGdhbWUgY3JlYXRlZCwgc3RhcnQgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgc29ja2V0QWN0aW9ucy5zdGFydExpbnN0ZW5pbmdHYW1lRXZlbnRzKCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBqb2luIHRoZSBnYW1lXG4gIGpvaW46IChcbiAgICBnYW1lSWQ6IHN0cmluZyxcbiAgICBwbGF5ZXJOYW1lOiBzdHJpbmdcbiAgKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG5cbiAgICAgIC8vIHdoZW4gam9pbmluZyBhIGdhbWUsIHN0YXJ0IGxpc3RlbmluZyBhbGwgZ2FtZSBldmVudHNcbiAgICAgIHNvY2tldEFjdGlvbnMuc3RhcnRMaW5zdGVuaW5nR2FtZUV2ZW50cygpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG5cbiAgICAgIGxldCBqb2luRGF0YSA9IGdldFN0YXRlKCkuZ2FtZS5kYXRhO1xuXG4gICAgICAvLyBsb2FkIGpvaW4gZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGNvbnN0IHBlcnNpc3RhbnRHYW1lRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdhbWVJZCk7XG5cbiAgICAgIC8vIGlmIGdhbWVEYXRhIGlzIG51bGwsIHRoZW4gdHJ5IHRvIHVzZSBwZXJzaXN0YW50R2FtZURhdGFcbiAgICAgIGlmICgham9pbkRhdGEpIHtcbiAgICAgICAgaWYgKHBlcnNpc3RhbnRHYW1lRGF0YSkge1xuICAgICAgICAgIGpvaW5EYXRhID0gSlNPTi5wYXJzZShwZXJzaXN0YW50R2FtZURhdGEpO1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgICAgIHBheWxvYWQ6IGpvaW5EYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgZ2FtZURhdGEgaWQgaXMgdGhlIHNhbWUgYXMgdGhlIGdhbWVJZFxuICAgICAgaWYgKGpvaW5EYXRhPy5nYW1lRGF0YS5pZCA9PT0gZ2FtZUlkKSB7XG4gICAgICAgIC8vanVzdCB1cGRhdGUgdGhlIHNvY2tldElkIGZvciB0aGlzIGdhbWVcbiAgICAgICAgam9pbkRhdGEucGxheWVyRGF0YS5zb2NrZXRJZCA9IHNvY2tldC5pZDtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgICBwYXlsb2FkOiBqb2luRGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhlIGdhbWVJZCBpcyBkaWZmZXJlbnQsIHRoZW4gcHJlcGFyZSBuZXcgam9pbiBkYXRhXG4gICAgICBqb2luRGF0YSA9IHtcbiAgICAgICAgZ2FtZURhdGE6IHtcbiAgICAgICAgICBpZDogZ2FtZUlkLFxuICAgICAgICAgIGxldmVsOiAxLFxuICAgICAgICAgIG93bmVyOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICBwbGF5ZXJEYXRhOiB7XG4gICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICAgICAgICBzb2NrZXRJZDogc29ja2V0LmlkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIC8vIHNlbmQgdGhlIGpvaW4gcmVxdWVzdCB0byB0aGUgc2VydmVyXG4gICAgICBzb2NrZXQuZW1pdChcImpvaW5cIiwgam9pbkRhdGEpO1xuICAgIH07XG4gIH0sXG5cbiAgLy9yZWR1eCBhY3Rpb24gdG8gbGVhdmUgdGhlIGdhbWVcbiAgbGVhdmU6ICgpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc29ja2V0ID0gZ2V0U3RhdGUoKS5zb2NrZXQuY2xpZW50O1xuICAgICAgY29uc3QgZ2FtZURhdGEgPSBnZXRTdGF0ZSgpLmdhbWUuZGF0YTtcbiAgICAgIGlmICghc29ja2V0IHx8ICFnYW1lRGF0YSkgcmV0dXJuO1xuICAgICAgc29ja2V0LmVtaXQoXCJsZWF2ZVwiLCBnYW1lRGF0YSk7XG5cbiAgICAgIC8vIHdoZW4gbGVhdmluZyBhIGdhbWUsIHN0b3AgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgc29ja2V0QWN0aW9ucy5zdG9wTGlzdGVuaW5nR2FtZUV2ZW50cygpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgZ2FtZSBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZ2FtZURhdGEuZ2FtZURhdGEuaWQpO1xuICAgICAgLy8gcmVtb3ZlIGdhbWUgZGF0YSBmcm9tIHJlZHV4IHN0b3JlXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBcIi9cIjtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byB0b2dnbGUgaWYgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gIHRvZ2dsZU5vdEZvdW5kOiAoKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgbm90Rm91bmQgPSBnZXRTdGF0ZSgpLmdhbWUubm90Rm91bmQ7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfTk9UX0ZPVU5ELFxuICAgICAgICBwYXlsb2FkOiAhbm90Rm91bmQsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBzdGFydCB0aGUgZ2FtZVxuICBzdGFydDogKCk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBjb25zdCBnYW1lRGF0YSA9IGdldFN0YXRlKCkuZ2FtZS5kYXRhO1xuICAgICAgaWYgKCFzb2NrZXQgfHwgIWdhbWVEYXRhKSByZXR1cm47XG4gICAgICBzb2NrZXRBY3Rpb25zLnN0YXJ0R2FtZSgoZ2FtZURhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIHN0YXJ0ZWRcIiwgZ2FtZURhdGEpO1xuICAgICAgfSkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEdhbWVSZWR1Y2VyOiBSZWR1Y2VyPEdhbWVTdGF0ZSwgR2FtZUFjdGlvbnM+ID0gKFxuICBzdGF0ZTogR2FtZVN0YXRlIHwgdW5kZWZpbmVkLFxuICBhY3Rpb246IEdhbWVBY3Rpb25zXG4pOiBHYW1lU3RhdGUgPT4ge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBpbml0aWFsR2FtZVN0YXRlO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9EQVRBOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfTk9UX0ZPVU5EOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdEZvdW5kOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9QTEFZRVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBsYXllcnM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iLCAiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBlbnVtIFRlcm1pbmFsQ29sb3Ige1xuICBSZXNldCA9IFwiXFx4MWJbMG1cIixcbiAgQnJpZ2h0ID0gXCJcXHgxYlsxbVwiLFxuICBEaW0gPSBcIlxceDFiWzJtXCIsXG4gIFVuZGVyc2NvcmUgPSBcIlxceDFiWzRtXCIsXG4gIEJsaW5rID0gXCJcXHgxYls1bVwiLFxuICBSZXZlcnNlID0gXCJcXHgxYls3bVwiLFxuICBIaWRkZW4gPSBcIlxceDFiWzhtXCIsXG5cbiAgRmdCbGFjayA9IFwiXFx4MWJbMzBtXCIsXG4gIEZnUmVkID0gXCJcXHgxYlszMW1cIixcbiAgRmdHcmVlbiA9IFwiXFx4MWJbMzJtXCIsXG4gIEZnWWVsbG93ID0gXCJcXHgxYlszM21cIixcbiAgRmdCbHVlID0gXCJcXHgxYlszNG1cIixcbiAgRmdNYWdlbnRhID0gXCJcXHgxYlszNW1cIixcbiAgRmdDeWFuID0gXCJcXHgxYlszNm1cIixcbiAgRmdXaGl0ZSA9IFwiXFx4MWJbMzdtXCIsXG5cbiAgQmdCbGFjayA9IFwiXFx4MWJbNDBtXCIsXG4gIEJnUmVkID0gXCJcXHgxYls0MW1cIixcbiAgQmdHcmVlbiA9IFwiXFx4MWJbNDJtXCIsXG4gIEJnWWVsbG93ID0gXCJcXHgxYls0M21cIixcbiAgQmdCbHVlID0gXCJcXHgxYls0NG1cIixcbiAgQmdNYWdlbnRhID0gXCJcXHgxYls0NW1cIixcbiAgQmdDeWFuID0gXCJcXHgxYls0Nm1cIixcbiAgQmdXaGl0ZSA9IFwiXFx4MWJbNDdtXCIsXG59XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gKCkgPT4gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKTtcblxuZXhwb3J0IGNvbnN0IHByaW50TG9nID0gKFxuICB0eXBlOiBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcImRlZmF1bHRcIiA9IFwiZGVmYXVsdFwiLFxuICBsYWJlbDogc3RyaW5nID0gXCJcIixcbiAgLi4ubWVzc2FnZTogYW55W11cbikgPT4ge1xuICAvLyBzZXQgZGVmYXVsdCBmb3Jncm91bmQgY29sb3IgdG8gRmdXaGl0ZVxuICBsZXQgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnV2hpdGU7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJpbmZvXCI6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdCbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIndhcm5pbmdcIjpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1llbGxvdztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdWNjZXNzXCI6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdHcmVlbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnUmVkO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1doaXRlO1xuICB9XG4gIGNvbnNvbGUubG9nKFxuICAgIGBbJHtUZXJtaW5hbENvbG9yLkZnTWFnZW50YX0ke2N1cnJlbnRUaW1lc3RhbXAoKSArIFRlcm1pbmFsQ29sb3IuUmVzZXR9XVske1xuICAgICAgVGVybWluYWxDb2xvci5GZ0N5YW5cbiAgICB9JHtsYWJlbH0ke1Rlcm1pbmFsQ29sb3IuUmVzZXR9XWAsXG4gICAgYCR7Y29sb3J9JHttZXNzYWdlLmpvaW4oXCJcIil9JHtUZXJtaW5hbENvbG9yLlJlc2V0fWBcbiAgKTtcbn07XG5cbi8qXG4oYykgYnkgVGhvbWFzIEtvbmluZ3NcblJhbmRvbSBOYW1lIEdlbmVyYXRvciBmb3IgSmF2YXNjcmlwdFxuKi9cblxuZnVuY3Rpb24gY2FwRmlyc3QodGV4dDogc3RyaW5nKSB7XG4gIHJldHVybiB0ZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGV4dC5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKHdvcmRMZW46IG51bWJlciA9IDIpIHtcbiAgY29uc3Qgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjb25zb25hbnRzID0gXCJiY2RmZ2hqa2xtbnBxcnN0dnd4eXpcIjtcbiAgY29uc3Qgdm93ZWxzID0gXCJhZWlvdVwiO1xuICBmb3IgKGxldCB3ID0gMDsgdyA8IHdvcmRMZW47IHcrKykge1xuICAgIGNvbnN0IHdvcmRDaGFyTGVuID0gZ2V0UmFuZG9tSW50KDMsIDEwKTtcbiAgICBjb25zdCBuYW1lID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkQ2hhckxlbjsgaSsrKSB7XG4gICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgbmFtZS5wdXNoKGNvbnNvbmFudHMuY2hhckF0KGdldFJhbmRvbUludCgwLCBjb25zb25hbnRzLmxlbmd0aCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUucHVzaCh2b3dlbHMuY2hhckF0KGdldFJhbmRvbUludCgwLCB2b3dlbHMubGVuZ3RoKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBvdXRwdXQucHVzaChjYXBGaXJzdChuYW1lLmpvaW4oXCJcIikpKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oXCJcIik7XG59XG4iLCAiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IHsgQ2xpZW50RXZlbnQsIEpvaW5EYXRhIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NsaWVudFwiO1xuaW1wb3J0IHsgZ2FtZUFjdGlvbnMsIEdhbWVBY3Rpb25zIH0gZnJvbSBcIi4vZ2FtZVN0YXRlXCI7XG5pbXBvcnQgeyBUaHVua0FjdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ja2V0U3RhdGUge1xuICBjbGllbnQ6IFNvY2tldCB8IG51bGw7XG4gIGNvbm5lY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTb2NrZXRTdGF0ZTogU29ja2V0U3RhdGUgPSB7XG4gIGNsaWVudDogbnVsbCxcbiAgY29ubmVjdGVkOiBmYWxzZSxcbn07XG5cbmludGVyZmFjZSBTb2NrZXRBY3Rpb25UeXBlcyB7XG4gIHJlYWRvbmx5IFNFVF9TT0NLRVQ6IFwiU0VUX1NPQ0tFVFwiO1xuICByZWFkb25seSBTRVRfQ09OTkVDVEVEOiBcIlNFVF9DT05ORUNURURcIjtcbn1cblxuY29uc3QgU29ja2V0QWN0aW9uc1R5cGVzOiBTb2NrZXRBY3Rpb25UeXBlcyA9IHtcbiAgU0VUX1NPQ0tFVDogXCJTRVRfU09DS0VUXCIsXG4gIFNFVF9DT05ORUNURUQ6IFwiU0VUX0NPTk5FQ1RFRFwiLFxufTtcblxuaW50ZXJmYWNlIFNldFNvY2tldCB7XG4gIHR5cGU6IFwiU0VUX1NPQ0tFVFwiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbFNvY2tldFN0YXRlLmNsaWVudDtcbn1cbmludGVyZmFjZSBTZXRDb25uZWN0ZWQge1xuICB0eXBlOiBcIlNFVF9DT05ORUNURURcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxTb2NrZXRTdGF0ZS5jb25uZWN0ZWQ7XG59XG5cbmV4cG9ydCB0eXBlIFNvY2tldEFjdGlvbnMgPSBTZXRTb2NrZXQgfCBTZXRDb25uZWN0ZWQ7XG5cbmV4cG9ydCBjb25zdCBzb2NrZXRBY3Rpb25zID0ge1xuICAvLyBzb2NrZXQgYWN0aW9uIHRvIHNldCB0aGUgY29ubmVjdGVkIHNvY2tldCBjbGllbnRcbiAgaW5pdDogKFxuICAgIHNvY2tldDogdHlwZW9mIGluaXRpYWxTb2NrZXRTdGF0ZS5jbGllbnQsXG4gICAgb25EYXRhOiAoZGF0YTogYW55KSA9PiB2b2lkXG4gICk6IFRodW5rQWN0aW9uPFNvY2tldEFjdGlvbnMgfCBHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuXG4gICAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfQ09OTkVDVEVELFxuICAgICAgICAgIHBheWxvYWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU29ja2V0QWN0aW9uc1R5cGVzLlNFVF9TT0NLRVQsXG4gICAgICAgIHBheWxvYWQ6IHNvY2tldCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gc29ja2V0IGFjdGlvbiB0byBzdGFydCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gIHN0YXJ0TGluc3RlbmluZ0dhbWVFdmVudHM6ICgpOiBUaHVua0FjdGlvbjxTb2NrZXRBY3Rpb25zIHwgR2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc29ja2V0ID0gZ2V0U3RhdGUoKS5zb2NrZXQuY2xpZW50O1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcbiAgICAgIC8vIGxpc3RlbiByZXNwb25zZSBmcm9tIHNlcnZlciB3aGVuIGdhbWUgY3JlYXRlZFxuICAgICAgc29ja2V0Lm9uKFwiY3JlYXRlZFwiLCAocGF5bG9hZDogSm9pbkRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIGNyZWF0ZWRcIiwgcGF5bG9hZCk7XG4gICAgICAgIC8vIGRpc3BhdGNoIGdhbWUgYWN0aW9uIHRvIHNldCB0aGUgZ2FtZSBkYXRhXG4gICAgICAgIGdhbWVBY3Rpb25zLnNldEdhbWVEYXRhKHBheWxvYWQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICAgIC8vIGFkZCBwbGF5ZXIgdG8gdGhlIGdhbWVcbiAgICAgICAgZ2FtZUFjdGlvbnMuYWRkUGxheWVyKHBheWxvYWQucGxheWVyRGF0YSkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gdG8gbmV3IHBsYXllciBqb2luZWQgZXZlbnRcbiAgICAgIHNvY2tldC5vbihcInBsYXllcnNcIiwgKHBheWxvYWQ6IFBsYXllckRhdGFbXSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBwbGF5ZXIgbGlzdFwiLCBwYXlsb2FkKTtcbiAgICAgICAgLy8gYWRkIHBsYXllciB0byB0aGUgZ2FtZVxuICAgICAgICBnYW1lQWN0aW9ucy5zZXRQbGF5ZXJzKHBheWxvYWQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gbGlzdGVuIGlmIHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICAgICAgc29ja2V0Lm9uKFwibm90Rm91bmRcIiwgKHBheWxvYWQpID0+IHtcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0R2FtZU5vdEZvdW5kKHRydWUpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gbGlzdGVuIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIHNvY2tldC5vbihcImpvaW5lZFwiLCAocGF5bG9hZDogSm9pbkRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJqb2luZWRcIiwgcGF5bG9hZCk7XG4gICAgICAgIC8vIGRpc3BhdGNoIGdhbWUgYWN0aW9uIHRvIHNldCB0aGUgZ2FtZSBkYXRhXG4gICAgICAgIGdhbWVBY3Rpb25zLnNldEdhbWVEYXRhKHBheWxvYWQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG5cbiAgICAgICAgLy8gYWRkIHBsYXllciB0byB0aGUgZ2FtZSBwbGF5ZXJzIGxpc3RcbiAgICAgICAgZ2FtZUFjdGlvbnMuYWRkUGxheWVyKHBheWxvYWQucGxheWVyRGF0YSkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gZm9yIHRoZSBwbGF5ZXIgbGVmdCB0aGUgZ2FtZSBldmVudFxuICAgICAgc29ja2V0Lm9uKFwibGVmdFwiLCAocGF5bG9hZDogUGxheWVyRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkLm5hbWUsIFwiaGFzIGxlZnQgdGhlIGdhbWVcIik7XG4gICAgICAgIC8vIHJlbW92ZSBwbGF5ZXIgZnJvbSB0aGUgcGxheWVyIGxpc3RcbiAgICAgICAgZ2FtZUFjdGlvbnMucmVtb3ZlUGxheWVyKHBheWxvYWQuaWQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNvY2tldCBhY3Rpb24gdG8gc3RvcCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gIHN0b3BMaXN0ZW5pbmdHYW1lRXZlbnRzOiAoKTogVGh1bmtBY3Rpb248U29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgd2hlbiBnYW1lIGNyZWF0ZWRcbiAgICAgIHNvY2tldC5vZmYoXCJjcmVhdGVkXCIpO1xuXG4gICAgICAvLyBzdG9wIGxpc3RlbmluZyB0byBuZXcgcGxheWVyIGpvaW5lZCBldmVudFxuICAgICAgc29ja2V0Lm9mZihcIm5ld1BsYXllclwiKTtcblxuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgaWYgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gICAgICBzb2NrZXQub2ZmKFwibm90Rm91bmRcIik7XG5cbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIHNvY2tldC5vZmYoXCJqb2luZWRcIik7XG5cbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIGZvciBhIHBsYXllciBsZWZ0IHRoZSBnYW1lIGV2ZW50XG4gICAgICBzb2NrZXQub2ZmKFwibGVmdFwiKTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNvY2tldCBhY3Rpb24gdG8gc3RhcnQgdGhlIGdhbWVcbiAgc3RhcnRHYW1lOiAoXG4gICAgb25TdGFydGVkOiAoZGF0YTogR2FtZURhdGEpID0+IHZvaWRcbiAgKTogVGh1bmtBY3Rpb248U29ja2V0QWN0aW9ucyB8IEdhbWVBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGNvbnN0IGdhbWVEYXRhID0gZ2V0U3RhdGUoKS5nYW1lLmRhdGE7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgICAgLy8gZW1pdCB0aGUgc3RhcnQgZ2FtZSBldmVudFxuICAgICAgc29ja2V0LmVtaXQoXCJzdGFydFwiLCBnYW1lRGF0YSk7XG4gICAgICBzb2NrZXQub24oXCJzdGFydGVkXCIsIG9uU3RhcnRlZCk7XG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBTb2NrZXRSZWR1Y2VyOiBSZWR1Y2VyPFNvY2tldFN0YXRlLCBTb2NrZXRBY3Rpb25zPiA9IChcbiAgc3RhdGU6IFNvY2tldFN0YXRlIHwgdW5kZWZpbmVkLFxuICBhY3Rpb246IFNvY2tldEFjdGlvbnNcbik6IFNvY2tldFN0YXRlID0+IHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaW5pdGlhbFNvY2tldFN0YXRlO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU29ja2V0QWN0aW9uc1R5cGVzLlNFVF9TT0NLRVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBTb2NrZXRBY3Rpb25zVHlwZXMuU0VUX0NPTk5FQ1RFRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb25uZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIiwgImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHsgQXBwU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZTogYW55KSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBJIHJlcXVpcmUgdGhpcyBvbmx5IGluIGRldiBlbnZpcm9ubWVudFxuICAgIC8vIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTtcbiAgICAvLyByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xuICB9XG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICBjb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcbiAgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIC4uLnJlZHVjZXJzLFxuICB9KTtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgYmluZE1pZGRsZXdhcmUobWlkZGxld2FyZSlcbiAgKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBwbGF5aW5nQ2FyZEJhY2tncm91bmQgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGxheWluZy1jYXJkcy5wbmdcIjtcbmltcG9ydCBSdWJiZXJUZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL3J1YmJlclRleHRcIjtcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3N0b3Jlc1wiO1xuaW1wb3J0IHsgZ2FtZUFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmVzL2dhbWVTdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2pvaW5JZCwgc2V0Sm9pbklkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxheWVyTmFtZSwgc2V0UGxheWVyTmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUuZGF0YSk7XG4gIGNvbnN0IG5vdEZvdW5kID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5ub3RGb3VuZCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgam9pbklkUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwbGF5ZXJOYW1lUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBoYW5kbGVSb29tSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgIHNldEpvaW5JZCh2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU5hbWVJbnB1dCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgc2V0UGxheWVyTmFtZSh2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUpvaW4gPSAoKSA9PiB7XG4gICAgLy8gaWYgcGxheWVyIG5hbWUgaXMgZW1wdHksIHNldCBmb2N1cyB0aGUgaW5wdXRcbiAgICBpZiAoIXBsYXllck5hbWUpIHtcbiAgICAgIHBsYXllck5hbWVSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgam9pbiBpZCBpcyBlbXB0eSwgc2V0IGZvY3VzIHRoZSBpbnB1dFxuICAgIGlmICgham9pbklkKSB7XG4gICAgICBqb2luSWRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBvdGhlciB0aGFuIHRoYXQsIGpvaW4gdGhlIHJvb21cbiAgICBkaXNwYXRjaChnYW1lQWN0aW9ucy5qb2luKGpvaW5JZCwgcGxheWVyTmFtZSkpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDcmVhdGVHYW1lID0gKCkgPT4ge1xuICAgIC8vIGlmIHBsYXllciBuYW1lIGlzIGVtcHR5LCBzZXQgZm9jdXMgdGhlIGlucHV0XG4gICAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgICBwbGF5ZXJOYW1lUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLmNyZWF0ZShwbGF5ZXJOYW1lKSk7XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBuYXYoZGF0YS5nYW1lRGF0YS5pZCk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobm90Rm91bmQpIHtcbiAgICAgIGFsZXJ0KFwiR2FtZSBub3QgZm91bmRcIik7XG4gICAgICBkaXNwYXRjaChnYW1lQWN0aW9ucy50b2dnbGVOb3RGb3VuZCgpKTtcbiAgICB9XG4gIH0sIFtub3RGb3VuZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctc2NyZWVuIGgtc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3BsYXlpbmdDYXJkQmFja2dyb3VuZH1cbiAgICAgICAgYWx0PVwiYmdcIlxuICAgICAgICB3aWR0aD17NTEyfVxuICAgICAgICBjbGFzc05hbWU9XCItei0xMCBhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIG9wYWNpdHktMjAgYm91bmNlSW5VcFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG92ZXJmbG93LWhpZGRlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgPFJ1YmJlclRleHQgdGV4dD1cIkhlbGxvXCIgcm9vdENsYXNzPVwibXItOFwiIC8+XG4gICAgICAgICAgPFJ1YmJlclRleHQgdGV4dD1cInRoZXJlIVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICA8UnViYmVyVGV4dFxuICAgICAgICAgICAgdGV4dD1cIkxldCdzXCJcbiAgICAgICAgICAgIGJvdW5jZUluPVwicmlnaHRcIlxuICAgICAgICAgICAgcm9vdENsYXNzPVwibXItOFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXZpcmdpbCB4bDp0ZXh0LTh4bCBsZzptZDp0ZXh0LTZ4bCB0ZXh0LTR4bCBob3ZlcjphbmltYXRlLXJ1YmJlciBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LWxpbWUtNDAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSdWJiZXJUZXh0XG4gICAgICAgICAgICB0ZXh0PVwiUExBWSFcIlxuICAgICAgICAgICAgYm91bmNlSW49XCJyaWdodFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4byB4bDp0ZXh0LTh4bCBsZzptZDp0ZXh0LTZ4bCB0ZXh0LTR4bCBob3ZlcjphbmltYXRlLXJ1YmJlciBweC0yIGhvdmVyOnRleHQtc2xhdGUtMTAwIHRleHQtbGltZS00MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIG10LTggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJvcmRlciBib3JkZXItbGltZS01MDAgaXRlbXMtY2VudGVyIHNtOnctZnVsbFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlZj17cGxheWVyTmFtZVJlZn1cbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyMH1cbiAgICAgICAgICAgICAgdmFsdWU9e3BsYXllck5hbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAwIGZsZXggZmxleC1ncm93IGJnLXRyYW5zcGFyZW50IHB5LTQgIG91dGxpbmUtbm9uZSBweC00IHRleHQtbGltZS01MDAgIHhsOnRleHQteGwgbGc6dGV4dC1sZyBtZDp0ZXh0LW1kIHRleHQtc20gZm9udC1ib2xkIGZvbnQtZXhvXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbmFtZSBoZXJlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVJbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxpbWUtNTAwIGZvbnQtdmlyZ2lsIHB5LTQgeGw6dGV4dC14bCBsZzp0ZXh0LWxnIG1kOnRleHQtbWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICBhbmRcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9e2pvaW5JZFJlZn1cbiAgICAgICAgICAgICAgdmFsdWU9e2pvaW5JZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMDAgZmxleCBmbGV4LWdyb3cgYmctdHJhbnNwYXJlbnQgcHktNCBvdXRsaW5lLW5vbmUgcHgtNCB0ZXh0LWxpbWUtNTAwICB4bDp0ZXh0LXhsIGxnOnRleHQtbGcgbWQ6dGV4dC1tZCB0ZXh0LXNtIGZvbnQtYm9sZCBmb250LWV4b1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGdhbWUgSUQgaGVyZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSb29tSW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVKb2lufT5QbGF5PC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptci0wIHhzOm1yLTAgeGw6bXItNCBsZzptci00IG1kOm1yLTQgc206dy1mdWxsIHhzOnctZnVsbCB0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUdhbWV9PkNyZWF0ZSB5b3VyIG93biBnYW1lPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb25DbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5jb25zdCBCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQ2xpY2ssIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgXCJiZy1saW1lLTUwMCBmb250LWV4byBob3ZlcjpiZy1saW1lLTcwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTkwMCBmb250LWJvbGQgcHktNCBweC04XCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPHA+e2NoaWxkcmVufTwvcD5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsICJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBib3VuY2VJbj86IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJ1cFwiIHwgXCJkb3duXCI7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcm9vdENsYXNzPzogc3RyaW5nO1xufTtcbmNvbnN0IFJ1YmJlclRleHQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIHRleHQgPSBcIlwiLFxuICBib3VuY2VJbixcbiAgcm9vdENsYXNzID0gXCJcIixcbiAgY2xhc3NOYW1lID0gXCJmb250LXZpcmdpbCB4bDp0ZXh0LTh4bCBsZzptZDp0ZXh0LTZ4bCB0ZXh0LTR4bCBob3ZlcjphbmltYXRlLXJ1YmJlciBob3Zlcjp0ZXh0LWxpbWUtNDAwIGN1cnNvci1wb2ludGVyXCIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiZmxleCBmbGV4LXJvd1wiLCByb290Q2xhc3MsIHtcbiAgICAgICAgYm91bmNlSW5MZWZ0OiBib3VuY2VJbiA9PT0gXCJsZWZ0XCIgfHwgIWJvdW5jZUluLFxuICAgICAgICBib3VuY2VJblJpZ2h0OiBib3VuY2VJbiA9PT0gXCJyaWdodFwiLFxuICAgICAgICBib3VuY2VJblVwOiBib3VuY2VJbiA9PT0gXCJ1cFwiLFxuICAgICAgICBib3VuY2VJbkRvd246IGJvdW5jZUluID09PSBcImRvd25cIixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHt0ZXh0LnNwbGl0KFwiXCIpLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICA8aDEga2V5PXtpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge2N9XG4gICAgICAgIDwvaDE+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1YmJlclRleHQ7XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSBcIn4vY29tcG9uZW50cy9wbGF5ZXJBdmF0YXJcIjtcbmltcG9ydCB7IEpvaW5EYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvY2xpZW50XCI7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL2dhbWVcIjtcbmltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9wbGF5ZXJcIjtcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIn4vc3RvcmVzXCI7XG5pbXBvcnQgeyBnYW1lQWN0aW9ucyB9IGZyb20gXCJ+L3N0b3Jlcy9nYW1lU3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4ganNvbih7IC4uLnBhcmFtcyB9KTtcbn07XG5cbmNvbnN0IEdhbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IG5vdGlmUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8R2FtZURhdGE+KCk7XG4gIGNvbnN0IFtsZWF2aW5nUGxheWVyLCBzZXRMZWF2aW5nUGxheWVyXSA9IFJlYWN0LnVzZVN0YXRlPFBsYXllckRhdGEgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLnNvY2tldC5jbGllbnQpO1xuICBjb25zdCBub3RGb3VuZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUubm90Rm91bmQpO1xuICBjb25zdCBkYXRhU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLmRhdGEpO1xuICBjb25zdCBwbGF5ZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5wbGF5ZXJzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vIHVzZSBlZmZlY3QgdG8gZGV0ZWN0IGlmIHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChub3RGb3VuZCkge1xuICAgICAgYWxlcnQoXCJHYW1lIG5vdCBmb3VuZFwiKTtcbiAgICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLnRvZ2dsZU5vdEZvdW5kKCkpO1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBcIi9cIjtcbiAgICB9XG4gIH0sIFtub3RGb3VuZF0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5pZCAmJiBzb2NrZXQpIHtcbiAgICAgIGxldCBwbGF5ZXJOYW1lID0gXCJBbm9ueW1vdXNcIjtcbiAgICAgIC8vIGdldCBsb2NhbCBzdG9yYWdlIGRhdGFcbiAgICAgIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEuaWQpO1xuICAgICAgaWYgKGxvY2FsRGF0YSkge1xuICAgICAgICAvLyBpZiBsb2NhbCBkYXRhIGlzIGZvdW5kLCBnZXQgcGxheWVyIG5hbWUgdGhlcmVcbiAgICAgICAgY29uc3QgbG9jYWxEYXRhT2JqOiBKb2luRGF0YSA9IEpTT04ucGFyc2UobG9jYWxEYXRhKSBhcyBKb2luRGF0YTtcbiAgICAgICAgcGxheWVyTmFtZSA9IGxvY2FsRGF0YU9iai5wbGF5ZXJEYXRhLm5hbWUgfHwgXCJBbm9ueW1vdXNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1BsYXllck5hbWUgPSBwcm9tcHQoXCJFbnRlciB5b3VyIG5hbWVcIiwgXCJBbm9ueW1vdXNcIik7XG4gICAgICAgIGlmIChuZXdQbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgcGxheWVyTmFtZSA9IG5ld1BsYXllck5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLmpvaW4oZGF0YS5pZCwgcGxheWVyTmFtZSkpO1xuICAgIH1cbiAgfSwgW2RhdGEsIGRpc3BhdGNoLCBzb2NrZXRdKTtcblxuICAvLyB0cmlnZ2VyIG5vdGlmaWNhdGlvbiB1c2luZyBlZmZlY3Qgd2hlbiBwbGF5ZXIgaXMgbGVhdmluZ1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsZWF2aW5nUGxheWVyKSB7XG4gICAgICBub3RpZlJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBub3RpZlJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfSwgW2xlYXZpbmdQbGF5ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGZpeGVkIHRvcC0wIHJpZ2h0LTAgbS00IHRleHQtc21cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4byBtci0yXCI+UGxheWVyIE5hbWU6PC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+e2RhdGFTdGF0ZT8ucGxheWVyRGF0YS5uYW1lfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXhvIG1yLTJcIj5HYW1lIElEOjwvaDE+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPntkYXRhU3RhdGU/LmdhbWVEYXRhLmlkfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXhvIG1yLTJcIj5QbGF5ZXIgSUQ6PC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+e2RhdGFTdGF0ZT8ucGxheWVyRGF0YS5pZH08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4byBtci0yXCI+UGxheWVyIENvdW50OjwvaDE+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPntwbGF5ZXJzLmxlbmd0aH08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4byBtci0yXCI+aXMgb3duZXI8L2gxPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIHtkYXRhU3RhdGUgJiYgZGF0YVN0YXRlLmdhbWVEYXRhLm93bmVyID09PSBkYXRhU3RhdGUucGxheWVyRGF0YS5pZFxuICAgICAgICAgICAgICA/IFwidHJ1ZVwiXG4gICAgICAgICAgICAgIDogXCJmYWxzZVwifVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGdhbWVBY3Rpb25zLmxlYXZlKCkpfVxuICAgICAgICA+XG4gICAgICAgICAgTGVhdmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e25vdGlmUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgIFwiZml4ZWQgYm90dG9tLTAgaGlkZGVuIHJpZ2h0LTAgbXItNCBtYi00IGJnLXllbGxvdy0yMDAgcm91bmRlZC14bFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlBsYXllciB7bGVhdmluZ1BsYXllciAmJiBsZWF2aW5nUGxheWVyLmlkfSBoYXMgbGVhdmluZyB0aGUgZ2FtZTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtZXhvIG1iLThcIj5cbiAgICAgICAgV2FpdGluZyBhbm90aGVyIHBsYXllci4uLlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge3BsYXllcnMubWFwKChwbGF5ZXIpID0+IChcbiAgICAgICAgICA8UGxheWVyQXZhdGFyXG4gICAgICAgICAgICBtZT17cGxheWVyLmlkID09PSBkYXRhU3RhdGU/LmdhbWVEYXRhLm93bmVyfVxuICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAge1sxLCAyLCAzLCA0XS5zbGljZSgwLCAtcGxheWVycy5sZW5ndGgpLm1hcCgoaSkgPT4gKFxuICAgICAgICAgIDxQbGF5ZXJBdmF0YXIga2V5PXtpfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXIgbXQtOFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAwIGZvbnQtZXhvIGhvdmVyOmJnLXNsYXRlLTcwMCBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTkwMCBmb250LWJvbGQgcHktNCBweC04XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChnYW1lQWN0aW9ucy5sZWF2ZSgpKX1cbiAgICAgICAgPlxuICAgICAgICAgIEFib3J0IVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChnYW1lQWN0aW9ucy5zdGFydCgpKX0+XG4gICAgICAgICAgTGF1bmNoIHRoZSBnYW1lIVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVNjcmVlbjtcbiIsICJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBtZT86IGJvb2xlYW47XG4gIG5hbWU/OiBzdHJpbmc7XG59O1xuY29uc3QgUGxheWVyQXZhdGFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBuYW1lID0gXCJcIiwgbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1bMTI4cHhdIGgtWzEyOHB4XSB0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJhYnNvbHV0ZSB6LTAgdy1bMTI4cHhdIGgtWzEyOHB4XSByb3VuZGVkLWZ1bGxcIiwge1xuICAgICAgICAgIFwiaG92ZXI6YW5pbWF0ZS1ydWJiZXIgYm9yZGVyLTggYm9yZGVyLXNreS00MDAgYmctc2t5LTUwMFwiOiBuYW1lICYmIG1lLFxuICAgICAgICAgIFwiaG92ZXI6YW5pbWF0ZS1ydWJiZXIgYm9yZGVyLTggYm9yZGVyLWN5YW4tNDAwIGJnLWN5YW4tNTAwXCI6XG4gICAgICAgICAgICBuYW1lICYmICFtZSxcbiAgICAgICAgICBcImJvcmRlci04IGJvcmRlci1kYXNoZWQgYW5pbWF0ZS1zcGluLXNsb3dcIjogIW5hbWUsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiZm9udC12aXJnaWwgei0xMCBvdyB0ZXh0LXhsIHB4LTRcIiwge1xuICAgICAgICAgIFwidGV4dC1zbGF0ZS0xMDBcIjogIW5hbWUsXG4gICAgICAgICAgXCJ0ZXh0LXNsYXRlLTkwMFwiOiBuYW1lLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge25hbWUgfHwgXCJ3YWl0aW5nIHBsYXllclwifVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJBdmF0YXI7XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYzQ3YjNiMWMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUk3T0ZJWTNOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ERkFUWllMNi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtREk0VjIzUDQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU9KTVg3SDRNLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy8kaWQnOnsnaWQnOidyb3V0ZXMvJGlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6JzppZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy8kaWQtTzZVS1o2V1kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1KSzM1R0U3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTI3Q0xDSVo0LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NSkszNUdFNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUM0N0IzQjFDLmpzJ307IiwgImltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCBDbGllbnRDb250cm9sbGVyIGZyb20gXCIuL2NsaWVudFwiO1xuaW1wb3J0IHsgcHJpbnRMb2cgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjbGllbnRzOiBDbGllbnRDb250cm9sbGVyW10gPSBbXTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gbWFuYWdlIHRoZSBzb2NrZXQgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIHRoZSBjbGllbnRcbiAqIEBjbGFzcyBDb25uZWN0aW9uQ29udHJvbGxlclxuICogQHBhcmFtIHtTZXJ2ZXJ9IGlvIC0gVGhlIHNvY2tldCBpbyBjb25uZWN0aW9uIGJldHdlZW4gdGhlIHNlcnZlciBhbmQgdGhlIGNsaWVudFxuICpcbiAqL1xuY2xhc3MgQ29ubmVjdGlvbkNvbnRyb2xsZXIge1xuICBpbzogU2VydmVyO1xuICBjb25zdHJ1Y3RvcihpbzogU2VydmVyKSB7XG4gICAgdGhpcy5pbyA9IGlvO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3RhcnQgbGlzdGVuaW5nIHRvIHRoZSBzb2NrZXQgY29ubmVjdGlvblxuICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5pby5vbihcImNvbm5lY3Rpb25cIiwgKHNvY2tldCkgPT4ge1xuICAgICAgcHJpbnRMb2coXCJkZWZhdWx0XCIsIFwiU09DS0VUXCIsIFwiY29ubmVjdGVkOiBcIiwgc29ja2V0LmlkKTtcbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnRDb250cm9sbGVyKHNvY2tldCwgdGhpcy5pbyk7XG4gICAgICBjbGllbnRzLnB1c2goY2xpZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uQ29udHJvbGxlcjtcbiIsICJpbXBvcnQgeyBTZXJ2ZXIsIFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCB7IGdlbmVyYXRlTmFtZSwgcHJpbnRMb2cgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5pbXBvcnQgeyBjbGllbnRzIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuaW1wb3J0IEdhbWVDb250cm9sbGVyLCB7IEdhbWVEYXRhLCBnYW1lcyB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyLCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCB0eXBlIENsaWVudEV2ZW50ID0gXCJqb2luXCIgfCBcImpvaW5lZFwiIHwgXCJsZWF2ZVwiIHwgXCJsZWZ0XCI7XG5leHBvcnQgaW50ZXJmYWNlIEpvaW5EYXRhIHtcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xuICBwbGF5ZXJEYXRhOiBQbGF5ZXJEYXRhO1xufVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gbWFuYWdlIHRoZSBzb2NrZXQgY29ubmVjdGlvbiBjcmVhdGVkIGJ5IHRoZSBjbGllbnRcbiAqIEBjbGFzcyBDbGllbnRDb250cm9sbGVyXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0IC0gVGhlIHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRDb250cm9sbGVyIHtcbiAgc29ja2V0OiBTb2NrZXQ7XG4gIHNlcnZlcjogU2VydmVyO1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHNvY2tldCBzb2NrZXQgY29ubmVjdGlvbiBjcmVhdGVkIGJ5IHRoZSBjbGllbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvY2tldDogU29ja2V0LCBpbzogU2VydmVyKSB7XG4gICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgdGhpcy5zZXJ2ZXIgPSBpbztcbiAgICBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsIHRoaXMuZGlzY29ubmVjdC5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oXCJjcmVhdGVcIiwgdGhpcy5jcmVhdGUuYmluZCh0aGlzKSk7XG4gICAgc29ja2V0Lm9uKFwiam9pblwiLCB0aGlzLmpvaW4uYmluZCh0aGlzKSk7XG4gICAgc29ja2V0Lm9uKFwibGVhdmVcIiwgdGhpcy5sZWF2ZS5iaW5kKHRoaXMpKTtcbiAgfVxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkaXNjb25uZWN0IHRoZSBzb2NrZXQgY29ubmVjdGlvblxuICAgKiBAbWV0aG9kIGRpc2Nvbm5lY3RcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJTT0NLRVRcIiwgXCJkaXNjb25uZWN0ZWQ6IFwiLCB0aGlzLnNvY2tldC5pZCk7XG4gICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIGNvbnN0IGNsaWVudEluZGV4ID0gY2xpZW50cy5pbmRleE9mKHRoaXMpO1xuICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIkNMSUVOVFwiLCBcIlJlbW92aW5nIENMSUVOVCNcIiwgY2xpZW50SW5kZXgpO1xuICAgIGNsaWVudHMuc3BsaWNlKGNsaWVudEluZGV4LCAxKTtcbiAgfVxuXG4gIC8vICAgZ2V0R2FtZSgpIHtcbiAgLy8gICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNvY2tldC5kYXRhIGFzIEpvaW5EYXRhO1xuICAvLyAgICAgcmV0dXJuIGdhbWVzLmZpbmQoKGdhbWUpID0+IGdhbWUuZ2V0SWQoKSA9PT0gZGF0YS5nYW1lRGF0YS5pZCk7XG4gIC8vICAgfVxuXG4gIGNyZWF0ZShkYXRhOiB7IHBsYXllck5hbWU6IHN0cmluZzsgZ2FtZURhdGE6IEdhbWVEYXRhIH0pIHtcbiAgICAvLyBwcmVwYXJlIGdhbWUgb3duZXIgZGF0YVxuICAgIGNvbnN0IG93bmVyRGF0YTogUGxheWVyRGF0YSA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIG5hbWU6IGRhdGEucGxheWVyTmFtZSB8fCBcIk93bmVyXCIsXG4gICAgICBzb2NrZXRJZDogdGhpcy5zb2NrZXQuaWQsXG4gICAgfTtcbiAgICAvLyBkZWZpbmUgbmV3IGdhbWVEYXRhXG4gICAgY29uc3QgbmV3R2FtZURhdGE6IEdhbWVEYXRhID0geyAuLi5kYXRhLmdhbWVEYXRhLCBvd25lcjogb3duZXJEYXRhLmlkIH07XG5cbiAgICAvLyBjcmVhdGUgb3duZXIgYXMgYSBwbGF5ZXIgdG9vXG4gICAgY29uc3Qgb3duZXIgPSBuZXcgUGxheWVyQ29udHJvbGxlcihvd25lckRhdGEpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBnYW1lXG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcihuZXdHYW1lRGF0YSk7XG5cbiAgICAvLyBhZGQgdGhlIG93bmVyIHRvIHRoZSBnYW1lXG4gICAgbmV3R2FtZS5hZGRQbGF5ZXIob3duZXIpO1xuXG4gICAgLy8gYWRkIHRoZSBnYW1lIHRvIHRoZSBnYW1lIGxpc3RcbiAgICBnYW1lcy5wdXNoKG5ld0dhbWUpO1xuXG4gICAgLy8gcHJlcGFyZSB0aGUgZGF0YSB0byBzZW5kIHRvIHRoZSBjbGllbnRcbiAgICBjb25zdCBqb2luRGF0YTogSm9pbkRhdGEgPSB7XG4gICAgICBnYW1lRGF0YTogbmV3R2FtZS5nZXREYXRhKCksXG4gICAgICBwbGF5ZXJEYXRhOiBvd25lckRhdGEsXG4gICAgfTtcblxuICAgIC8vIGpvaW4gdGhlIGdhbWUgcm9vbVxuICAgIHByaW50TG9nKFwiaW5mb1wiLCBcIkNMSUVOVFwiLCBcIkpvaW5pbmcgZ2FtZSByb29tOiBcIiwgbmV3R2FtZS5nZXRJZCgpKTtcbiAgICB0aGlzLnNvY2tldC5qb2luKG5ld0dhbWUuZ2V0SWQoKSk7XG5cbiAgICAvLyBzZW5kIHRoZSBkYXRhIHRvIHRoZSBjbGllbnRcbiAgICB0aGlzLnNvY2tldC5lbWl0KFwiY3JlYXRlZFwiLCBqb2luRGF0YSk7XG4gICAgcHJpbnRMb2coXCJpbmZvXCIsIFwiQ0xJRU5UXCIsIFwiTmV3IGdhbWUgY3JlYXRlZDogXCIsIG5ld0dhbWUuZ2V0SWQoKSk7XG4gIH1cblxuICBqb2luKGRhdGE6IEpvaW5EYXRhKSB7XG4gICAgbGV0IG5ld1BsYXllcjogUGxheWVyQ29udHJvbGxlciA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKHtcbiAgICAgIGlkOiBkYXRhLnBsYXllckRhdGEuaWQgfHwgdXVpZHY0KCksXG4gICAgICBuYW1lOiBkYXRhLnBsYXllckRhdGEubmFtZSB8fCBnZW5lcmF0ZU5hbWUoMSksXG4gICAgICBzb2NrZXRJZDogdGhpcy5zb2NrZXQuaWQsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgYWxyZWFkeSBjcmVhdGVkXG4gICAgbGV0IGdhbWUgPSBnYW1lcy5maW5kKChnYW1lKSA9PiBnYW1lLmdldElkKCkgPT09IGRhdGEuZ2FtZURhdGEuaWQpO1xuXG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJDTElFTlRcIiwgXCJHYW1lIG5vdCBmb3VuZCBcIiwgZGF0YS5nYW1lRGF0YS5pZCk7XG4gICAgICAvLyB0ZWxsIHRoZSBjbGllbnQgdGhhdCB0aGUgZ2FtZSBpcyBub3QgZm91bmRcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJub3RGb3VuZFwiLCBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgaWYgY3VycmVudCBwbGF5ZXIgaXMgYWxyZWFkeSBpbiB0aGUgZ2FtZVxuICAgICAgY29uc3QgZXhpc3RpbmdQbGF5ZXIgPSBnYW1lLmdldFBsYXllckJ5SWQoZGF0YS5wbGF5ZXJEYXRhLmlkKTtcbiAgICAgIGlmICghZXhpc3RpbmdQbGF5ZXIpIHtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBwbGF5ZXIgaWYgdGhlIGdhbWUgaXMgbm90IGZ1bGxcbiAgICAgICAgaWYgKGdhbWUuZ2V0VG90YWxQbGF5ZXIoKSA8IDQpIHtcbiAgICAgICAgICAvLyBhZGQgdGhlIHBsYXllciB0byB0aGUgZ2FtZVxuICAgICAgICAgIGdhbWUuYWRkUGxheWVyKG5ld1BsYXllcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc2VuZCBlcnJvciBtZXNzYWdlIHRvIHRoZSBjbGllbnRcbiAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwiZXJyb3JcIiwge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJHYW1lIGlzIGZ1bGxcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBqb2luIHRoZSBnYW1lIHJvb21cbiAgICAgIHByaW50TG9nKFwiaW5mb1wiLCBcIkNMSUVOVFwiLCBcIkpvaW5pbmcgZ2FtZSByb29tOiBcIiwgZ2FtZS5nZXRJZCgpKTtcbiAgICAgIHRoaXMuc29ja2V0LmpvaW4oZ2FtZS5nZXRJZCgpKTtcblxuICAgICAgLy8gcHJlcGFyZSB0aGUgZGF0YSB0byBzZW5kIHRvIHRoZSBjbGllbnRcbiAgICAgIGNvbnN0IGpvaW5EYXRhOiBKb2luRGF0YSA9IHtcbiAgICAgICAgZ2FtZURhdGE6IGdhbWUuZ2V0RGF0YSgpLFxuICAgICAgICBwbGF5ZXJEYXRhOiBuZXdQbGF5ZXIuZ2V0RGF0YSgpLFxuICAgICAgfTtcbiAgICAgIC8vIHNlbmQgdGhlIGRhdGEgdG8gdGhlIGNsaWVudFxuICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImpvaW5lZFwiLCBqb2luRGF0YSk7XG5cbiAgICAgIC8vIHNlbmQgcGxheWVyIGxpc3QgdG8gdGhlIGdhbWUgcm9vbVxuICAgICAgLy8gZ2V0IGFsbCBwbGF5ZXIgaW4gdGhlIGdhbWVcbiAgICAgIGNvbnN0IHBsYXllcnMgPSBnYW1lLmdldFBsYXllcnMoKTtcbiAgICAgIC8vIG1hcCB0aGUgcGxheWVyIGRhdGEgdG8gc2VuZCB0byB0aGUgY2xpZW50XG4gICAgICBjb25zdCBwbGF5ZXJEYXRhID0gcGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmdldERhdGEoKSk7XG4gICAgICAvL3NlbmQgdGhlIGRhdGEgdG8gdGhlIGNsaWVudFxuICAgICAgdGhpcy5zZXJ2ZXIuaW4oZ2FtZS5nZXRJZCgpKS5lbWl0KFwicGxheWVyc1wiLCBwbGF5ZXJEYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBsZWF2ZSB0aGUgZ2FtZVxuICAgKiBAbWV0aG9kIGxlYXZlXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgbGVhdmUoZGF0YTogSm9pbkRhdGEpOiB2b2lkIHtcbiAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJDTElFTlRcIiwgXCJMZWF2aW5nIGdhbWU6IFwiLCBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAvLyBnZXQgZ2FtZSBkYXRhIGZyb20gc29ja2V0IGRhdGFcbiAgICBjb25zdCBnYW1lID0gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAvLyBpZiBnYW1lIGlzIGRlZmluZWQsIHByb2NlZWQgcmVtb3ZpbmcgdGhlIHBsYXllciBmcm9tIHRoZSBnYW1lXG4gICAgaWYgKGdhbWUpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IGdhbWUuZ2V0UGxheWVyQnlJZChkYXRhLnBsYXllckRhdGEuaWQpO1xuICAgICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiUExBWUVSXCIsIFwiTGVhdmluZyBnYW1lOiBcIiwgZGF0YS5wbGF5ZXJEYXRhLmlkKTtcblxuICAgICAgLy8gaWYgdGhlIHBsYXllciBpcyBmb3VuZCwgdGhlbiB3ZSBjYW4gcmVtb3ZlIHRoZSBwbGF5ZXIgZnJvbSB0aGUgZ2FtZVxuICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAvLyBicm9hZGNhc3QgdG8gb3RoZXIgcGxheWVycyB0aGF0IHRoZSBwbGF5ZXIgbGVmdFxuICAgICAgICB0aGlzLnNlcnZlci5pbihnYW1lLmdldElkKCkpLmVtaXQoXCJsZWZ0XCIsIHBsYXllci5nZXREYXRhKCkpO1xuICAgICAgICBnYW1lLnJlbW92ZVBsYXllcihwbGF5ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gXCJ+L3V0aWxzL2hlbHBlclwiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4vcGxheWVyXCI7XG4vKipcbiAqIFRoaXMgY29uc3RhbnQgaXMgdXNlZCB0byBzdG9yZSB0aGUgZ2FtZSBjcmVhdGVkIGJ5IHRoZSBjbGllbnRcbiAqIEBjb25zdGFudCB7R2FtZUNvbnRyb2xsZXJbXX1cbiAqIEBkZWZhdWx0IFtdXG4gKi9cbmV4cG9ydCBsZXQgZ2FtZXM6IEdhbWVDb250cm9sbGVyW10gPSBbXTtcbmV4cG9ydCB0eXBlIEdhbWVFdmVudCA9IFwia2lja1wiIHwgXCJraWNrZWRcIjtcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZURhdGEge1xuICBpZDogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBvd25lcjogc3RyaW5nO1xuICBwbGF5ZXJDb3VudD86IG51bWJlcjtcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIG1hbmFnZSB0aGUgZ2FtZVxuICogQGNsYXNzIEdhbWVDb250cm9sbGVyXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0IC0gVGhlIHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICogQHBhcmFtIHtHYW1lRGF0YX0gZGF0YSAtIFRoZSBnYW1lIGlkXG4gKiBAcGFyYW0ge1BsYXllckNvbnRyb2xsZXJbXX0gcGxheWVycyAtIFRoZSBwbGF5ZXIgbGlzdCBpbnNpZGUgdGhlIGdhbWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIGRhdGE6IEdhbWVEYXRhID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBsZXZlbDogMSxcbiAgICBvd25lcjogXCJcIixcbiAgICBwbGF5ZXJDb3VudDogMCxcbiAgfTtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBQbGF5ZXJDb250cm9sbGVyW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IHsgLi4uZGF0YSwgcGxheWVyQ291bnQ6IHRoaXMucGxheWVycy5sZW5ndGggfTtcbiAgfVxuICBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXJDb250cm9sbGVyKSB7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICBwcmludExvZyhcbiAgICAgIFwiaW5mb1wiLFxuICAgICAgXCJHQU1FXCIsXG4gICAgICBcIlBsYXllciBcIixcbiAgICAgIHBsYXllci5nZXRJZCgpLFxuICAgICAgXCIgYWRkZWQgdG8gZ2FtZTogXCIsXG4gICAgICB0aGlzLmRhdGEuaWRcbiAgICApO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJDb3VudCA9IHRoaXMucGxheWVycy5sZW5ndGg7XG4gICAgcmV0dXJuIHBsYXllcjtcbiAgfVxuICBzZXRJZChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhLmlkID0gaWQ7XG4gIH1cbiAgc2V0T3duZXIocGxheWVySWQ6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YS5vd25lciA9IHBsYXllcklkO1xuICB9XG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuaWQ7XG4gIH1cbiAgZ2V0UGxheWVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzO1xuICB9XG4gIGdldFRvdGFsUGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICB9XG4gIGdldFBsYXllckJ5SWQocGxheWVySWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghcGxheWVySWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5nZXRJZCgpID09PSBwbGF5ZXJJZCk7XG4gIH1cbiAgZ2V0UGxheWVyQnlTb2NrZXRJZChzb2NrZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5nZXRTb2NrZXRJZCgpID09PSBzb2NrZXRJZCk7XG4gIH1cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIHJlbW92ZVBsYXllcihwbGF5ZXI6IFBsYXllckNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBwbGF5ZXJJbmRleCA9IHRoaXMucGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgdGhpcy5wbGF5ZXJzLnNwbGljZShwbGF5ZXJJbmRleCwgMSk7XG4gICAgcHJpbnRMb2coXG4gICAgICBcImluZm9cIixcbiAgICAgIFwiR0FNRVwiLFxuICAgICAgXCJQbGF5ZXIgXCIsXG4gICAgICBwbGF5ZXIuZ2V0SWQoKSxcbiAgICAgIFwiIHJlbW92ZWQgZnJvbSBnYW1lOiBcIixcbiAgICAgIHRoaXMuZGF0YS5pZFxuICAgICk7XG4gICAgdGhpcy5kYXRhLnBsYXllckNvdW50ID0gdGhpcy5wbGF5ZXJzLmxlbmd0aDtcbiAgfVxufVxuIiwgImltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW9cIjtcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzb2NrZXRJZDogc3RyaW5nO1xufVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gbWFuYWdlIHBsYXllciBpbiB0aGUgZ2FtZVxuICogQGNsYXNzIFBsYXllckNvbnRyb2xsZXJcbiAqIEBwYXJhbSB7UGxheWVyRGF0YX0gZGF0YSAtIFRoZSBwbGF5ZXIgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBkYXRhOiBQbGF5ZXJEYXRhO1xuICBjb25zdHJ1Y3RvcihkYXRhOiBQbGF5ZXJEYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuICBnZXRTb2NrZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNvY2tldElkO1xuICB9XG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuaWQ7XG4gIH1cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIGxlYXZlKCkge1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIGlkOiBcIlwiLFxuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHNvY2tldElkOiBcIlwiLFxuICAgIH07XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFD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
