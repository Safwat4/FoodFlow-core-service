import express from "express";
import { router } from "./routes.ts";
import { correlationId } from "./common/correlation/correlationId.ts";
import { errorHandler } from "./common/error/errorHandler.ts";
import cookieParser from 'cookie-parser';

//localhost:3000/api/

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(correlationId);
  app.use("/api", router);
  app.use(errorHandler);
  return app;
}
