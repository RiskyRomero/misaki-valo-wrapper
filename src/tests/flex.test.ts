import { expect, test } from "bun:test";
import { getFlex, getFlexByUuid } from "../utils/flex";

test("Get Flex", async () => {
  expect((await getFlex()).status).toBe(200);
});

test("Get Flex with valid UUID", async () => {
  expect((await getFlexByUuid("80a11c6a-4d28-bfad-5594-2e9369b7787a")).status).toBe(200);
});