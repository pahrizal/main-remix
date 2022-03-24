import { GameReducer, GameState, initialGameState } from "./gameState";
import { initialSocketState, SocketReducer, SocketState } from "./socketState";

export interface AppState {
  socket: SocketState;
  game: GameState;
}

export const initialAppState = {
  socket: initialSocketState,
  game: initialGameState,
};

export const reducers = {
  socket: SocketReducer,
  game: GameReducer,
};

export interface ThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => AppState): void;
}
