import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAnnouncement } from "./announcementsSlice";
import AddAnnouncement from "./AddAnnouncement.js";
import "./Announcements.css";

const Announcements = () => {
  const dispatch = useDispatch();

  const announcements = useSelector((state) => state.announcements);
  const announcement = announcements.announcements.map((a) => (
    <div key={a.id} className="announcement">
      <div>
        <div id="announce-date">{a.date}</div>
        <button onClick={() => dispatch(removeAnnouncement(a))}>x</button>
      </div>
      <p>{a.content}</p>
    </div>
  ));

  return (
    <div>
      {announcement}
    </div>
  );
};

export default Announcements;
