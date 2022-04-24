import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checklist: [
    {
      id: 1,
      content: "cut cucumbers",
    },
    {
      id: 2,
      content: "make pizza sauce",
    },
  ],
};

export const checklistSlice = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    add: (state, action) => {
      state.checklist.push({
        id: state.checklist.length + 1,
        content: action.payload
      });
    },
    remove: (state, action) => {
      state.checklist = state.checklist.filter(
        (a) => a.id !== action.payload.id
      );
    },
  },
});

export const { add, remove } = checklistSlice.actions;

export default checklistSlice.reducer;
