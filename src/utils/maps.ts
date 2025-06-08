import type { ApiResponse, ErrorResponse, Language, Map } from "../types";
import { fetchData } from "./api";

export const getMaps = async (language: Language = "en-US"): Promise<ApiResponse<Map[]> | ErrorResponse> => {
  return await fetchData("/v1/maps", { language });
}

export const getMapByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Map> | ErrorResponse> => {
  return await fetchData(`/v1/maps/${uuid}`, { language });
}