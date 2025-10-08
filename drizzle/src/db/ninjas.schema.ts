import { integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { villageTable } from "./village.schema.ts";

 export const ninjasTable = pgTable("ninjas",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name:varchar().notNull(),
    rank:varchar({length:15}).notNull(),
    chakra_level:integer().notNull(),
    village_id: integer().references(()=> villageTable.id).notNull()
 })