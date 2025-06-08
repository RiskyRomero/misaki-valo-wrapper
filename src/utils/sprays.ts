import type { ApiResponse, ErrorResponse, Language, Spray, SprayLevel } from "../types";
import { fetchData } from "./api";

export const getSprays = async (language: Language = "en-US"): Promise<ApiResponse<Spray[]> | ErrorResponse> => {
  return await fetchData("/v1/sprays", { language });
}

export const getSprayLevels = async (language: Language = "en-US"): Promise<ApiResponse<SprayLevel[]> | ErrorResponse> => {
  return await fetchData("/v1/sprays/levels", { language });
}


export const getSprayByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Spray> | ErrorResponse> => {
  return await fetchData(`/v1/sprays/${uuid}`, { language });
}

export const getSprayLevelByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<SprayLevel> | ErrorResponse> => {
  return await fetchData(`/v1/sprays/levels/${uuid}`, { language });
}