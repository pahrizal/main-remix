import {
  __toESM,
  init_react,
  require_react,
  useNavigate
} from "/build/_shared/chunk-3WVC77ZC.js";

// browser-route-module:/Users/papuq/Work/main-remix/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/components/rubberText.tsx
init_react();

// node_modules/clsx/dist/clsx.m.js
init_react();
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// app/components/rubberText.tsx
var import_react = __toESM(require_react());
var RubberText = ({
  text = "",
  bounceIn,
  className = "font-virgil text-7xl hover:animate-rubber hover:text-lime-400 cursor-pointer"
}) => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: clsx_m_default("flex flex-row mr-8", {
      bounceInLeft: bounceIn === "left" || !bounceIn,
      bounceInRight: bounceIn === "right",
      bounceInUp: bounceIn === "up",
      bounceInDown: bounceIn === "down"
    })
  }, text.split("").map((c, i) => /* @__PURE__ */ import_react.default.createElement("h1", {
    key: i,
    className
  }, c)));
};
var rubberText_default = RubberText;

// app/routes/index.tsx
function Index() {
  const [gameId, setGameId] = import_react2.default.useState("");
  const nav = useNavigate();
  const handleRoomInput = (event) => {
    const value = event.target.value;
    if (!value)
      return;
    setGameId(value);
  };
  const handleJoin = () => {
    nav(gameId, { replace: true });
  };
  const handleCreateGame = () => {
  };
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ import_react2.default.createElement(rubberText_default, {
    text: "Hello"
  }), /* @__PURE__ */ import_react2.default.createElement(rubberText_default, {
    text: "there!"
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ import_react2.default.createElement(rubberText_default, {
    text: "Let's",
    bounceIn: "right",
    className: "font-virgil text-7xl hover:animate-rubber hover:text-slate-100 text-lime-400 cursor-pointer"
  }), /* @__PURE__ */ import_react2.default.createElement(rubberText_default, {
    text: "PLAY!",
    bounceIn: "right",
    className: "font-exo text-7xl hover:animate-rubber px-2 hover:text-slate-100 text-lime-400 cursor-pointer"
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-row mt-8"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mr-4"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    className: "px-8 py-4 border border-lime-400",
    onClick: handleCreateGame
  }, "New Game")), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-row border-2 border-lime-400"
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    className: "h-100 bg-transparent outline-none",
    onChange: handleRoomInput
  }), /* @__PURE__ */ import_react2.default.createElement("button", {
    className: "px-8 py-4",
    onClick: handleJoin
  }, "Join"))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-NSYPXPUF.js.map
