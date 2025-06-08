import { expect, test } from "bun:test";
import { getAgentByUuid, getAgents } from "../utils/agents";

test("Get Agents", async () => {
  expect((await getAgents()).status).toBe(200);
});

test("Get Agent with valid UUID", async () => {
  expect((await getAgentByUuid("569fdd95-4d10-43ab-ca70-79becc718b46")).status).toBe(200);
});

test("Get Agent with invalid UUID", async () => {
  expect((await getAgentByUuid("among-us-skibidi-toilet")).status).toBe(404);
});