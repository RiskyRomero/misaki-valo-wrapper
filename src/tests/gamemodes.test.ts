import { expect, test } from "bun:test";
import { getGamemodeByUuid, getGamemodeEquippableByUuid, getGamemodeEquippables, getGamemodes } from "../utils/gamemodes";

test("Get Gamemodes", async () => {
  expect((await getGamemodes()).status).toBe(200);
});

test("Get Gamemode Equippables", async () => {
  expect((await getGamemodeEquippables()).status).toBe(200);
});


test("Get Gamemode with valid UUID", async () => {
  expect((await getGamemodeByUuid("96bd3920-4f36-d026-2b28-c683eb0bcac5")).status).toBe(200);
});

test("Get Gamemode Equippable with valid UUID", async () => {
  expect((await getGamemodeEquippableByUuid("c5de005c-4bdc-26a7-a47d-c295eaaae9d8")).status).toBe(200);
});