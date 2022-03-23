import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { AppState, initialAppState } from "./stores";
import configureStore from "./stores/config";
import { Provider } from "react-redux";

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
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
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
