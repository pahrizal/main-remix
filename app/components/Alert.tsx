import clsx from "clsx";
import React from "react";
import Button from "~/components/Button"

type Props = {
  show?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
};
const Alert: React.FC<Props> = ({ show, children, onCancel, onConfirm }) => {
  return show ? (
    <div
      className={clsx(
        "absolute z-40 w-screen h-screen top-0 left-0 backdrop-blur-md flex flex-col justify-center items-center"
      )}
    >
      <div
        className={clsx(
          "text-center text-2xl font-virgil",
          "w-[320px] h-[240px]",
          "bg-slate-600",
          "border-2 border-slate-900",
          "rounded-lg shadow-lg",
          "flex flex-col justify-center items-center"
        )}
      >
        <div className="flex flex-grow p-10 ">{children}</div>
        <div className="flex w-full flex-row border-t-2 justify-space-between items-center">
          <Button
            className="bg-slate-500 font-exo hover:bg-slate-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-sm"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            className="bg-lime-500 ml-auto font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-2 px-4 text-sm"
            onClick={onConfirm}
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Alert;
