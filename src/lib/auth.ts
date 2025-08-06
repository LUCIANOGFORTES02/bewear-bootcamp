import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db"; // your drizzle instance

import * as schema from "../db/schema";

//Criando uma instância do Better Auth, uma api objeto
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema,
  }),
  user: {
    modelName: "userTable",
  },
  session: {
    modelName: "sessionTable",
  },
  account: {
    modelName: "accountTable",
  },
});
