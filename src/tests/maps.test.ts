import { expect, test } from "bun:test";
import { getMapByUuid, getMaps } from "../utils/maps";

test("Get Maps", async () => {
  expect((await getMaps()).status).toBe(200);
});

test("Get Map with valid UUID", async () => {
  expect((await getMapByUuid("7eaecc1b-4337-bbf6-6ab9-04b8f06b3319")).status).toBe(200);
});