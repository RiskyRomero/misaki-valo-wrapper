import { expect, test } from "bun:test";
import { getSprayByUuid, getSprayLevelByUuid, getSprayLevels, getSprays } from "../utils/sprays";

test("Get Sprays", async () => {
  expect((await getSprays()).status).toBe(200);
});

test("Get Spray with valid UUID", async () => {
  expect((await getSprayByUuid("3d2bcfc5-442b-812e-3c08-9180d6b36077")).status).toBe(200);
});

test("Get Spray Levels", async () => {
  expect((await getSprayLevels()).status).toBe(200);
});

test("Get Spray Level with valid UUID", async () => {
  expect((await getSprayLevelByUuid("20d547a4-4ec8-c9ef-dd9d-1c8b74d0e6f7")).status).toBe(200);
});