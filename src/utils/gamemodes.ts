import type { ApiResponse, ErrorResponse, Gamemode, GamemodeEquippable, Language } from "../types";
import { fetchData } from "./api";

export const getGamemodes = async (language: Language = "en-US"): Promise<ApiResponse<Gamemode[]> | ErrorResponse> => {
  return await fetchData("/v1/gamemodes", { language });
}

export const getGamemodeEquippables = async (language: Language = "en-US"): Promise<ApiResponse<GamemodeEquippable[]> | ErrorResponse> => {
  return await fetchData("/v1/gamemodes/equippables", { language });
}

export const getGamemodeByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Gamemode> | ErrorResponse> => {
  return await fetchData(`/v1/gamemodes/${uuid}`, { language });
}

export const getGamemodeEquippableByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<GamemodeEquippable> | ErrorResponse> => {
  return await fetchData(`/v1/gamemodes/equippables/${uuid}`, { language });
}