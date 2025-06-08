import { expect, test } from "bun:test";
import { getPlayerTitleByUuid, getPlayerTitles } from "../utils/player-titles";

test("Get Player Titles", async () => {
  expect((await getPlayerTitles()).status).toBe(200);
});

test("Get Player Title with valid UUID", async () => {
  expect((await getPlayerTitleByUuid("129190d4-42fa-4e79-75e3-ffb5679d1dc2")).status).toBe(200);
});