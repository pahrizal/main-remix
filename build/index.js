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
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

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
var app_default = "/build/_assets/app-Q2D3FZV5.css";

// app/assets/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-YCJBUPGB.css";

// app/stores/index.ts
init_react();

// app/stores/gameState.ts
init_react();
var import_uuid = require("uuid");
var initialGameState = {
  currentGameId: null,
  players: []
};
var GameActionsTypes = {
  SET_CURRENT_GAME_ID: "SET_CURRENT_GAME_ID",
  SET_PLAYERS: "SET_PLAYERS"
};
var gameActions = {
  create: () => {
    return async (dispatch, getState) => {
      const newGameId = (0, import_uuid.v4)();
      dispatch({
        type: GameActionsTypes.SET_CURRENT_GAME_ID,
        payload: newGameId
      });
    };
  },
  join: (gameId) => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_CURRENT_GAME_ID,
        payload: gameId
      });
    };
  }
};
var GameReducer = (state, action) => {
  if (state === void 0) {
    return initialGameState;
  }
  switch (action.type) {
    case GameActionsTypes.SET_CURRENT_GAME_ID:
      return __spreadProps(__spreadValues({}, state), {
        currentGameId: action.payload
      });
    case GameActionsTypes.SET_PLAYERS:
      return __spreadProps(__spreadValues({}, state), {
        players: action.payload
      });
    default:
      return state;
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
      socket.on("update-input", (data) => {
        onData && onData(data);
      });
      dispatch({
        type: SocketActionsTypes.SET_SOCKET,
        payload: socket
      });
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
    dispatch(socketActions.init((0, import_socket.io)(), (data) => {
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

// route:/Users/papuq/Work/main-remix/app/routes/$gameId.tsx
var gameId_exports = {};
__export(gameId_exports, {
  default: () => gameId_default,
  loader: () => loader
});
init_react();
var import_react2 = __toESM(require("react"));
var import_react_redux2 = require("react-redux");
var import_remix3 = __toESM(require_remix());
var loader = async ({ params }) => {
  return (0, import_remix3.json)(__spreadValues({}, params));
};
var GameScreen = () => {
  const socket = (0, import_react_redux2.useSelector)((state) => state.socket.client);
  const data = (0, import_remix3.useLoaderData)();
  const nav = (0, import_remix3.useNavigate)();
  import_react2.default.useEffect(() => {
    if (!socket) {
      nav("/");
    } else {
      socket.emit("join", data.gameId);
    }
  }, [data.gameId, socket, nav]);
  return /* @__PURE__ */ import_react2.default.createElement("div", null, "GameScreen");
};
var gameId_default = GameScreen;

// route:/Users/papuq/Work/main-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react4 = __toESM(require("react"));
var import_remix4 = __toESM(require_remix());

// app/components/rubberText.tsx
init_react();
var import_clsx = __toESM(require("clsx"));
var import_react3 = __toESM(require("react"));
var RubberText = ({
  text = "",
  bounceIn,
  rootClass = "",
  className = "font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-lime-400 cursor-pointer"
}) => {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: (0, import_clsx.default)("flex flex-row", rootClass, {
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

// app/assets/images/playing-cards.png
var playing_cards_default = "/build/_assets/playing-cards-PK6EDUO4.png";

// route:/Users/papuq/Work/main-remix/app/routes/index.tsx
var import_react_redux3 = require("react-redux");
function Index() {
  const [joinId, setJoinId] = import_react4.default.useState("");
  const gameId = (0, import_react_redux3.useSelector)((state) => state.game.currentGameId);
  const dispatch = (0, import_react_redux3.useDispatch)();
  const nav = (0, import_remix4.useNavigate)();
  const handleRoomInput = (event) => {
    const value = event.target.value;
    if (!value)
      return;
    setJoinId(value);
  };
  const handleJoin = () => {
    dispatch(gameActions.join(joinId));
  };
  const handleCreateGame = () => {
    dispatch(gameActions.create());
  };
  import_react4.default.useEffect(() => {
    if (!gameId)
      return;
    nav(gameId);
  }, [gameId]);
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col overflow-hidden items-center justify-center"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    src: playing_cards_default,
    alt: "bg",
    width: 512,
    className: "absolute bottom-0 right-0 opacity-20 bounceInUp"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
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
    className: "flex xs:flex-col sm:flex-col md:flex-row lg::flex-row xl:flex-row 2xl:flex-row mt-8 items-center"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "sm:mr-0 xs:mr-0 xl:mr-4 lg:mr-4 md:mr-4 border-lime-500 border-2 sm:w-full xs:w-full text-center xl:mb-0 lg:mb-0 md:mb-0 sm:mb-2 xs:mb-2"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    className: "btn-anim-bg sm:w-full xs:w-full px-4 py-2 font-exo text-slate-100 xl:text-xl lg:text-lg md:text-md text-sm",
    onClick: handleCreateGame
  }, /* @__PURE__ */ import_react4.default.createElement("p", null, "New Game"))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-row border-2 border-lime-500 sm:w-full"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    className: "h-100 bg-transparent outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo",
    placeholder: "Enter game ID here",
    onChange: handleRoomInput
  }), /* @__PURE__ */ import_react4.default.createElement("button", {
    className: "btn-anim-bg px-4 py-2 font-exo text-slate-100  xl:text-xl lg:text-lg md:text-md text-sm",
    onClick: handleJoin
  }, /* @__PURE__ */ import_react4.default.createElement("p", null, "Join")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "ca49f080", "entry": { "module": "/build/entry.client-RUNECLBG.js", "imports": ["/build/_shared/chunk-G65EAHCX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-KBVCCKUC.js", "imports": ["/build/_shared/chunk-A33U2VHE.js", "/build/_shared/chunk-6AWONSVN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$gameId": { "id": "routes/$gameId", "parentId": "root", "path": ":gameId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$gameId-DB4LOAN5.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-W5QZI7XY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-CA49F080.js" };

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
  "routes/$gameId": {
    id: "routes/$gameId",
    parentId: "root",
    path: ":gameId",
    index: void 0,
    caseSensitive: void 0,
    module: gameId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var import_http = __toESM(require("http"));
var import_socket2 = require("socket.io");
var import_socket_controllers = require("socket-controllers");

// app/controllers/connection.ts
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

// app/controllers/client.ts
init_react();
var ClientController = class {
  constructor(socket) {
    this.socket = socket;
    socket.on("disconnect", (reason) => {
      printLog("warning", "SOCKET", "disconnected: ", socket.id);
      this.socket.disconnect();
      const clientIndex = clients.indexOf(this);
      printLog("warning", "CLIENT", "Removing CLIENT#", clientIndex);
      clients.splice(clientIndex, 1);
    });
    socket.on("join", (gameId) => {
      printLog("info", "CLIENT", "new join: ", gameId);
      socket.join(gameId);
      socket.to(gameId).emit("joining", "someone is joining");
    });
  }
};

// app/controllers/connection.ts
var clients = [];
var ConnectionController = class {
  constructor(io2) {
    this.io = io2;
  }
  listen() {
    this.io.on("connection", (socket) => {
      printLog("default", "SOCKET", "connected: ", socket.id);
      const client = new ClientController(socket);
      clients.push(client);
    });
  }
};
var connection_default = ConnectionController;

// server.js
var app = (0, import_express.default)();
var server = import_http.default.createServer(app);
var io = new import_socket2.Server(server, {
  cors: {
    origin: "*"
  }
});
var socketConn = new connection_default(io);
socketConn.listen();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "production"
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
