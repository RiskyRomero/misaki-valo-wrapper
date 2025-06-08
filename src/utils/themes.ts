import type { ApiResponse, ErrorResponse, Language, Theme } from "../types";
import { fetchData } from "./api";

export const getThemes = async (language: Language = "en-US"): Promise<ApiResponse<Theme[]> | ErrorResponse> => {
  return await fetchData("/v1/themes", { language });
}

export const getThemeByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Theme> | ErrorResponse> => {
  return await fetchData(`/v1/themes/${uuid}`, { language });
}