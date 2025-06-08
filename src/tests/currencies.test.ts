import { expect, test } from "bun:test";
import { getCurrencies, getCurrencyByUuid } from "../utils/currencies";

test("Get Currencies", async () => {
  expect((await getCurrencies()).status).toBe(200);
});

test("Get Currency with valid UUID", async () => {
  expect((await getCurrencyByUuid("85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741")).status).toBe(200);
});