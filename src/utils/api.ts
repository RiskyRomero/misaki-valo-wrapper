import axios from "axios"

export const fetchData = async <T = any>(endpoint: string): Promise<T | void> => {
  axios.get(`https://valorant-api.com${endpoint}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("Server error:", {
          status: error.response.status,
          data: error.response.data
        })
      } else if (error.request) {
        console.error("Network error (No response):", error.request)
      } else {
        console.log('Error', error.message);
      }
      console.error(error.config)
    });
}