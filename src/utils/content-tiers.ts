import type { ApiResponse, ContentTier, ErrorResponse, Language } from "../types";
import { fetchData } from "./api";

export const getContentTiers = async (language: Language = "en-US"): Promise<ApiResponse<ContentTier[]> | ErrorResponse> => {
  return await fetchData("/v1/contenttiers", { language });
}

export const getContentTierByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<ContentTier> | ErrorResponse> => {
  return await fetchData(`/v1/contenttiers/${uuid}`, { language });
}