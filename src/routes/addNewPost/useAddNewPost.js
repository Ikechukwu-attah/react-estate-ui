import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiAxios } from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiEndpoints";

export const useAddNewPost = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async(data) => {
            console.log({ data });
            try {
                const response = await apiAxios.post(API_ENDPOINTS.ADDPOST, data);
                console.log("add new post", response);
                return response.data;
            } catch (error) {
                console.log("error", error);
            }
        },

        onSuccess: (data) => {
            console.log("onSuccess ", data);
            if (data) navigate("/" + data.id);
        },
    });
};