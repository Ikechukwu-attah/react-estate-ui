import { useMutation } from "@tanstack/react-query";
import { apiAxios } from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiEndpoints";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data) => {
      try {
        const response = await apiAxios.post(API_ENDPOINTS.LOGIN, data);

        return response.data;
      } catch (error) {
        console.error(
          "Login error:",
          error.response ? error.response.data.message : error
        );
        throw error.response.data.message;
      }
    },
  });
};
