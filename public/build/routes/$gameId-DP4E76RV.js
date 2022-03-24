import {
  useSelector
} from "/build/_shared/chunk-CBNXGSFD.js";
import {
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-V5NSMUG2.js";

// browser-route-module:/Users/papuq/Work/main-remix/app/routes/$gameId.tsx?browser
init_react();

// app/routes/$gameId.tsx
init_react();
var import_react = __toESM(require_react());
var GameScreen = () => {
  const socket = useSelector((state) => state.socket.client);
  const data = useLoaderData();
  import_react.default.useEffect(() => {
    if (!socket)
      return;
    socket.emit("join", data.gameId);
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("div", null, "GameScreen");
};
var gameId_default = GameScreen;
export {
  gameId_default as default
};
//# sourceMappingURL=/build/routes/$gameId-DP4E76RV.js.map
