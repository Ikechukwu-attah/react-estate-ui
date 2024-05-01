const BASE_URL = import.meta.env.VITE_BASE_URL;

export const API_ENDPOINTS = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
};
