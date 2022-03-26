import { Reducer } from "redux";
import { Socket } from "socket.io-client";
import { GameData, GameStatus } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { JoinData } from "../controllers/client";
import { gameActions, GameActions } from "./gameState";
import { ThunkAction } from "./index";

export interface SocketState {
  client: Socket | null;
  connected: boolean;
}

export const initialSocketState: SocketState = {
  client: null,
  connected: false,
};

interface SocketActionTypes {
  readonly SET_SOCKET: "SET_SOCKET";
  readonly SET_CONNECTED: "SET_CONNECTED";
}

const SocketActionsTypes: SocketActionTypes = {
  SET_SOCKET: "SET_SOCKET",
  SET_CONNECTED: "SET_CONNECTED",
};

interface SetSocket {
  type: "SET_SOCKET";
  payload: typeof initialSocketState.client;
}
interface SetConnected {
  type: "SET_CONNECTED";
  payload: typeof initialSocketState.connected;
}

export type SocketActions = SetSocket | SetConnected;

export const socketActions = {
  // socket action to set the connected socket client
  init: (
    socket: typeof initialSocketState.client,
    onData: (data: any) => void
  ): ThunkAction<SocketActions | GameActions> => {
    return async (dispatch, getState) => {
      if (!socket) return;

      socket.on("connect", () => {
        dispatch({
          type: SocketActionsTypes.SET_CONNECTED,
          payload: true,
        });
      });

      dispatch({
        type: SocketActionsTypes.SET_SOCKET,
        payload: socket,
      });
    };
  },

  // socket action to start listening all game events
  startLinsteningGameEvents: (): ThunkAction<SocketActions | GameActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket) return;
      // listen response from server when game created
      socket.on("created", (payload: JoinData) => {
        console.log("game created", payload);
        // dispatch game action to set the game data
        gameActions.setGameData(payload)(dispatch, getState);
        // add player to the game
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
      });

      // listen to new player joined event
      socket.on("players", (payload: PlayerData[]) => {
        console.log("new player list", payload);
        // add player to the game
        gameActions.setPlayers(payload)(dispatch, getState);
      });

      // listen if the game is not found
      socket.on("notFound", (payload) => {
        gameActions.setGameNotFound(true)(dispatch, getState);
      });

      // listen to the response from the server
      socket.on("joined", (payload: JoinData) => {
        console.log("joined", payload);
        // dispatch game action to set the game data
        gameActions.setGameData(payload)(dispatch, getState);

        // add player to the game players list
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
      });

      // listen for the player left the game event
      socket.on("left", (payload: PlayerData) => {
        console.log(payload.name, "has left the game");
        // remove player from the player list
        gameActions.removePlayer(payload.id)(dispatch, getState);
      });

      // listen for the game start event
      socket.on("started", (payload: JoinData) => {
        console.log("game started", payload);
        // dispatch game action to set the game data
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setGameStatus(GameStatus.STARTED)(dispatch, getState);
      });
    };
  },

  // socket action to stop listening all game events
  stopListeningGameEvents: (): ThunkAction<SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket) return;
      // stop listening response from server when game created
      socket.off("created");

      // stop listening to new player joined event
      socket.off("newPlayer");

      // stop listening if the game is not found
      socket.off("notFound");

      // stop listening to the response from the server
      socket.off("joined");

      // stop listening for a player left the game event
      socket.off("left");
    };
  },
};

export const SocketReducer: Reducer<SocketState, SocketActions> = (
  state: SocketState | undefined,
  action: SocketActions
): SocketState => {
  if (state === undefined) {
    return initialSocketState;
  }

  switch (action.type) {
    case SocketActionsTypes.SET_SOCKET:
      return {
        ...state,
        client: action.payload,
      };
    case SocketActionsTypes.SET_CONNECTED:
      return {
        ...state,
        connected: action.payload,
      };
    default:
      return state;
  }
};
