import "./Checklist.css";
import React from "react";
import Task from "./components/Task";
import AddChecklistTask from "./AddChecklistTask";
import { sortableContainer } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { DB_MAIN_CHECKLIST_ID, DB_BASE_URI } from "../constants";

const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

async function getTasks() {
  const response = await fetch(
    `${DB_BASE_URI}/tasklists/${DB_MAIN_CHECKLIST_ID}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

async function updateTasklist(task) {
  const response = await fetch(
    `${DB_BASE_URI}/tasklists/${DB_MAIN_CHECKLIST_ID}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list: {
          name: "Main Checklist",
          contents: task,
        },
      }),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

const Checklist = () => {
  const { data } = useQuery("tasks", getTasks);
  const queriedTasks = data?.list.contents || [];

  const queryClient = useQueryClient();
  const { mutate } = useMutation((data) => updateTasklist(data), {
    onSettled: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    mutate(arrayMoveImmutable(queriedTasks, oldIndex, newIndex));
  };

  function shouldCancelStart(e) {
    // Cancel sorting if the event target is an anchor tag (`a`)
    if (e.target.tagName.toLowerCase() === "a") {
      return true; // Return true to cancel sorting
    }
  }

  return (
    <>
      <SortableContainer
        onSortEnd={onSortEnd}
        distance={1}
        shouldCancelStart={shouldCancelStart}
      >
        {queriedTasks.map(
          (value, index) =>
            !value.done && <Task key={value.id} index={index} task={value} />
        )}
      </SortableContainer>
      <AddChecklistTask />
    </>
  );
};

export default Checklist;
