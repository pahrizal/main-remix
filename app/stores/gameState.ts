import { Reducer } from "redux";
import { v4 as uuidV4 } from "uuid";
import { JoinData } from "~/controllers/client";
import { GameData } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { printLog } from "~/utils/helper";
import { ThunkAction } from "./index";
import { SocketActions } from "./socketState";

export interface GameState {
  data: JoinData | null;
}

export const initialGameState: GameState = {
  data: null,
};

interface GameActionTypes {
  readonly SET_GAME_DATA: "SET_GAME_DATA";
}

const GameActionsTypes: GameActionTypes = {
  SET_GAME_DATA: "SET_GAME_DATA",
};

interface SetGameData {
  type: "SET_GAME_DATA";
  payload: typeof initialGameState.data;
}

export type GameActions = SetGameData;

export const gameActions = {
  create: (): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      console.log("creating new game");
      if (!socket) return;
      const newData: JoinData = {
        gameData: {
          id: socket.id,
          level: 1,
          owner: "",
        },
        playerData: {
          id: "",
          name: "",
          socketId: socket.id,
        },
      };
      dispatch({
        type: GameActionsTypes.SET_GAME_DATA,
        payload: newData,
      });
    };
  },
  join: (gameId: string): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      let gameData = getState().game.data;
      const persistantGameData = localStorage.getItem(gameId);

      // if we dont have any active socket connection, dont do anything
      if (!socket) {
        printLog("error", "WEB", "Socket is not connected");
        return;
      }

      // if gameData is null, then try to use persistantGameData
      if (!gameData) {
        if (persistantGameData) {
          gameData = JSON.parse(persistantGameData);
          dispatch({
            type: GameActionsTypes.SET_GAME_DATA,
            payload: gameData,
          });
        }
      }

      // check if current gameData id is the same as the gameId
      if (gameData?.gameData.id === gameId) {
        printLog("warning", "GAME", "Already in this game");
        //just update the socketId for this game
        gameData.playerData.socketId = socket.id;
        dispatch({
          type: GameActionsTypes.SET_GAME_DATA,
          payload: gameData,
        });
        return;
      } else {
        // if the gameId is different, then prepare new join data
        gameData = {
          gameData: {
            id: gameId,
            level: 1,
            owner: "",
          },
          playerData: {
            id: "",
            name: "",
            socketId: socket.id,
          },
        };
      }

      // send the join request to the server
      socket.emit("join", gameData);

      // listen to the response from the server
      socket.on("joined", (payload: JoinData) => {
        dispatch({
          type: GameActionsTypes.SET_GAME_DATA,
          payload: payload,
        });
        localStorage.setItem(gameId, JSON.stringify(payload));
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
    default:
      return state;
  }
};
