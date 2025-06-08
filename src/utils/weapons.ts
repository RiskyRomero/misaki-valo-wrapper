import type { ApiResponse, ErrorResponse, Language, Weapon, WeaponSkin, WeaponSkinChroma } from "../types";
import { fetchData } from "./api";

export const getWeapons = async (language: Language = "en-US"): Promise<ApiResponse<Weapon[]> | ErrorResponse> => {
  return await fetchData("/v1/weapons", { language });
}

export const getWeaponSkins = async (language: Language = "en-US"): Promise<ApiResponse<WeaponSkin[]> | ErrorResponse> => {
  return await fetchData("/v1/weapons/skins", { language });
}

export const getWeaponSkinChromas = async (language: Language = "en-US"): Promise<ApiResponse<WeaponSkinChroma[]> | ErrorResponse> => {
  return await fetchData("/v1/weapons/skinchromas", { language });
}


export const getWeaponByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Weapon> | ErrorResponse> => {
  return await fetchData(`/v1/weapons/${uuid}`, { language });
}

export const getWeaponSkinByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<WeaponSkin> | ErrorResponse> => {
  return await fetchData(`/v1/weapons/skins/${uuid}`, { language });
}

export const getWeaponSkinChromasByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<WeaponSkinChroma> | ErrorResponse> => {
  return await fetchData(`/v1/weapons/skinchromas/${uuid}`, { language });
}