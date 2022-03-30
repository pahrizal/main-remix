import { Socket } from "socket.io-client";
import { ClientEvent } from "./client";

export default class PeerClient {
  private config: RTCConfiguration = {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  };
  private socket: Socket;
  private peer: RTCPeerConnection;
  constructor(socket: Socket) {
    this.socket = socket;
    console.log("PeerClient created");
    this.peer = new RTCPeerConnection(this.config);
    this.peer.onicecandidate = this.onOurIceCandidate.bind(this);
    // create offer
    this.peer
      .createOffer()
      .then((offer) => {
        console.log("createOffer", offer);
        this.peer.setLocalDescription(offer);
        this.socket.emit(ClientEvent.RTCOffer, offer);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  addStream(stream: MediaStream) {
    // this.peer.addTrack(stream);
  }
  private onOurIceCandidate(event: RTCPeerConnectionIceEvent) {
    console.log("onOurIceCandidate", event);
    if (event.candidate) {
      this.socket.emit("iceCandidate", event.candidate);
    }
  }
  // when other player send offer
  private onOffer(offer: RTCSessionDescriptionInit) {
    this.peer.setRemoteDescription(offer);
    this.peer
      .createAnswer()
      .then((answer) => {
        this.peer.setLocalDescription(answer);
        this.socket.emit("answer", answer);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // when another player answer the offer
  private onAnswer(answer: RTCSessionDescriptionInit) {
    this.peer.setRemoteDescription(answer);
  }

  // when other player send ice candidate
  private onOtherPlayerIceCandidate(candidate: RTCIceCandidate) {
    this.peer.addIceCandidate(candidate);
  }
}
