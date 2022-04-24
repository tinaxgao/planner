import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./checklistSlice";
import AddChecklistTask from "./AddChecklistTask";

const Checklist = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.checklist);
  const task = tasks.checklist.map((a) => (
    <div key={a.id} className="tasks">
      <p>{a.content}</p>
      {a.date}
      <button onClick={() => dispatch(remove(a))}>x</button>
    </div>
  ));

  return (
    <div>
      {task}

      <AddChecklistTask />
    </div>
  );
};

export default Checklist;
