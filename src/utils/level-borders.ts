import type { ApiResponse, ErrorResponse, Language, LevelBorder } from "../types";
import { fetchData } from "./api";

export const getLevelBorders = async (language: Language = "en-US"): Promise<ApiResponse<LevelBorder[]> | ErrorResponse> => {
  return await fetchData("/v1/levelborders", { language });
}

export const getLevelBorderByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<LevelBorder> | ErrorResponse> => {
  return await fetchData(`/v1/levelborders/${uuid}`, { language });
}