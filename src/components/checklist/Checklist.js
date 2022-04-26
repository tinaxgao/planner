import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "./checklistSlice";
import AddChecklistTask from "./AddChecklistTask";
import "./Checklist.css"

const Checklist = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.checklist);
  const task = tasks.checklist.map((a) => (
    <div key={a.id} className="task">
      <div className="toplabel">Task</div>
      <p>{a.content}</p>
      <button onClick={() => dispatch(removeTask(a))}>x</button>
    </div>
  ));

  return (
    <div id="checklist">
      {task}

      <AddChecklistTask />
    </div>
  );
};

export default Checklist;
