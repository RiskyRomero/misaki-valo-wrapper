import type { ApiResponse, ErrorResponse, Event, Language } from "../types";
import { fetchData } from "./api";

export const getEvents = async (language: Language = "en-US"): Promise<ApiResponse<Event[]> | ErrorResponse> => {
  return await fetchData("/v1/events", { language });
}

export const getEventByUuid = async (uuid: string, language: Language = "en-US"): Promise<ApiResponse<Event> | ErrorResponse> => {
  return await fetchData(`/v1/events/${uuid}`, { language });
}