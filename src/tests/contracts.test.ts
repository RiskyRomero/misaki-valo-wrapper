import { expect, test } from "bun:test";
import { getContractByUuid, getContracts } from "../utils/contracts";

test("Get Contracts", async () => {
  expect((await getContracts()).status).toBe(200);
});

test("Get Contract with valid UUID", async () => {
  expect((await getContractByUuid("cae6ab4a-4b4a-69a0-3c7a-48b17e313f52")).status).toBe(200);
});