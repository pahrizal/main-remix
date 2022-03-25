import {
  gameActions,
  useDispatch,
  useSelector
} from "/build/_shared/chunk-F4LAGYLT.js";
import {
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-DFATZYL6.js";

// browser-route-module:/Users/papuq/Work/main-remix/app/routes/$id.tsx?browser
init_react();

// app/routes/$id.tsx
init_react();
var import_react = __toESM(require_react());
var GameScreen = () => {
  const data = useLoaderData();
  const socket = useSelector((state) => state.socket.client);
  const dataState = useSelector((state) => state.game.data);
  const dispatch = useDispatch();
  import_react.default.useEffect(() => {
    if (data.id && socket) {
      dispatch(gameActions.join(data.id));
    }
  }, [data, dispatch, socket]);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "w-screen h-screen flex flex-col justify-center items-center"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-xl font-exo mr-2"
  }, "Game ID:"), /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-xl"
  }, dataState == null ? void 0 : dataState.gameData.id)), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-xl font-exo mr-2"
  }, "Player ID:"), /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-xl"
  }, dataState == null ? void 0 : dataState.playerData.id)), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-xl font-exo mr-2"
  }, "Player Count:"), /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-xl"
  }, dataState == null ? void 0 : dataState.gameData.playerCount)), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-xl font-exo mr-2"
  }, "is owner"), /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "text-xl"
  }, (dataState == null ? void 0 : dataState.gameData.owner) === (dataState == null ? void 0 : dataState.playerData.id) ? "true" : "false")));
};
var id_default = GameScreen;
export {
  id_default as default
};
//# sourceMappingURL=/build/routes/$id-VVLZS7A3.js.map
