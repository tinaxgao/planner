import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./announcementsSlice";

const Announcements = () => {
  const dispatch = useDispatch();

  const announcements = useSelector((state) => state.announcements);
  const announcement = announcements.announcements.map((a) => (
    <div key={a.id} className="announcement">
      <p>{a.content}</p>
      {a.date}
      <button onClick={() => dispatch(remove(a))}>x</button>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(document.getElementById("newAnnounce").value))
  }

  return (
    <div>
      {announcement}

      <form onSubmit={handleSubmit}>
        <label htmlFor="newAnnounce">Add announcement</label>
        <input type="text" id="newAnnounce" />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Announcements;
