import { create } from "zustand";
import { apiAxios } from "../config/axiosInstance";

export const useNotificationStore = create((set) => ({
    number: 0,

    fetch: async() => {
        const res = await apiAxios("/users/notification");
        console.log(res.data);
        set({ number: res.data });
    },

    decrease: () => {
        set((prev) => ({ number: prev.number - 1 }));
    },

    reset: () => {
        set({ number: 0 });
    },
}));