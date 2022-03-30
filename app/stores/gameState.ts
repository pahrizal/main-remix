import { Reducer } from "redux";
import { JoinData } from "~/controllers/client";
import { Card, GameData, GameStatus } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { generateName, preloadImage } from "~/utils/helper";
import { ThunkAction } from "~/stores";
import { socketActions, SocketActions } from "~/stores/socketState";
import {
  NotificationController,
  Sound,
} from "~/controllers/notification.client";
import Peer from "simple-peer";

export type RemotePeer = { id: string; peer: Peer.Instance };
export interface GameState {
  status: GameStatus;
  data: JoinData | null;
  notFound: boolean;
  players: PlayerData[];
  cards: Card[];
  tableCard: Card[];
  currentPlayer: string;
  hasFreeFold: boolean;
  notif: NotificationController | null;
  videoDeviceId: string;
  audioDeviceId: string;
  localPeer: Peer.Instance | null;
  remotePeers: RemotePeer[];
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
  notif: null,
  videoDeviceId: "",
  audioDeviceId: "",
  localPeer: null,
  remotePeers: [],
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
  readonly SET_NOTIF: "SET_NOTIF";
  readonly SET_VIDEO_DEVICE_ID: "SET_VIDEO_DEVICE_ID";
  readonly SET_AUDIO_DEVICE_ID: "SET_AUDIO_DEVICE_ID";
  readonly SET_LOCAL_PEER: "SET_LOCAL_PEER";
  readonly SET_REMOTE_PEER: "SET_REMOTE_PEER";
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
  SET_NOTIF: "SET_NOTIF",
  SET_VIDEO_DEVICE_ID: "SET_VIDEO_DEVICE_ID",
  SET_AUDIO_DEVICE_ID: "SET_AUDIO_DEVICE_ID",
  SET_LOCAL_PEER: "SET_LOCAL_PEER",
  SET_REMOTE_PEER: "SET_REMOTE_PEER",
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

interface SetNotif {
  type: "SET_NOTIF";
  payload: typeof initialGameState.notif;
}

interface SetVideoDeviceId {
  type: "SET_VIDEO_DEVICE_ID";
  payload: typeof initialGameState.videoDeviceId;
}

interface SetAudioDeviceId {
  type: "SET_AUDIO_DEVICE_ID";
  payload: typeof initialGameState.audioDeviceId;
}

interface SetLocalPeer {
  type: "SET_LOCAL_PEER";
  payload: typeof initialGameState.localPeer;
}

interface SetRemotePeer {
  type: "SET_REMOTE_PEER";
  payload: typeof initialGameState.remotePeers;
}

export type GameActions =
  | SetGameData
  | SetGameNotFound
  | SetPlayers
  | SetGameCard
  | SetCurrentPlayer
  | SetTableCard
  | SetGameStatus
  | SetHasFreeFold
  | SetNotif
  | SetVideoDeviceId
  | SetAudioDeviceId
  | SetLocalPeer
  | SetRemotePeer;

export const gameActions = {
  //game action to set current player
  setCurrentPlayer: (
    playerId: string
  ): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const notif = getState().game.notif;
      dispatch({
        type: GameActionsTypes.SET_CURRENT_PLAYER,
        payload: playerId,
      });
      // update current nextPlayer in gameData
      const gameData = getState().game.data;
      if (gameData) {
        if (gameData.playerData.id === playerId && notif) {
          notif.play(Sound.turn);
        }
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
      const notif = getState().game.notif;
      // play notification
      notif && notif.play("join");
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
      const notif = getState().game.notif;
      const playerExist = players.find((p) => p.id === playerId);
      if (!playerExist) return;
      notif && notif.play("leave");
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
      try {
        localStorage.setItem(data.gameData.id, JSON.stringify(data));
        dispatch({
          type: GameActionsTypes.SET_GAME_DATA,
          payload: data,
        });
      } catch (error) {}
    };
  },

  // redux action to set local peer
  setLocalPeer: (
    peer: typeof initialGameState.localPeer
  ): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_LOCAL_PEER,
        payload: peer,
      });
    };
  },

  setRemotePeers: (
    peers: typeof initialGameState.remotePeers
  ): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_REMOTE_PEER,
        payload: peers,
      });
    };
  },
  addRemotePeer: (peer: RemotePeer): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      const peers = getState().game.remotePeers;
      const peerIndex = peers.indexOf(peer);
      if (peerIndex > -1) return;

      dispatch({
        type: GameActionsTypes.SET_REMOTE_PEER,
        payload: [...peers, peer],
      });
    };
  },

  // redux action to create the game
  create: (playerName?: string): ThunkAction<GameActions | SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket) return;

      //prepare RTC Connection
      //   const peer = new Peer({ initiator: true });
      //   peer.on("signal", (data) => {
      //     console.log("peer got signal", data);
      //   });
      //   dispatch({
      //     type: GameActionsTypes.SET_LOCAL_PEER,
      //     payload: peer,
      //   });

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
            playTurn: false,
            colors: "",
            cards: [],
            iceCandidate: null,
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
  setNotif: (payload: NotificationController): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_NOTIF,
        payload,
      });
    };
  },
  playSound(
    sound: keyof typeof Sound
  ): ThunkAction<GameActions | SocketActions> {
    return async (dispatch, getState) => {
      const notif = getState().game.notif;
      notif && notif.play(sound);
    };
  },
  setVideoDeviceId: (
    id: typeof initialGameState.videoDeviceId
  ): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_VIDEO_DEVICE_ID,
        payload: id,
      });
    };
  },
  setAudioDeviceId: (
    id: typeof initialGameState.audioDeviceId
  ): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_AUDIO_DEVICE_ID,
        payload: id,
      });
    };
  },
  setDeviceIds: (
    videoDeviceId: string,
    audioDeviceId: string
  ): ThunkAction<GameActions> => {
    return async (dispatch, getState) => {
      dispatch({
        type: GameActionsTypes.SET_VIDEO_DEVICE_ID,
        payload: videoDeviceId,
      });
      dispatch({
        type: GameActionsTypes.SET_AUDIO_DEVICE_ID,
        payload: audioDeviceId,
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
    case GameActionsTypes.SET_NOTIF:
      return {
        ...state,
        notif: action.payload,
      };
    case GameActionsTypes.SET_VIDEO_DEVICE_ID:
      return {
        ...state,
        videoDeviceId: action.payload,
      };
    case GameActionsTypes.SET_AUDIO_DEVICE_ID:
      return {
        ...state,
        audioDeviceId: action.payload,
      };
    case GameActionsTypes.SET_LOCAL_PEER:
      return {
        ...state,
        localPeer: action.payload,
      };
    default:
      return state;
  }
};
