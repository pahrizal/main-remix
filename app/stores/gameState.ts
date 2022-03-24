import { Reducer } from "redux";
import { v4 as uuidV4 } from "uuid";
import { ThunkAction } from "./index";
import { SocketActions } from "./socketState";

export interface GameState {
  currentGameId: string | null;
  players: string[];
}

export const initialGameState: GameState = {
  currentGameId: null,
  players: [],
};

interface GameActionTypes {
  readonly SET_CURRENT_GAME_ID: "SET_CURRENT_GAME_ID";
  readonly SET_PLAYERS: "SET_PLAYERS";
}

const GameActionsTypes: GameActionTypes = {
  SET_CURRENT_GAME_ID: "SET_CURRENT_GAME_ID",
  SET_PLAYERS: "SET_PLAYERS",
};

interface SetCurrentGameId {
  type: "SET_CURRENT_GAME_ID";
  payload: typeof initialGameState.currentGameId;
}
interface SetPlayers {
  type: "SET_PLAYERS";
  payload: typeof initialGameState.players;
}

export type GameActions = SetCurrentGameId | SetPlayers;

export const gameActions = {
  create: (): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const newGameId = uuidV4();
      dispatch({
        type: GameActionsTypes.SET_CURRENT_GAME_ID,
        payload: newGameId,
      });
    };
  },
  join: (gameId: string): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_CURRENT_GAME_ID,
        payload: gameId,
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
    case GameActionsTypes.SET_CURRENT_GAME_ID:
      return {
        ...state,
        currentGameId: action.payload,
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
