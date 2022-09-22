import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { useMutation, useQueryClient } from "react-query";
import { DB_MAIN_CHECKLIST_ID, DB_BASE_URI } from "../../constants";

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

const Task = SortableElement(({ task }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((data) => markTaskDone(data), {
    onSettled: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  return (
    <div className="checklist">
      <label className="toplabel">Task</label>
      <h3>{task.name}</h3>
      <div className="btn-checked" onClick={() => mutate(task._id)} />
    </div>
  );
});

export default Task;
