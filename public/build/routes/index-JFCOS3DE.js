import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-325D37MS.js";

// browser-route-module:/Users/papuq/Work/main-remix/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

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
var RubberText = ({ text = "", bounceIn }) => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: clsx_m_default("flex flex-row", {
      "animate-bounceInLeft": bounceIn === "left",
      bounceInRight: bounceIn === "right",
      bounceInUp: bounceIn === "up",
      bounceInDown: bounceIn === "down"
    })
  }, text.split("").map((c, i) => /* @__PURE__ */ import_react.default.createElement("h1", {
    key: i,
    className: clsx_m_default("font-virgil text-7xl hover:animate-rubber hover:text-lime-400 cursor-pointer")
  }, c)));
};
var rubberText_default = RubberText;

// app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement(rubberText_default, {
    text: "Hello"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "font-virgil text-4xl text-lime-400 bounceInRight"
  }, "Main")));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-JFCOS3DE.js.map
