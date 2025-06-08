import type { ApiResponse, Buddy, BuddyLevel, ErrorResponse, Language } from "../types";
import { fetchData } from "./api";

export const getBuddies = async (language: Language = "en-US"): Promise<ApiResponse<Buddy[]> | ErrorResponse> => {
  return await fetchData("/v1/buddies", { language });
}

export const getBuddyLevels = async (language: Language = "en-US"): Promise<ApiResponse<BuddyLevel[]> | ErrorResponse> => {
  return await fetchData("/v1/buddies/levels", { language });
}

export const getBuddyByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Buddy> | ErrorResponse> => {
  return await fetchData(`/v1/buddies/${uuid}`, { language });
}

export const getBuddyLevelByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<BuddyLevel> | ErrorResponse> => {
  return await fetchData(`/v1/buddies/levels/${uuid}`, { language });
}