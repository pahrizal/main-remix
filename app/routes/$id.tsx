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

  // if game is not found, set gameExist to false
  if (!game) {
    return json({ ...params, players: [], status: GameStatus.UNDEFINED });
  }

  // if game is found and game is still in waiting state, return game data
  return json({
    ...game.getData(),
    players: game.getPlayers().map((p) => p.getId()),
    status: game.getStatus(),
    ...params,
  });
};

interface LoaderData extends GameData {
  status: GameStatus;
  id: string;
  players: string[];
}

const GameScreen = () => {
  const data = useLoaderData<LoaderData>();
  const socket = useSelector((state: AppState) => state.socket.client);
  const notFound = useSelector((state: AppState) => state.game.notFound);
  const dataState = useSelector((state: AppState) => state.game.data);
  const players = useSelector((state: AppState) => state.game.players);
  const gameStatus = useSelector((state: AppState) => state.game.status);
  const dispatch = useDispatch();

  // use effect to detect if the game is not found
  React.useEffect(() => {
    if (data.status === GameStatus.UNDEFINED) {
      dispatch(gameActions.toggleNotFound());
      // redirect to home when game is not found
      window.location.href = "/";
    }
  }, [data]);

  React.useEffect(() => {
    if (data && data.id && socket) {
      let playerName = "Anonymous";
      // get local storage data
      const localData = localStorage.getItem(data.id);
      if (localData) {
        // if local data is found, get player name there and join the game
        const localDataObj: JoinData = JSON.parse(localData) as JoinData;
        playerName = localDataObj.playerData.name || "Anonymous";
        if (data.players.includes(localDataObj.playerData.id)) {
          dispatch(gameActions.join(data.id, playerName));
        } else {
          dispatch(gameActions.start());
        }
      } else {
        // if local data is not found, create a new player and join the game if the game is not full or still in waiting state
        if (
          data.status === GameStatus.WAITING &&
          data.playerCount &&
          data.playerCount < 4
        ) {
          const newPlayerName = prompt("Enter your name", "Anonymous");
          if (newPlayerName) {
            playerName = newPlayerName;
          }
          dispatch(gameActions.join(data.id, playerName));
        } else {
          window.location.href = "/";
        }
      }
    }
  }, [data, dispatch, socket]);
  console.log("game status", data);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {gameStatus === GameStatus.WAITING &&
        data.status === GameStatus.WAITING && (
          <WaitingRoom
            players={players}
            ownerId={dataState?.gameData.owner}
            showStart={dataState?.gameData.owner === dataState?.playerData.id}
            onAbort={() => dispatch(gameActions.leave())}
            onStart={() => dispatch(gameActions.start())}
          />
        )}
      <GameTable
        players={players}
        blur={
          gameStatus === GameStatus.WAITING &&
          data.status === GameStatus.WAITING
        }
        ownerId={dataState?.gameData.owner}
      />
    </div>
  );
};

export default GameScreen;
