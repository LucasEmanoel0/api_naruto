CREATE TABLE "missions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "missions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar NOT NULL,
	"difficulty" varchar NOT NULL,
	"reward" numeric NOT NULL,
	"team_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "team_members" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "team_members_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"team_id" integer NOT NULL,
	"ninja_id" integer NOT NULL,
	CONSTRAINT "team_members_ninja_id_unique" UNIQUE("ninja_id")
);
--> statement-breakpoint
ALTER TABLE "missions" ADD CONSTRAINT "missions_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_ninja_id_ninjas_id_fk" FOREIGN KEY ("ninja_id") REFERENCES "public"."ninjas"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_leader_unique" UNIQUE("leader");