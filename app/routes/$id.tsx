import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, LoaderFunction, useLoaderData } from "remix";
import { GameData } from "~/controllers/game";
import { AppState } from "~/stores";
import { gameActions } from "~/stores/gameState";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ ...params });
};

const GameScreen = () => {
  const data = useLoaderData<GameData>();
  const socket = useSelector((state: AppState) => state.socket.client);
  const dataState = useSelector((state: AppState) => state.game.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (data.id && socket) {
      dispatch(gameActions.join(data.id));
    }
  }, [data, dispatch, socket]);
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
        <h1 className="text-xl">{dataState?.gameData.playerCount}</h1>
      </div>
      <div className="flex flex-row items-center">
        <h1 className="text-xl font-exo mr-2">is owner</h1>
        <h1 className="text-xl">
          {dataState?.gameData.owner === dataState?.playerData.id
            ? "true"
            : "false"}
        </h1>
      </div>
    </div>
  );
};

export default GameScreen;
