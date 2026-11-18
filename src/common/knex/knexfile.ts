import type { Knex } from "knex";
import { env } from "../config/env.ts";

const Config: Knex.Config = {
  client: "pg",
  connection: {
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    database: env.db.name,
  },
  pool: {
    max: env.db.poolMax,
  },

  migrations: {
    directory: env.db.migrationsDir,
    extension: env.db.migrationsExtension,
  },
};

export default Config;