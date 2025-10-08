import { decimal, integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { teamsTable } from "./teams.schema.ts";

 export const missionsTable = pgTable("missions",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title:varchar().notNull(),
    difficulty:varchar().notNull(),
    reward:decimal().notNull(),
    team_id:integer().references(()=> teamsTable.id).notNull()
 })