import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./announcementsSlice";

const Announcements = () => {
  const announcements = useSelector((state) => state.announcements);
  const announcement = announcements.announcements.map((a) => (
    <div key={a.id} className="announcement">
      <p>{a.content}</p>
      {a.date}
      <button onClick={() => dispatch(remove(a))}>x</button>
    </div>
  ));

  console.log(announcements.announcements.map((i) => i)); //DELETE console.log

  const dispatch = useDispatch();

  return <div>{announcement}</div>;
};

export default Announcements;
