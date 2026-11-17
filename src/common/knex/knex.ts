import knex from "knex";
import Config from "./knexfile.js";


export const db = knex(Config);
export async function pingDB() {
  await db.raw("SELECT 1");
}
