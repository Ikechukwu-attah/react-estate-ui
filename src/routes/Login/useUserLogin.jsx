import { useMutation } from "@tanstack/react-query";
import { apiAxios } from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiEndpoints";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContex";
import Cookies from "js-cookie";

export const useLogin = () => {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data) => {
      try {
        const response = await apiAxios.post(API_ENDPOINTS.LOGIN, data);
        return response.data;
      } catch (error) {
        console.error("Login error:", error.message);
        throw error.message;
      }
    },
    onSuccess: (resData) => {
      console.log("onSuccess", resData);
      // localStorage.setItem("user", JSON.stringify(resData.token));
      Cookies.set("token", resData.token);
      updateUser(resData.userInfo);
      navigate("/list");
    },
  });
};
