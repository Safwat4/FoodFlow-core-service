import http from "http";
import { createApp } from "./app.ts";
import { env } from "./common/config/env.ts";
import { db } from "./common/knex/knex.ts";
import { logger } from "./common/logger/logger.ts";

const app = createApp();
const server = http.createServer(app);
server.listen(env.port, () => {
  logger.info(`Server is running on port ${env.port}`);
});

async function shutdown() {
  server.close(async () => {
    console.log("Server closed");
    await db.destroy();
    console.log("Database connection closed");
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
