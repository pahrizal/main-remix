import React from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { socketActions } from "~/stores/socketState";
import { AppState } from "~/stores";

export default function Index() {
  const dispatch = useDispatch();
  const socket = useSelector((state: AppState) => state.socket.client);
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!socket) return;
    const text = event.target.value;
    setValue(text);
    socket?.emit("input-change", text);
  };
  React.useEffect(() => {
    dispatch(
      socketActions.init(io(), (data) => {
        setValue(data as string);
      })
    );
  }, []);

  return (
    <div>
      <input
        onChange={handleChange}
        value={value}
        placeholder="type anything"
      />
    </div>
  );
}
