import { expect, test } from "bun:test";
import { getPlayerCardByUuid, getPlayerCards } from "../utils/player-cards";

test("Get Player Cards", async () => {
  expect((await getPlayerCards()).status).toBe(200);
});

test("Get Player Card with valid UUID", async () => {
  expect((await getPlayerCardByUuid("1711d20d-4b1c-c64a-14be-d4ae58a457c6")).status).toBe(200);
});