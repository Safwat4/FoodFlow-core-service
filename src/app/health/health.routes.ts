import { Router } from "express";
import { pingDB } from "../../common/knex/knex.ts";

export const healthRouter = Router();

healthRouter.get("/", async (_req, res) => {
  try {
    await pingDB();
    res.status(200).send("ok");
  } catch (error) {
    res.status(500).send({
      message: "Database connection failed",
    });
  }
});
