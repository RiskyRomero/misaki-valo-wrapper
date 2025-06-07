import axios from "axios"
import type { ApiResponse, ErrorResponse } from "../types";

export const fetchData = async <T = any>(endpoint: string): Promise<ApiResponse<T> | ErrorResponse> => {
  try {
    const response = await axios.get<ApiResponse<T>>(`https://valorant-api.com${endpoint}`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return {
        status: error.status || 500,
        error: error.message
      }
    } else if (error.request) {
      console.error("Network error (No response):", error.request);
    } else {
      console.error("Error", error.message);
    }
    console.error(error.config);
    throw error;
  }
};