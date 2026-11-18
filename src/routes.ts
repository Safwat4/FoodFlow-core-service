import { Router } from "express";
import { healthRouter } from "./app/health/health.routes.ts";
import { authRouter } from "./app/auth/routes.ts";

export const router = Router();

// Define your routes here

router.use("/health", healthRouter);

//user & auth
router.use('/auth', authRouter);
