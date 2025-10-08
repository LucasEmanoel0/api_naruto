import { integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { ninjasTable } from "./ninjas.schema.ts";
import { teamsTable } from "./teams.schema.ts";

 export const team_membersTable = pgTable("team_members",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    team_id:integer().references(()=> teamsTable.id).notNull(),
    ninja_id:integer().references(()=> ninjasTable.id).notNull().unique(),
 })