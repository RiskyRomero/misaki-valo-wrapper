import type { ApiResponse, ErrorResponse, Gear, Language } from "../types";
import { fetchData } from "./api";

export const getGear = async (language: Language = "en-US"): Promise<ApiResponse<Gear[]> | ErrorResponse> => {
  return await fetchData("/v1/gear", { language });
}

export const getGearByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Gear> | ErrorResponse> => {
  return await fetchData(`/v1/gear/${uuid}`, { language });
}