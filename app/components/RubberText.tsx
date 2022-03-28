import clsx from "clsx";
import React from "react";

type Props = {
  text?: string;
  bounceIn?: "left" | "right" | "up" | "down";
  className?: string;
  rootClass?: string;
};
const RubberText: React.FC<Props> = ({
  text = "",
  bounceIn,
  rootClass = "",
  className = "font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-lime-400 cursor-pointer",
}) => {
  return (
    <div
      className={clsx("flex flex-row", rootClass, {
        bounceInLeft: bounceIn === "left" || !bounceIn,
        bounceInRight: bounceIn === "right",
        bounceInUp: bounceIn === "up",
        bounceInDown: bounceIn === "down",
      })}
    >
      {text.split("").map((c, i) => (
        <h1 key={i} className={className}>
          {c}
        </h1>
      ))}
    </div>
  );
};

export default RubberText;
