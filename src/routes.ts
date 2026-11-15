import { Router } from "express";
import { healthRouter } from "./app/health/health.routes.js";

export const router = Router();

// Define your routes here

router.use("/health", healthRouter);