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
var assets_manifest_default = { "version": "98826a92", "entry": { "module": "/build/entry.client-I7OFIY3N.js", "imports": ["/build/_shared/chunk-DFATZYL6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QTDS3L5G.js", "imports": ["/build/_shared/chunk-CO2UIIVM.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$id": { "id": "routes/$id", "parentId": "root", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$id-2EBHLLMF.js", "imports": ["/build/_shared/chunk-MJK35GE7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DKZOQSPM.js", "imports": ["/build/_shared/chunk-MJK35GE7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-98826A92.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL3N0b3Jlcy9pbmRleC50cyIsICIuLi9hcHAvc3RvcmVzL2dhbWVTdGF0ZS50cyIsICIuLi9hcHAvdXRpbHMvaGVscGVyLnRzIiwgIi4uL2FwcC9zdG9yZXMvc29ja2V0U3RhdGUudHMiLCAiLi4vYXBwL3N0b3Jlcy9jb25maWcudHMiLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9idXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3J1YmJlclRleHQudHN4IiwgInJvdXRlOi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3JvdXRlcy8kaWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3BsYXllckF2YXRhci50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2Nvbm5lY3Rpb24udHMiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2NsaWVudC50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvZ2FtZS50cyIsICIuLi9hcHAvY29udHJvbGxlcnMvcGxheWVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCBDb25uZWN0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9hcHAvY29udHJvbGxlcnMvY29ubmVjdGlvblwiO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBjcmVhdGUgY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG4vL2NyZWF0ZSBzZXJ2ZXIgc29ja2V0IGlvIGFuZCBhdHRhY2ggdG8gY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCB7XG4gIGNvcnM6IHtcbiAgICBvcmlnaW46IFwiKlwiLFxuICB9LFxuICB0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIl0sXG4gIGFsbG93VXBncmFkZXM6IGZhbHNlLFxufSk7XG5cbi8vIGF0dGFjaCBzb2NrZXQgY29ubmVjdGlvbiBjb250cm9sbGVyXG5jb25zdCBzb2NrZXRDb25uID0gbmV3IENvbm5lY3Rpb25Db250cm9sbGVyKGlvKTtcbnNvY2tldENvbm4uc3RhcnQoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5zZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcGFwdXEvV29yay9tYWluLXJlbWl4L2FwcC9yb3V0ZXMvJGlkLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvJGlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBpbyBhcyBzb2NrZXRDbGllbnQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IGFuaW1hdGlvblN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL2FuaW1hdGlvbi5jc3NcIjtcbmltcG9ydCBhcHBTdHlsZXMgZnJvbSBcIn4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5pbXBvcnQgdGFpbHdpbmRTdHlsZXMgZnJvbSBcIn4vYXNzZXRzL3N0eWxlcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCBpbml0aWFsQXBwU3RhdGUgfSBmcm9tIFwiLi9zdG9yZXNcIjtcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwifi9zdG9yZXMvY29uZmlnXCI7XG5pbXBvcnQgeyBzb2NrZXRBY3Rpb25zIH0gZnJvbSBcIn4vc3RvcmVzL3NvY2tldFN0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgYXM6IFwiZm9udFwiLFxuICAgICAgaHJlZjogXCIvZm9udHMvVmlyZ2lsM1lPRkYud29mZjJcIixcbiAgICAgIHR5cGU6IFwiZm9udC93b2ZmMlwiLFxuICAgICAgY3Jvc3NPcmlnaW46IFwiYW5vbnltb3VzXCIsXG4gICAgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRhaWx3aW5kU3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGFuaW1hdGlvblN0eWxlcyB9LFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgdGl0bGU6IFwiTWFpbiBSZW1peFwiLFxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXG59KTtcblxuY29uc3QgcGVyc2lzdGVkU3RhdGU6IEFwcFN0YXRlID0ge1xuICAuLi5pbml0aWFsQXBwU3RhdGUsXG59O1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShwZXJzaXN0ZWRTdGF0ZSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBzb2NrZXRBY3Rpb25zLmluaXQoXG4gICAgICAgIHNvY2tldENsaWVudCh7XG4gICAgICAgICAgdHJhbnNwb3J0czogW1wid2Vic29ja2V0XCJdLFxuICAgICAgICAgIHVwZ3JhZGU6IGZhbHNlLFxuICAgICAgICB9KSxcbiAgICAgICAgKGRhdGEpID0+IHt9XG4gICAgICApXG4gICAgKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxodG1sXG4gICAgICBsYW5nPVwiZW5cIlxuICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHRleHQtc2xhdGUtMTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCJcbiAgICA+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcFdpdGhSZWR1eCgpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IEdhbWVSZWR1Y2VyLCBHYW1lU3RhdGUsIGluaXRpYWxHYW1lU3RhdGUgfSBmcm9tIFwiLi9nYW1lU3RhdGVcIjtcbmltcG9ydCB7IGluaXRpYWxTb2NrZXRTdGF0ZSwgU29ja2V0UmVkdWNlciwgU29ja2V0U3RhdGUgfSBmcm9tIFwiLi9zb2NrZXRTdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgc29ja2V0OiBTb2NrZXRTdGF0ZTtcbiAgZ2FtZTogR2FtZVN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbEFwcFN0YXRlID0ge1xuICBzb2NrZXQ6IGluaXRpYWxTb2NrZXRTdGF0ZSxcbiAgZ2FtZTogaW5pdGlhbEdhbWVTdGF0ZSxcbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcbiAgc29ja2V0OiBTb2NrZXRSZWR1Y2VyLFxuICBnYW1lOiBHYW1lUmVkdWNlcixcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xuICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBTdGF0ZSk6IHZvaWQ7XG59XG4iLCAiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgSm9pbkRhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9jbGllbnRcIjtcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYW1lIH0gZnJvbSBcIn4vdXRpbHMvaGVscGVyXCI7XG5pbXBvcnQgeyBUaHVua0FjdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzb2NrZXRBY3Rpb25zLCBTb2NrZXRBY3Rpb25zIH0gZnJvbSBcIi4vc29ja2V0U3RhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHYW1lU3RhdGUge1xuICBkYXRhOiBKb2luRGF0YSB8IG51bGw7XG4gIG5vdEZvdW5kOiBib29sZWFuO1xuICBwbGF5ZXJzOiBQbGF5ZXJEYXRhW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsR2FtZVN0YXRlOiBHYW1lU3RhdGUgPSB7XG4gIGRhdGE6IG51bGwsXG4gIG5vdEZvdW5kOiBmYWxzZSxcbiAgcGxheWVyczogW10sXG59O1xuXG5pbnRlcmZhY2UgR2FtZUFjdGlvblR5cGVzIHtcbiAgcmVhZG9ubHkgU0VUX0dBTUVfREFUQTogXCJTRVRfR0FNRV9EQVRBXCI7XG4gIHJlYWRvbmx5IFNFVF9HQU1FX05PVF9GT1VORDogXCJTRVRfR0FNRV9OT1RfRk9VTkRcIjtcbiAgcmVhZG9ubHkgU0VUX1BMQVlFUlM6IFwiU0VUX1BMQVlFUlNcIjtcbn1cblxuY29uc3QgR2FtZUFjdGlvbnNUeXBlczogR2FtZUFjdGlvblR5cGVzID0ge1xuICBTRVRfR0FNRV9EQVRBOiBcIlNFVF9HQU1FX0RBVEFcIixcbiAgU0VUX0dBTUVfTk9UX0ZPVU5EOiBcIlNFVF9HQU1FX05PVF9GT1VORFwiLFxuICBTRVRfUExBWUVSUzogXCJTRVRfUExBWUVSU1wiLFxufTtcblxuaW50ZXJmYWNlIFNldEdhbWVEYXRhIHtcbiAgdHlwZTogXCJTRVRfR0FNRV9EQVRBXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLmRhdGE7XG59XG5cbmludGVyZmFjZSBTZXRQbGF5ZXJzIHtcbiAgdHlwZTogXCJTRVRfUExBWUVSU1wiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5wbGF5ZXJzO1xufVxuaW50ZXJmYWNlIFNldEdhbWVOb3RGb3VuZCB7XG4gIHR5cGU6IFwiU0VUX0dBTUVfTk9UX0ZPVU5EXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLm5vdEZvdW5kO1xufVxuXG5leHBvcnQgdHlwZSBHYW1lQWN0aW9ucyA9IFNldEdhbWVEYXRhIHwgU2V0R2FtZU5vdEZvdW5kIHwgU2V0UGxheWVycztcblxuZXhwb3J0IGNvbnN0IGdhbWVBY3Rpb25zID0ge1xuICAvLyBnYW1lIGFjdGlvbiB0byBzZXQgcGxheWVycyBpbiB0aGUgZ2FtZVxuICBzZXRQbGF5ZXJzOiAoXG4gICAgcGxheWVyczogUGxheWVyRGF0YVtdXG4gICk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX1BMQVlFUlMsXG4gICAgICAgIHBheWxvYWQ6IHBsYXllcnMsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIGdhbWUgYWN0aW9uIHRvIGFkZCBwbGF5ZXIgdG8gY3VycmVudCBnYW1lIHBsYXllcnMgbGlzdFxuICBhZGRQbGF5ZXI6IChwbGF5ZXI6IFBsYXllckRhdGEpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgcGxheWVyIGFscmVhZHkgZXhpc3RcbiAgICAgIGNvbnN0IHBsYXllcnMgPSBnZXRTdGF0ZSgpLmdhbWUucGxheWVycztcbiAgICAgIGNvbnN0IHBsYXllckV4aXN0ID0gcGxheWVycy5maW5kKChwKSA9PiBwLmlkID09PSBwbGF5ZXIuaWQpO1xuICAgICAgaWYgKHBsYXllckV4aXN0KSByZXR1cm47XG5cbiAgICAgIC8vIGFkZCBwbGF5ZXIgdG8gdGhlIHBsYXllciBsaXN0XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX1BMQVlFUlMsXG4gICAgICAgIHBheWxvYWQ6IFsuLi5wbGF5ZXJzLCBwbGF5ZXJdLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcInBsYXllciBhZGRlZFwiLCBwbGF5ZXIpO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2FtZSBhY3Rpb24gdG8gcmVtb3ZlIHBsYXllciBmcm9tIGN1cnJlbnQgZ2FtZSBwbGF5ZXJzIGxpc3RcbiAgcmVtb3ZlUGxheWVyOiAoXG4gICAgcGxheWVySWQ6IHN0cmluZ1xuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucyB8IFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgcGxheWVyIGFscmVhZHkgZXhpc3RcbiAgICAgIGNvbnN0IHBsYXllcnMgPSBnZXRTdGF0ZSgpLmdhbWUucGxheWVycztcbiAgICAgIGNvbnN0IHBsYXllckV4aXN0ID0gcGxheWVycy5maW5kKChwKSA9PiBwLmlkID09PSBwbGF5ZXJJZCk7XG4gICAgICBpZiAoIXBsYXllckV4aXN0KSByZXR1cm47XG5cbiAgICAgIC8vIHJlbW92ZSBwbGF5ZXIgZnJvbSB0aGUgcGxheWVyIGxpc3RcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfUExBWUVSUyxcbiAgICAgICAgcGF5bG9hZDogcGxheWVycy5maWx0ZXIoKHApID0+IHAuaWQgIT09IHBsYXllcklkKSxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gcmVkdXggYWN0aW9uIHRvIHNldCBnYW1lIG5vdCBmb3VuZCBzdGF0ZVxuICBzZXRHYW1lTm90Rm91bmQ6IChcbiAgICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5ub3RGb3VuZFxuICApOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfTk9UX0ZPVU5ELFxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcblxuICAvLyByZWR1eCBhY3Rpb24gdG8gc2V0IGdhbWUgZGF0YVxuICBzZXRHYW1lRGF0YTogKGRhdGE6IEpvaW5EYXRhKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YS5nYW1lRGF0YS5pZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX0RBVEEsXG4gICAgICAgIHBheWxvYWQ6IGRhdGEsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBjcmVhdGUgdGhlIGdhbWVcbiAgY3JlYXRlOiAocGxheWVyTmFtZT86IHN0cmluZyk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgICAgY29uc3QgZ2FtZURhdGE6IEdhbWVEYXRhID0ge1xuICAgICAgICBpZDogZ2VuZXJhdGVOYW1lKCksXG4gICAgICAgIGxldmVsOiAxLFxuICAgICAgICBvd25lcjogXCJcIixcbiAgICAgIH07XG4gICAgICBzb2NrZXQuZW1pdChcImNyZWF0ZVwiLCB7IHBsYXllck5hbWUsIGdhbWVEYXRhIH0pO1xuXG4gICAgICAvLyB3aGVuIGdhbWUgY3JlYXRlZCwgc3RhcnQgbGlzdGVuaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgc29ja2V0QWN0aW9ucy5zdGFydExpbnN0ZW5pbmdHYW1lRXZlbnRzKCkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHJlZHV4IGFjdGlvbiB0byBqb2luIHRoZSBnYW1lXG4gIGpvaW46IChcbiAgICBnYW1lSWQ6IHN0cmluZyxcbiAgICBwbGF5ZXJOYW1lOiBzdHJpbmdcbiAgKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGlmICghc29ja2V0KSByZXR1cm47XG5cbiAgICAgIC8vIHdoZW4gam9pbmluZyBhIGdhbWUsIHN0YXJ0IGxpc3RlbmluZyBhbGwgZ2FtZSBldmVudHNcbiAgICAgIHNvY2tldEFjdGlvbnMuc3RhcnRMaW5zdGVuaW5nR2FtZUV2ZW50cygpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG5cbiAgICAgIGxldCBqb2luRGF0YSA9IGdldFN0YXRlKCkuZ2FtZS5kYXRhO1xuXG4gICAgICAvLyBsb2FkIGpvaW4gZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGNvbnN0IHBlcnNpc3RhbnRHYW1lRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdhbWVJZCk7XG5cbiAgICAgIC8vIGlmIGdhbWVEYXRhIGlzIG51bGwsIHRoZW4gdHJ5IHRvIHVzZSBwZXJzaXN0YW50R2FtZURhdGFcbiAgICAgIGlmICgham9pbkRhdGEpIHtcbiAgICAgICAgaWYgKHBlcnNpc3RhbnRHYW1lRGF0YSkge1xuICAgICAgICAgIGpvaW5EYXRhID0gSlNPTi5wYXJzZShwZXJzaXN0YW50R2FtZURhdGEpO1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgICAgIHBheWxvYWQ6IGpvaW5EYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgZ2FtZURhdGEgaWQgaXMgdGhlIHNhbWUgYXMgdGhlIGdhbWVJZFxuICAgICAgaWYgKGpvaW5EYXRhPy5nYW1lRGF0YS5pZCA9PT0gZ2FtZUlkKSB7XG4gICAgICAgIC8vanVzdCB1cGRhdGUgdGhlIHNvY2tldElkIGZvciB0aGlzIGdhbWVcbiAgICAgICAgam9pbkRhdGEucGxheWVyRGF0YS5zb2NrZXRJZCA9IHNvY2tldC5pZDtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0dBTUVfREFUQSxcbiAgICAgICAgICBwYXlsb2FkOiBqb2luRGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhlIGdhbWVJZCBpcyBkaWZmZXJlbnQsIHRoZW4gcHJlcGFyZSBuZXcgam9pbiBkYXRhXG4gICAgICBqb2luRGF0YSA9IHtcbiAgICAgICAgZ2FtZURhdGE6IHtcbiAgICAgICAgICBpZDogZ2FtZUlkLFxuICAgICAgICAgIGxldmVsOiAxLFxuICAgICAgICAgIG93bmVyOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICBwbGF5ZXJEYXRhOiB7XG4gICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICAgICAgICBzb2NrZXRJZDogc29ja2V0LmlkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIC8vIHNlbmQgdGhlIGpvaW4gcmVxdWVzdCB0byB0aGUgc2VydmVyXG4gICAgICBzb2NrZXQuZW1pdChcImpvaW5cIiwgam9pbkRhdGEpO1xuICAgIH07XG4gIH0sXG4gIGxlYXZlOiAoKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IGdldFN0YXRlKCkuc29ja2V0LmNsaWVudDtcbiAgICAgIGNvbnN0IGdhbWVEYXRhID0gZ2V0U3RhdGUoKS5nYW1lLmRhdGE7XG4gICAgICBpZiAoIXNvY2tldCB8fCAhZ2FtZURhdGEpIHJldHVybjtcbiAgICAgIHNvY2tldC5lbWl0KFwibGVhdmVcIiwgZ2FtZURhdGEpO1xuXG4gICAgICAvLyB3aGVuIGxlYXZpbmcgYSBnYW1lLCBzdG9wIGxpc3RlbmluZyBhbGwgZ2FtZSBldmVudHNcbiAgICAgIHNvY2tldEFjdGlvbnMuc3RvcExpc3RlbmluZ0dhbWVFdmVudHMoKShkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuXG4gICAgICAvLyByZW1vdmUgdGhlIGdhbWUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGdhbWVEYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAgIC8vIHJlbW92ZSBnYW1lIGRhdGEgZnJvbSByZWR1eCBzdG9yZVxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX0RBVEEsXG4gICAgICAgIHBheWxvYWQ6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgfTtcbiAgfSxcbiAgdG9nZ2xlTm90Rm91bmQ6ICgpOiBUaHVua0FjdGlvbjxHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBub3RGb3VuZCA9IGdldFN0YXRlKCkuZ2FtZS5ub3RGb3VuZDtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9OT1RfRk9VTkQsXG4gICAgICAgIHBheWxvYWQ6ICFub3RGb3VuZCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgR2FtZVJlZHVjZXI6IFJlZHVjZXI8R2FtZVN0YXRlLCBHYW1lQWN0aW9ucz4gPSAoXG4gIHN0YXRlOiBHYW1lU3RhdGUgfCB1bmRlZmluZWQsXG4gIGFjdGlvbjogR2FtZUFjdGlvbnNcbik6IEdhbWVTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGluaXRpYWxHYW1lU3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9HQU1FX0RBVEE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgR2FtZUFjdGlvbnNUeXBlcy5TRVRfR0FNRV9OT1RfRk9VTkQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm90Rm91bmQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIEdhbWVBY3Rpb25zVHlwZXMuU0VUX1BMQVlFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGxheWVyczogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiIsICJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZXhwb3J0IGVudW0gVGVybWluYWxDb2xvciB7XG4gIFJlc2V0ID0gXCJcXHgxYlswbVwiLFxuICBCcmlnaHQgPSBcIlxceDFiWzFtXCIsXG4gIERpbSA9IFwiXFx4MWJbMm1cIixcbiAgVW5kZXJzY29yZSA9IFwiXFx4MWJbNG1cIixcbiAgQmxpbmsgPSBcIlxceDFiWzVtXCIsXG4gIFJldmVyc2UgPSBcIlxceDFiWzdtXCIsXG4gIEhpZGRlbiA9IFwiXFx4MWJbOG1cIixcblxuICBGZ0JsYWNrID0gXCJcXHgxYlszMG1cIixcbiAgRmdSZWQgPSBcIlxceDFiWzMxbVwiLFxuICBGZ0dyZWVuID0gXCJcXHgxYlszMm1cIixcbiAgRmdZZWxsb3cgPSBcIlxceDFiWzMzbVwiLFxuICBGZ0JsdWUgPSBcIlxceDFiWzM0bVwiLFxuICBGZ01hZ2VudGEgPSBcIlxceDFiWzM1bVwiLFxuICBGZ0N5YW4gPSBcIlxceDFiWzM2bVwiLFxuICBGZ1doaXRlID0gXCJcXHgxYlszN21cIixcblxuICBCZ0JsYWNrID0gXCJcXHgxYls0MG1cIixcbiAgQmdSZWQgPSBcIlxceDFiWzQxbVwiLFxuICBCZ0dyZWVuID0gXCJcXHgxYls0Mm1cIixcbiAgQmdZZWxsb3cgPSBcIlxceDFiWzQzbVwiLFxuICBCZ0JsdWUgPSBcIlxceDFiWzQ0bVwiLFxuICBCZ01hZ2VudGEgPSBcIlxceDFiWzQ1bVwiLFxuICBCZ0N5YW4gPSBcIlxceDFiWzQ2bVwiLFxuICBCZ1doaXRlID0gXCJcXHgxYls0N21cIixcbn1cblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSAoKSA9PiBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpO1xuXG5leHBvcnQgY29uc3QgcHJpbnRMb2cgPSAoXG4gIHR5cGU6IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwiZGVmYXVsdFwiID0gXCJkZWZhdWx0XCIsXG4gIGxhYmVsOiBzdHJpbmcgPSBcIlwiLFxuICAuLi5tZXNzYWdlOiBhbnlbXVxuKSA9PiB7XG4gIC8vIHNldCBkZWZhdWx0IGZvcmdyb3VuZCBjb2xvciB0byBGZ1doaXRlXG4gIGxldCBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdXaGl0ZTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcImluZm9cIjpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ0JsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwid2FybmluZ1wiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnWWVsbG93O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ0dyZWVuO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImVycm9yXCI6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdSZWQ7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnV2hpdGU7XG4gIH1cbiAgY29uc29sZS5sb2coXG4gICAgYFske1Rlcm1pbmFsQ29sb3IuRmdNYWdlbnRhfSR7Y3VycmVudFRpbWVzdGFtcCgpICsgVGVybWluYWxDb2xvci5SZXNldH1dWyR7XG4gICAgICBUZXJtaW5hbENvbG9yLkZnQ3lhblxuICAgIH0ke2xhYmVsfSR7VGVybWluYWxDb2xvci5SZXNldH1dYCxcbiAgICBgJHtjb2xvcn0ke21lc3NhZ2Uuam9pbihcIlwiKX0ke1Rlcm1pbmFsQ29sb3IuUmVzZXR9YFxuICApO1xufTtcblxuLypcbihjKSBieSBUaG9tYXMgS29uaW5nc1xuUmFuZG9tIE5hbWUgR2VuZXJhdG9yIGZvciBKYXZhc2NyaXB0XG4qL1xuXG5mdW5jdGlvbiBjYXBGaXJzdCh0ZXh0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHRleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5hbWUod29yZExlbjogbnVtYmVyID0gMikge1xuICBjb25zdCBvdXRwdXQ6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGNvbnNvbmFudHMgPSBcImJjZGZnaGprbG1ucHFyc3R2d3h5elwiO1xuICBjb25zdCB2b3dlbHMgPSBcImFlaW91XCI7XG4gIGZvciAobGV0IHcgPSAwOyB3IDwgd29yZExlbjsgdysrKSB7XG4gICAgY29uc3Qgd29yZENoYXJMZW4gPSBnZXRSYW5kb21JbnQoMywgMTApO1xuICAgIGNvbnN0IG5hbWUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRDaGFyTGVuOyBpKyspIHtcbiAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICBuYW1lLnB1c2goY29uc29uYW50cy5jaGFyQXQoZ2V0UmFuZG9tSW50KDAsIGNvbnNvbmFudHMubGVuZ3RoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZS5wdXNoKHZvd2Vscy5jaGFyQXQoZ2V0UmFuZG9tSW50KDAsIHZvd2Vscy5sZW5ndGgpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIG91dHB1dC5wdXNoKGNhcEZpcnN0KG5hbWUuam9pbihcIlwiKSkpO1xuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbihcIlwiKTtcbn1cbiIsICJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IHsgQ2xpZW50RXZlbnQsIEpvaW5EYXRhIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NsaWVudFwiO1xuaW1wb3J0IHsgZ2FtZUFjdGlvbnMsIEdhbWVBY3Rpb25zIH0gZnJvbSBcIi4vZ2FtZVN0YXRlXCI7XG5pbXBvcnQgeyBUaHVua0FjdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ja2V0U3RhdGUge1xuICBjbGllbnQ6IFNvY2tldCB8IG51bGw7XG4gIGNvbm5lY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTb2NrZXRTdGF0ZTogU29ja2V0U3RhdGUgPSB7XG4gIGNsaWVudDogbnVsbCxcbiAgY29ubmVjdGVkOiBmYWxzZSxcbn07XG5cbmludGVyZmFjZSBTb2NrZXRBY3Rpb25UeXBlcyB7XG4gIHJlYWRvbmx5IFNFVF9TT0NLRVQ6IFwiU0VUX1NPQ0tFVFwiO1xuICByZWFkb25seSBTRVRfQ09OTkVDVEVEOiBcIlNFVF9DT05ORUNURURcIjtcbn1cblxuY29uc3QgU29ja2V0QWN0aW9uc1R5cGVzOiBTb2NrZXRBY3Rpb25UeXBlcyA9IHtcbiAgU0VUX1NPQ0tFVDogXCJTRVRfU09DS0VUXCIsXG4gIFNFVF9DT05ORUNURUQ6IFwiU0VUX0NPTk5FQ1RFRFwiLFxufTtcblxuaW50ZXJmYWNlIFNldFNvY2tldCB7XG4gIHR5cGU6IFwiU0VUX1NPQ0tFVFwiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbFNvY2tldFN0YXRlLmNsaWVudDtcbn1cbmludGVyZmFjZSBTZXRDb25uZWN0ZWQge1xuICB0eXBlOiBcIlNFVF9DT05ORUNURURcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxTb2NrZXRTdGF0ZS5jb25uZWN0ZWQ7XG59XG5cbmV4cG9ydCB0eXBlIFNvY2tldEFjdGlvbnMgPSBTZXRTb2NrZXQgfCBTZXRDb25uZWN0ZWQ7XG5cbmV4cG9ydCBjb25zdCBzb2NrZXRBY3Rpb25zID0ge1xuICAvLyBzb2NrZXQgYWN0aW9uIHRvIHNldCB0aGUgY29ubmVjdGVkIHNvY2tldCBjbGllbnRcbiAgaW5pdDogKFxuICAgIHNvY2tldDogdHlwZW9mIGluaXRpYWxTb2NrZXRTdGF0ZS5jbGllbnQsXG4gICAgb25EYXRhOiAoZGF0YTogYW55KSA9PiB2b2lkXG4gICk6IFRodW5rQWN0aW9uPFNvY2tldEFjdGlvbnMgfCBHYW1lQWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuXG4gICAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfQ09OTkVDVEVELFxuICAgICAgICAgIHBheWxvYWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU29ja2V0QWN0aW9uc1R5cGVzLlNFVF9TT0NLRVQsXG4gICAgICAgIHBheWxvYWQ6IHNvY2tldCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gc29ja2V0IGFjdGlvbiB0byBzdGFydCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gIHN0YXJ0TGluc3RlbmluZ0dhbWVFdmVudHM6ICgpOiBUaHVua0FjdGlvbjxTb2NrZXRBY3Rpb25zIHwgR2FtZUFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc29ja2V0ID0gZ2V0U3RhdGUoKS5zb2NrZXQuY2xpZW50O1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcbiAgICAgIC8vIGxpc3RlbiByZXNwb25zZSBmcm9tIHNlcnZlciB3aGVuIGdhbWUgY3JlYXRlZFxuICAgICAgc29ja2V0Lm9uKFwiY3JlYXRlZFwiLCAocGF5bG9hZDogSm9pbkRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIGNyZWF0ZWRcIiwgcGF5bG9hZCk7XG4gICAgICAgIC8vIGRpc3BhdGNoIGdhbWUgYWN0aW9uIHRvIHNldCB0aGUgZ2FtZSBkYXRhXG4gICAgICAgIGdhbWVBY3Rpb25zLnNldEdhbWVEYXRhKHBheWxvYWQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICAgIC8vIGFkZCBwbGF5ZXIgdG8gdGhlIGdhbWVcbiAgICAgICAgZ2FtZUFjdGlvbnMuYWRkUGxheWVyKHBheWxvYWQucGxheWVyRGF0YSkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gdG8gbmV3IHBsYXllciBqb2luZWQgZXZlbnRcbiAgICAgIHNvY2tldC5vbihcInBsYXllcnNcIiwgKHBheWxvYWQ6IFBsYXllckRhdGFbXSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBwbGF5ZXIgbGlzdFwiLCBwYXlsb2FkKTtcbiAgICAgICAgLy8gYWRkIHBsYXllciB0byB0aGUgZ2FtZVxuICAgICAgICBnYW1lQWN0aW9ucy5zZXRQbGF5ZXJzKHBheWxvYWQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gbGlzdGVuIGlmIHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICAgICAgc29ja2V0Lm9uKFwibm90Rm91bmRcIiwgKHBheWxvYWQpID0+IHtcbiAgICAgICAgZ2FtZUFjdGlvbnMuc2V0R2FtZU5vdEZvdW5kKHRydWUpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gbGlzdGVuIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIHNvY2tldC5vbihcImpvaW5lZFwiLCAocGF5bG9hZDogSm9pbkRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJqb2luZWRcIiwgcGF5bG9hZCk7XG4gICAgICAgIC8vIGRpc3BhdGNoIGdhbWUgYWN0aW9uIHRvIHNldCB0aGUgZ2FtZSBkYXRhXG4gICAgICAgIGdhbWVBY3Rpb25zLnNldEdhbWVEYXRhKHBheWxvYWQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG5cbiAgICAgICAgLy8gYWRkIHBsYXllciB0byB0aGUgZ2FtZSBwbGF5ZXJzIGxpc3RcbiAgICAgICAgZ2FtZUFjdGlvbnMuYWRkUGxheWVyKHBheWxvYWQucGxheWVyRGF0YSkoZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsaXN0ZW4gZm9yIHRoZSBwbGF5ZXIgbGVmdCB0aGUgZ2FtZSBldmVudFxuICAgICAgc29ja2V0Lm9uKFwibGVmdFwiLCAocGF5bG9hZDogUGxheWVyRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkLm5hbWUsIFwiaGFzIGxlZnQgdGhlIGdhbWVcIik7XG4gICAgICAgIC8vIHJlbW92ZSBwbGF5ZXIgZnJvbSB0aGUgcGxheWVyIGxpc3RcbiAgICAgICAgZ2FtZUFjdGlvbnMucmVtb3ZlUGxheWVyKHBheWxvYWQuaWQpKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNvY2tldCBhY3Rpb24gdG8gc3RvcCBsaXN0ZW5pbmcgYWxsIGdhbWUgZXZlbnRzXG4gIHN0b3BMaXN0ZW5pbmdHYW1lRXZlbnRzOiAoKTogVGh1bmtBY3Rpb248U29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBnZXRTdGF0ZSgpLnNvY2tldC5jbGllbnQ7XG4gICAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgd2hlbiBnYW1lIGNyZWF0ZWRcbiAgICAgIHNvY2tldC5vZmYoXCJjcmVhdGVkXCIpO1xuXG4gICAgICAvLyBzdG9wIGxpc3RlbmluZyB0byBuZXcgcGxheWVyIGpvaW5lZCBldmVudFxuICAgICAgc29ja2V0Lm9mZihcIm5ld1BsYXllclwiKTtcblxuICAgICAgLy8gc3RvcCBsaXN0ZW5pbmcgaWYgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gICAgICBzb2NrZXQub2ZmKFwibm90Rm91bmRcIik7XG5cbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIHNvY2tldC5vZmYoXCJqb2luZWRcIik7XG5cbiAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIGZvciBhIHBsYXllciBsZWZ0IHRoZSBnYW1lIGV2ZW50XG4gICAgICBzb2NrZXQub2ZmKFwibGVmdFwiKTtcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFNvY2tldFJlZHVjZXI6IFJlZHVjZXI8U29ja2V0U3RhdGUsIFNvY2tldEFjdGlvbnM+ID0gKFxuICBzdGF0ZTogU29ja2V0U3RhdGUgfCB1bmRlZmluZWQsXG4gIGFjdGlvbjogU29ja2V0QWN0aW9uc1xuKTogU29ja2V0U3RhdGUgPT4ge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBpbml0aWFsU29ja2V0U3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTb2NrZXRBY3Rpb25zVHlwZXMuU0VUX1NPQ0tFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfQ09OTkVDVEVEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbm5lY3RlZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgcmVkdWNlcnMgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlOiBhbnkpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vIEkgcmVxdWlyZSB0aGlzIG9ubHkgaW4gZGV2IGVudmlyb25tZW50XG4gICAgLy8gY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpO1xuICAgIC8vIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XG4gIH1cbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xuICBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgLi4ucmVkdWNlcnMsXG4gIH0pO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBiaW5kTWlkZGxld2FyZShtaWRkbGV3YXJlKVxuICApO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IHBsYXlpbmdDYXJkQmFja2dyb3VuZCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5aW5nLWNhcmRzLnBuZ1wiO1xuaW1wb3J0IFJ1YmJlclRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcnViYmVyVGV4dFwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVzXCI7XG5pbXBvcnQgeyBnYW1lQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZXMvZ2FtZVN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbam9pbklkLCBzZXRKb2luSWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwbGF5ZXJOYW1lLCBzZXRQbGF5ZXJOYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5kYXRhKTtcbiAgY29uc3Qgbm90Rm91bmQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLm5vdEZvdW5kKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBqb2luSWRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHBsYXllck5hbWVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGhhbmRsZVJvb21JbnB1dCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgc2V0Sm9pbklkKHZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTmFtZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICBzZXRQbGF5ZXJOYW1lKHZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlSm9pbiA9ICgpID0+IHtcbiAgICAvLyBpZiBwbGF5ZXIgbmFtZSBpcyBlbXB0eSwgc2V0IGZvY3VzIHRoZSBpbnB1dFxuICAgIGlmICghcGxheWVyTmFtZSkge1xuICAgICAgcGxheWVyTmFtZVJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBqb2luIGlkIGlzIGVtcHR5LCBzZXQgZm9jdXMgdGhlIGlucHV0XG4gICAgaWYgKCFqb2luSWQpIHtcbiAgICAgIGpvaW5JZFJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG90aGVyIHRoYW4gdGhhdCwgam9pbiB0aGUgcm9vbVxuICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLmpvaW4oam9pbklkLCBwbGF5ZXJOYW1lKSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUdhbWUgPSAoKSA9PiB7XG4gICAgLy8gaWYgcGxheWVyIG5hbWUgaXMgZW1wdHksIHNldCBmb2N1cyB0aGUgaW5wdXRcbiAgICBpZiAoIXBsYXllck5hbWUpIHtcbiAgICAgIHBsYXllck5hbWVSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuY3JlYXRlKHBsYXllck5hbWUpKTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIG5hdihkYXRhLmdhbWVEYXRhLmlkKTtcbiAgfSwgW2RhdGFdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChub3RGb3VuZCkge1xuICAgICAgYWxlcnQoXCJHYW1lIG5vdCBmb3VuZFwiKTtcbiAgICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLnRvZ2dsZU5vdEZvdW5kKCkpO1xuICAgIH1cbiAgfSwgW25vdEZvdW5kXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1zY3JlZW4gaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17cGxheWluZ0NhcmRCYWNrZ3JvdW5kfVxuICAgICAgICBhbHQ9XCJiZ1wiXG4gICAgICAgIHdpZHRoPXs1MTJ9XG4gICAgICAgIGNsYXNzTmFtZT1cIi16LTEwIGFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgb3BhY2l0eS0yMCBib3VuY2VJblVwXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICA8UnViYmVyVGV4dCB0ZXh0PVwiSGVsbG9cIiByb290Q2xhc3M9XCJtci04XCIgLz5cbiAgICAgICAgICA8UnViYmVyVGV4dCB0ZXh0PVwidGhlcmUhXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxSdWJiZXJUZXh0XG4gICAgICAgICAgICB0ZXh0PVwiTGV0J3NcIlxuICAgICAgICAgICAgYm91bmNlSW49XCJyaWdodFwiXG4gICAgICAgICAgICByb290Q2xhc3M9XCJtci04XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtdmlyZ2lsIHhsOnRleHQtOHhsIGxnOm1kOnRleHQtNnhsIHRleHQtNHhsIGhvdmVyOmFuaW1hdGUtcnViYmVyIGhvdmVyOnRleHQtc2xhdGUtMTAwIHRleHQtbGltZS00MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJ1YmJlclRleHRcbiAgICAgICAgICAgIHRleHQ9XCJQTEFZIVwiXG4gICAgICAgICAgICBib3VuY2VJbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXhvIHhsOnRleHQtOHhsIGxnOm1kOnRleHQtNnhsIHRleHQtNHhsIGhvdmVyOmFuaW1hdGUtcnViYmVyIHB4LTIgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1saW1lLTQwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgbXQtOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYm9yZGVyIGJvcmRlci1saW1lLTUwMCBpdGVtcy1jZW50ZXIgc206dy1mdWxsXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtwbGF5ZXJOYW1lUmVmfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezIwfVxuICAgICAgICAgICAgICB2YWx1ZT17cGxheWVyTmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMDAgZmxleCBmbGV4LWdyb3cgYmctdHJhbnNwYXJlbnQgcHktNCAgb3V0bGluZS1ub25lIHB4LTQgdGV4dC1saW1lLTUwMCAgeGw6dGV4dC14bCBsZzp0ZXh0LWxnIG1kOnRleHQtbWQgdGV4dC1zbSBmb250LWJvbGQgZm9udC1leG9cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmFtZUlucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGltZS01MDAgZm9udC12aXJnaWwgcHktNCB4bDp0ZXh0LXhsIGxnOnRleHQtbGcgbWQ6dGV4dC1tZCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIGFuZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlZj17am9pbklkUmVmfVxuICAgICAgICAgICAgICB2YWx1ZT17am9pbklkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMCBmbGV4IGZsZXgtZ3JvdyBiZy10cmFuc3BhcmVudCBweS00IG91dGxpbmUtbm9uZSBweC00IHRleHQtbGltZS01MDAgIHhsOnRleHQteGwgbGc6dGV4dC1sZyBtZDp0ZXh0LW1kIHRleHQtc20gZm9udC1ib2xkIGZvbnQtZXhvXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgZ2FtZSBJRCBoZXJlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJvb21JbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUpvaW59PlBsYXk8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm1yLTAgeHM6bXItMCB4bDptci00IGxnOm1yLTQgbWQ6bXItNCBzbTp3LWZ1bGwgeHM6dy1mdWxsIHRleHQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlR2FtZX0+Q3JlYXRlIHlvdXIgb3duIGdhbWU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvbkNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufTtcbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DbGljaywgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBcImJnLWxpbWUtNTAwIGZvbnQtZXhvIGhvdmVyOmJnLWxpbWUtNzAwIGhvdmVyOnRleHQtc2xhdGUtMTAwIHRleHQtc2xhdGUtOTAwIGZvbnQtYm9sZCBweS00IHB4LThcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8cD57Y2hpbGRyZW59PC9wPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwgImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGJvdW5jZUluPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInVwXCIgfCBcImRvd25cIjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICByb290Q2xhc3M/OiBzdHJpbmc7XG59O1xuY29uc3QgUnViYmVyVGV4dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgdGV4dCA9IFwiXCIsXG4gIGJvdW5jZUluLFxuICByb290Q2xhc3MgPSBcIlwiLFxuICBjbGFzc05hbWUgPSBcImZvbnQtdmlyZ2lsIHhsOnRleHQtOHhsIGxnOm1kOnRleHQtNnhsIHRleHQtNHhsIGhvdmVyOmFuaW1hdGUtcnViYmVyIGhvdmVyOnRleHQtbGltZS00MDAgY3Vyc29yLXBvaW50ZXJcIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXCJmbGV4IGZsZXgtcm93XCIsIHJvb3RDbGFzcywge1xuICAgICAgICBib3VuY2VJbkxlZnQ6IGJvdW5jZUluID09PSBcImxlZnRcIiB8fCAhYm91bmNlSW4sXG4gICAgICAgIGJvdW5jZUluUmlnaHQ6IGJvdW5jZUluID09PSBcInJpZ2h0XCIsXG4gICAgICAgIGJvdW5jZUluVXA6IGJvdW5jZUluID09PSBcInVwXCIsXG4gICAgICAgIGJvdW5jZUluRG93bjogYm91bmNlSW4gPT09IFwiZG93blwiLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3RleHQuc3BsaXQoXCJcIikubWFwKChjLCBpKSA9PiAoXG4gICAgICAgIDxoMSBrZXk9e2l9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7Y31cbiAgICAgICAgPC9oMT5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUnViYmVyVGV4dDtcbiIsICJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IFBsYXllckF2YXRhciBmcm9tIFwifi9jb21wb25lbnRzL3BsYXllckF2YXRhclwiO1xuaW1wb3J0IHsgSm9pbkRhdGEgfSBmcm9tIFwifi9jb250cm9sbGVycy9jbGllbnRcIjtcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSBcIn4vY29udHJvbGxlcnMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL3BsYXllclwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwifi9zdG9yZXNcIjtcbmltcG9ydCB7IGdhbWVBY3Rpb25zIH0gZnJvbSBcIn4vc3RvcmVzL2dhbWVTdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIHJldHVybiBqc29uKHsgLi4ucGFyYW1zIH0pO1xufTtcblxuY29uc3QgR2FtZVNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3Qgbm90aWZSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxHYW1lRGF0YT4oKTtcbiAgY29uc3QgW2xlYXZpbmdQbGF5ZXIsIHNldExlYXZpbmdQbGF5ZXJdID0gUmVhY3QudXNlU3RhdGU8UGxheWVyRGF0YSB8IG51bGw+KFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3Qgc29ja2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuc29ja2V0LmNsaWVudCk7XG4gIGNvbnN0IG5vdEZvdW5kID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5ub3RGb3VuZCk7XG4gIGNvbnN0IGRhdGFTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUuZGF0YSk7XG4gIGNvbnN0IHBsYXllcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5nYW1lLnBsYXllcnMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy8gdXNlIGVmZmVjdCB0byBkZXRlY3QgaWYgdGhlIGdhbWUgaXMgbm90IGZvdW5kXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5vdEZvdW5kKSB7XG4gICAgICBhbGVydChcIkdhbWUgbm90IGZvdW5kXCIpO1xuICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMudG9nZ2xlTm90Rm91bmQoKSk7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IFwiL1wiO1xuICAgIH1cbiAgfSwgW25vdEZvdW5kXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmlkICYmIHNvY2tldCkge1xuICAgICAgbGV0IHBsYXllck5hbWUgPSBcIkFub255bW91c1wiO1xuICAgICAgLy8gZ2V0IGxvY2FsIHN0b3JhZ2UgZGF0YVxuICAgICAgY29uc3QgbG9jYWxEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YS5pZCk7XG4gICAgICBpZiAobG9jYWxEYXRhKSB7XG4gICAgICAgIC8vIGlmIGxvY2FsIGRhdGEgaXMgZm91bmQsIGdldCBwbGF5ZXIgbmFtZSB0aGVyZVxuICAgICAgICBjb25zdCBsb2NhbERhdGFPYmo6IEpvaW5EYXRhID0gSlNPTi5wYXJzZShsb2NhbERhdGEpIGFzIEpvaW5EYXRhO1xuICAgICAgICBwbGF5ZXJOYW1lID0gbG9jYWxEYXRhT2JqLnBsYXllckRhdGEubmFtZSB8fCBcIkFub255bW91c1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3UGxheWVyTmFtZSA9IHByb21wdChcIkVudGVyIHlvdXIgbmFtZVwiLCBcIkFub255bW91c1wiKTtcbiAgICAgICAgaWYgKG5ld1BsYXllck5hbWUpIHtcbiAgICAgICAgICBwbGF5ZXJOYW1lID0gbmV3UGxheWVyTmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuam9pbihkYXRhLmlkLCBwbGF5ZXJOYW1lKSk7XG4gICAgfVxuICB9LCBbZGF0YSwgZGlzcGF0Y2gsIHNvY2tldF0pO1xuXG4gIC8vIHRyaWdnZXIgbm90aWZpY2F0aW9uIHVzaW5nIGVmZmVjdCB3aGVuIHBsYXllciBpcyBsZWF2aW5nXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxlYXZpbmdQbGF5ZXIpIHtcbiAgICAgIG5vdGlmUmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5vdGlmUmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9LCBbbGVhdmluZ1BsYXllcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gZml4ZWQgdG9wLTAgcmlnaHQtMCBtLTQgdGV4dC1zbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXhvIG1yLTJcIj5QbGF5ZXIgTmFtZTo8L2gxPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJcIj57ZGF0YVN0YXRlPy5wbGF5ZXJEYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leG8gbXItMlwiPkdhbWUgSUQ6PC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+e2RhdGFTdGF0ZT8uZ2FtZURhdGEuaWR9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leG8gbXItMlwiPlBsYXllciBJRDo8L2gxPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJcIj57ZGF0YVN0YXRlPy5wbGF5ZXJEYXRhLmlkfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXhvIG1yLTJcIj5QbGF5ZXIgQ291bnQ6PC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+e3BsYXllcnMubGVuZ3RofTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXhvIG1yLTJcIj5pcyBvd25lcjwvaDE+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAge2RhdGFTdGF0ZSAmJiBkYXRhU3RhdGUuZ2FtZURhdGEub3duZXIgPT09IGRhdGFTdGF0ZS5wbGF5ZXJEYXRhLmlkXG4gICAgICAgICAgICAgID8gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgOiBcImZhbHNlXCJ9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZ2FtZUFjdGlvbnMubGVhdmUoKSl9XG4gICAgICAgID5cbiAgICAgICAgICBMZWF2ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17bm90aWZSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgXCJmaXhlZCBib3R0b20tMCBoaWRkZW4gcmlnaHQtMCBtci00IG1iLTQgYmcteWVsbG93LTIwMCByb3VuZGVkLXhsXCJcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPHA+UGxheWVyIHtsZWF2aW5nUGxheWVyICYmIGxlYXZpbmdQbGF5ZXIuaWR9IGhhcyBsZWF2aW5nIHRoZSBnYW1lPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1leG8gbWItOFwiPlxuICAgICAgICBXYWl0aW5nIGFub3RoZXIgcGxheWVyLi4uXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7cGxheWVycy5tYXAoKHBsYXllcikgPT4gKFxuICAgICAgICAgIDxQbGF5ZXJBdmF0YXJcbiAgICAgICAgICAgIG1lPXtwbGF5ZXIuaWQgPT09IGRhdGFTdGF0ZT8uZ2FtZURhdGEub3duZXJ9XG4gICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cbiAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICB7WzEsIDIsIDMsIDRdLnNsaWNlKDAsIC1wbGF5ZXJzLmxlbmd0aCkubWFwKChpKSA9PiAoXG4gICAgICAgICAgPFBsYXllckF2YXRhciBrZXk9e2l9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IGl0ZW1zLWNlbnRlciBtdC04XCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS01MDAgZm9udC1leG8gaG92ZXI6Ymctc2xhdGUtNzAwIGhvdmVyOnRleHQtc2xhdGUtMTAwIHRleHQtc2xhdGUtOTAwIGZvbnQtYm9sZCBweS00IHB4LThcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGdhbWVBY3Rpb25zLmxlYXZlKCkpfVxuICAgICAgICA+XG4gICAgICAgICAgQWJvcnQhXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGdhbWVBY3Rpb25zLnN0YXJ0KCkpfT5cbiAgICAgICAgICBMYXVuY2ggdGhlIGdhbWUhXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU2NyZWVuO1xuIiwgImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lPzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbn07XG5jb25zdCBQbGF5ZXJBdmF0YXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG5hbWUgPSBcIlwiLCBtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVsxMjhweF0gaC1bMTI4cHhdIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImFic29sdXRlIHotMCB3LVsxMjhweF0gaC1bMTI4cHhdIHJvdW5kZWQtZnVsbFwiLCB7XG4gICAgICAgICAgXCJob3ZlcjphbmltYXRlLXJ1YmJlciBib3JkZXItOCBib3JkZXItc2t5LTQwMCBiZy1za3ktNTAwXCI6IG5hbWUgJiYgbWUsXG4gICAgICAgICAgXCJob3ZlcjphbmltYXRlLXJ1YmJlciBib3JkZXItOCBib3JkZXItY3lhbi00MDAgYmctY3lhbi01MDBcIjpcbiAgICAgICAgICAgIG5hbWUgJiYgIW1lLFxuICAgICAgICAgIFwiYm9yZGVyLTggYm9yZGVyLWRhc2hlZCBhbmltYXRlLXNwaW4tc2xvd1wiOiAhbmFtZSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJmb250LXZpcmdpbCB6LTEwIG93IHRleHQteGwgcHgtNFwiLCB7XG4gICAgICAgICAgXCJ0ZXh0LXNsYXRlLTEwMFwiOiAhbmFtZSxcbiAgICAgICAgICBcInRleHQtc2xhdGUtOTAwXCI6IG5hbWUsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7bmFtZSB8fCBcIndhaXRpbmcgcGxheWVyXCJ9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckF2YXRhcjtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic5ODgyNmE5MicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSTdPRklZM04uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURGQVRaWUw2LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1RVERTM0w1Ry5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ08yVUlJVk0uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzLyRpZCc6eydpZCc6J3JvdXRlcy8kaWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonOmlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzLyRpZC0yRUJITExNRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTUpLMzVHRTcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtREtaT1FTUE0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1KSzM1R0U3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOTg4MjZBOTIuanMnfTsiLCAiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IENsaWVudENvbnRyb2xsZXIgZnJvbSBcIi4vY2xpZW50XCI7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNsaWVudHM6IENsaWVudENvbnRyb2xsZXJbXSA9IFtdO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBtYW5hZ2UgdGhlIHNvY2tldCBjb25uZWN0aW9uIGJldHdlZW4gdGhlIHNlcnZlciBhbmQgdGhlIGNsaWVudFxuICogQGNsYXNzIENvbm5lY3Rpb25Db250cm9sbGVyXG4gKiBAcGFyYW0ge1NlcnZlcn0gaW8gLSBUaGUgc29ja2V0IGlvIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc2VydmVyIGFuZCB0aGUgY2xpZW50XG4gKlxuICovXG5jbGFzcyBDb25uZWN0aW9uQ29udHJvbGxlciB7XG4gIGlvOiBTZXJ2ZXI7XG4gIGNvbnN0cnVjdG9yKGlvOiBTZXJ2ZXIpIHtcbiAgICB0aGlzLmlvID0gaW87XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzdGFydCBsaXN0ZW5pbmcgdG8gdGhlIHNvY2tldCBjb25uZWN0aW9uXG4gICAqIEBtZXRob2Qgc3RhcnRcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBzdGFydCgpIHtcbiAgICB0aGlzLmlvLm9uKFwiY29ubmVjdGlvblwiLCAoc29ja2V0KSA9PiB7XG4gICAgICBwcmludExvZyhcImRlZmF1bHRcIiwgXCJTT0NLRVRcIiwgXCJjb25uZWN0ZWQ6IFwiLCBzb2NrZXQuaWQpO1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudENvbnRyb2xsZXIoc29ja2V0LCB0aGlzLmlvKTtcbiAgICAgIGNsaWVudHMucHVzaChjbGllbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3Rpb25Db250cm9sbGVyO1xuIiwgImltcG9ydCB7IFNlcnZlciwgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYW1lLCBwcmludExvZyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB7IGNsaWVudHMgfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIsIHsgR2FtZURhdGEsIGdhbWVzIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIsIHsgUGxheWVyRGF0YSB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IHR5cGUgQ2xpZW50RXZlbnQgPSBcImpvaW5cIiB8IFwiam9pbmVkXCIgfCBcImxlYXZlXCIgfCBcImxlZnRcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSm9pbkRhdGEge1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIHBsYXllckRhdGE6IFBsYXllckRhdGE7XG59XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBtYW5hZ2UgdGhlIHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICogQGNsYXNzIENsaWVudENvbnRyb2xsZXJcbiAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXQgLSBUaGUgc29ja2V0IGNvbm5lY3Rpb24gY3JlYXRlZCBieSB0aGUgY2xpZW50XG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudENvbnRyb2xsZXIge1xuICBzb2NrZXQ6IFNvY2tldDtcbiAgc2VydmVyOiBTZXJ2ZXI7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc29ja2V0IHNvY2tldCBjb25uZWN0aW9uIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc29ja2V0OiBTb2NrZXQsIGlvOiBTZXJ2ZXIpIHtcbiAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICB0aGlzLnNlcnZlciA9IGlvO1xuICAgIHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgdGhpcy5kaXNjb25uZWN0LmJpbmQodGhpcykpO1xuICAgIHNvY2tldC5vbihcImNyZWF0ZVwiLCB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oXCJqb2luXCIsIHRoaXMuam9pbi5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oXCJsZWF2ZVwiLCB0aGlzLmxlYXZlLmJpbmQodGhpcykpO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRpc2Nvbm5lY3QgdGhlIHNvY2tldCBjb25uZWN0aW9uXG4gICAqIEBtZXRob2QgZGlzY29ubmVjdFxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIlNPQ0tFVFwiLCBcImRpc2Nvbm5lY3RlZDogXCIsIHRoaXMuc29ja2V0LmlkKTtcbiAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgY29uc3QgY2xpZW50SW5kZXggPSBjbGllbnRzLmluZGV4T2YodGhpcyk7XG4gICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiQ0xJRU5UXCIsIFwiUmVtb3ZpbmcgQ0xJRU5UI1wiLCBjbGllbnRJbmRleCk7XG4gICAgY2xpZW50cy5zcGxpY2UoY2xpZW50SW5kZXgsIDEpO1xuICB9XG5cbiAgLy8gICBnZXRHYW1lKCkge1xuICAvLyAgICAgY29uc3QgZGF0YSA9IHRoaXMuc29ja2V0LmRhdGEgYXMgSm9pbkRhdGE7XG4gIC8vICAgICByZXR1cm4gZ2FtZXMuZmluZCgoZ2FtZSkgPT4gZ2FtZS5nZXRJZCgpID09PSBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgLy8gICB9XG5cbiAgY3JlYXRlKGRhdGE6IHsgcGxheWVyTmFtZTogc3RyaW5nOyBnYW1lRGF0YTogR2FtZURhdGEgfSkge1xuICAgIC8vIHByZXBhcmUgZ2FtZSBvd25lciBkYXRhXG4gICAgY29uc3Qgb3duZXJEYXRhOiBQbGF5ZXJEYXRhID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgbmFtZTogZGF0YS5wbGF5ZXJOYW1lIHx8IFwiT3duZXJcIixcbiAgICAgIHNvY2tldElkOiB0aGlzLnNvY2tldC5pZCxcbiAgICB9O1xuICAgIC8vIGRlZmluZSBuZXcgZ2FtZURhdGFcbiAgICBjb25zdCBuZXdHYW1lRGF0YTogR2FtZURhdGEgPSB7IC4uLmRhdGEuZ2FtZURhdGEsIG93bmVyOiBvd25lckRhdGEuaWQgfTtcblxuICAgIC8vIGNyZWF0ZSBvd25lciBhcyBhIHBsYXllciB0b29cbiAgICBjb25zdCBvd25lciA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKG93bmVyRGF0YSk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGdhbWVcbiAgICBjb25zdCBuZXdHYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKG5ld0dhbWVEYXRhKTtcblxuICAgIC8vIGFkZCB0aGUgb3duZXIgdG8gdGhlIGdhbWVcbiAgICBuZXdHYW1lLmFkZFBsYXllcihvd25lcik7XG5cbiAgICAvLyBhZGQgdGhlIGdhbWUgdG8gdGhlIGdhbWUgbGlzdFxuICAgIGdhbWVzLnB1c2gobmV3R2FtZSk7XG5cbiAgICAvLyBwcmVwYXJlIHRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIGNsaWVudFxuICAgIGNvbnN0IGpvaW5EYXRhOiBKb2luRGF0YSA9IHtcbiAgICAgIGdhbWVEYXRhOiBuZXdHYW1lLmdldERhdGEoKSxcbiAgICAgIHBsYXllckRhdGE6IG93bmVyRGF0YSxcbiAgICB9O1xuXG4gICAgLy8gam9pbiB0aGUgZ2FtZSByb29tXG4gICAgcHJpbnRMb2coXCJpbmZvXCIsIFwiQ0xJRU5UXCIsIFwiSm9pbmluZyBnYW1lIHJvb206IFwiLCBuZXdHYW1lLmdldElkKCkpO1xuICAgIHRoaXMuc29ja2V0LmpvaW4obmV3R2FtZS5nZXRJZCgpKTtcblxuICAgIC8vIHNlbmQgdGhlIGRhdGEgdG8gdGhlIGNsaWVudFxuICAgIHRoaXMuc29ja2V0LmVtaXQoXCJjcmVhdGVkXCIsIGpvaW5EYXRhKTtcbiAgICBwcmludExvZyhcImluZm9cIiwgXCJDTElFTlRcIiwgXCJOZXcgZ2FtZSBjcmVhdGVkOiBcIiwgbmV3R2FtZS5nZXRJZCgpKTtcbiAgfVxuXG4gIGpvaW4oZGF0YTogSm9pbkRhdGEpIHtcbiAgICBsZXQgbmV3UGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIoe1xuICAgICAgaWQ6IGRhdGEucGxheWVyRGF0YS5pZCB8fCB1dWlkdjQoKSxcbiAgICAgIG5hbWU6IGRhdGEucGxheWVyRGF0YS5uYW1lIHx8IGdlbmVyYXRlTmFtZSgxKSxcbiAgICAgIHNvY2tldElkOiB0aGlzLnNvY2tldC5pZCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZ2FtZSBpcyBhbHJlYWR5IGNyZWF0ZWRcbiAgICBsZXQgZ2FtZSA9IGdhbWVzLmZpbmQoKGdhbWUpID0+IGdhbWUuZ2V0SWQoKSA9PT0gZGF0YS5nYW1lRGF0YS5pZCk7XG5cbiAgICBpZiAoIWdhbWUpIHtcbiAgICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIkNMSUVOVFwiLCBcIkdhbWUgbm90IGZvdW5kIFwiLCBkYXRhLmdhbWVEYXRhLmlkKTtcbiAgICAgIC8vIHRlbGwgdGhlIGNsaWVudCB0aGF0IHRoZSBnYW1lIGlzIG5vdCBmb3VuZFxuICAgICAgdGhpcy5zb2NrZXQuZW1pdChcIm5vdEZvdW5kXCIsIGRhdGEuZ2FtZURhdGEuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBpZiBjdXJyZW50IHBsYXllciBpcyBhbHJlYWR5IGluIHRoZSBnYW1lXG4gICAgICBjb25zdCBleGlzdGluZ1BsYXllciA9IGdhbWUuZ2V0UGxheWVyQnlJZChkYXRhLnBsYXllckRhdGEuaWQpO1xuICAgICAgaWYgKCFleGlzdGluZ1BsYXllcikge1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHBsYXllciBpZiB0aGUgZ2FtZSBpcyBub3QgZnVsbFxuICAgICAgICBpZiAoZ2FtZS5nZXRUb3RhbFBsYXllcigpIDwgNCkge1xuICAgICAgICAgIC8vIGFkZCB0aGUgcGxheWVyIHRvIHRoZSBnYW1lXG4gICAgICAgICAgZ2FtZS5hZGRQbGF5ZXIobmV3UGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZW5kIGVycm9yIG1lc3NhZ2UgdG8gdGhlIGNsaWVudFxuICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJlcnJvclwiLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkdhbWUgaXMgZnVsbFwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGpvaW4gdGhlIGdhbWUgcm9vbVxuICAgICAgcHJpbnRMb2coXCJpbmZvXCIsIFwiQ0xJRU5UXCIsIFwiSm9pbmluZyBnYW1lIHJvb206IFwiLCBnYW1lLmdldElkKCkpO1xuICAgICAgdGhpcy5zb2NrZXQuam9pbihnYW1lLmdldElkKCkpO1xuXG4gICAgICAvLyBwcmVwYXJlIHRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIGNsaWVudFxuICAgICAgY29uc3Qgam9pbkRhdGE6IEpvaW5EYXRhID0ge1xuICAgICAgICBnYW1lRGF0YTogZ2FtZS5nZXREYXRhKCksXG4gICAgICAgIHBsYXllckRhdGE6IG5ld1BsYXllci5nZXREYXRhKCksXG4gICAgICB9O1xuICAgICAgLy8gc2VuZCB0aGUgZGF0YSB0byB0aGUgY2xpZW50XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KFwiam9pbmVkXCIsIGpvaW5EYXRhKTtcblxuICAgICAgLy8gc2VuZCBwbGF5ZXIgbGlzdCB0byB0aGUgZ2FtZSByb29tXG4gICAgICAvLyBnZXQgYWxsIHBsYXllciBpbiB0aGUgZ2FtZVxuICAgICAgY29uc3QgcGxheWVycyA9IGdhbWUuZ2V0UGxheWVycygpO1xuICAgICAgLy8gbWFwIHRoZSBwbGF5ZXIgZGF0YSB0byBzZW5kIHRvIHRoZSBjbGllbnRcbiAgICAgIGNvbnN0IHBsYXllckRhdGEgPSBwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuZ2V0RGF0YSgpKTtcbiAgICAgIC8vc2VuZCB0aGUgZGF0YSB0byB0aGUgY2xpZW50XG4gICAgICB0aGlzLnNlcnZlci5pbihnYW1lLmdldElkKCkpLmVtaXQoXCJwbGF5ZXJzXCIsIHBsYXllckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGxlYXZlIHRoZSBnYW1lXG4gICAqIEBtZXRob2QgbGVhdmVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBsZWF2ZShkYXRhOiBKb2luRGF0YSk6IHZvaWQge1xuICAgIHByaW50TG9nKFwid2FybmluZ1wiLCBcIkNMSUVOVFwiLCBcIkxlYXZpbmcgZ2FtZTogXCIsIGRhdGEuZ2FtZURhdGEuaWQpO1xuICAgIC8vIGdldCBnYW1lIGRhdGEgZnJvbSBzb2NrZXQgZGF0YVxuICAgIGNvbnN0IGdhbWUgPSBnYW1lcy5maW5kKChnYW1lKSA9PiBnYW1lLmdldElkKCkgPT09IGRhdGEuZ2FtZURhdGEuaWQpO1xuICAgIC8vIGlmIGdhbWUgaXMgZGVmaW5lZCwgcHJvY2VlZCByZW1vdmluZyB0aGUgcGxheWVyIGZyb20gdGhlIGdhbWVcbiAgICBpZiAoZ2FtZSkge1xuICAgICAgY29uc3QgcGxheWVyID0gZ2FtZS5nZXRQbGF5ZXJCeUlkKGRhdGEucGxheWVyRGF0YS5pZCk7XG4gICAgICBwcmludExvZyhcIndhcm5pbmdcIiwgXCJQTEFZRVJcIiwgXCJMZWF2aW5nIGdhbWU6IFwiLCBkYXRhLnBsYXllckRhdGEuaWQpO1xuXG4gICAgICAvLyBpZiB0aGUgcGxheWVyIGlzIGZvdW5kLCB0aGVuIHdlIGNhbiByZW1vdmUgdGhlIHBsYXllciBmcm9tIHRoZSBnYW1lXG4gICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgIC8vIGJyb2FkY2FzdCB0byBvdGhlciBwbGF5ZXJzIHRoYXQgdGhlIHBsYXllciBsZWZ0XG4gICAgICAgIHRoaXMuc2VydmVyLmluKGdhbWUuZ2V0SWQoKSkuZW1pdChcImxlZnRcIiwgcGxheWVyLmdldERhdGEoKSk7XG4gICAgICAgIGdhbWUucmVtb3ZlUGxheWVyKHBsYXllcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IHByaW50TG9nIH0gZnJvbSBcIn4vdXRpbHMvaGVscGVyXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi9wbGF5ZXJcIjtcbi8qKlxuICogVGhpcyBjb25zdGFudCBpcyB1c2VkIHRvIHN0b3JlIHRoZSBnYW1lIGNyZWF0ZWQgYnkgdGhlIGNsaWVudFxuICogQGNvbnN0YW50IHtHYW1lQ29udHJvbGxlcltdfVxuICogQGRlZmF1bHQgW11cbiAqL1xuZXhwb3J0IGxldCBnYW1lczogR2FtZUNvbnRyb2xsZXJbXSA9IFtdO1xuZXhwb3J0IHR5cGUgR2FtZUV2ZW50ID0gXCJraWNrXCIgfCBcImtpY2tlZFwiO1xuZXhwb3J0IGludGVyZmFjZSBHYW1lRGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIG93bmVyOiBzdHJpbmc7XG4gIHBsYXllckNvdW50PzogbnVtYmVyO1xufVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gbWFuYWdlIHRoZSBnYW1lXG4gKiBAY2xhc3MgR2FtZUNvbnRyb2xsZXJcbiAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXQgLSBUaGUgc29ja2V0IGNvbm5lY3Rpb24gY3JlYXRlZCBieSB0aGUgY2xpZW50XG4gKiBAcGFyYW0ge0dhbWVEYXRhfSBkYXRhIC0gVGhlIGdhbWUgaWRcbiAqIEBwYXJhbSB7UGxheWVyQ29udHJvbGxlcltdfSBwbGF5ZXJzIC0gVGhlIHBsYXllciBsaXN0IGluc2lkZSB0aGUgZ2FtZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gIHByaXZhdGUgZGF0YTogR2FtZURhdGEgPSB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIGxldmVsOiAxLFxuICAgIG93bmVyOiBcIlwiLFxuICAgIHBsYXllckNvdW50OiAwLFxuICB9O1xuICBwcml2YXRlIHBsYXllcnM6IFBsYXllckNvbnRyb2xsZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5kYXRhID0geyAuLi5kYXRhLCBwbGF5ZXJDb3VudDogdGhpcy5wbGF5ZXJzLmxlbmd0aCB9O1xuICB9XG4gIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllckNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgIHByaW50TG9nKFxuICAgICAgXCJpbmZvXCIsXG4gICAgICBcIkdBTUVcIixcbiAgICAgIFwiUGxheWVyIFwiLFxuICAgICAgcGxheWVyLmdldElkKCksXG4gICAgICBcIiBhZGRlZCB0byBnYW1lOiBcIixcbiAgICAgIHRoaXMuZGF0YS5pZFxuICAgICk7XG4gICAgdGhpcy5kYXRhLnBsYXllckNvdW50ID0gdGhpcy5wbGF5ZXJzLmxlbmd0aDtcbiAgICByZXR1cm4gcGxheWVyO1xuICB9XG4gIHNldElkKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGEuaWQgPSBpZDtcbiAgfVxuICBzZXRPd25lcihwbGF5ZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhLm93bmVyID0gcGxheWVySWQ7XG4gIH1cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5pZDtcbiAgfVxuICBnZXRQbGF5ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnM7XG4gIH1cbiAgZ2V0VG90YWxQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycy5sZW5ndGg7XG4gIH1cbiAgZ2V0UGxheWVyQnlJZChwbGF5ZXJJZDogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFwbGF5ZXJJZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmdldElkKCkgPT09IHBsYXllcklkKTtcbiAgfVxuICBnZXRQbGF5ZXJCeVNvY2tldElkKHNvY2tldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmdldFNvY2tldElkKCkgPT09IHNvY2tldElkKTtcbiAgfVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgcmVtb3ZlUGxheWVyKHBsYXllcjogUGxheWVyQ29udHJvbGxlcikge1xuICAgIGNvbnN0IHBsYXllckluZGV4ID0gdGhpcy5wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICB0aGlzLnBsYXllcnMuc3BsaWNlKHBsYXllckluZGV4LCAxKTtcbiAgICBwcmludExvZyhcbiAgICAgIFwiaW5mb1wiLFxuICAgICAgXCJHQU1FXCIsXG4gICAgICBcIlBsYXllciBcIixcbiAgICAgIHBsYXllci5nZXRJZCgpLFxuICAgICAgXCIgcmVtb3ZlZCBmcm9tIGdhbWU6IFwiLFxuICAgICAgdGhpcy5kYXRhLmlkXG4gICAgKTtcbiAgICB0aGlzLmRhdGEucGxheWVyQ291bnQgPSB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllckRhdGEge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNvY2tldElkOiBzdHJpbmc7XG59XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBtYW5hZ2UgcGxheWVyIGluIHRoZSBnYW1lXG4gKiBAY2xhc3MgUGxheWVyQ29udHJvbGxlclxuICogQHBhcmFtIHtQbGF5ZXJEYXRhfSBkYXRhIC0gVGhlIHBsYXllciBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIge1xuICBwcml2YXRlIGRhdGE6IFBsYXllckRhdGE7XG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBsYXllckRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG4gIGdldFNvY2tldElkKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc29ja2V0SWQ7XG4gIH1cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5pZDtcbiAgfVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgbGVhdmUoKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgaWQ6IFwiXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgc29ja2V0SWQ6IFwiXCIsXG4gICAgfTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8s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
