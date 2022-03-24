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
var tailwind_default = "/build/_assets/tailwind-NZHFBXPL.css";

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
  if (true) {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools((0, import_redux.applyMiddleware)(...middleware));
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
var assets_manifest_default = { "version": "32caef03", "entry": { "module": "/build/entry.client-ENRXKTIP.js", "imports": ["/build/_shared/chunk-4DF5W3YO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QTXRLYFO.js", "imports": ["/build/_shared/chunk-YAQVVTT4.js", "/build/_shared/chunk-65P7LJAE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$gameId": { "id": "routes/$gameId", "parentId": "root", "path": ":gameId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$gameId-ARMKABCI.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-POHFBLN2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-32CAEF03.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3BhcHVxL1dvcmsvbWFpbi1yZW1peC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL3N0b3Jlcy9pbmRleC50cyIsICIuLi9hcHAvc3RvcmVzL2dhbWVTdGF0ZS50cyIsICIuLi9hcHAvc3RvcmVzL3NvY2tldFN0YXRlLnRzIiwgIi4uL2FwcC9zdG9yZXMvY29uZmlnLnRzIiwgInJvdXRlOi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3JvdXRlcy8kZ2FtZUlkLnRzeCIsICJyb3V0ZTovVXNlcnMvcGFwdXEvV29yay9tYWluLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3J1YmJlclRleHQudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0IiwgIi4uL2FwcC9jb250cm9sbGVycy9jb25uZWN0aW9uLnRzIiwgIi4uL2FwcC91dGlscy9oZWxwZXIudHMiLCAiLi4vYXBwL2NvbnRyb2xsZXJzL2NsaWVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tIFwic29ja2V0LmlvXCI7XG5pbXBvcnQgeyB1c2VTb2NrZXRTZXJ2ZXIgYXMgYXR0YWNoU29ja2V0Q29udHJvbGxlciB9IGZyb20gXCJzb2NrZXQtY29udHJvbGxlcnNcIjtcbmltcG9ydCBDb25uZWN0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9hcHAvY29udHJvbGxlcnMvY29ubmVjdGlvblwiO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBjcmVhdGUgY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG4vL2NyZWF0ZSBzZXJ2ZXIgc29ja2V0IGlvIGFuZCBhdHRhY2ggdG8gY3VzdG9tIGV4cHJlc3Mgc2VydmVyXG5jb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCB7XG4gIGNvcnM6IHtcbiAgICBvcmlnaW46IFwiKlwiLFxuICB9LFxufSk7XG5cbi8vIGF0dGFjaCBzb2NrZXQgY29ubmVjdGlvbiBjb250cm9sbGVyXG5jb25zdCBzb2NrZXRDb25uID0gbmV3IENvbm5lY3Rpb25Db250cm9sbGVyKGlvKTtcbnNvY2tldENvbm4ubGlzdGVuKCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWNcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5cbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XG5cbmFwcC5hbGwoXG4gIFwiKlwiLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuc2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvcGFwdXEvV29yay9tYWluLXJlbWl4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9wYXB1cS9Xb3JrL21haW4tcmVtaXgvYXBwL3JvdXRlcy8kZ2FtZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcGFwdXEvV29yay9tYWluLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy8kZ2FtZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy8kZ2FtZUlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIjpnYW1lSWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb3ZpZGVyLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGlvIGFzIHNvY2tldENsaWVudCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgYW5pbWF0aW9uU3R5bGVzIGZyb20gXCJ+L2Fzc2V0cy9zdHlsZXMvYW5pbWF0aW9uLmNzc1wiO1xuaW1wb3J0IGFwcFN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCB0YWlsd2luZFN0eWxlcyBmcm9tIFwifi9hc3NldHMvc3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IHsgQXBwU3RhdGUsIGluaXRpYWxBcHBTdGF0ZSB9IGZyb20gXCIuL3N0b3Jlc1wiO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCIuL3N0b3Jlcy9jb25maWdcIjtcbmltcG9ydCB7IHNvY2tldEFjdGlvbnMgfSBmcm9tIFwiLi9zdG9yZXMvc29ja2V0U3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICBhczogXCJmb250XCIsXG4gICAgICBocmVmOiBcIi9mb250cy9WaXJnaWwzWU9GRi53b2ZmMlwiLFxuICAgICAgdHlwZTogXCJmb250L3dvZmYyXCIsXG4gICAgICBjcm9zc09yaWdpbjogXCJhbm9ueW1vdXNcIixcbiAgICB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZXMgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGFwcFN0eWxlcyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogYW5pbWF0aW9uU3R5bGVzIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJNYWluIFJlbWl4XCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5jb25zdCBwZXJzaXN0ZWRTdGF0ZTogQXBwU3RhdGUgPSB7XG4gIC4uLmluaXRpYWxBcHBTdGF0ZSxcbn07XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHBlcnNpc3RlZFN0YXRlKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzb2NrZXRBY3Rpb25zLmluaXQoc29ja2V0Q2xpZW50KCksIChkYXRhKSA9PiB7fSkpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIGxhbmc9XCJlblwiXG4gICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgdGV4dC1zbGF0ZS0xMDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIlxuICAgID5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwV2l0aFJlZHV4KCkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEFwcCAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgR2FtZVJlZHVjZXIsIEdhbWVTdGF0ZSwgaW5pdGlhbEdhbWVTdGF0ZSB9IGZyb20gXCIuL2dhbWVTdGF0ZVwiO1xuaW1wb3J0IHsgaW5pdGlhbFNvY2tldFN0YXRlLCBTb2NrZXRSZWR1Y2VyLCBTb2NrZXRTdGF0ZSB9IGZyb20gXCIuL3NvY2tldFN0YXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICBzb2NrZXQ6IFNvY2tldFN0YXRlO1xuICBnYW1lOiBHYW1lU3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQXBwU3RhdGUgPSB7XG4gIHNvY2tldDogaW5pdGlhbFNvY2tldFN0YXRlLFxuICBnYW1lOiBpbml0aWFsR2FtZVN0YXRlLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xuICBzb2NrZXQ6IFNvY2tldFJlZHVjZXIsXG4gIGdhbWU6IEdhbWVSZWR1Y2VyLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcFN0YXRlKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHsgQ2xpZW50RXZlbnQgfSBmcm9tIFwifi9jb250cm9sbGVycy9jbGllbnRcIjtcbmltcG9ydCB7IFRodW5rQWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWRWNCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBTb2NrZXRBY3Rpb25zIH0gZnJvbSBcIi4vc29ja2V0U3RhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHYW1lU3RhdGUge1xuICBjdXJyZW50R2FtZUlkOiBzdHJpbmcgfCBudWxsO1xuICBwbGF5ZXJzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxHYW1lU3RhdGU6IEdhbWVTdGF0ZSA9IHtcbiAgY3VycmVudEdhbWVJZDogbnVsbCxcbiAgcGxheWVyczogW10sXG59O1xuXG5pbnRlcmZhY2UgR2FtZUFjdGlvblR5cGVzIHtcbiAgcmVhZG9ubHkgU0VUX0NVUlJFTlRfR0FNRV9JRDogXCJTRVRfQ1VSUkVOVF9HQU1FX0lEXCI7XG4gIHJlYWRvbmx5IFNFVF9QTEFZRVJTOiBcIlNFVF9QTEFZRVJTXCI7XG59XG5cbmNvbnN0IEdhbWVBY3Rpb25zVHlwZXM6IEdhbWVBY3Rpb25UeXBlcyA9IHtcbiAgU0VUX0NVUlJFTlRfR0FNRV9JRDogXCJTRVRfQ1VSUkVOVF9HQU1FX0lEXCIsXG4gIFNFVF9QTEFZRVJTOiBcIlNFVF9QTEFZRVJTXCIsXG59O1xuXG5pbnRlcmZhY2UgU2V0Q3VycmVudEdhbWVJZCB7XG4gIHR5cGU6IFwiU0VUX0NVUlJFTlRfR0FNRV9JRFwiO1xuICBwYXlsb2FkOiB0eXBlb2YgaW5pdGlhbEdhbWVTdGF0ZS5jdXJyZW50R2FtZUlkO1xufVxuaW50ZXJmYWNlIFNldFBsYXllcnMge1xuICB0eXBlOiBcIlNFVF9QTEFZRVJTXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsR2FtZVN0YXRlLnBsYXllcnM7XG59XG5cbmV4cG9ydCB0eXBlIEdhbWVBY3Rpb25zID0gU2V0Q3VycmVudEdhbWVJZCB8IFNldFBsYXllcnM7XG5cbmV4cG9ydCBjb25zdCBnYW1lQWN0aW9ucyA9IHtcbiAgY3JlYXRlOiAoKTogVGh1bmtBY3Rpb248R2FtZUFjdGlvbnMgfCBTb2NrZXRBY3Rpb25zPiA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0dhbWVJZCA9IHV1aWRWNCgpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHYW1lQWN0aW9uc1R5cGVzLlNFVF9DVVJSRU5UX0dBTUVfSUQsXG4gICAgICAgIHBheWxvYWQ6IG5ld0dhbWVJZCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG4gIGpvaW46IChnYW1lSWQ6IHN0cmluZyk6IFRodW5rQWN0aW9uPEdhbWVBY3Rpb25zIHwgU29ja2V0QWN0aW9ucz4gPT4ge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdhbWVBY3Rpb25zVHlwZXMuU0VUX0NVUlJFTlRfR0FNRV9JRCxcbiAgICAgICAgcGF5bG9hZDogZ2FtZUlkLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBHYW1lUmVkdWNlcjogUmVkdWNlcjxHYW1lU3RhdGUsIEdhbWVBY3Rpb25zPiA9IChcbiAgc3RhdGU6IEdhbWVTdGF0ZSB8IHVuZGVmaW5lZCxcbiAgYWN0aW9uOiBHYW1lQWN0aW9uc1xuKTogR2FtZVN0YXRlID0+IHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaW5pdGlhbEdhbWVTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdhbWVBY3Rpb25zVHlwZXMuU0VUX0NVUlJFTlRfR0FNRV9JRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50R2FtZUlkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBHYW1lQWN0aW9uc1R5cGVzLlNFVF9QTEFZRVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBsYXllcnM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIiwgImltcG9ydCB7IFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgeyBDbGllbnRFdmVudCB9IGZyb20gXCJ+L2NvbnRyb2xsZXJzL2NsaWVudFwiO1xuaW1wb3J0IHsgVGh1bmtBY3Rpb24gfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvY2tldFN0YXRlIHtcbiAgY2xpZW50OiBTb2NrZXQgfCBudWxsO1xuICBjb25uZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU29ja2V0U3RhdGU6IFNvY2tldFN0YXRlID0ge1xuICBjbGllbnQ6IG51bGwsXG4gIGNvbm5lY3RlZDogZmFsc2UsXG59O1xuXG5pbnRlcmZhY2UgU29ja2V0QWN0aW9uVHlwZXMge1xuICByZWFkb25seSBTRVRfU09DS0VUOiBcIlNFVF9TT0NLRVRcIjtcbiAgcmVhZG9ubHkgU0VUX0NPTk5FQ1RFRDogXCJTRVRfQ09OTkVDVEVEXCI7XG59XG5cbmNvbnN0IFNvY2tldEFjdGlvbnNUeXBlczogU29ja2V0QWN0aW9uVHlwZXMgPSB7XG4gIFNFVF9TT0NLRVQ6IFwiU0VUX1NPQ0tFVFwiLFxuICBTRVRfQ09OTkVDVEVEOiBcIlNFVF9DT05ORUNURURcIixcbn07XG5cbmludGVyZmFjZSBTZXRTb2NrZXQge1xuICB0eXBlOiBcIlNFVF9TT0NLRVRcIjtcbiAgcGF5bG9hZDogdHlwZW9mIGluaXRpYWxTb2NrZXRTdGF0ZS5jbGllbnQ7XG59XG5pbnRlcmZhY2UgU2V0Q29ubmVjdGVkIHtcbiAgdHlwZTogXCJTRVRfQ09OTkVDVEVEXCI7XG4gIHBheWxvYWQ6IHR5cGVvZiBpbml0aWFsU29ja2V0U3RhdGUuY29ubmVjdGVkO1xufVxuXG5leHBvcnQgdHlwZSBTb2NrZXRBY3Rpb25zID0gU2V0U29ja2V0IHwgU2V0Q29ubmVjdGVkO1xuXG5leHBvcnQgY29uc3Qgc29ja2V0QWN0aW9ucyA9IHtcbiAgaW5pdDogKFxuICAgIHNvY2tldDogdHlwZW9mIGluaXRpYWxTb2NrZXRTdGF0ZS5jbGllbnQsXG4gICAgb25EYXRhOiAoZGF0YTogYW55KSA9PiB2b2lkXG4gICk6IFRodW5rQWN0aW9uPFNvY2tldEFjdGlvbnM+ID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgaWYgKCFzb2NrZXQpIHJldHVybjtcblxuICAgICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBTb2NrZXRBY3Rpb25zVHlwZXMuU0VUX0NPTk5FQ1RFRCxcbiAgICAgICAgICBwYXlsb2FkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc29ja2V0Lm9uPENsaWVudEV2ZW50PihcInVwZGF0ZS1pbnB1dFwiLCAoZGF0YSkgPT4ge1xuICAgICAgICBvbkRhdGEgJiYgb25EYXRhKGRhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU29ja2V0QWN0aW9uc1R5cGVzLlNFVF9TT0NLRVQsXG4gICAgICAgIHBheWxvYWQ6IHNvY2tldCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgU29ja2V0UmVkdWNlcjogUmVkdWNlcjxTb2NrZXRTdGF0ZSwgU29ja2V0QWN0aW9ucz4gPSAoXG4gIHN0YXRlOiBTb2NrZXRTdGF0ZSB8IHVuZGVmaW5lZCxcbiAgYWN0aW9uOiBTb2NrZXRBY3Rpb25zXG4pOiBTb2NrZXRTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGluaXRpYWxTb2NrZXRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNvY2tldEFjdGlvbnNUeXBlcy5TRVRfU09DS0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgU29ja2V0QWN0aW9uc1R5cGVzLlNFVF9DT05ORUNURUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29ubmVjdGVkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCByZWR1Y2VycyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IGFueSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gSSByZXF1aXJlIHRoaXMgb25seSBpbiBkZXYgZW52aXJvbm1lbnRcbiAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7XG4gICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XG4gIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAuLi5yZWR1Y2VycyxcbiAgfSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGJpbmRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpXG4gICk7XG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIn4vc3RvcmVzXCI7XG5cbnR5cGUgR2FtZURhdGEgPSB7XG4gIGdhbWVJZDogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGpzb24oeyAuLi5wYXJhbXMgfSk7XG59O1xuXG5jb25zdCBHYW1lU2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBzb2NrZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5zb2NrZXQuY2xpZW50KTtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8R2FtZURhdGE+KCk7XG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIG5hdihcIi9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvY2tldC5lbWl0KFwiam9pblwiLCBkYXRhLmdhbWVJZCk7XG4gICAgfVxuICB9LCBbZGF0YS5nYW1lSWQsIHNvY2tldCwgbmF2XSk7XG5cbiAgcmV0dXJuIDxkaXY+R2FtZVNjcmVlbjwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTY3JlZW47XG4iLCAiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgUnViYmVyVGV4dCBmcm9tIFwifi9jb21wb25lbnRzL3J1YmJlclRleHRcIjtcbmltcG9ydCBwbGF5aW5nQ2FyZEJhY2tncm91bmQgZnJvbSBcIn4vYXNzZXRzL2ltYWdlcy9wbGF5aW5nLWNhcmRzLnBuZ1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBnYW1lQWN0aW9ucyB9IGZyb20gXCJ+L3N0b3Jlcy9nYW1lU3RhdGVcIjtcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIn4vc3RvcmVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbam9pbklkLCBzZXRKb2luSWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGdhbWVJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmdhbWUuY3VycmVudEdhbWVJZCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgaGFuZGxlUm9vbUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICBzZXRKb2luSWQodmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVKb2luID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdhbWVBY3Rpb25zLmpvaW4oam9pbklkKSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUdhbWUgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2FtZUFjdGlvbnMuY3JlYXRlKCkpO1xuICB9O1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZ2FtZUlkKSByZXR1cm47XG4gICAgbmF2KGdhbWVJZCk7XG4gIH0sIFtnYW1lSWRdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3BsYXlpbmdDYXJkQmFja2dyb3VuZH1cbiAgICAgICAgYWx0PVwiYmdcIlxuICAgICAgICB3aWR0aD17NTEyfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIG9wYWNpdHktMjAgYm91bmNlSW5VcFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxSdWJiZXJUZXh0IHRleHQ9XCJIZWxsb1wiIHJvb3RDbGFzcz1cIm1yLThcIiAvPlxuICAgICAgICA8UnViYmVyVGV4dCB0ZXh0PVwidGhlcmUhXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxSdWJiZXJUZXh0XG4gICAgICAgICAgdGV4dD1cIkxldCdzXCJcbiAgICAgICAgICBib3VuY2VJbj1cInJpZ2h0XCJcbiAgICAgICAgICByb290Q2xhc3M9XCJtci04XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXZpcmdpbCB4bDp0ZXh0LTh4bCBsZzptZDp0ZXh0LTZ4bCB0ZXh0LTR4bCBob3ZlcjphbmltYXRlLXJ1YmJlciBob3Zlcjp0ZXh0LXNsYXRlLTEwMCB0ZXh0LWxpbWUtNDAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFJ1YmJlclRleHRcbiAgICAgICAgICB0ZXh0PVwiUExBWSFcIlxuICAgICAgICAgIGJvdW5jZUluPVwicmlnaHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXhvIHhsOnRleHQtOHhsIGxnOm1kOnRleHQtNnhsIHRleHQtNHhsIGhvdmVyOmFuaW1hdGUtcnViYmVyIHB4LTIgaG92ZXI6dGV4dC1zbGF0ZS0xMDAgdGV4dC1saW1lLTQwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB4czpmbGV4LWNvbCBzbTpmbGV4LWNvbCBtZDpmbGV4LXJvdyBsZzo6ZmxleC1yb3cgeGw6ZmxleC1yb3cgMnhsOmZsZXgtcm93IG10LTggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXItMCB4czptci0wIHhsOm1yLTQgbGc6bXItNCBtZDptci00IGJvcmRlci1saW1lLTUwMCBib3JkZXItMiBzbTp3LWZ1bGwgeHM6dy1mdWxsIHRleHQtY2VudGVyIHhsOm1iLTAgbGc6bWItMCBtZDptYi0wIHNtOm1iLTIgeHM6bWItMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1hbmltLWJnIHNtOnctZnVsbCB4czp3LWZ1bGwgcHgtNCBweS0yIGZvbnQtZXhvIHRleHQtc2xhdGUtMTAwIHhsOnRleHQteGwgbGc6dGV4dC1sZyBtZDp0ZXh0LW1kIHRleHQtc21cIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlR2FtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5OZXcgR2FtZTwvcD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBib3JkZXItMiBib3JkZXItbGltZS01MDAgc206dy1mdWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMCBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgcHgtNCB0ZXh0LWxpbWUtNTAwICB4bDp0ZXh0LXhsIGxnOnRleHQtbGcgbWQ6dGV4dC1tZCB0ZXh0LXNtIGZvbnQtYm9sZCBmb250LWV4b1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGdhbWUgSUQgaGVyZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUm9vbUlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWFuaW0tYmcgcHgtNCBweS0yIGZvbnQtZXhvIHRleHQtc2xhdGUtMTAwICB4bDp0ZXh0LXhsIGxnOnRleHQtbGcgbWQ6dGV4dC1tZCB0ZXh0LXNtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUpvaW59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+Sm9pbjwvcD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBib3VuY2VJbj86IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJ1cFwiIHwgXCJkb3duXCI7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcm9vdENsYXNzPzogc3RyaW5nO1xufTtcbmNvbnN0IFJ1YmJlclRleHQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIHRleHQgPSBcIlwiLFxuICBib3VuY2VJbixcbiAgcm9vdENsYXNzID0gXCJcIixcbiAgY2xhc3NOYW1lID0gXCJmb250LXZpcmdpbCB4bDp0ZXh0LTh4bCBsZzptZDp0ZXh0LTZ4bCB0ZXh0LTR4bCBob3ZlcjphbmltYXRlLXJ1YmJlciBob3Zlcjp0ZXh0LWxpbWUtNDAwIGN1cnNvci1wb2ludGVyXCIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiZmxleCBmbGV4LXJvd1wiLCByb290Q2xhc3MsIHtcbiAgICAgICAgYm91bmNlSW5MZWZ0OiBib3VuY2VJbiA9PT0gXCJsZWZ0XCIgfHwgIWJvdW5jZUluLFxuICAgICAgICBib3VuY2VJblJpZ2h0OiBib3VuY2VJbiA9PT0gXCJyaWdodFwiLFxuICAgICAgICBib3VuY2VJblVwOiBib3VuY2VJbiA9PT0gXCJ1cFwiLFxuICAgICAgICBib3VuY2VJbkRvd246IGJvdW5jZUluID09PSBcImRvd25cIixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHt0ZXh0LnNwbGl0KFwiXCIpLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICA8aDEga2V5PXtpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge2N9XG4gICAgICAgIDwvaDE+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1YmJlclRleHQ7XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMzJjYWVmMDMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUVOUlhLVElQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00REY1VzNZTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtUVRYUkxZRk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVlBUVZWVFQ0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNjVQN0xKQUUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzLyRnYW1lSWQnOnsnaWQnOidyb3V0ZXMvJGdhbWVJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOic6Z2FtZUlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzLyRnYW1lSWQtQVJNS0FCQ0kuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVBPSEZCTE4yLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTMyQ0FFRjAzLmpzJ307IiwgImltcG9ydCB7IFNlcnZlciwgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgcHJpbnRMb2csIFRlcm1pbmFsQ29sb3IgfSBmcm9tIFwifi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCBDbGllbnRDb250cm9sbGVyIGZyb20gXCIuL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgY2xpZW50czogQ2xpZW50Q29udHJvbGxlcltdID0gW107XG5jbGFzcyBDb25uZWN0aW9uQ29udHJvbGxlciB7XG4gIGlvOiBTZXJ2ZXI7XG4gIGNvbnN0cnVjdG9yKGlvOiBTZXJ2ZXIpIHtcbiAgICB0aGlzLmlvID0gaW87XG4gIH1cbiAgbGlzdGVuKCkge1xuICAgIHRoaXMuaW8ub24oXCJjb25uZWN0aW9uXCIsIChzb2NrZXQpID0+IHtcbiAgICAgIHByaW50TG9nKFwiZGVmYXVsdFwiLCBcIlNPQ0tFVFwiLCBcImNvbm5lY3RlZDogXCIsIHNvY2tldC5pZCk7XG4gICAgICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50Q29udHJvbGxlcihzb2NrZXQpO1xuICAgICAgY2xpZW50cy5wdXNoKGNsaWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGlvbkNvbnRyb2xsZXI7XG4iLCAiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBlbnVtIFRlcm1pbmFsQ29sb3Ige1xuICBSZXNldCA9IFwiXFx4MWJbMG1cIixcbiAgQnJpZ2h0ID0gXCJcXHgxYlsxbVwiLFxuICBEaW0gPSBcIlxceDFiWzJtXCIsXG4gIFVuZGVyc2NvcmUgPSBcIlxceDFiWzRtXCIsXG4gIEJsaW5rID0gXCJcXHgxYls1bVwiLFxuICBSZXZlcnNlID0gXCJcXHgxYls3bVwiLFxuICBIaWRkZW4gPSBcIlxceDFiWzhtXCIsXG5cbiAgRmdCbGFjayA9IFwiXFx4MWJbMzBtXCIsXG4gIEZnUmVkID0gXCJcXHgxYlszMW1cIixcbiAgRmdHcmVlbiA9IFwiXFx4MWJbMzJtXCIsXG4gIEZnWWVsbG93ID0gXCJcXHgxYlszM21cIixcbiAgRmdCbHVlID0gXCJcXHgxYlszNG1cIixcbiAgRmdNYWdlbnRhID0gXCJcXHgxYlszNW1cIixcbiAgRmdDeWFuID0gXCJcXHgxYlszNm1cIixcbiAgRmdXaGl0ZSA9IFwiXFx4MWJbMzdtXCIsXG5cbiAgQmdCbGFjayA9IFwiXFx4MWJbNDBtXCIsXG4gIEJnUmVkID0gXCJcXHgxYls0MW1cIixcbiAgQmdHcmVlbiA9IFwiXFx4MWJbNDJtXCIsXG4gIEJnWWVsbG93ID0gXCJcXHgxYls0M21cIixcbiAgQmdCbHVlID0gXCJcXHgxYls0NG1cIixcbiAgQmdNYWdlbnRhID0gXCJcXHgxYls0NW1cIixcbiAgQmdDeWFuID0gXCJcXHgxYls0Nm1cIixcbiAgQmdXaGl0ZSA9IFwiXFx4MWJbNDdtXCIsXG59XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gKCkgPT4gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKTtcblxuZXhwb3J0IGNvbnN0IHByaW50TG9nID0gKFxuICB0eXBlOiBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcImRlZmF1bHRcIiA9IFwiZGVmYXVsdFwiLFxuICBsYWJlbDogc3RyaW5nID0gXCJcIixcbiAgLi4ubWVzc2FnZTogYW55W11cbikgPT4ge1xuICAvLyBzZXQgZGVmYXVsdCBmb3Jncm91bmQgY29sb3IgdG8gRmdXaGl0ZVxuICBsZXQgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnV2hpdGU7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJpbmZvXCI6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdCbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIndhcm5pbmdcIjpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1llbGxvdztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdWNjZXNzXCI6XG4gICAgICBjb2xvciA9IFRlcm1pbmFsQ29sb3IuRmdHcmVlbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgY29sb3IgPSBUZXJtaW5hbENvbG9yLkZnUmVkO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbG9yID0gVGVybWluYWxDb2xvci5GZ1doaXRlO1xuICB9XG4gIGNvbnNvbGUubG9nKFxuICAgIGBbJHtUZXJtaW5hbENvbG9yLkZnTWFnZW50YX0ke2N1cnJlbnRUaW1lc3RhbXAoKSArIFRlcm1pbmFsQ29sb3IuUmVzZXR9XVske1xuICAgICAgVGVybWluYWxDb2xvci5GZ0N5YW5cbiAgICB9JHtsYWJlbH0ke1Rlcm1pbmFsQ29sb3IuUmVzZXR9XWAsXG4gICAgYCR7Y29sb3J9JHttZXNzYWdlLmpvaW4oXCJcIil9JHtUZXJtaW5hbENvbG9yLlJlc2V0fWBcbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgcHJpbnRMb2cgfSBmcm9tIFwifi91dGlscy9oZWxwZXJcIjtcbmltcG9ydCB7IGNsaWVudHMgfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIENsaWVudEV2ZW50ID0gXCJqb2luXCIgfCBcImpvaW5pbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50Q29udHJvbGxlciB7XG4gIHNvY2tldDogU29ja2V0O1xuICBjb25zdHJ1Y3Rvcihzb2NrZXQ6IFNvY2tldCkge1xuICAgIHRoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgIHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgKHJlYXNvbikgPT4ge1xuICAgICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiU09DS0VUXCIsIFwiZGlzY29ubmVjdGVkOiBcIiwgc29ja2V0LmlkKTtcbiAgICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgIGNvbnN0IGNsaWVudEluZGV4ID0gY2xpZW50cy5pbmRleE9mKHRoaXMpO1xuICAgICAgcHJpbnRMb2coXCJ3YXJuaW5nXCIsIFwiQ0xJRU5UXCIsIFwiUmVtb3ZpbmcgQ0xJRU5UI1wiLCBjbGllbnRJbmRleCk7XG4gICAgICBjbGllbnRzLnNwbGljZShjbGllbnRJbmRleCwgMSk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub248Q2xpZW50RXZlbnQ+KFwiam9pblwiLCAoZ2FtZUlkKSA9PiB7XG4gICAgICBwcmludExvZyhcImluZm9cIiwgXCJDTElFTlRcIiwgXCJuZXcgam9pbjogXCIsIGdhbWVJZCk7XG4gICAgICBzb2NrZXQuam9pbihnYW1lSWQpO1xuICAgICAgc29ja2V0LnRvKGdhbWVJZCkuZW1pdDxDbGllbnRFdmVudD4oXCJqb2luaW5nXCIsIFwic29tZW9uZSBpcyBqb2luaW5nXCIpO1xuICAgIH0pO1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FB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
