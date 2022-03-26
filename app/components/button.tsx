import clsx from "clsx";
import React from "react";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};
const Button: React.FC<Props> = ({ onClick, className, children }) => {
  return (
    <button
      className={clsx(
        "bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-4 px-8",
        className
      )}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
