import axios from "axios";
import { useState } from "react";
import { API_ENDPOINTS } from "../../config/apiEndpoints";

export const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const register = async (userData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(API_ENDPOINTS.REGISTER, userData);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { register, data, isLoading, error };
};
