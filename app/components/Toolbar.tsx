import clsx from "clsx";
import React from "react";
import Button from "~/components/Button";

type Props = {
  blur?: boolean;
  onLeave?: () => void;
  onPass?: () => void;
  canPass?: boolean;
};
const Toolbar: React.FC<Props> = ({ blur, onLeave, onPass, canPass }) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0",
        "flex flex-row align-center",
        "justify-center",
        "w-screen",
        "bg-slate-600",
        "border-2 border-slate-900",
        { blur: blur }
      )}
    >
      <div className="flex flex-row flex-grow justify-start items-center">
        {" "}
      </div>
      <div className="flex flex-row flex-grow justify-center items-center">
        <Button
          disabled={!canPass}
          className="bg-orange-500 font-exo hover:bg-orange-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-md"
          onClick={onPass}
        >
          Pass
        </Button>
      </div>
      <div className="flex flex-row flex-grow justify-end items-center">
        <Button
          className="bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-md"
          onClick={onLeave}
        >
          Leave
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
