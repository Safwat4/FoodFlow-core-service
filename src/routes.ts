import { Router } from "express";
import { healthRouter } from "./app/health/health.routes.ts";
import { authRouter } from "./app/auth/routes.ts";
import { userRouter } from "./app/user/routes.ts";
import { customerAddressRouter } from "./app/customer-address/routes.ts";


export const router = Router();

// Define your routes here

router.use("/health", healthRouter);

// auth
router.use("/auth", authRouter);

//user
router.use("/user", userRouter);

// customer addresses
router.use('/customer/addresses', customerAddressRouter);