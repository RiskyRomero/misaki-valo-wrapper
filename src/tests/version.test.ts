import { expect, test } from "bun:test";
import { getVersion } from "../utils/version";

test("Get Version", async () => {
  expect((await getVersion()).status).toBe(200);
});