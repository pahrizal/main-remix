import clsx from "clsx";
import React from "react";

type Props = {
  me?: boolean;
  name?: string;
};
const PlayerAvatar: React.FC<Props> = ({ name = "", me }) => {
  return (
    <div className="relative w-[128px] h-[128px] text-center flex flex-col justify-center items-center">
      <div
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
        className={clsx("font-virgil z-10 ow text-xl px-4", {
          "text-slate-100": !name,
          "text-slate-900": name,
        })}
      >
        {name || "waiting player"}
      </div>
    </div>
  );
};

export default PlayerAvatar;
