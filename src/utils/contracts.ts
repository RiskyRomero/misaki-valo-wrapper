import type { ApiResponse, Contract, ErrorResponse, Language } from "../types";
import { fetchData } from "./api";

export const getContracts = async (language: Language = "en-US"): Promise<ApiResponse<Contract[]> | ErrorResponse> => {
  return await fetchData("/v1/contracts", { language });
}

export const getContractByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Contract> | ErrorResponse> => {
  return await fetchData(`/v1/contracts/${uuid}`, { language });
}