import { Reducer } from "redux";
import { JoinData } from "~/controllers/client";
import { Card, GameData, GameStatus } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { generateName, preloadImage } from "~/utils/helper";
import { ThunkAction } from "./index";
import { socketActions, SocketActions } from "./socketState";

export interface GameState {
  status: GameStatus;
  data: JoinData | null;
  notFound: boolean;
  players: PlayerData[];
  cards: Card[];
  tableCard: Card[];
  currentPlayer: string;
  hasFreeFold: boolean;
}

export const initialGameState: GameState = {
  data: null,
  notFound: false,
  players: [],
  cards: [],
  status: GameStatus.WAITING,
  tableCard: [],
  currentPlayer: "",
  hasFreeFold: false,
};

interface GameActionTypes {
  readonly SET_GAME_DATA: "SET_GAME_DATA";
  readonly SET_GAME_NOT_FOUND: "SET_GAME_NOT_FOUND";
  readonly SET_PLAYERS: "SET_PLAYERS";
  readonly SET_GAME_STATUS: "SET_GAME_STATUS";
  readonly SET_CARDS: "SET_CARDS";
  readonly SET_TABLE_CARD: "SET_TABLE_CARD";
  readonly SET_CURRENT_PLAYER: "SET_CURRENT_PLAYER";
  readonly SET_HAS_FREE_FOLD: "SET_HAS_FREE_FOLD";
}

const GameActionsTypes: GameActionTypes = {
  SET_GAME_DATA: "SET_GAME_DATA",
  SET_GAME_NOT_FOUND: "SET_GAME_NOT_FOUND",
  SET_PLAYERS: "SET_PLAYERS",
  SET_GAME_STATUS: "SET_GAME_STATUS",
  SET_CARDS: "SET_CARDS",
  SET_TABLE_CARD: "SET_TABLE_CARD",
  SET_CURRENT_PLAYER: "SET_CURRENT_PLAYER",
  SET_HAS_FREE_FOLD: "SET_HAS_FREE_FOLD",
};

interface SetGameData {
  type: "SET_GAME_DATA";
  payload: typeof initialGameState.data;
}
interface SetCurrentPlayer {
  type: "SET_CURRENT_PLAYER";
  payload: typeof initialGameState.currentPlayer;
}
interface SetTableCard {
  type: "SET_TABLE_CARD";
  payload: typeof initialGameState.tableCard;
}
interface SetGameCard {
  type: "SET_CARDS";
  payload: typeof initialGameState.cards;
}
interface SetGameStatus {
  type: "SET_GAME_STATUS";
  payload: typeof initialGameState.status;
}
interface SetPlayers {
  type: "SET_PLAYERS";
  payload: typeof initialGameState.players;
}
interface SetGameNotFound {
  type: "SET_GAME_NOT_FOUND";
  payload: typeof initialGameState.notFound;
}

interface SetHasFreeFold {
  type: "SET_HAS_FREE_FOLD";
  payload: typeof initialGameState.hasFreeFold;
}

export type GameActions =
  | SetGameData
  | SetGameNotFound
  | SetPlayers
  | SetGameCard
  | SetCurrentPlayer
  | SetTableCard
  | SetGameStatus
  | SetHasFreeFold;

export const gameActions = {
  //game action to set current player
  setCurrentPlayer: (
    playerId: string
  ): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_CURRENT_PLAYER,
        payload: playerId,
      });
      // update current nextPlayer in gameData
      const gameData = getState().game.data;
      if (gameData) {
        gameData.gameData.nextPlayer = playerId;
        dispatch({
          type: GameActionsTypes.SET_GAME_DATA,
          payload: gameData,
        });
      }
    };
  },

  // game action to set card on table
  setTableCard: (
    cards: typeof initialGameState.tableCard
  ): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_TABLE_CARD,
        payload: cards,
      });
    };
  },

  // game action to set free fold status
  setHasFreeFold: (
    state: boolean
  ): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_HAS_FREE_FOLD,
        payload: state,
      });
    };
  },

  passToNextPlayer: (): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket) return;
      socket.emit("passToNextPlayer", {
        gameId: getState().game.data?.gameData.id,
      });
    };
  },

  // game action to fold a card to table
  foldCard: (card: Card): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      const data = getState().game.data;
      const currentPlayerTurn = getState().game.currentPlayer;
      if (!socket || !data) return;
      //if the turn is not for current player then return
      if (currentPlayerTurn !== data.playerData.id) {
        return;
      }

      socket.emit("foldCard", {
        card,
        playerId: data.playerData.id,
        gameId: data.gameData.id,
      });
    };
  },

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

  // game action to set the game cards
  setCards: (cards: Card[]): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      for (const card of cards) {
        preloadImage(card.image);
      }
      dispatch({
        type: GameActionsTypes.SET_CARDS,
        payload: cards,
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
        nextPlayer: "",
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
        // return;
      }

      // if joinData still null, then use initial data
      if (!joinData) {
        joinData = {
          gameData: {
            id: gameId,
            level: 1,
            owner: "",
            nextPlayer: "",
          },
          playerData: {
            id: "",
            name: playerName,
            socketId: socket.id,
          },
        };
      }
      // send the join request to the server
      socket.emit("join", joinData);
    };
  },

  //redux action to leave the game
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

  // redux action to toggle if the game is not found
  toggleNotFound: (): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      const notFound = getState().game.notFound;
      dispatch({
        type: GameActionsTypes.SET_GAME_NOT_FOUND,
        payload: !notFound,
      });
    };
  },

  // redux action to set game status
  setGameStatus: (status: GameStatus): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_GAME_STATUS,
        payload: status,
      });
    };
  },

  // redux action to start the game
  start: (): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      const gameData = getState().game.data;
      if (!socket || !gameData) return;
      socket.emit("start", gameData);
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
    case GameActionsTypes.SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload,
      };

    case GameActionsTypes.SET_TABLE_CARD:
      return {
        ...state,
        tableCard: action.payload,
      };

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
    case GameActionsTypes.SET_GAME_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case GameActionsTypes.SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case GameActionsTypes.SET_HAS_FREE_FOLD:
      return {
        ...state,
        hasFreeFold: action.payload,
      };

    default:
      return state;
  }
};
