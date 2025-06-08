import { expect, test } from "bun:test";
import { getGear, getGearByUuid } from "../utils/gear";

test("Get Gear", async () => {
  expect((await getGear()).status).toBe(200);
});

test("Get Gear with valid UUID", async () => {
  expect((await getGearByUuid("822bcab2-40a2-324e-c137-e09195ad7692")).status).toBe(200);
});