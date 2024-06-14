import { defer } from "react-router-dom";
import { apiAxios } from "../config/axiosInstance";

export const singlePageLoader = async({ request, params }) => {
    const res = await apiAxios("/post/" + params.id);
    return res.data;
};

export const listPageLoader = async({ request, params }) => {
    console.log(request);
    const query = request.url.split("?")[1];
    const postPromise = await apiAxios("/post?" + query);
    return defer({
        postResponse: postPromise,
    });
};

export const profilePageLoader = async() => {
    const postPromise = await apiAxios("/users/profilePosts");
    const chatPromise = await apiAxios("/chat");

    return defer({
        postResponse: postPromise,
        chatResponse: chatPromise,
    });
};