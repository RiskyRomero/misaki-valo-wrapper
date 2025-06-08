import { expect, test } from "bun:test";
import { getThemeByUuid, getThemes } from "../utils/themes";

test("Get Themes", async () => {
  expect((await getThemes()).status).toBe(200);
});

test("Get Theme by valid UUID", async () => {
  expect((await getThemeByUuid("fdfe356c-40c4-ac6a-864e-16998fc784ef")).status).toBe(200);
});