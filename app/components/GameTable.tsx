import clsx from "clsx";
import React from "react";
import { PlayerData } from "~/controllers/player";
import PlayerAvatar from "./PlayerAvatar";

type Props = {
  players: PlayerData[];
  me?: boolean;
  ownerId?: string;
  blur?: boolean;
};
const GameTable: React.FC<Props> = ({ players, me, ownerId, blur }) => {
  return (
    <div
      className={clsx(
        "absolute z-0 inset-0 w-screen h-screen flex flex-col justify-center items-center",
        {
          blur: blur,
        }
      )}
    >
      <div className="relative w-[95%] h-[70%] min-h-[320px] min-w-[640px] max-h-[480px] max-w-[1024px] bg-slate-700 rounded-[6rem] border-[1rem] table-shadow shadow-slate-100 border-slate-900 flex flex-col justify-center items-center">
        {players.map((player, index) => (
          <div
            key={index}
            className={clsx(
              "absolute  shadow-[0px_0px_10px_#000] w-[128px] h-[128px] border-[8px] rounded-full bg-slate-700 border-slate-900 flex flex-col justify-center items-center",
              {
                "-bottom-[64px]": index === 0,
                "-left-[77px]": index === 1,
                "-right-[77px]": index === 2,
                "-top-[77px]": index === 3,
              }
            )}
          >
            <PlayerAvatar name={player.name} me={player.id === ownerId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameTable;
