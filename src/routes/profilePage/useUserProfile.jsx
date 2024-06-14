import { useMutation } from "@tanstack/react-query";
import { apiAxios } from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiEndpoints";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContex";

export const useLogout = () => {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async () => {
      try {
        const response = await apiAxios.post(API_ENDPOINTS.LOGOUT);
        console.log("james attah");
        updateUser(null);
        navigate("/login");
        return response;
      } catch (error) {
        throw new Error(error.response.data.message || " Failed to logout");
      }
    },
    onSuccess: () => {
      navigate("/login");
      console.log("helli=o i ma logout");
    },
  });
};
