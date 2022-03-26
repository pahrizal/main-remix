import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, LoaderFunction, useLoaderData } from "remix";
import { JoinData } from "~/controllers/client";
import { GameData } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { AppState } from "~/stores";
import { gameActions } from "~/stores/gameState";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ ...params });
};

const GameScreen = () => {
  const notifRef = React.useRef<HTMLDivElement>(null);
  const data = useLoaderData<GameData>();
  const [leavingPlayer, setLeavingPlayer] = React.useState<PlayerData | null>(
    null
  );
  const socket = useSelector((state: AppState) => state.socket.client);
  const notFound = useSelector((state: AppState) => state.game.notFound);
  const dataState = useSelector((state: AppState) => state.game.data);
  const players = useSelector((state: AppState) => state.game.players);
  const dispatch = useDispatch();

  // use effect to detect if the game is not found
  React.useEffect(() => {
    if (notFound) {
      alert("Game not found");
      dispatch(gameActions.toggleNotFound());
      document.location = "/";
    }
  }, [notFound]);

  React.useEffect(() => {
    if (data && data.id && socket) {
      let playerName = "Anonymous";
      // get local storage data
      const localData = localStorage.getItem(data.id);
      if (localData) {
        // if local data is found, get player name there
        const localDataObj: JoinData = JSON.parse(localData) as JoinData;
        playerName = localDataObj.playerData.name || "Anonymous";
      } else {
        const newPlayerName = prompt("Enter your name", "Anonymous");
        if (newPlayerName) {
          playerName = newPlayerName;
        }
      }
      dispatch(gameActions.join(data.id, playerName));
    }
  }, [data, dispatch, socket]);

  // trigger notification using effect when player is leaving
  React.useEffect(() => {
    if (leavingPlayer) {
      notifRef.current?.classList.add("show");
      setTimeout(() => {
        notifRef.current?.classList.remove("show");
      }, 3000);
    }
  }, [leavingPlayer]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row items-center">
        <h1 className="text-xl font-exo mr-2">Game ID:</h1>
        <h1 className="text-xl">{dataState?.gameData.id}</h1>
      </div>
      <div className="flex flex-row items-center">
        <h1 className="text-xl font-exo mr-2">Player ID:</h1>
        <h1 className="text-xl">{dataState?.playerData.id}</h1>
      </div>
      <div className="flex flex-row items-center">
        <h1 className="text-xl font-exo mr-2">Player Count:</h1>
        <h1 className="text-xl">{players.length}</h1>
      </div>
      <div className="flex flex-row items-center">
        <h1 className="text-xl font-exo mr-2">is owner</h1>
        <h1 className="text-xl">
          {dataState && dataState.gameData.owner === dataState.playerData.id
            ? "true"
            : "false"}
        </h1>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(gameActions.leave())}
      >
        Leave
      </button>
      <div
        ref={notifRef}
        className={clsx(
          "fixed bottom-0 hidden right-0 mr-4 mb-4 bg-yellow-200 rounded-xl"
        )}
      >
        <p>Player {leavingPlayer && leavingPlayer.id} has leaving the game</p>
      </div>
    </div>
  );
};

export default GameScreen;
