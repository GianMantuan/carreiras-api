import "reflect-metadata";

import { createConnections } from "typeorm";

import app from "../app";
import http from "http";
import https from "https";
import debug from "debug";
import fs from "fs";
import path from "path";

debug("integrado-carreiras:server");

createConnections().catch((error) => console.log(error));
import "../container";

const server = http.createServer(app);

const port = normalizePort(process.env.PORT || "3333");
app.set("port", port);

server.listen(3333);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val: any) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
}

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  // const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug("Listening on " + addr);
}
