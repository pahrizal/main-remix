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
var import_react = __toESM(require_react());
var RubberText = ({ text = "" }) => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-row  animate-bounceInLeft"
  }, text.split("").map((c, i) => /* @__PURE__ */ import_react.default.createElement("h1", {
    key: i,
    className: "font-virgil text-7xl hover:animate-rubber hover:text-lime-400 cursor-pointer"
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
//# sourceMappingURL=/build/routes/index-VW2X6NNW.js.map