import * as serverBuild from "@remix-run/dev/server-build";
import { createRequestHandler } from "@remix-run/express";
import compression from "compression";
import express from "express";
import http from "http";
import morgan from "morgan";
import { Server } from "socket.io";
import ConnectionController from "./app/controllers/connection";
const app = express();

// create custom express server
const server = http.createServer(app);

//create server socket io and attach to custom express server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
  transports: ["websocket"],
  allowUpgrades: false,
});

// attach socket connection controller
const socketConn = new ConnectionController(io);
socketConn.start();

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

// Remix fingerprints its assets so we can cache forever.
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static("public", { maxAge: "1h" }));

app.use(morgan("tiny"));

app.all(
  "*",
  createRequestHandler({
    build: serverBuild,
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
