import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { add, remove } from "./announcementsSlice";

const Announcements = () => {
  const announcements = useSelector((state) => state.announcements);
  const announcement = announcements.announcements.map((a) => <p>{a.content}</p>);
  console.log(announcement);
  // const dispatch = useDispatch();

  return <div>{announcement}</div>;
};

export default Announcements;
