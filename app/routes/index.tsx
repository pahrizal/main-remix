import clsx from "clsx";
import React from "react";
import { useNavigate } from "remix";
import RubberText from "~/components/rubberText";

export default function Index() {
  const [gameId, setGameId] = React.useState("");
  const nav = useNavigate();
  const handleRoomInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value) return;
    setGameId(value);
  };
  const handleJoin = () => {
    nav(gameId, { replace: true });
  };
  const handleCreateGame = () => {};
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <RubberText text="Hello" />
        <RubberText text="there!" />
      </div>
      <div className="flex flex-row">
        <RubberText
          text="Let's"
          bounceIn="right"
          className="font-virgil text-7xl hover:animate-rubber hover:text-slate-100 text-lime-400 cursor-pointer"
        />
        <RubberText
          text="PLAY!"
          bounceIn="right"
          className="font-exo text-7xl hover:animate-rubber px-2 hover:text-slate-100 text-lime-400 cursor-pointer"
        />
      </div>
      <div className="flex flex-row mt-8">
        <div className="mr-4 border-lime-500 border-2">
          <button
            className="btn-anim-bg px-8 py-4 font-exo text-slate-100 text-xl"
            onClick={handleCreateGame}
          >
            <p>New Game</p>
          </button>
        </div>
        <div className="flex flex-row border-2 border-lime-500">
          <input
            className="h-100 bg-transparent outline-none px-4 text-lime-500 font-bold font-exo"
            placeholder="Enter game ID here"
            onChange={handleRoomInput}
          />
          <button
            className="btn-anim-bg px-8 py-4 font-exo text-slate-100 text-xl"
            onClick={handleJoin}
          >
            <p>Join</p>
          </button>
        </div>
      </div>
    </div>
  );
}
