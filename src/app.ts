import express from "express";
import { router } from "./routes.ts";

//localhost:3000/api/

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/api", router);

  return app;
}