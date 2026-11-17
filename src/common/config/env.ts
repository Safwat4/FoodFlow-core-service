import { config } from "dotenv";
import path from "path/win32";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

config({path: path.resolve(__dirname,'../../../.env')});
const Schema = z.object({
  PORT: z.string().default("3000"),
  DB_HOST: z.string().default("localhost"),
  DB_PORT: z.string().default("5432"),
  DB_USER: z.string().default("postgres"),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_POOL_MAX: z.string().default("10"),
  DB_MIGRATIONS_DIR: z.string().default("./src/common/knex/migrations"),
  DB_MIGRATIONS_EXTENSION: z.string().default("ts"),
});

const parsed = Schema.parse(process.env);

export const env = {
  port: Number(parsed.PORT),
  db: {
    host: parsed.DB_HOST,
    port: Number(parsed.DB_PORT),
    user: parsed.DB_USER,
    password: parsed.DB_PASSWORD,
    name: parsed.DB_NAME,
    poolMax: Number(parsed.DB_POOL_MAX),
    migrationsDir: path.resolve(__dirname, "../../../", parsed.DB_MIGRATIONS_DIR),
    migrationsExtension: parsed.DB_MIGRATIONS_EXTENSION,
  },
};
