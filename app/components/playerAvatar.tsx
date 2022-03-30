import clsx from "clsx";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PeerClient from "~/controllers/Peer.client";
import { PlayerData } from "~/controllers/player";
import { AppState } from "~/stores";
import MediaSelector from "./MediaSelector";
import Peer from "simple-peer";
import { gameActions } from "~/stores/gameState";

interface Props extends PlayerData {
  me?: boolean;
  onLocalStream?: (stream: MediaStream) => void;
}
const PlayerAvatar: React.FC<Props> = (props) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [showMediaSelector, setShowMediaSelector] = useState(false);
  const socket = useSelector((state: AppState) => state.socket.client);
  const peers = useSelector((state: AppState) => state.socket.peers);
  const dispatch = useDispatch();
  const videoDeviceId = useSelector(
    (state: AppState) => state.game.videoDeviceId
  );
  const audioDeviceId = useSelector(
    (state: AppState) => state.game.audioDeviceId
  );
  React.useEffect(() => {
    if (props.me) {
      // getting local video
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId: videoDeviceId,
            height: 128,
          },
          audio: {
            deviceId: audioDeviceId,
          },
        })
        .then((stream) => {
          if (videoRef.current && socket) {
            const video = videoRef.current;
            video.srcObject = stream;
            video.play();
            const mypeer = peers[socket.id];
            if (mypeer) {
              console.log("adding my stream");
              mypeer.addStream(stream);
            }
          }
        })
        .catch((err) => console.log(err));
    } else {
      if (!socket) return;
      // get remote peer instance with this props.id
      // then set remote peer stream to videoRef
      const remotePeer = peers[props.id];
      if (remotePeer) {
        remotePeer.on("stream", (stream) => {
          if (videoRef.current) {
            console.log("adding remote stream");
            const video = videoRef.current;
            video.srcObject = stream;
            video.play();
          }
        });
      }
    }
  }, [audioDeviceId, videoDeviceId, props.me, props.id, socket, peers]);
  console.log(props.iceCandidate?.sdpMid);
  return (
    <>
      <div
        className={clsx(
          "relative z-10 w-[128px] h-[128px] text-center flex flex-col justify-center items-center"
        )}
      >
        <div
          style={{
            borderColor:
              props.name && !props.me ? `${props.colors}` : "inherit",
          }}
          className={clsx("absolute z-0 w-[128px] h-[128px] rounded-full", {
            "hover:animate-rubber border-8 border-sky-400 bg-sky-500":
              props.name && props.me,
            "hover:animate-rubber border-8 border-cyan-400 bg-cyan-500":
              props.name && !props.me,
            "border-8 border-dashed animate-spin-slow":
              !props.name || props.playTurn,
          })}
        >
          {" "}
        </div>
        <div
          onDoubleClick={() => setShowMediaSelector(true)}
          style={{
            backgroundColor:
              props.name && !props.me ? `${props.colors}cc` : "inherit",
          }}
          className={clsx(
            "relative w-[128px] h-[128px] rounded-full overflow-hidden flex flex-col items-center justify-center font-virgil z-10 ow text-xl px-4",
            {
              "text-slate-100 animate-pulse bg-slate-700":
                !props.name || props.playTurn,
              "text-slate-900": props.name,
              "border-2 border-slite-100": props.me,
            }
          )}
        >
          {props.name ? (
            <video
              ref={videoRef}
              style={{ maxWidth: "unset" }}
              title="Double click to change the source"
              className={clsx("h-[128px] relative")}
              autoPlay
            />
          ) : (
            <p>waiting player</p>
          )}
        </div>
        {props.name && (
          <p className="absolute overflow-hidden -bottom-1 z-10 py-1 border-2 bg-slate-700 font-exo text-lime-500 w-full rounded-xl">
            {props.name}
          </p>
        )}
      </div>
      {showMediaSelector && (
        <MediaSelector
          show={showMediaSelector}
          onClose={() => setShowMediaSelector(false)}
        />
      )}
    </>
  );
};

export default React.memo(PlayerAvatar);
