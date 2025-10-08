import { integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

 export const villageTable = pgTable("villages",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name:varchar().notNull(),
    country:varchar().notNull()
 })