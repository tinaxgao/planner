import React, { useCallback } from "react";
import { useQuery } from "react-query";
import Task from "./Task";
import DropZone from "../../../utils/DnD/DropZone";
import { DB_MAIN_CHECKLIST_ID } from "../../constants";

async function getTasks() {
  const response = await fetch(
    `http://localhost:9000/tasklists/${DB_MAIN_CHECKLIST_ID}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

const TaskList = () => {
  const { data } = useQuery("tasks", getTasks);
  const tasks = data?.list.contents || [];

  const handleDrop = useCallback((dropZone, item) => {
    console.log("dropZone", dropZone);
    console.log("item", item);
  }, []);

  return (
    <>
      {tasks.map((task, index) => {
        const currentPath = `${index}`;

        if (!task.done) {
          return (
            <React.Fragment key={index}>
              <DropZone
                data={{ path: `${index}-0` }}
                onDrop={handleDrop}
                path={currentPath}
              />
              <Task task={task} key={index} />
              <DropZone
                data={{ path: `${index}-1` }}
                onDrop={handleDrop}
                path={currentPath}
              />
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default TaskList;
