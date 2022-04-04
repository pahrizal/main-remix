import { Reducer } from "redux";
import { Socket } from "socket.io-client";
import { Card, GameStatus } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { JoinData } from "~/controllers/client";
import { gameActions, GameActions } from "~/stores/gameState";
import { ThunkAction } from "~/stores";
import { Sound } from "~/controllers/notification.client";

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
                // dispatch game action to set the game data
                gameActions.setGameData(payload)(dispatch, getState);
                gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
                // add player to the game
                gameActions.addPlayer(payload.playerData)(dispatch, getState);
            });

            // listen to new player joined event
            socket.on("players", (payload: PlayerData[]) => {
                // add player to the game
                gameActions.setPlayers(payload)(dispatch, getState);
            });

            // listen if the game is not found
            socket.on("notFound", (payload) => {
                gameActions.setGameNotFound(true)(dispatch, getState);
            });

            // listen for successfull join event
            socket.on("joined", (payload: JoinData) => {
                // dispatch game action to set the game data
                gameActions.setGameData(payload)(dispatch, getState);
                gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
                // add player to the game players list
                gameActions.addPlayer(payload.playerData)(dispatch, getState);
            });

            // listen for the player left the game event
            socket.on("left", (payload: PlayerData) => {
                // remove player from the player list
                gameActions.removePlayer(payload.id)(dispatch, getState);
            });

            // listen for the game start event
            socket.on("started", (payload: JoinData) => {
                // dispatch game action to set the game data
                gameActions.playSound(Sound.shuffle)(dispatch, getState);

                gameActions.setGameData(payload)(dispatch, getState);
                gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(dispatch, getState);
                gameActions.setGameStatus(GameStatus.STARTED)(dispatch, getState);
            });

            //listen for cards data event
            socket.on("cards", (payload: Card[]) => {
                gameActions.setCards(payload)(dispatch, getState);
            });

            // listen for current card on the table
            socket.on("tableCard", (payload: Card[]) => {
                gameActions.playSound(Sound.draw)(dispatch, getState);
                gameActions.setTableCard(payload)(dispatch, getState);
            });

            // listen for the game data event
            socket.on("nextPlayer", (playerId: string) => {
                gameActions.setCurrentPlayer(playerId)(dispatch, getState);
            });
            // listen for freeFold event
            socket.on("freeFold", (state: boolean) => {
                gameActions.setHasFreeFold(state)(dispatch, getState);
            });
            // listen for freeFold event
            socket.on("winner", (player: PlayerData) => {
                // console.log("winner", player);
                gameActions.setWinner(player)(dispatch, getState);
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
