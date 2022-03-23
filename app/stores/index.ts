import { initialSocketState, SocketReducer, SocketState } from "./socketState";

export interface AppState {
  socket: SocketState;
}

export const initialAppState = {
  socket: initialSocketState,
};

export const reducers = {
  socket: SocketReducer,
};

export interface ThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => AppState): void;
}
