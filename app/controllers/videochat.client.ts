import Peer from "simple-peer";
import { Socket } from "socket.io-client";
export interface CallDetail {
    id: string;
    signal: Peer.SignalData | null;
}
export interface CallData {
    caller: CallDetail;
    callee: CallDetail;
}

export interface PeerData {
    peer: Peer.Instance;
    initiator: boolean;
}
export interface AcceptCallData {
    signal: Peer.SignalData;
    callerId: string;
}
export class VideoChatController {
    peers: { [key: string]: PeerData } = {};
    myStream: MediaStream;
    socket: Socket;
    gameId: string;
    private onPeerChange: (peers: { [key: string]: PeerData }) => void;
    constructor(
        gameId: string,
        stream: MediaStream,
        socket: Socket,
        onPeerChange: (peers: { [key: string]: PeerData }) => void
    ) {
        this.onPeerChange = onPeerChange;
        this.myStream = stream;
        this.gameId = gameId;
        this.socket = socket;
        // 1. we emit this message to the server to get all peers in the game
        this.socket.emit("join video chat", gameId);

        // 2. server will send the player list in the game
        this.socket.on("peer list", (peers: string[]) => {
            // console.log("got peer list", peers);
            peers.forEach((peerId) => {
                // 3. create a peer that hold our stream for other player in the game
                // console.log("is peer already in my peers?", Boolean(this.peers[peerId]));
                this.peers[peerId] = {
                    peer: this.createPeer(peerId, this.socket.id, this.myStream),
                    initiator: true,
                };
                this.onPeerChange(this.peers);
            });
        });

        // for other player that joined video chat
        this.socket.on("joined video chat", (data: AcceptCallData) => {
            // console.log("joined video chat", data);
            const peer = this.addPeer(data.signal, data.callerId, this.myStream);
            // console.log("on joined vide chat: is peer already in my peers?", Boolean(this.peers[data.callerId]));
            this.peers[data.callerId] = {
                peer,
                initiator: false,
            };
            this.onPeerChange(this.peers);
        });

        this.socket.on("receiving returned signal", (payload: { id: string; signal: Peer.SignalData }) => {
            // console.log("receiving returned signal from", payload.id);
            this.peers[payload.id].peer.signal(payload.signal);
            this.onPeerChange(this.peers);
        });
    }
    private createPeer(remoteId: string, callerId: string, stream: MediaStream) {
        const peer = new Peer({
            initiator: true,
            stream: stream,
            trickle: false,
        });
        peer.on("signal", (signal) => {
            this.socket.emit("sending signal", {
                remoteId,
                callerId,
                signal,
            });
        });
        return peer;
    }

    private addPeer(incomingSignal: Peer.SignalData, callerId: string, stream: MediaStream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        });
        peer.on("signal", (signal) => {
            this.socket.emit("returning signal", {
                signal,
                callerId,
            });
        });
        peer.signal(incomingSignal);
        return peer;
    }

    muteMyVideo(state: boolean) {
        this.socket.emit("muteVideo", { gameId: this.gameId, muted: state });
    }
}
