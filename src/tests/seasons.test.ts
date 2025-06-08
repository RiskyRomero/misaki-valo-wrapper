import { expect, test } from "bun:test";
import { getCompetitiveSeasonByUuid, getCompetitiveSeasons, getSeasonByUuid, getSeasons } from "../utils/seasons";

test("Get Seasons", async () => {
  expect((await getSeasons()).status).toBe(200);
});

test("Get Season with valid UUID", async () => {
  expect((await getSeasonByUuid("0df5adb9-4dcb-6899-1306-3e9860661dd3")).status).toBe(200);
});

test("Get Competitive Seasons", async () => {
  expect((await getCompetitiveSeasons()).status).toBe(200);
});

test("Get Competitive Season with valid UUID", async () => {
  expect((await getCompetitiveSeasonByUuid("8d9e3688-470b-c0e0-5b20-ca964d907adb")).status).toBe(200);
});