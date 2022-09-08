import { createSlice } from "@reduxjs/toolkit";
import { LISTITEM } from "../constants";

const initialState = {
  checklist: [
    {
      type: LISTITEM,
      id: "1",
      content: "cut cucumbers",
    },
  ],
};

const tasklistId = "630802099c96df23984b9e1b";

export const checklistSlice = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.checklist.push({
        type: LISTITEM,
        id: state.checklist.length + 1,
        content: action.payload,
      });
    },
    removeTask: (state, action) => {
      state.checklist = state.checklist.filter(
        (i) => i.id !== action.payload.id
      );
    },
  },
});

export const { addTask, removeTask } = checklistSlice.actions;

export default checklistSlice.reducer;
