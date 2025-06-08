import type { ApiResponse, Ceremony, ErrorResponse, Language } from "../types";
import { fetchData } from "./api";

export const getCeremonies = async (language: Language = "en-US"): Promise<ApiResponse<Ceremony[]> | ErrorResponse> => {
  return await fetchData("/v1/ceremonies", { language });
}

export const getCeremonyByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Ceremony> | ErrorResponse> => {
  return await fetchData(`/v1/ceremonies/${uuid}`, { language });
}