import { expect, test } from "bun:test";
import { getLevelBorderByUuid, getLevelBorders } from "../utils/level-borders";

test("Get Level Borders", async () => {
  expect((await getLevelBorders()).status).toBe(200);
});

test("Get Level Border with valid UUID", async () => {
  expect((await getLevelBorderByUuid("ebc736cd-4b6a-137b-e2b0-1486e31312c9")).status).toBe(200);
});