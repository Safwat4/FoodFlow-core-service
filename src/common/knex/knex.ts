import knex from "knex";
import Config from "./knexfile.ts";


export const db = knex(Config);
export async function pingDB() {
  await db.raw("SELECT 1");
}
