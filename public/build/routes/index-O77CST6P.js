import {
  useDispatch
} from "/build/_shared/chunk-CYH4ZPB5.js";
import {
  __toESM,
  init_react,
  require_react,
  useNavigate
} from "/build/_shared/chunk-THPDYETP.js";

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
  rootClass = "",
  className = "font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-lime-400 cursor-pointer"
}) => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: clsx_m_default("flex flex-row", rootClass, {
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

// app/assets/images/playing-cards.png
var playing_cards_default = "/build/_assets/playing-cards-PK6EDUO4.png";

// app/routes/index.tsx
function Index() {
  const [gameId, setGameId] = import_react2.default.useState("");
  const dispatch = useDispatch();
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
    className: "flex flex-col overflow-hidden items-center justify-center"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: playing_cards_default,
    alt: "bg",
    width: 512,
    className: "absolute bottom-0 right-0 opacity-20 bounceInUp"
  }), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ import_react2.default.createElement(rubberText_default, {
    text: "Hello",
    rootClass: "mr-8"
  }), /* @__PURE__ */ import_react2.default.createElement(rubberText_default, {
    text: "there!"
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ import_react2.default.createElement(rubberText_default, {
    text: "Let's",
    bounceIn: "right",
    rootClass: "mr-8",
    className: "font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-slate-100 text-lime-400 cursor-pointer"
  }), /* @__PURE__ */ import_react2.default.createElement(rubberText_default, {
    text: "PLAY!",
    bounceIn: "right",
    className: "font-exo xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber px-2 hover:text-slate-100 text-lime-400 cursor-pointer"
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex xs:flex-col sm:flex-col md:flex-row lg::flex-row xl:flex-row 2xl:flex-row mt-8 items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "sm:mr-0 xs:mr-0 xl:mr-4 lg:mr-4 md:mr-4 border-lime-500 border-2 sm:w-full xs:w-full text-center xl:mb-0 lg:mb-0 md:mb-0 sm:mb-2 xs:mb-2"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    className: "btn-anim-bg px-4 py-2 font-exo text-slate-100 xl:text-xl lg:text-lg md:text-md text-sm",
    onClick: handleCreateGame
  }, /* @__PURE__ */ import_react2.default.createElement("p", null, "New Game"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-row border-2 border-lime-500 sm:w-full"
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    className: "h-100 bg-transparent outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo",
    placeholder: "Enter game ID here",
    onChange: handleRoomInput
  }), /* @__PURE__ */ import_react2.default.createElement("button", {
    className: "btn-anim-bg px-4 py-2 font-exo text-slate-100  xl:text-xl lg:text-lg md:text-md text-sm",
    onClick: handleJoin
  }, /* @__PURE__ */ import_react2.default.createElement("p", null, "Join")))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-O77CST6P.js.map
