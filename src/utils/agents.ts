import { fetchData } from "./api";
import type { Agent, ApiResponse, ErrorResponse, Language } from "../types";

const endpointUrl = "/v1/agents";

export const getAgents = async (language: Language = "en-US", isPlayableCharacter: boolean = false): Promise<ApiResponse<Agent[]> | ErrorResponse> => {
  return await fetchData<Agent[]>(endpointUrl, {
    language,
    isPlayableCharacter
  });
}

export const getAgentByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Agent> | ErrorResponse> => {
  return await fetchData<Agent>(endpointUrl + `/${uuid}`, { language });
}