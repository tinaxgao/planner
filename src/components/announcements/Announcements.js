import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAnnouncement } from "./announcementsSlice";
import "./Announcements.css";

const Announcements = () => {
  const dispatch = useDispatch();

  const announcements = useSelector((state) => state.announcements);
  const announcement = announcements.announcements.map((a) => (
    <div key={a.id} className="announcement">
      <div className="top-div">
        <div id="announce-date">{a.date} News</div>
        <div
          className="cancel-btn"
          onClick={() => dispatch(removeAnnouncement(a))}
        />
      </div>
      <p>{a.content}</p>
    </div>
  ));

  return <div>{announcement}</div>;
};

export default Announcements;
