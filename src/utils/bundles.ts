import type { Bundle } from "typescript";
import type { ApiResponse, ErrorResponse, Language } from "../types";
import { fetchData } from "./api";

export const getBundles = async (language: Language = "en-US"): Promise<ApiResponse<Bundle> | ErrorResponse> => {
  return await fetchData("/v1/bundles", { language });
}

export const getBundleByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Bundle> | ErrorResponse> => {
  return await fetchData(`/v1/bundles/${uuid}`, { language });
}