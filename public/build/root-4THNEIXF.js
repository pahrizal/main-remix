import {
  require_react_dom
} from "/build/_shared/chunk-Z7GQO3LE.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  init_extends,
  init_react,
  require_object_assign,
  require_react
} from "/build/_shared/chunk-3WVC77ZC.js";

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var init_defineProperty = __esm({
  "node_modules/@babel/runtime/helpers/esm/defineProperty.js"() {
    init_react();
  }
});

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var init_objectSpread2 = __esm({
  "node_modules/@babel/runtime/helpers/esm/objectSpread2.js"() {
    init_react();
    init_defineProperty();
  }
});

// node_modules/redux/es/redux.js
var redux_exports = {};
__export(redux_exports, {
  __DO_NOT_USE__ActionTypes: () => ActionTypes,
  applyMiddleware: () => applyMiddleware,
  bindActionCreators: () => bindActionCreators,
  combineReducers: () => combineReducers,
  compose: () => compose,
  createStore: () => createStore
});
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  var constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  var typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers2, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers2);
  var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!isPlainObject(inputState)) {
    return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }
  var unexpectedKeys = Object.keys(inputState).filter(function(key) {
    return !reducers2.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function(key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}
function assertReducerShape(reducers2) {
  Object.keys(reducers2).forEach(function(key) {
    var reducer = reducers2[key];
    var initialState = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error(false ? formatProdErrorMessage(12) : 'The slice reducer for key "' + key + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(false ? formatProdErrorMessage(13) : 'The slice reducer for key "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ActionTypes.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
    }
  });
}
function combineReducers(reducers2) {
  var reducerKeys = Object.keys(reducers2);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (true) {
      if (typeof reducers2[key] === "undefined") {
        warning('No reducer provided for key "' + key + '"');
      }
    }
    if (typeof reducers2[key] === "function") {
      finalReducers[key] = reducers2[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;
  if (true) {
    unexpectedKeyCache = {};
  }
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        var actionType = action && action.type;
        throw new Error(false ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? '"' + String(actionType) + '"' : "(unknown type)") + ', the slice reducer for key "' + _key + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(false ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b) {
    return function() {
      return a(b.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store2 = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(false ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      var middlewareAPI = {
        getState: store2.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store2.dispatch);
      return _objectSpread2(_objectSpread2({}, store2), {}, {
        dispatch: _dispatch
      });
    };
  };
}
function isCrushed() {
}
var $$observable, randomString, ActionTypes;
var init_redux = __esm({
  "node_modules/redux/es/redux.js"() {
    init_react();
    init_objectSpread2();
    $$observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
    randomString = function randomString2() {
      return Math.random().toString(36).substring(7).split("").join(".");
    };
    ActionTypes = {
      INIT: "@@redux/INIT" + randomString(),
      REPLACE: "@@redux/REPLACE" + randomString(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
      }
    };
    if (typeof isCrushed.name === "string" && isCrushed.name !== "isCrushed") {
      warning('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');
    }
  }
});

// node_modules/redux-devtools-extension/index.js
var require_redux_devtools_extension = __commonJS({
  "node_modules/redux-devtools-extension/index.js"(exports) {
    "use strict";
    init_react();
    var compose2 = (init_redux(), __toCommonJS(redux_exports)).compose;
    exports.__esModule = true;
    exports.composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
      if (arguments.length === 0)
        return void 0;
      if (typeof arguments[0] === "object")
        return compose2;
      return compose2.apply(null, arguments);
    };
    exports.devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
      return function(noop) {
        return noop;
      };
    };
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType2(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    init_react();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    init_react();
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    init_react();
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location2, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location2 + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location2 + " type: " + error.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    init_react();
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location2, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location2, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location2, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location2, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location2, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location2, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location2, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location2 + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    init_react();
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    init_react();
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType2(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-redux/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/react-redux/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/parseuri/index.js
var require_parseuri = __commonJS({
  "node_modules/parseuri/index.js"(exports, module) {
    init_react();
    var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor"
    ];
    module.exports = function parseuri3(str) {
      var src = str, b = str.indexOf("["), e = str.indexOf("]");
      if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
      }
      var m = re.exec(str || ""), uri = {}, i = 14;
      while (i--) {
        uri[parts[i]] = m[i] || "";
      }
      if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
        uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        uri.ipv6uri = true;
      }
      uri.pathNames = pathNames(uri, uri["path"]);
      uri.queryKey = queryKey(uri, uri["query"]);
      return uri;
    };
    function pathNames(obj, path) {
      var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
      if (path.substr(0, 1) == "/" || path.length === 0) {
        names.splice(0, 1);
      }
      if (path.substr(path.length - 1, 1) == "/") {
        names.splice(names.length - 1, 1);
      }
      return names;
    }
    function queryKey(uri, query) {
      var data = {};
      query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) {
          data[$1] = $2;
        }
      });
      return data;
    }
  }
});

// node_modules/has-cors/index.js
var require_has_cors = __commonJS({
  "node_modules/has-cors/index.js"(exports, module) {
    init_react();
    try {
      module.exports = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
    } catch (err) {
      module.exports = false;
    }
  }
});

// node_modules/@socket.io/component-emitter/index.js
var require_component_emitter = __commonJS({
  "node_modules/@socket.io/component-emitter/index.js"(exports) {
    init_react();
    exports.Emitter = Emitter7;
    function Emitter7(obj) {
      if (obj)
        return mixin(obj);
    }
    function mixin(obj) {
      for (var key in Emitter7.prototype) {
        obj[key] = Emitter7.prototype[key];
      }
      return obj;
    }
    Emitter7.prototype.on = Emitter7.prototype.addEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
      return this;
    };
    Emitter7.prototype.once = function(event, fn) {
      function on2() {
        this.off(event, on2);
        fn.apply(this, arguments);
      }
      on2.fn = fn;
      this.on(event, on2);
      return this;
    };
    Emitter7.prototype.off = Emitter7.prototype.removeListener = Emitter7.prototype.removeAllListeners = Emitter7.prototype.removeEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (arguments.length == 0) {
        this._callbacks = {};
        return this;
      }
      var callbacks = this._callbacks["$" + event];
      if (!callbacks)
        return this;
      if (arguments.length == 1) {
        delete this._callbacks["$" + event];
        return this;
      }
      var cb;
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      if (callbacks.length === 0) {
        delete this._callbacks["$" + event];
      }
      return this;
    };
    Emitter7.prototype.emit = function(event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }
      return this;
    };
    Emitter7.prototype.emitReserved = Emitter7.prototype.emit;
    Emitter7.prototype.listeners = function(event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + event] || [];
    };
    Emitter7.prototype.hasListeners = function(event) {
      return !!this.listeners(event).length;
    };
  }
});

// node_modules/yeast/index.js
var require_yeast = __commonJS({
  "node_modules/yeast/index.js"(exports, module) {
    "use strict";
    init_react();
    var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
    var length = 64;
    var map = {};
    var seed = 0;
    var i = 0;
    var prev;
    function encode(num) {
      var encoded = "";
      do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
      } while (num > 0);
      return encoded;
    }
    function decode2(str) {
      var decoded = 0;
      for (i = 0; i < str.length; i++) {
        decoded = decoded * length + map[str.charAt(i)];
      }
      return decoded;
    }
    function yeast3() {
      var now = encode(+new Date());
      if (now !== prev)
        return seed = 0, prev = now;
      return now + "." + encode(seed++);
    }
    for (; i < length; i++)
      map[alphabet[i]] = i;
    yeast3.encode = encode;
    yeast3.decode = decode2;
    module.exports = yeast3;
  }
});

// node_modules/parseqs/index.js
var require_parseqs = __commonJS({
  "node_modules/parseqs/index.js"(exports) {
    init_react();
    exports.encode = function(obj) {
      var str = "";
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (str.length)
            str += "&";
          str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
        }
      }
      return str;
    };
    exports.decode = function(qs) {
      var qry = {};
      var pairs = qs.split("&");
      for (var i = 0, l = pairs.length; i < l; i++) {
        var pair = pairs[i].split("=");
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
      return qry;
    };
  }
});

// node_modules/backo2/index.js
var require_backo2 = __commonJS({
  "node_modules/backo2/index.js"(exports, module) {
    init_react();
    module.exports = Backoff2;
    function Backoff2(opts) {
      opts = opts || {};
      this.ms = opts.min || 100;
      this.max = opts.max || 1e4;
      this.factor = opts.factor || 2;
      this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
      this.attempts = 0;
    }
    Backoff2.prototype.duration = function() {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
      }
      return Math.min(ms, this.max) | 0;
    };
    Backoff2.prototype.reset = function() {
      this.attempts = 0;
    };
    Backoff2.prototype.setMin = function(min) {
      this.ms = min;
    };
    Backoff2.prototype.setMax = function(max) {
      this.max = max;
    };
    Backoff2.prototype.setJitter = function(jitter) {
      this.jitter = jitter;
    };
  }
});

// browser-route-module:/Users/papuq/Work/main-remix/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/stores/index.ts
init_react();

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
      return {
        ...state,
        client: action.payload
      };
    case SocketActionsTypes.SET_CONNECTED:
      return {
        ...state,
        connected: action.payload
      };
    default:
      return state;
  }
};

// app/stores/index.ts
var initialAppState = {
  socket: initialSocketState
};
var reducers = {
  socket: SocketReducer
};

// app/stores/config.ts
init_react();
init_redux();

// node_modules/redux-thunk/es/index.js
init_react();
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var es_default = thunk;

// app/stores/config.ts
var bindMiddleware = (middleware) => {
  if (true) {
    const { composeWithDevTools } = require_redux_devtools_extension();
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
var configureStore = (initialState) => {
  const middleware = [es_default];
  const rootReducer = combineReducers({
    ...reducers
  });
  const store2 = createStore(rootReducer, initialState, bindMiddleware(middleware));
  return store2;
};
var config_default = configureStore;

// node_modules/react-redux/es/index.js
init_react();

// node_modules/react-redux/es/exports.js
init_react();

// node_modules/react-redux/es/components/Provider.js
init_react();
var import_react3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/react-redux/es/components/Context.js
init_react();
var import_react = __toESM(require_react());
var ReactReduxContext = /* @__PURE__ */ import_react.default.createContext(null);
if (true) {
  ReactReduxContext.displayName = "ReactRedux";
}

// node_modules/react-redux/es/utils/Subscription.js
init_react();

// node_modules/react-redux/es/utils/batch.js
init_react();
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};

// node_modules/react-redux/es/utils/Subscription.js
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store2, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}

// node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
init_react();
var import_react2 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;

// node_modules/react-redux/es/components/Provider.js
function Provider(_ref) {
  var store2 = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = (0, import_react3.useMemo)(function() {
    var subscription = createSubscription(store2);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store2,
      subscription
    };
  }, [store2]);
  var previousState = (0, import_react3.useMemo)(function() {
    return store2.getState();
  }, [store2]);
  useIsomorphicLayoutEffect(function() {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /* @__PURE__ */ import_react3.default.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
if (true) {
  Provider.propTypes = {
    store: import_prop_types.default.shape({
      subscribe: import_prop_types.default.func.isRequired,
      dispatch: import_prop_types.default.func.isRequired,
      getState: import_prop_types.default.func.isRequired
    }),
    context: import_prop_types.default.object,
    children: import_prop_types.default.any
  };
}
var Provider_default = Provider;

// node_modules/react-redux/es/components/connectAdvanced.js
init_react();
init_extends();

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_react();

// node_modules/react-redux/es/components/connectAdvanced.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var import_react4 = __toESM(require_react());
var import_react_is = __toESM(require_react_is2());

// node_modules/react-redux/es/connect/connect.js
init_react();
init_extends();

// node_modules/react-redux/es/utils/shallowEqual.js
init_react();

// node_modules/react-redux/es/connect/mapDispatchToProps.js
init_react();

// node_modules/react-redux/es/utils/bindActionCreators.js
init_react();

// node_modules/react-redux/es/connect/wrapMapToProps.js
init_react();

// node_modules/react-redux/es/utils/verifyPlainObject.js
init_react();

// node_modules/react-redux/es/utils/isPlainObject.js
init_react();

// node_modules/react-redux/es/utils/warning.js
init_react();

// node_modules/react-redux/es/connect/mapStateToProps.js
init_react();

// node_modules/react-redux/es/connect/mergeProps.js
init_react();
init_extends();

// node_modules/react-redux/es/connect/selectorFactory.js
init_react();

// node_modules/react-redux/es/connect/verifySubselectors.js
init_react();

// node_modules/react-redux/es/hooks/useDispatch.js
init_react();

// node_modules/react-redux/es/hooks/useStore.js
init_react();
var import_react6 = __toESM(require_react());

// node_modules/react-redux/es/hooks/useReduxContext.js
init_react();
var import_react5 = __toESM(require_react());
function useReduxContext() {
  var contextValue = (0, import_react5.useContext)(ReactReduxContext);
  if (!contextValue) {
    throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
  }
  return contextValue;
}

// node_modules/react-redux/es/hooks/useStore.js
function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext2 = context === ReactReduxContext ? useReduxContext : function() {
    return (0, import_react6.useContext)(context);
  };
  return function useStore2() {
    var _useReduxContext = useReduxContext2(), store2 = _useReduxContext.store;
    return store2;
  };
}
var useStore = /* @__PURE__ */ createStoreHook();

// node_modules/react-redux/es/hooks/useDispatch.js
function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    var store2 = useStore2();
    return store2.dispatch;
  };
}
var useDispatch = /* @__PURE__ */ createDispatchHook();

// node_modules/react-redux/es/hooks/useSelector.js
init_react();
var import_react7 = __toESM(require_react());

// node_modules/react-redux/es/utils/reactBatchedUpdates.js
init_react();
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-redux/es/index.js
setBatch(import_react_dom.unstable_batchedUpdates);

// app/assets/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VFDFUC5E.css";

// app/assets/styles/app.css
var app_default = "/build/_assets/app-Q2D3FZV5.css";

// app/assets/styles/animation.css
var animation_default = "/build/_assets/animation-PKH7NYZ7.css";

// app/root.tsx
var import_react8 = __toESM(require_react());

// node_modules/socket.io-client/build/esm/index.js
init_react();

// node_modules/socket.io-client/build/esm/url.js
init_react();
var import_parseuri = __toESM(require_parseuri(), 1);
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (uri == null)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if (uri.charAt(0) === "/") {
      if (uri.charAt(1) === "/") {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if (typeof loc !== "undefined") {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_parseuri.default)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/manager.js
init_react();

// node_modules/engine.io-client/build/esm/index.js
init_react();

// node_modules/engine.io-client/build/esm/socket.js
init_react();

// node_modules/engine.io-client/build/esm/transports/index.js
init_react();

// node_modules/engine.io-client/build/esm/transports/polling-xhr.js
init_react();

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
init_react();
var import_has_cors = __toESM(require_has_cors(), 1);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
init_react();
var globalThis_browser_default = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function xmlhttprequest_browser_default(opts) {
  const xdomain = opts.xdomain;
  try {
    if (typeof XMLHttpRequest !== "undefined" && (!xdomain || import_has_cors.default)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThis_browser_default[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}

// node_modules/engine.io-client/build/esm/util.js
init_react();
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = setTimeout;
var NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis_browser_default);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis_browser_default);
  } else {
    obj.setTimeoutFn = setTimeout.bind(globalThis_browser_default);
    obj.clearTimeoutFn = clearTimeout.bind(globalThis_browser_default);
  }
}

// node_modules/engine.io-client/build/esm/transports/polling-xhr.js
var import_component_emitter2 = __toESM(require_component_emitter(), 1);

// node_modules/engine.io-client/build/esm/transports/polling.js
init_react();

// node_modules/engine.io-client/build/esm/transport.js
init_react();

// node_modules/engine.io-client/node_modules/engine.io-parser/build/esm/index.js
init_react();

// node_modules/engine.io-client/node_modules/engine.io-parser/build/esm/encodePacket.browser.js
init_react();

// node_modules/engine.io-client/node_modules/engine.io-parser/build/esm/commons.js
init_react();
var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// node_modules/engine.io-client/node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + content);
  };
  return fileReader.readAsDataURL(data);
};
var encodePacket_browser_default = encodePacket;

// node_modules/engine.io-client/node_modules/engine.io-parser/build/esm/decodePacket.browser.js
init_react();

// node_modules/@socket.io/base64-arraybuffer/dist/base64-arraybuffer.es5.js
init_react();
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var i;
var decode = function(base64) {
  var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-client/node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data;
  }
};
var decodePacket_browser_default = decodePacket;

// node_modules/engine.io-client/node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket_browser_default(packet, false, (encodedPacket) => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket_browser_default(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var protocol = 4;

// node_modules/engine.io-client/build/esm/transport.js
var import_component_emitter = __toESM(require_component_emitter(), 1);
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  onError(msg, desc) {
    const err = new Error(msg);
    err.type = "TransportError";
    err.description = desc;
    super.emit("error", err);
    return this;
  }
  open() {
    if (this.readyState === "closed" || this.readyState === "") {
      this.readyState = "opening";
      this.doOpen();
    }
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
    }
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emit("open");
  }
  onData(data) {
    const packet = decodePacket_browser_default(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emit("packet", packet);
  }
  onClose() {
    this.readyState = "closed";
    super.emit("close");
  }
};

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_yeast = __toESM(require_yeast(), 1);
var import_parseqs = __toESM(require_parseqs(), 1);
var Polling = class extends Transport {
  constructor() {
    super(...arguments);
    this.polling = false;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emit("poll");
  }
  onData(data) {
    const callback = (packet) => {
      if (this.readyState === "opening" && packet.type === "open") {
        this.onOpen();
      }
      if (packet.type === "close") {
        this.onClose();
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if (this.readyState !== "closed") {
      this.polling = false;
      this.emit("pollComplete");
      if (this.readyState === "open") {
        this.poll();
      } else {
      }
    }
  }
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if (this.readyState === "open") {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emit("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (this.opts.timestampRequests !== false) {
      query[this.opts.timestampParam] = (0, import_yeast.default)();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && (schema === "https" && Number(this.opts.port) !== 443 || schema === "http" && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = import_parseqs.default.encode(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
};

// node_modules/engine.io-client/build/esm/transports/polling-xhr.js
function empty() {
}
var hasXHR2 = function() {
  const xhr = new xmlhttprequest_browser_default({
    xdomain: false
  });
  return xhr.responseType != null;
}();
var XHR = class extends Polling {
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = location.protocol === "https:";
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (err) => {
      this.onError("xhr post error", err);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (err) => {
      this.onError("xhr poll error", err);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = opts.async !== false;
    this.data = opts.data !== void 0 ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new xmlhttprequest_browser_default(opts);
    try {
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {
      }
      if (this.method === "POST") {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4)
          return;
        if (xhr.status === 200 || xhr.status === 1223) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onSuccess() {
    this.emit("success");
    this.cleanup();
  }
  onData(data) {
    this.emit("data", data);
    this.onSuccess();
  }
  onError(err) {
    this.emit("error", err);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if (typeof this.xhr === "undefined" || this.xhr === null) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.onData(data);
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThis_browser_default ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket.js
init_react();
var import_parseqs2 = __toESM(require_parseqs(), 1);
var import_yeast2 = __toESM(require_yeast(), 1);

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
init_react();
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThis_browser_default.WebSocket || globalThis_browser_default.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emit("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      encodePacket_browser_default(packet, this.supportsBinary, (data) => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = typeof data === "string" ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emit("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && (schema === "wss" && Number(this.opts.port) !== 443 || schema === "ws" && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = (0, import_yeast2.default)();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = import_parseqs2.default.encode(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  polling: XHR
};

// node_modules/engine.io-client/build/esm/socket.js
var import_parseqs3 = __toESM(require_parseqs(), 1);
var import_parseuri2 = __toESM(require_parseuri(), 1);
var import_component_emitter3 = __toESM(require_component_emitter(), 1);
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    if (uri && typeof uri === "object") {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = (0, import_parseuri2.default)(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query)
        opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = (0, import_parseuri2.default)(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = opts.secure != null ? opts.secure : typeof location !== "undefined" && location.protocol === "https:";
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
    if (typeof this.opts.query === "string") {
      this.opts.query = import_parseqs3.default.decode(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        addEventListener("beforeunload", () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        }, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close");
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = clone(this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", () => {
      this.onClose("transport close");
    });
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if (msg.type === "pong" && msg.data === "probe") {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          Socket.priorWebsocketSuccess = transport.name === "websocket";
          this.transport.pause(() => {
            if (failed)
              return;
            if (this.readyState === "closed")
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = this.transport.name === "websocket";
    this.emitReserved("open");
    this.flush();
    if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
      let i = 0;
      const l = this.upgrades.length;
      for (; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }
  onPacket(packet) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
    }
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.onOpen();
    if (this.readyState === "closed")
      return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (this.writeBuffer.length === 0) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      this.transport.send(this.writeBuffer);
      this.prevBufferLen = this.writeBuffer.length;
      this.emitReserved("flush");
    }
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if (typeof data === "function") {
      fn = data;
      data = void 0;
    }
    if (typeof options === "function") {
      fn = options;
      options = null;
    }
    if (this.readyState === "closing" || this.readyState === "closed") {
      return;
    }
    options = options || {};
    options.compress = options.compress !== false;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if (this.readyState === "opening" || this.readyState === "open") {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, desc) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, desc);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;
    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = protocol;
function clone(obj) {
  const o = {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;

// node_modules/socket.io-client/build/esm/socket.js
init_react();

// node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol3
});
init_react();
var import_component_emitter4 = __toESM(require_component_emitter(), 1);

// node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js
init_react();

// node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js
init_react();
var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
var isView2 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = void 0;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder) {
    return buffers[data.num];
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
        return this.encodeAsBinary(obj);
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && obj.nsp !== "/") {
      str += obj.nsp + ",";
    }
    if (obj.id != null) {
      str += obj.id;
    }
    if (obj.data != null) {
      str += JSON.stringify(obj.data);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class extends import_component_emitter4.Emitter {
  constructor() {
    super();
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      packet = this.decodeString(obj);
      if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {
      }
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if (str.charAt(i + 1) === "/") {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (c === ",")
          break;
        if (i === str.length)
          break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if (next !== "" && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (c == null || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length)
          break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  }
};
function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};

// node_modules/socket.io-client/build/esm/on.js
init_react();
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_component_emitter5 = __toESM(require_component_emitter(), 1);
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket2 = class extends import_component_emitter5.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.disconnected = true;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    if (this.io._autoConnect)
      this.open();
  }
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if (this.io._readyState === "open")
      this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev + '" is a reserved event name');
    }
    args.unshift(ev);
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if (typeof args[args.length - 1] === "function") {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {
    } else if (this.connected) {
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this.packet({ type: PacketType.CONNECT, data });
      });
    } else {
      this.packet({ type: PacketType.CONNECT, data: this.auth });
    }
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason) {
    this.connected = false;
    this.disconnected = true;
    delete this.id;
    this.emitReserved("disconnect", reason);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
        this.onevent(packet);
        break;
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
        this.onack(packet);
        break;
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (packet.id != null) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
  }
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack === "function") {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {
    }
  }
  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.disconnected = false;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => this.packet(packet));
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
};

// node_modules/socket.io-client/build/esm/manager.js
var import_backo2 = __toESM(require_backo2(), 1);
var import_component_emitter6 = __toESM(require_component_emitter(), 1);
var Manager = class extends import_component_emitter6.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new import_backo2.default({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(opts.timeout == null ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || esm_exports;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", (err) => {
      self2.cleanup();
      self2._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self2.maybeReconnectOnOpen();
      }
    });
    if (this._timeout !== false) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    this.decoder.add(data);
  }
  ondecoded(packet) {
    this.emitReserved("packet", packet);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine)
      this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var cache = {};
function lookup2(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || opts.multiplex === false || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup2, {
  Manager,
  Socket: Socket2,
  io: lookup2,
  connect: lookup2
});

// app/root.tsx
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
var persistedState = {
  ...initialAppState
};
var store = config_default(persistedState);
function App() {
  const dispatch = useDispatch();
  import_react8.default.useEffect(() => {
    dispatch(socketActions.init(lookup2(), (data) => {
    }));
  }, []);
  return /* @__PURE__ */ import_react8.default.createElement("html", {
    lang: "en",
    className: "bg-slate-900 text-slate-100 flex flex-col justify-center items-center w-screen h-screen"
  }, /* @__PURE__ */ import_react8.default.createElement("head", null, /* @__PURE__ */ import_react8.default.createElement(Meta, null), /* @__PURE__ */ import_react8.default.createElement(Links, null)), /* @__PURE__ */ import_react8.default.createElement("body", null, /* @__PURE__ */ import_react8.default.createElement(Outlet, null), /* @__PURE__ */ import_react8.default.createElement(ScrollRestoration, null), /* @__PURE__ */ import_react8.default.createElement(Scripts, null), /* @__PURE__ */ import_react8.default.createElement(LiveReload, null)));
}
function AppWithRedux() {
  return /* @__PURE__ */ import_react8.default.createElement(Provider_default, {
    store
  }, /* @__PURE__ */ import_react8.default.createElement(App, null));
}
export {
  AppWithRedux as default,
  links,
  meta
};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/root-4THNEIXF.js.map
