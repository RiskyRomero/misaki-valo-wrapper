import { expect, test } from "bun:test";
import { getContentTierByUuid, getContentTiers } from "../utils/content-tiers";

test("Get Content Tiers", async () => {
  expect((await getContentTiers()).status).toBe(200);
});

test("Get Content Tier with valid UUID", async () => {
  expect((await getContentTierByUuid("0cebb8be-46d7-c12a-d306-e9907bfc5a25")).status).toBe(200);
});