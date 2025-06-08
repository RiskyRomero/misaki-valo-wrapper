import type { ApiResponse, ErrorResponse, Language, PlayerTitle } from "../types";
import { fetchData } from "./api";

export const getPlayerTitles = async (language: Language = "en-US"): Promise<ApiResponse<PlayerTitle[]> | ErrorResponse> => {
  return await fetchData("/v1/playertitles", { language });
}

export const getPlayerTitleByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<PlayerTitle> | ErrorResponse> => {
  return await fetchData(`/v1/playertitles/${uuid}`, { language });
}