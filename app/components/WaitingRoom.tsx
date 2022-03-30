import React, { useState } from "react";
import { PlayerData } from "~/controllers/player";
import Button from "~/components/Button";
import PlayerAvatar from "~/components/PlayerAvatar";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "~/stores/gameState";
import { AppState } from "~/stores";
import MediaSelector from "./MediaSelector";
import ShareLink from "./ShareLink";
import Peer from "simple-peer";
type Props = {
  ownerId?: string;
  players: PlayerData[];
  showStart?: boolean;
  abortText?: string;
  onAbort?: () => void;
  onStart?: () => void;
  maxPlayers?: number;
};

const WaitingRoom: React.FC<Props> = ({
  ownerId = "",
  players = [],
  abortText = "Abort!",
  maxPlayers = 4,
  onAbort,
  onStart,
  showStart,
}) => {
  const [disableStart, setDisableStart] = useState(false);
  const myPlayerData = useSelector(
    (state: AppState) => state.game.data?.playerData
  );
  return (
    <>
      <div className="flex flex-col z-10 w-screen h-screen backdrop-blur-2xl justify-center items-center">
        <ShareLink />
        <p className="text-center text-2xl font-exo mb-2">
          {players.length === maxPlayers
            ? `Starting the game, please standby!...`
            : `Waiting another player...`}
        </p>
        <div className="flex flex-row space-x-4 items-center">
          {players.map((player, i) => (
            <PlayerAvatar
              {...player}
              me={player.id === myPlayerData?.id}
              key={`player-${i}`}
            />
          ))}
          {Array(maxPlayers - players.length)
            .fill(0)
            .map((_, i) => (
              <PlayerAvatar
                id={`guest-${i}`}
                key={`guest-${i}`}
                name={""}
                socketId={""}
                cards={[]}
                colors={""}
                playTurn={false}
                iceCandidate={null}
              />
            ))}
        </div>
        <div className="flex flex-row space-x-4 items-center mt-8">
          <Button
            className="bg-slate-500 font-exo hover:bg-slate-600 hover:text-slate-100 text-slate-900 font-bold py-4 px-8"
            onClick={onAbort}
          >
            {abortText}
          </Button>
          {showStart && (
            <Button
              disabled={disableStart}
              onClick={(e) => {
                onStart && onStart();
                setDisableStart(true);
              }}
            >
              {players.length === 1
                ? "Play with our bot 🤟!"
                : "Launch the game 🚀!"}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
