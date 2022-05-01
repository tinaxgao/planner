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
      <label className="toplabel">Task</label>
      <h3>{a.content}</h3>
      <div className="btn-checked" onClick={() => dispatch(removeTask(a))} />
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
