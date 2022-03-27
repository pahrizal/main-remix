import clsx from "clsx";
import React from "react";
import Button from "./Button";

type Props = {
  blur?: boolean;
  onLeave?: () => void;
};
const Toolbar: React.FC<Props> = ({ blur, onLeave }) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0",
        "flex flex-row",
        "w-screen",
        "bg-slate-600",
        "border-2 border-slate-900",
        { blur: blur }
      )}
    >
      <Button
        className="bg-lime-500 ml-auto font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-sm"
        onClick={onLeave}
      >
        Leave
      </Button>
    </div>
  );
};

export default Toolbar;
