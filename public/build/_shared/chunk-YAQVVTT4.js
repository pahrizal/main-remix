import {
  init_react
} from "/build/_shared/chunk-4DF5W3YO.js";

// app/stores/gameState.ts
init_react();

// node_modules/uuid/dist/esm-browser/index.js
init_react();

// node_modules/uuid/dist/esm-browser/rng.js
init_react();
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/stringify.js
init_react();

// node_modules/uuid/dist/esm-browser/validate.js
init_react();

// node_modules/uuid/dist/esm-browser/regex.js
init_react();
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
var i;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
init_react();
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// app/stores/gameState.ts
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
      const newGameId = v4_default();
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
      return {
        ...state,
        currentGameId: action.payload
      };
    case GameActionsTypes.SET_PLAYERS:
      return {
        ...state,
        players: action.payload
      };
    default:
      return state;
  }
};

export {
  initialGameState,
  gameActions,
  GameReducer
};
//# sourceMappingURL=/build/_shared/chunk-YAQVVTT4.js.map
