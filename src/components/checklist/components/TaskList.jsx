import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const tasks = useSelector((state) => state.checklist);

  return (
    <div>
      {tasks.checklist.map((i, index) => (
        <Task key={i.id} task={i} index={index} />
      ))}
    </div>
  );
};

export default TaskList;
