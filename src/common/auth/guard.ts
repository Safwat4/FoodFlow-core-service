import type { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../../app/auth/utils.ts";
import { NotAuthenticated } from "./errors.ts";

export function authenticate(req: Request, _res: Response, next: NextFunction) {
  const token = req.cookies.access_token;
  if (!token) {
    throw NotAuthenticated;
  }

  req.user = verifyAccessToken(token);
  next();
}
