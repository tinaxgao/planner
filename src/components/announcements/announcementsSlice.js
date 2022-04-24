import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  announcements: [
    {
      id: 1,
      content: "mask requirements",
      date: "04/23/22",
    },
    {
      id: 2,
      content: "hours change",
      date: "04/23/22",
    },
  ],
};

export const announcementsSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    addAnnouncement: (state, action) => {
      state.announcements.push({
        id: state.announcements.length + 1,
        content: action.payload,
        date: new Date().toLocaleDateString(),
      });
    },
    removeAnnouncement: (state, action) => {
      state.announcements = state.announcements.filter(
        (a) => a.id !== action.payload.id
      );
    },
  },
});

export const { addAnnouncement, removeAnnouncement } = announcementsSlice.actions;

export default announcementsSlice.reducer;
