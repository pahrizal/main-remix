import { Reducer } from "redux";
import { JoinData } from "~/controllers/client";
import { Card, GameData, GameStatus } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { generateName, preloadImage } from "~/utils/helper";
import { ThunkAction } from "~/stores";
import { socketActions, SocketActions } from "~/stores/socketState";
import { NotificationController, Sound } from "~/controllers/notification.client";
import { PeerData, VideoChatController } from "~/controllers/videochat.client";
import { Socket } from "socket.io-client";
import Peer from "simple-peer";
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
    winner: PlayerData | null;
    videoDeviceId: string;
    audioDeviceId: string;
    videochat: VideoChatController | null;
    peers: { [key: string]: PeerData };
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
    winner: null,
    videoDeviceId: "",
    audioDeviceId: "",
    videochat: null,
    peers: {},
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
    readonly SET_WINNER: "SET_WINNER";
    readonly SET_VIDEO_DEVICE_ID: "SET_VIDEO_DEVICE_ID";
    readonly SET_AUDIO_DEVICE_ID: "SET_AUDIO_DEVICE_ID";
    readonly SET_VIDEOCHAT: "SET_VIDEOCHAT";
    readonly SET_PEERS: "SET_PEERS";
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
    SET_WINNER: "SET_WINNER",
    SET_VIDEO_DEVICE_ID: "SET_VIDEO_DEVICE_ID",
    SET_AUDIO_DEVICE_ID: "SET_AUDIO_DEVICE_ID",
    SET_VIDEOCHAT: "SET_VIDEOCHAT",
    SET_PEERS: "SET_PEERS",
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

interface SetWinner {
    type: "SET_WINNER";
    payload: typeof initialGameState.winner;
}

interface SetVideoDeviceId {
    type: "SET_VIDEO_DEVICE_ID";
    payload: typeof initialGameState.videoDeviceId;
}

interface SetAudioDeviceId {
    type: "SET_AUDIO_DEVICE_ID";
    payload: typeof initialGameState.audioDeviceId;
}

interface SetVideoChat {
    type: "SET_VIDEOCHAT";
    payload: typeof initialGameState.videochat;
}

interface SetPeers {
    type: "SET_PEERS";
    payload: typeof initialGameState.peers;
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
    | SetWinner
    | SetVideoDeviceId
    | SetAudioDeviceId
    | SetVideoChat
    | SetPeers;

export const gameActions = {
    //game action to set current player
    setCurrentPlayer: (playerId: string): ThunkAction<GameActions | SocketActions> => {
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
    setTableCard: (cards: typeof initialGameState.tableCard): ThunkAction<GameActions | SocketActions> => {
        return async (dispatch, getState) => {
            dispatch({
                type: GameActionsTypes.SET_TABLE_CARD,
                payload: cards,
            });
        };
    },

    // game action to set free fold status
    setHasFreeFold: (state: boolean): ThunkAction<GameActions | SocketActions> => {
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
    setPlayers: (players: PlayerData[]): ThunkAction<GameActions | SocketActions> => {
        return async (dispatch, getState) => {
            const notif = getState().game.notif;
            const oldPlayers = getState().game.players;
            // play notification
            notif && notif.play("join");
            // update player data, but don't update already existing stream
            const newPlayers = players.map((player) => {
                const oldPlayer = oldPlayers.find((oldPlayer) => oldPlayer.id === player.id);
                if (oldPlayer) {
                    return {
                        ...player,
                        stream: oldPlayer.stream,
                    };
                }
                return player;
            });
            dispatch({
                type: GameActionsTypes.SET_PLAYERS,
                payload: newPlayers,
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
    removePlayer: (playerId: string): ThunkAction<GameActions | SocketActions> => {
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
    setGameNotFound: (payload: typeof initialGameState.notFound): ThunkAction<GameActions> => {
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
    join: (gameId: string, playerName: string): ThunkAction<GameActions | SocketActions> => {
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
                        cards: [],
                        bot: false,
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

    playSound(sound: keyof typeof Sound): ThunkAction<GameActions | SocketActions> {
        return async (dispatch, getState) => {
            const notif = getState().game.notif;
            notif && notif.play(sound);
        };
    },

    // redux action to set game winner
    setWinner: (winner: PlayerData): ThunkAction<GameActions> => {
        return async (dispatch, getState) => {
            dispatch({
                type: GameActionsTypes.SET_WINNER,
                payload: winner,
            });
        };
    },

    setAudioDeviceId: (audioId: string): ThunkAction<GameActions> => {
        return async (dispatch, getState) => {
            dispatch({
                type: GameActionsTypes.SET_AUDIO_DEVICE_ID,
                payload: audioId,
            });
        };
    },
    setVideoDeviceId: (videoId: string): ThunkAction<GameActions> => {
        return async (dispatch, getState) => {
            dispatch({
                type: GameActionsTypes.SET_VIDEO_DEVICE_ID,
                payload: videoId,
            });
        };
    },

    setPlayerStream: (playerId: string, stream: MediaStream): ThunkAction<GameActions> => {
        return async (dispatch, getState) => {
            const data = getState().game.data;
            const allPlayers = getState().game.players;
            if (!data) return;
            if (data.playerData.id === playerId) {
                data.playerData.stream = stream;
            }
            // add stream to player in players array
            const players = allPlayers.map((player) => {
                if (player.id === playerId) {
                    return {
                        ...player,
                        stream,
                    };
                }
                return player;
            });
            dispatch({
                type: GameActionsTypes.SET_PLAYERS,
                payload: players,
            });
        };
    },

    initVideChatController: (stream: MediaStream, socket: Socket): ThunkAction<GameActions> => {
        return async (dispatch, getState) => {
            const oldController = getState().game.videochat;
            const gameData = getState().game.data?.gameData;
            if (!oldController) {
                if (!gameData) return;
                const controller = new VideoChatController(
                    gameData.id,
                    stream,
                    socket,
                    (peers: { [key: string]: PeerData }) => {
                        gameActions.setPeers(peers)(dispatch, getState);
                    }
                );
                dispatch({
                    type: GameActionsTypes.SET_VIDEOCHAT,
                    payload: controller,
                });
            } else {
                oldController.myStream = stream;
            }
        };
    },
    setPeers: (peers: { [key: string]: PeerData }): ThunkAction<GameActions> => {
        return async (dispatch, getState) => {
            dispatch({
                type: GameActionsTypes.SET_PEERS,
                payload: peers,
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
        case GameActionsTypes.SET_WINNER:
            return {
                ...state,
                winner: action.payload,
            };
        case GameActionsTypes.SET_AUDIO_DEVICE_ID:
            return {
                ...state,
                audioDeviceId: action.payload,
            };
        case GameActionsTypes.SET_VIDEO_DEVICE_ID:
            return {
                ...state,
                videoDeviceId: action.payload,
            };
        case GameActionsTypes.SET_VIDEOCHAT:
            return {
                ...state,
                videochat: action.payload,
            };
        case GameActionsTypes.SET_PEERS:
            return {
                ...state,
                peers: action.payload,
            };
        default:
            return state;
    }
};
