import type { ApiResponse, ErrorResponse, Language, PlayerCard } from "../types";
import { fetchData } from "./api";

export const getPlayerCards = async (language: Language = "en-US"): Promise<ApiResponse<PlayerCard[]> | ErrorResponse> => {
  return await fetchData("/v1/playercards", { language });
}

export const getPlayerCardByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<PlayerCard> | ErrorResponse> => {
  return await fetchData(`/v1/playercards/${uuid}`, { language });
}