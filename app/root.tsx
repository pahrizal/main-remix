import React from "react";
import { Provider, useDispatch } from "react-redux";
import type { MetaFunction } from "remix";
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { io as socketClient } from "socket.io-client";
import animationStyles from "~/assets/styles/animation.css";
import appStyles from "~/assets/styles/app.css";
import tailwindStyles from "~/assets/styles/tailwind.css";
import { AppState, initialAppState } from "./stores";
import configureStore from "~/stores/config";
import { socketActions } from "~/stores/socketState";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Virgil3YOFF.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: appStyles },
    { rel: "stylesheet", href: animationStyles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Main Remix",
  viewport: "width=device-width,initial-scale=1",
});

const persistedState: AppState = {
  ...initialAppState,
};
const store = configureStore(persistedState);

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      socketActions.init(
        socketClient({
          transports: ["websocket"],
          upgrade: false,
        }),
        (data) => {}
      )
    );
  }, []);
  return (
    <html
      lang="en"
      className="bg-slate-900 text-slate-100 flex flex-col justify-center items-center w-screen h-screen"
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body className="overflow-hidden">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithRedux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
