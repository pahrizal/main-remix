import { Reducer } from "redux";
import { Socket } from "socket.io-client";
import { ClientEvent } from "../controllers/client";
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
  init: (
    socket: typeof initialSocketState.client,
    onData: (data: any) => void
  ): ThunkAction<SocketActions> => {
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
