import type { ApiResponse, CompetitiveSeason, ErrorResponse, Language, Season } from "../types";
import { fetchData } from "./api";

export const getSeasons = async (language: Language = "en-US"): Promise<ApiResponse<Season[]> | ErrorResponse> => {
  return await fetchData("/v1/seasons", { language });
}

export const getCompetitiveSeasons = async (language: Language = "en-US"): Promise<ApiResponse<CompetitiveSeason[]> | ErrorResponse> => {
  return await fetchData("/v1/seasons/competitive", { language });
}


export const getSeasonByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Season> | ErrorResponse> => {
  return await fetchData(`/v1/seasons/${uuid}`, { language });
}

export const getCompetitiveSeasonByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<CompetitiveSeason> | ErrorResponse> => {
  return await fetchData(`/v1/seasons/competitive/${uuid}`, { language });
}