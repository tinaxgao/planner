import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checklist: [
    {
      id: '1',
      content: "cut cucumbers",
    },
    {
      id: '2',
      content: "make pizza sauce",
    },
  ],
};

export const checklistSlice = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.checklist.push({
        id: state.checklist.length + 1,
        content: action.payload
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
