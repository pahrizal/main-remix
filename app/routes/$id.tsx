import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, LoaderFunction, useLoaderData, useNavigate } from "remix";
import GameTable from "~/components/GameTable";
import WaitingRoom from "~/components/WaitingRoom";
import { JoinData } from "~/controllers/client";
import { GameData } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { AppState } from "~/stores";
import { gameActions, GameStatus } from "~/stores/gameState";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ ...params });
};

const GameScreen = () => {
  const nav = useNavigate();
  const data = useLoaderData<GameData>();
  const socket = useSelector((state: AppState) => state.socket.client);
  const notFound = useSelector((state: AppState) => state.game.notFound);
  const dataState = useSelector((state: AppState) => state.game.data);
  const players = useSelector((state: AppState) => state.game.players);
  const gameStatus = useSelector((state: AppState) => state.game.status);
  const dispatch = useDispatch();

  // use effect to detect if the game is not found
  React.useEffect(() => {
    if (notFound) {
      dispatch(gameActions.toggleNotFound());
      // redirect to home when game is not found
      window.location.href = "/";
    }
  }, [dispatch, nav, notFound]);

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

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {gameStatus === GameStatus.WAITING && (
        <WaitingRoom
          players={players}
          ownerId={dataState?.gameData.owner}
          showStart={dataState?.gameData.owner === dataState?.playerData.id}
          onAbort={() => dispatch(gameActions.leave())}
          onStart={() => dispatch(gameActions.start())}
        />
      )}
      <GameTable />
    </div>
  );
};

export default GameScreen;
