import { expect, test } from "bun:test";
import { getBundleByUuid, getBundles } from "../utils/bundles";

test("Get Bundles", async () => {
  expect((await getBundles()).status).toBe(200);
});

test("Get Bundle with valid UUID", async () => {
  expect((await getBundleByUuid("35815cab-429d-79e4-43f5-e0af8fdac22b")).status).toBe(200);
});