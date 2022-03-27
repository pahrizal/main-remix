import React from "react";
import { PlayerData } from "~/controllers/player";
import Button from "./button";
import PlayerAvatar from "./playerAvatar";

type Props = {
  ownerId?: string;
  players: PlayerData[];
  showStart?: boolean;
  abortText?: string;
  startText?: string;
  onAbort?: () => void;
  onStart?: () => void;
  maxPlayers?: number;
};

const WaitingRoom: React.FC<Props> = ({
  ownerId = "",
  players = [],
  abortText = "Abort!",
  startText = "Launch the game!",
  maxPlayers = 4,
  onAbort,
  onStart,
  showStart,
}) => {
  const [disableStart, setDisableStart] = React.useState(false);
  return (
    <div className="flex flex-col z-10 w-screen h-screen backdrop-blur-2xl justify-center items-center">
      <p className="text-center text-2xl font-exo mb-8">
        {players.length === maxPlayers
          ? `Starting the game, please standby!...`
          : `Waiting another player...`}
      </p>
      <div className="flex flex-row space-x-4 items-center">
        {players.map((player) => (
          <PlayerAvatar
            me={player.id === ownerId}
            key={player.id}
            name={player.name}
          />
        ))}
        {Array(maxPlayers - players.length)
          .fill(0)
          .map((i) => (
            <PlayerAvatar key={i} />
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
            {startText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default WaitingRoom;
