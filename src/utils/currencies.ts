import type { ApiResponse, Currency, ErrorResponse, Language } from "../types";
import { fetchData } from "./api";

export const getCurrencies = async (language: Language = "en-US"): Promise<ApiResponse<Currency[]> | ErrorResponse> => {
  return await fetchData("/v1/currencies", { language });
}

export const getCurrencyByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Currency> | ErrorResponse> => {
  return await fetchData(`/v1/currencies/${uuid}`, { language });
}