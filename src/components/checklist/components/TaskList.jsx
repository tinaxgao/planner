import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import Task from "./Task";
import DropZone from "../../../utils/DnD/DropZone";
import { LISTITEM, LIST } from "../../constants";

const TaskList = () => {
  // const tasks = useSelector((state) => state.checklist);

  /* GET TASKS FROM TASKLIST */
  const tasklistId = "630802099c96df23984b9e1b";
  async function getData() {
    const response = await fetch(
      `http://localhost:9000/tasklists/${tasklistId}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }
  const { data } = useQuery("tasks", getData);
  const tasks = data?.list.contents || [];
  console.log("tasks", tasks);

  const handleDrop = useCallback((dropZone, item) => {
    console.log("dropZone", dropZone);
    console.log("item", item);
  }, []);

  return (
    <>
      {tasks.map((i, index) => {
        const currentPath = `${index}`;

        return (
          <React.Fragment key={i.id}>
            <DropZone
              data={{ path: `${index}-0` }}
              onDrop={handleDrop}
              path={currentPath}
            />
            <Task task={i} index={index} />
            <DropZone
              data={{ path: `${index}-1` }}
              onDrop={handleDrop}
              path={currentPath}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TaskList;
