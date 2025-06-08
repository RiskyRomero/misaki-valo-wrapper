import { expect, test } from "bun:test";
import { getWeaponByUuid, getWeapons, getWeaponSkinByUuid, getWeaponSkinChromas, getWeaponSkinChromasByUuid, getWeaponSkins } from "../utils/weapons";

test("Get Weapons", async () => {
  expect((await getWeapons()).status).toBe(200);
});

test("Get Weapon with valid UUID", async () => {
  expect((await getWeaponByUuid("63e6c2b6-4a8e-869c-3d4c-e38355226584")).status).toBe(200);
});

test("Get Weapon Skins", async () => {
  expect((await getWeaponSkins()).status).toBe(200);
});

test("Get Weapon Skin with valid UUID", async () => {
  expect((await getWeaponSkinByUuid("89be9866-4807-6235-2a95-499cd23828df")).status).toBe(200);
});

test("Get Weapon Skins Chromas", async () => {
  expect((await getWeaponSkinChromas()).status).toBe(200);
});

test("Get Weapon Skin Chroma with valid UUID", async () => {
  expect((await getWeaponSkinChromasByUuid("092a25a4-422f-f577-37ac-26a5d489c155")).status).toBe(200);
});