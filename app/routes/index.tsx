import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "remix";
import { v4 as uuidv4 } from "uuid";
import Button from "~/components/Button";
import playingCardBackground from "../assets/images/playing-cards.png";
import RubberText from "../components/RubberText";
import { AppState } from "../stores";
import { gameActions } from "../stores/gameState";

export default function Index() {
  const [joinId, setJoinId] = React.useState("");
  const [playerName, setPlayerName] = React.useState("");
  const data = useSelector((state: AppState) => state.game.data);
  const notFound = useSelector((state: AppState) => state.game.notFound);
  const dispatch = useDispatch();
  const joinIdRef = React.useRef<HTMLInputElement>(null);
  const playerNameRef = React.useRef<HTMLInputElement>(null);
  const nav = useNavigate();
  const handleRoomInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value) return;
    setJoinId(value);
  };
  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value) return;
    setPlayerName(value);
  };
  const handleJoin = () => {
    // if player name is empty, set focus the input
    if (!playerName) {
      playerNameRef.current?.focus();
      return;
    }
    // if join id is empty, set focus the input
    if (!joinId) {
      joinIdRef.current?.focus();
      return;
    }

    // other than that, join the room
    dispatch(gameActions.join(joinId, playerName));
  };
  const handleCreateGame = () => {
    // if player name is empty, set focus the input
    if (!playerName) {
      playerNameRef.current?.focus();
      return;
    }
    dispatch(gameActions.create(playerName));
  };

  React.useEffect(() => {
    if (!data) return;
    nav(data.gameData.id);
  }, [data]);

  React.useEffect(() => {
    if (notFound) {
      alert("Game not found");
      dispatch(gameActions.toggleNotFound());
    }
  }, [notFound]);

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
        <div className="flex w-full flex-col mt-8 items-center">
          <div className="flex flex-row border border-lime-500 items-center sm:w-full">
            <input
              ref={playerNameRef}
              maxLength={20}
              value={playerName}
              className="h-100 flex flex-grow bg-transparent py-4  outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo"
              placeholder="Type your name here"
              onChange={handleNameInput}
            />
            <p className="text-lime-500 font-virgil py-4 xl:text-xl lg:text-lg md:text-md text-sm">
              and
            </p>
            <input
              ref={joinIdRef}
              value={joinId}
              className="h-100 flex flex-grow bg-transparent py-4 outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo"
              placeholder="Enter the game ID here"
              onChange={handleRoomInput}
            />
            <Button onClick={handleJoin}>Play</Button>
          </div>
          <div className="sm:mr-0 xs:mr-0 xl:mr-4 lg:mr-4 md:mr-4 sm:w-full xs:w-full text-center mt-4">
            <Button onClick={handleCreateGame}>Create your own game</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
