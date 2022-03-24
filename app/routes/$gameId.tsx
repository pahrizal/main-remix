import React from "react";
import { useSelector } from "react-redux";
import { json, LoaderFunction, useLoaderData, useNavigate } from "remix";
import { AppState } from "../stores";

type GameData = {
  gameId: string;
};
export const loader: LoaderFunction = async ({ params }) => {
  return json({ ...params });
};

const GameScreen = () => {
  const socket = useSelector((state: AppState) => state.socket.client);
  const data = useLoaderData<GameData>();
  const nav = useNavigate();
  React.useEffect(() => {
    if (!socket) {
      nav("/");
    } else {
      socket.emit("join", data.gameId);
    }
  }, [data.gameId, socket, nav]);

  return <div>GameScreen</div>;
};

export default GameScreen;
