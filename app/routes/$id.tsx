import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, LoaderFunction, useLoaderData, useNavigate } from "remix";
import GameTable from "~/components/GameTable";
import WaitingRoom from "~/components/WaitingRoom";
import { JoinData } from "~/controllers/client";
import { GameData, games, GameStatus } from "~/controllers/game";
import { PlayerData } from "~/controllers/player";
import { AppState } from "~/stores";
import { gameActions } from "~/stores/gameState";

export const loader: LoaderFunction = async ({ params }) => {
  // get related game from game list
  const game = games.find((game) => game.getId() === params.id);

  // if game is not found, set notFound to true
  if (!game) {
    return json({ ...params });
  }

  // if game is found and game is still in waiting state, return game data
  if (game.isWaiting()) {
    return json({ ...game.getData(), status: game.getStatus(), ...params });
  }
  return json({ ...params });
};

interface LoaderData extends GameData {
  status: GameStatus;
  id: string;
}

const GameScreen = () => {
  const nav = useNavigate();
  const data = useLoaderData<LoaderData>();
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
    if (data && data.id && socket && data.status === GameStatus.WAITING) {
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
    } else {
      // redirect to home when game is not found
      window.location.href = "/";
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
