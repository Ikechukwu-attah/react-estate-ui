import { useMutation } from "@tanstack/react-query";
import { apiAxios } from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiEndpoints";

export const useSavedPost = () => {
  return useMutation({
    mutationFn: async (data) => {
      console.log(data);
      try {
        const response = await apiAxios.post(API_ENDPOINTS.SAVEPOST, data);

        return response;
      } catch (error) {
        throw new Error(error.response.data.message || " Failed to logout");
      }
    },
    onSuccess: (data) => {
      console.log("saved", data);
    },
  });
};
