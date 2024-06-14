const BASE_URL =
    import.meta.env.VITE_BASE_URL;

export const API_ENDPOINTS = {
    REGISTER: `${BASE_URL}/auth/register`,
    LOGIN: `${BASE_URL}/auth/login`,
    LOGOUT: `${BASE_URL}/auth/logout`,
    UPDATEUSERPROFILE: `${BASE_URL}/users`,
    GETPOST: `${BASE_URL}/post`,
    GETPOSTS: `${BASE_URL}/post`,
    UPDATEPOST: `${BASE_URL}/post`,
    DELETEPOST: `${BASE_URL}/post`,
    ADDPOST: `${BASE_URL}/post`,
    SAVEPOST: `${BASE_URL}/post/save`,
};