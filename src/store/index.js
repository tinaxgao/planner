import { configureStore } from "@reduxjs/toolkit";
import announcementsReducer from "../components/announcements/announcementsSlice";

export const store = configureStore({
    reducer: {
        announcements: announcementsReducer,
    }
});