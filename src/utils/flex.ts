import type { ApiResponse, ErrorResponse, Flex, Language } from "../types";
import { fetchData } from "./api";

export const getFlex = async (language: Language = "en-US"): Promise<ApiResponse<Flex[]> | ErrorResponse> => {
  return await fetchData("/v1/flex", { language });
}

export const getFlexByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Flex> | ErrorResponse> => {
  return await fetchData(`/v1/flex/${uuid}`, { language });
}