CREATE TABLE "ninjas" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "ninjas_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"rank" varchar(15) NOT NULL,
	"chakra_level" integer NOT NULL,
	"village_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "villages" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "villages_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"country" varchar NOT NULL
);
--> statement-breakpoint
ALTER TABLE "ninjas" ADD CONSTRAINT "ninjas_village_id_villages_id_fk" FOREIGN KEY ("village_id") REFERENCES "public"."villages"("id") ON DELETE no action ON UPDATE no action;