import clsx from "clsx";
import React from "react";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
};
const Button: React.FC<Props> = ({
  onClick,
  className,
  children,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "bg-lime-500 font-exo hover:bg-lime-700 hover:text-slate-100 text-slate-900 font-bold py-4 px-8",
        className,
        {
          "bg-slate-400 cursor-not-allowed hover:bg-slate-400 hover:text-slate-500":
            disabled,
        }
      )}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
