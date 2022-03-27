import clsx from "clsx";
import React from "react";
import { Card as CardType } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import Card from "./Card";
import PlayerAvatar from "./PlayerAvatar";

type Props = {
  players: PlayerData[];
  cards: CardType[];
  currentPlayer?: PlayerData;
  cardOnTable: CardType[];
  me?: boolean;
  ownerId?: string;
  blur?: boolean;
  nextPlayer?: string;
  onFold?: (card: CardType) => void;
  avatarColor?: string;
  hasFreeFold?: boolean;
};
const GameTable: React.FC<Props> = ({
  players,
  me,
  ownerId,
  blur,
  cards,
  currentPlayer,
  cardOnTable = [],
  nextPlayer,
  onFold,
  hasFreeFold = false,
}) => {
  return (
    <div
      className={clsx(
        "absolute z-0 inset-0 w-screen h-screen flex flex-col justify-center items-center",
        {
          blur: blur,
        }
      )}
    >
      <div className="relative w-[95%] h-[70%] min-h-[320px] min-w-[640px] max-h-[480px] max-w-[1024px] bg-slate-700 rounded-[6rem] border-[1rem] table-shadow shadow-slate-100 border-slate-900 flex flex-col justify-center items-center">
        <div
          className={clsx(
            "absolute  shadow-[0px_0px_10px_#000] w-[128px] h-[128px] border-[8px] rounded-full bg-slate-700 border-slate-900 flex flex-col justify-center items-center",
            "-bottom-[64px]"
          )}
        >
          <PlayerAvatar
            name={currentPlayer?.name}
            me={true}
            playTurn={
              nextPlayer !== undefined &&
              currentPlayer &&
              currentPlayer.id === nextPlayer
            }
            color="#29AEEF"
          />
        </div>
        {players
          .filter((p) => p.id !== currentPlayer?.id)
          .map((player, index) => (
            <div
              key={index}
              className={clsx(
                "absolute  shadow-[0px_0px_10px_#000] w-[128px] h-[128px] border-[8px] rounded-full bg-slate-700 border-slate-900 flex flex-col justify-center items-center",
                {
                  "-left-[77px]": index === 0,
                  "-right-[77px]": index === 1,
                  "-top-[77px]": index === 2,
                }
              )}
            >
              <PlayerAvatar
                name={player.name}
                me={false}
                color={player.colors}
                playTurn={player.id === nextPlayer}
              />
            </div>
          ))}
        <div
          id="player-cards"
          className={clsx(
            "absolute bottom-0 card-deck flex w-full justify-center items-center flex-row",
            `-space-x-[3rem]`
          )}
        >
          {cards.map((card, i) => (
            <Card card={card} key={card.code} onClick={onFold} />
          ))}
        </div>
        <div className="flex flex-col w-full">
          <div
            id="info-message-container"
            className="flex w-full justify-center mb-4 items-center flex-row"
          >
            {hasFreeFold && (
              <div
                id="freefold-info"
                className="text-white text-center flex-col"
              >
                <p className="font-exo text-xl text-lime-500">Awesome!!</p>
                <p className="text-md text-white">
                  You can fold any card if no one can't beat your card 😎
                </p>
              </div>
            )}
          </div>
          <div
            id="table-cards"
            className={clsx(
              "flex w-full justify-center items-center flex-row",
              `-space-x-[3rem]`
            )}
          >
            {cardOnTable.map((card, i) => (
              <Card card={card} key={card.code} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTable;
