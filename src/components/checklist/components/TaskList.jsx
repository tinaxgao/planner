import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { DropZone } from "../../../utils/DnD/DropZone";

const TaskList = () => {
  const tasks = useSelector((state) => state.checklist);

  return (
    <div>
      <DropZone data={{ path: "0-0" }} />
      {tasks.checklist.map((i, index) => (
        <React.Fragment key={i.id}>
          <DropZone data={{ path: `${index}-0` }} />
          <Task task={i} index={index} />
          <DropZone data={{ path: `${index}-1` }} />
        </React.Fragment>
      ))}
      <DropZone data={{ path: "0-0" }} isLast />
    </div>
  );
};

export default TaskList;
