import { Reducer } from "redux";
import { JoinData } from "~/controllers/client";
import { GameData } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { generateName } from "~/utils/helper";
import { ThunkAction } from "./index";
import { socketActions, SocketActions } from "./socketState";

export interface GameState {
  data: JoinData | null;
  notFound: boolean;
  players: PlayerData[];
}

export const initialGameState: GameState = {
  data: null,
  notFound: false,
  players: [],
};

interface GameActionTypes {
  readonly SET_GAME_DATA: "SET_GAME_DATA";
  readonly SET_GAME_NOT_FOUND: "SET_GAME_NOT_FOUND";
  readonly SET_PLAYERS: "SET_PLAYERS";
}

const GameActionsTypes: GameActionTypes = {
  SET_GAME_DATA: "SET_GAME_DATA",
  SET_GAME_NOT_FOUND: "SET_GAME_NOT_FOUND",
  SET_PLAYERS: "SET_PLAYERS",
};

interface SetGameData {
  type: "SET_GAME_DATA";
  payload: typeof initialGameState.data;
}

interface SetPlayers {
  type: "SET_PLAYERS";
  payload: typeof initialGameState.players;
}
interface SetGameNotFound {
  type: "SET_GAME_NOT_FOUND";
  payload: typeof initialGameState.notFound;
}

export type GameActions = SetGameData | SetGameNotFound | SetPlayers;

export const gameActions = {
  // game action to set players in the game
  setPlayers: (
    players: PlayerData[]
  ): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: players,
      });
    };
  },

  // game action to add player to current game players list
  addPlayer: (player: PlayerData): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      // check if player already exist
      const players = getState().game.players;
      const playerExist = players.find((p) => p.id === player.id);
      if (playerExist) return;

      // add player to the player list
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: [...players, player],
      });
      console.log("player added", player);
    };
  },

  // game action to remove player from current game players list
  removePlayer: (
    playerId: string
  ): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      // check if player already exist
      const players = getState().game.players;
      const playerExist = players.find((p) => p.id === playerId);
      if (!playerExist) return;

      // remove player from the player list
      dispatch({
        type: GameActionsTypes.SET_PLAYERS,
        payload: players.filter((p) => p.id !== playerId),
      });
    };
  },

  // redux action to set game not found state
  setGameNotFound: (
    payload: typeof initialGameState.notFound
  ): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_GAME_NOT_FOUND,
        payload: payload,
      });
    };
  },

  // redux action to set game data
  setGameData: (data: JoinData): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      localStorage.setItem(data.gameData.id, JSON.stringify(data));
      dispatch({
        type: GameActionsTypes.SET_GAME_DATA,
        payload: data,
      });
    };
  },

  // redux action to create the game
  create: (playerName?: string): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket) return;
      const gameData: GameData = {
        id: generateName(),
        level: 1,
        owner: "",
      };
      socket.emit("create", { playerName, gameData });

      // when game created, start listening all game events
      socketActions.startLinsteningGameEvents()(dispatch, getState);
    };
  },

  // redux action to join the game
  join: (
    gameId: string,
    playerName: string
  ): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket) return;

      // when joining a game, start listening all game events
      socketActions.startLinsteningGameEvents()(dispatch, getState);

      let joinData = getState().game.data;

      // load join data from local storage
      const persistantGameData = localStorage.getItem(gameId);

      // if gameData is null, then try to use persistantGameData
      if (!joinData) {
        if (persistantGameData) {
          joinData = JSON.parse(persistantGameData);
          dispatch({
            type: GameActionsTypes.SET_GAME_DATA,
            payload: joinData,
          });
        }
      }

      // check if current gameData id is the same as the gameId
      if (joinData?.gameData.id === gameId) {
        //just update the socketId for this game
        joinData.playerData.socketId = socket.id;
        dispatch({
          type: GameActionsTypes.SET_GAME_DATA,
          payload: joinData,
        });
        return;
      }

      // if the gameId is different, then prepare new join data
      joinData = {
        gameData: {
          id: gameId,
          level: 1,
          owner: "",
        },
        playerData: {
          id: "",
          name: playerName,
          socketId: socket.id,
        },
      };
      // send the join request to the server
      socket.emit("join", joinData);
    };
  },
  leave: (): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      const gameData = getState().game.data;
      if (!socket || !gameData) return;
      socket.emit("leave", gameData);

      // when leaving a game, stop listening all game events
      socketActions.stopListeningGameEvents()(dispatch, getState);

      // remove the game data from local storage
      localStorage.removeItem(gameData.gameData.id);
      // remove game data from redux store
      dispatch({
        type: GameActionsTypes.SET_GAME_DATA,
        payload: null,
      });
      document.location = "/";
    };
  },
  toggleNotFound: (): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      const notFound = getState().game.notFound;
      dispatch({
        type: GameActionsTypes.SET_GAME_NOT_FOUND,
        payload: !notFound,
      });
    };
  },
};

export const GameReducer: Reducer<GameState, GameActions> = (
  state: GameState | undefined,
  action: GameActions
): GameState => {
  if (state === undefined) {
    return initialGameState;
  }

  switch (action.type) {
    case GameActionsTypes.SET_GAME_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case GameActionsTypes.SET_GAME_NOT_FOUND:
      return {
        ...state,
        notFound: action.payload,
      };
    case GameActionsTypes.SET_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };

    default:
      return state;
  }
};
