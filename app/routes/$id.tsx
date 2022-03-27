import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, LoaderFunction, useLoaderData, useNavigate } from "remix";
import Alert from "~/components/Alert";
import GameTable from "~/components/GameTable";
import Toolbar from "~/components/Toolbar";
import WaitingRoom from "~/components/WaitingRoom";
import { JoinData } from "~/controllers/client";
import { Card, GameData, games, GameStatus } from "~/controllers/game";
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
  const dataState = useSelector((state: AppState) => state.game.data);
  const currentPlayer = useSelector(
    (state: AppState) => state.game.currentPlayer
  );
  const cards = useSelector((state: AppState) => state.game.cards);
  const players = useSelector((state: AppState) => state.game.players);
  const gameStatus = useSelector((state: AppState) => state.game.status);
  const cardOnTable = useSelector((state: AppState) => state.game.tableCard);
  const [showAlert, setShowAlert] = React.useState(false);
  const dispatch = useDispatch();
  const handleLeave = () => {
    dispatch(gameActions.leave());
  };
  const handleFold = (card: Card) => {
    console.log("Fold", card);
    dispatch(gameActions.foldCard(card));
  };
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

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {gameStatus === GameStatus.WAITING &&
        data.status === GameStatus.WAITING &&
        cards.length === 0 && (
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
        cardOnTable={cardOnTable}
        blur={
          gameStatus === GameStatus.WAITING &&
          data.status === GameStatus.WAITING &&
          cards.length === 0
        }
        currentPlayer={dataState?.playerData}
        ownerId={dataState?.gameData.owner}
        nextPlayer={currentPlayer}
        cards={cards}
        onFold={handleFold}
      />
      <Toolbar
        blur={
          gameStatus === GameStatus.WAITING &&
          data.status === GameStatus.WAITING &&
          cards.length === 0
        }
        canPass={dataState?.playerData.id === currentPlayer}
        onLeave={() => setShowAlert(true)}
        onPass={() => dispatch(gameActions.passToNextPlayer())}
      />
      <Alert
        show={showAlert}
        onCancel={() => setShowAlert(false)}
        onConfirm={handleLeave}
      >
        <p>Are you sure want to leave the game now?</p>
      </Alert>
    </div>
  );
};

export default GameScreen;
