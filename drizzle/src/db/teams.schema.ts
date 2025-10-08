import { integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { ninjasTable } from "./ninjas.schema.ts";

 export const teamsTable = pgTable("teams",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name:varchar().notNull(),
    leader:integer().references(()=> ninjasTable.id).notNull().unique(),
 })