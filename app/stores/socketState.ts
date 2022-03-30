import { Reducer } from "redux";
import { Socket } from "socket.io-client";
import { Card, GameStatus } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { ClientEvent, JoinData } from "~/controllers/client";
import { gameActions, GameActions, RemotePeer } from "~/stores/gameState";
import { ThunkAction } from "~/stores";
import { Sound } from "~/controllers/notification.client";
import Peer from "simple-peer";
export interface SocketState {
  client: Socket | null;
  connected: boolean;
  peers: { [id: string]: Peer.Instance };
}

export const initialSocketState: SocketState = {
  client: null,
  connected: false,
  peers: {},
};

interface SocketActionTypes {
  readonly SET_SOCKET: "SET_SOCKET";
  readonly SET_CONNECTED: "SET_CONNECTED";
  readonly SET_PEERS: "SET_PEERS";
}

const SocketActionsTypes: SocketActionTypes = {
  SET_SOCKET: "SET_SOCKET",
  SET_CONNECTED: "SET_CONNECTED",
  SET_PEERS: "SET_PEERS",
};

interface SetSocket {
  type: "SET_SOCKET";
  payload: typeof initialSocketState.client;
}
interface SetConnected {
  type: "SET_CONNECTED";
  payload: typeof initialSocketState.connected;
}

interface SetPeers {
  type: "SET_PEERS";
  payload: typeof initialSocketState.peers;
}

export type SocketActions = SetSocket | SetConnected | SetPeers;

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

      socket.on("peer", function (data) {
        var peerId = data.peerId;
        var peer = new Peer({ initiator: data.initiator, trickle: true });

        console.log(
          "Peer available for connection discovered from signalling server, Peer ID: %s",
          peerId,
          "initiator: ",
          data.initiator
        );

        socket.on("signal", function (data) {
          if (data.peerId == peerId) {
            console.log(
              "Received signalling data",
              data,
              "from Peer ID:",
              peerId
            );
            peer.signal(data.signal);
          }
        });

        peer.on("signal", function (data) {
          console.log(
            "Advertising signalling data",
            data,
            "to Peer ID:",
            peerId
          );
          socket.emit("signal", {
            signal: data,
            peerId: peerId,
          });
        });
        peer.on("error", function (e) {
          console.log("Error sending connection to peer %s:", peerId, e);
        });
        peer.on("connect", function () {
          console.log("Peer connection established");
          peer.send("hey peer");
        });
        peer.on("data", function (data) {
          console.log("Recieved data from peer:", data);
        });
        const peers = getState().socket.peers;
        peers[peerId] = peer;
        dispatch({
          type: SocketActionsTypes.SET_PEERS,
          payload: peers,
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
      socket.on(ClientEvent.created, (payload: JoinData) => {
        // dispatch game action to set the game data
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(
          dispatch,
          getState
        );
        // add player to the game
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
        //create local peer
        // const localPeer = new Peer({ initiator: true });
        // gameActions.setLocalPeer(localPeer)(dispatch, getState);
      });

      // listen to new player joined event
      socket.on(ClientEvent.players, (payload: PlayerData[]) => {
        // add player to the game
        const currentPlayer = getState().game.data?.playerData;
        if (currentPlayer) {
          const remotePeers: RemotePeer[] = payload
            .filter((p) => p.id !== currentPlayer.id)
            .map((p) => {
              const peer = new Peer();
              return {
                id: p.id,
                peer,
              };
            });

          gameActions.setRemotePeers(remotePeers)(dispatch, getState);
        }
        gameActions.setPlayers(payload)(dispatch, getState);
      });

      // listen if the game is not found
      socket.on(ClientEvent.notFound, (payload) => {
        gameActions.setGameNotFound(true)(dispatch, getState);
      });

      // listen for successfull join event
      socket.on(ClientEvent.joined, (payload: JoinData) => {
        // dispatch game action to set the game data
        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(
          dispatch,
          getState
        );
        // add player to the game players list
        gameActions.addPlayer(payload.playerData)(dispatch, getState);
      });

      // listen for the player left the game event
      socket.on(ClientEvent.left, (payload: PlayerData) => {
        // remove player from the player list
        gameActions.removePlayer(payload.id)(dispatch, getState);
      });

      // listen for the game start event
      socket.on(ClientEvent.started, (payload: JoinData) => {
        // dispatch game action to set the game data
        gameActions.playSound(Sound.shuffle)(dispatch, getState);

        gameActions.setGameData(payload)(dispatch, getState);
        gameActions.setCurrentPlayer(payload.gameData.nextPlayer)(
          dispatch,
          getState
        );
        gameActions.setGameStatus(GameStatus.STARTED)(dispatch, getState);
      });

      //listen for cards data event
      socket.on(ClientEvent.cards, (payload: Card[]) => {
        gameActions.setCards(payload)(dispatch, getState);
      });

      // listen for current card on the table
      socket.on(ClientEvent.tableCard, (payload: Card[]) => {
        gameActions.playSound(Sound.draw)(dispatch, getState);
        gameActions.setTableCard(payload)(dispatch, getState);
      });

      // listen for the game data event
      socket.on(ClientEvent.nextPlayer, (playerId: string) => {
        gameActions.setCurrentPlayer(playerId)(dispatch, getState);
      });
      // listen for freeFold event
      socket.on(ClientEvent.freeFold, (state: boolean) => {
        gameActions.setHasFreeFold(state)(dispatch, getState);
      });
    };
  },

  // socket action to stop listening all game events
  stopListeningGameEvents: (): ThunkAction<SocketActions> => {
    return async (dispatch, getState) => {
      const socket = getState().socket.client;
      if (!socket) return;
      // stop listening response from server when game created
      socket.off(ClientEvent.created);

      // stop listening to new player joined event
      socket.off(ClientEvent.newPlayer);

      // stop listening if the game is not found
      socket.off(ClientEvent.notFound);

      // stop listening to the response from the server
      socket.off(ClientEvent.joined);

      // stop listening for a player left the game event
      socket.off(ClientEvent.left);
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
