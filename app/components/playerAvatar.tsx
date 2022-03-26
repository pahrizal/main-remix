import clsx from "clsx";
import React from "react";
import { randomColor } from "~/utils/helper";

type Props = {
  me?: boolean;
  name?: string;
};
const PlayerAvatar: React.FC<Props> = ({ name = "", me }) => {
  const color = randomColor();
  return (
    <div className="relative w-[128px] h-[128px] text-center flex flex-col justify-center items-center">
      <div
        style={{
          borderColor: name && !me ? `${color}` : "inherit",
        }}
        className={clsx("absolute z-0 w-[128px] h-[128px] rounded-full", {
          "hover:animate-rubber border-8 border-sky-400 bg-sky-500": name && me,
          "hover:animate-rubber border-8 border-cyan-400 bg-cyan-500":
            name && !me,
          "border-8 border-dashed animate-spin-slow": !name,
        })}
      >
        {" "}
      </div>
      <div
        style={{
          backgroundColor: name && !me ? `${color}cc` : "inherit",
        }}
        className={clsx(
          "w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center font-virgil z-10 ow text-xl px-4",
          {
            "text-slate-100 animate-pulse bg-slate-700": !name,
            "text-slate-900": name,
          }
        )}
      >
        <p>{name || "waiting player"}</p>
      </div>
    </div>
  );
};

export default PlayerAvatar;
