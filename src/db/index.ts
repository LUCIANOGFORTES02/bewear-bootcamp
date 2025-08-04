// Make sure to install the 'pg' package
import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(process.env.DATABASE_URL!);
