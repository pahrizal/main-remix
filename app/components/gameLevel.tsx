import clsx from "clsx";
import React from "react";

const colors = [
  "text-lime-500",
  "text-yellow-500",
  "text-orange-500",
  "text-red-500",
];
const shadows = [
  "shadow-lime-500",
  "shadow-yellow-500",
  "shadow-orange-500",
  "shadow-red-500",
];
const borders = [
  "border-lime-500",
  "border-yellow-500",
  "border-orange-500",
  "border-red-500",
];
const bg = ["bg-lime-500", "bg-yellow-500", "bg-orange-500", "bg-red-500"];

type Props = {
  text: string;
  selected?: number;
  level?: number;
  onClick?: (level?: number) => void;
};
const GameLevel: React.FC<Props> = ({
  text,
  onClick,
  selected = 0,
  level = 0,
}) => {
  const [hover, setHover] = React.useState(false);
  const handleClick = () => {
    onClick && onClick(level);
  };
  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        "flex cursor-pointer w-[240px] h-[240px] text-center text-5xl border-2 rounded-full flex-col justify-center items-center",
        selected === level || hover ? colors[level] : "",
        selected === level || hover ? shadows[level] : ""
      )}
    >
      <p
        className={clsx(
          "font-exo",
          selected === level || hover ? colors[level] : "",
          {
            "text-slate-100": hover,
          }
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default GameLevel;
