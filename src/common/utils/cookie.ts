import type { Response } from "express";
import { env } from "../../common/config/env.ts";
import { toMs } from "./time.ts";

export function setAuthCookies(
  res: Response,
  accessToken: string,
  refreshToken: string,
) {
  res.cookie("access_token", accessToken, {
    httpOnly: true,
    secure: env.isProduction,
    maxAge: toMs(1, "h"), //60 * 60 * 1000,
  });
  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: env.isProduction,
    maxAge: toMs(7, "d"), //7 * 24 * 60 * 60 * 1000,
    path: "/api/auth/refresh",
  });
}
