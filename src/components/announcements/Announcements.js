import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./announcementsSlice";
import AddAnnouncement from "./AddAnnouncement.js";

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

  return (
    <div>
      {announcement}

      <AddAnnouncement />
    </div>
  );
};

export default Announcements;
