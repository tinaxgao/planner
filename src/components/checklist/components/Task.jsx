import React from "react";
import { useDrag } from "react-dnd";
import { useQueryClient, useMutation } from "react-query";
import { LISTITEM, DB_MAIN_CHECKLIST_ID, DB_BASE_URI } from "../../constants";

async function markTaskDone(task) {
  const response = await fetch(
    `${DB_BASE_URI}/tasklists/${DB_MAIN_CHECKLIST_ID}/done`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: task, done: true }),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

const Task = ({ task }) => {
  console.log("Task task prop:", task); // TODO: remove this
  const { mutate } = useMutation((data) => markTaskDone(data));

  const [{ opacity }, drag] = useDrag({
    type: LISTITEM,
    item: { id: task.id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.2 : 1,
    }),
  });

  return (
    <div className="checklist" ref={drag} style={{ opacity }}>
      <label className="toplabel">Task</label>
      <h3>{task.name}</h3>
      <div className="btn-checked" onClick={() => mutate(task._id)} />
    </div>
  );
};

export default Task;
