import type { ApiResponse, CompetitiveTier, ErrorResponse, Language } from "../types";
import { fetchData } from "./api";

export const getCompetitiveTiers = async (language: Language = "en-US"): Promise<ApiResponse<CompetitiveTier[]> | ErrorResponse> => {
  return await fetchData("/v1/competitivetiers", { language });
}

export const getCompetitiveTierByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<CompetitiveTier> | ErrorResponse> => {
  return await fetchData(`/v1/competitivetiers/${uuid}`, { language });
}