import { expect, test } from "bun:test";
import { getEventByUuid, getEvents } from "../utils/events";

test("Get Events", async () => {
  expect((await getEvents()).status).toBe(200);
});

test("Get Event with valid UUID", async () => {
  expect((await getEventByUuid("96682481-4f7b-6322-18bb-f1a76f91a35f")).status).toBe(200);
});