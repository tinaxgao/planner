import React from "react";
import { useDispatch } from "react-redux";
import { addAnnouncement } from "./announcementsSlice";

const AddAnnouncement = () => {
    const dispatch = useDispatch();
    
  // Add new announcement from form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnnouncement(document.getElementById("newAnnounce").value));
    document.getElementById("newAnnounce").value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newAnnounce">Add announcement</label>
        <input type="text" id="newAnnounce" />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default AddAnnouncement;
