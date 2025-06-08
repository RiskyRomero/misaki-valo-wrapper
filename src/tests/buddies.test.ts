import { expect, test } from "bun:test";
import { getBuddies, getBuddyByUuid, getBuddyLevelByUuid, getBuddyLevels } from "../utils/buddies";

test("Get Buddies", async () => {
  expect((await getBuddies()).status).toBe(200);
});

test("Get Buddy Levels", async () => {
  expect((await getBuddyLevels()).status).toBe(200);
})

test("Get Buddy with valid UUID", async () => {
  expect((await getBuddyByUuid("f2f07eae-4518-15eb-546b-018961e0dd60")).status).toBe(200);
});

test("Get Buddy with invalid UUID", async () => {
  expect((await getBuddyByUuid("among-us-skibidi-toilet")).status).toBe(404);
});

test("Get Buddy Level with valid UUID", async () => {
  expect((await getBuddyLevelByUuid("f9e33f95-4d17-cd7e-3291-85b7f56bf183")).status).toBe(200);
});

test("Get Buddy Level with invalid UUID", async () => {
  expect((await getBuddyLevelByUuid("among-us-skibidi-toilet")).status).toBe(404);
});