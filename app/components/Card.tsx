import clsx from "clsx";
import React, { useRef } from "react";
import { Card as CardType } from "~/controllers/game";
import { getRandomInt, preloadImage } from "~/utils/helper";

// props type for Card component
type CardProps = {
  card: CardType;
  onClick?: (card: CardType) => void;
  className?: string;
  animate?: boolean;
};
const Card: React.FC<CardProps> = ({ card, onClick, className, animate }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [img, setImg] = React.useState<HTMLImageElement>();
  React.useEffect(() => {
    preloadImage(card.image).then((image) => {
      setImg(image);
    });
  }, []);
  return (
    <img
      src={card.image}
      alt={card.code}
      onClick={() => onClick && onClick(card)}
      className={
        className ||
        "flex w-[5rem] flex-col justify-center items-center rounded-md cursor-pointer hover:z-10 hover:shadow-lg hover:shadow-slate-900"
      }
      style={
        animate
          ? {
              backgroundPosition: "center",
              animationName: "bounceInRight",
              animationDelay: getRandomInt(300, 2000) + "ms",
              animationDuration: "1s",
            }
          : {}
      }
    />
  );
};

export default Card;
