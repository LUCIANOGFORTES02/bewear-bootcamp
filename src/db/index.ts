// Make sure to install the 'pg' package
import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema"; //IMportando todas as tabelas.

export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
});
