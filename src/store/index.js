import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import announcementsReducer from "../components/announcements/announcementsSlice";
import checklistReducer from "../components/checklist/checklistSlice";
import shoppingListReducer from "../components/shoppinglist/shoppingListSlice";

export const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
    checklist: checklistReducer,
    shoppingList: shoppingListReducer,
  },
});

setupListeners(store.dispatch);
