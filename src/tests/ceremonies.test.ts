import { expect, test } from "bun:test";
import { getCeremonies, getCeremonyByUuid } from "../utils/ceremonies";

test("Get Ceremonies", async () => {
  expect((await getCeremonies()).status).toBe(200);
});

test("Get Ceremony with valid UUID", async () => {
  expect((await getCeremonyByUuid("1e71c55c-476e-24ac-0687-e48b547dbb35")).status).toBe(200);
});