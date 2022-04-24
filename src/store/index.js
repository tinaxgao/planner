import { configureStore } from "@reduxjs/toolkit";
import announcementsReducer from "../components/announcements/announcementsSlice";
import checklistReducer from "../components/checklist/checklistSlice";

export const store = configureStore({
    reducer: {
        announcements: announcementsReducer,
        checklist: checklistReducer,
    }
});