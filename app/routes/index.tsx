import clsx from "clsx";
import React from "react";
import { useNavigate } from "remix";
import RubberText from "../components/rubberText";
import playingCardBackground from "../assets/images/playing-cards.png";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../stores/gameState";
import { AppState } from "../stores";

export default function Index() {
  const [joinId, setJoinId] = React.useState("");
  const data = useSelector((state: AppState) => state.game.data);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleRoomInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value) return;
    setJoinId(value);
  };
  const handleJoin = () => {
    dispatch(gameActions.join(joinId));
  };
  const handleCreateGame = () => {
    dispatch(gameActions.create());
  };
  React.useEffect(() => {
    if (!data) return;
    nav(data.gameData.id);
  }, [data?.gameData.id]);
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <img
        src={playingCardBackground}
        alt="bg"
        width={512}
        className="-z-10 absolute bottom-0 right-0 opacity-20 bounceInUp"
      />
      <div className="flex flex-col overflow-hidden items-center justify-center">
        <div className="flex flex-row">
          <RubberText text="Hello" rootClass="mr-8" />
          <RubberText text="there!" />
        </div>
        <div className="flex flex-row">
          <RubberText
            text="Let's"
            bounceIn="right"
            rootClass="mr-8"
            className="font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-slate-100 text-lime-400 cursor-pointer"
          />
          <RubberText
            text="PLAY!"
            bounceIn="right"
            className="font-exo xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber px-2 hover:text-slate-100 text-lime-400 cursor-pointer"
          />
        </div>
        <div className="flex w-full xs:flex-col sm:flex-col md:flex-row lg::flex-row xl:flex-row 2xl:flex-row mt-8 items-center">
          <div className="sm:mr-0 xs:mr-0 xl:mr-4 lg:mr-4 md:mr-4 border-lime-500 border-2 sm:w-full xs:w-full text-center xl:mb-0 lg:mb-0 md:mb-0 sm:mb-2 xs:mb-2">
            <button
              className="btn-anim-bg sm:w-full xs:w-full px-4 py-2 font-exo text-slate-100 xl:text-xl lg:text-lg md:text-md text-sm"
              onClick={handleCreateGame}
            >
              <p>New Game</p>
            </button>
          </div>
          <div className="flex flex-row border-2 border-lime-500 sm:w-full">
            <input
              className="h-100 flex flex-grow bg-transparent outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo"
              placeholder="Enter game ID here"
              onChange={handleRoomInput}
            />
            <button
              className="btn-anim-bg px-4 py-2 font-exo text-slate-100  xl:text-xl lg:text-lg md:text-md text-sm"
              onClick={handleJoin}
            >
              <p>Join</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
