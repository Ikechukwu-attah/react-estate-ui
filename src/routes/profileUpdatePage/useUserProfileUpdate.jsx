import { useMutation } from "@tanstack/react-query";
import { apiAxios } from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiEndpoints";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContex";

export const useUserProfileUpdate = () => {
  const { currentUser, updateUser } = useContext(AuthContext);

  console.log(currentUser);

  return useMutation({
    mutationFn: async (data) => {
      try {
        const response = await apiAxios.put(
          `${API_ENDPOINTS.UPDATEUSERPROFILE}/${currentUser?.id}`,
          data
        );

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },

    onSuccess: (data) => {
      console.log("update data", data);
      updateUser(data);
    },
  });
};
