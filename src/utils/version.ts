import type { ApiResponse, ErrorResponse, Version } from "../types";
import { fetchData } from "./api";

export const getVersion = async (): Promise<ApiResponse<Version> | ErrorResponse> => {
  return await fetchData("/v1/version");
}