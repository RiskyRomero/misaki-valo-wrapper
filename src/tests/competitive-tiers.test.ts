import { expect, test } from "bun:test";
import { getCompetitiveTierByUuid, getCompetitiveTiers } from "../utils/competitive-tiers";

test("Get Competitive Tiers", async () => {
  expect((await getCompetitiveTiers()).status).toBe(200);
});

test("Get Competitive Tier with valid UUID", async () => {
  expect((await getCompetitiveTierByUuid("564d8e28-c226-3180-6285-e48a390db8b1")).status).toBe(200);
});