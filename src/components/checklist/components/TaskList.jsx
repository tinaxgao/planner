import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import { useQuery } from "react-query";
import Task from "./Task";
import { DB_MAIN_CHECKLIST_ID, DB_BASE_URI } from "../../constants";

// async function getTasks() {
//   const response = await fetch(
//     `${DB_BASE_URI}/tasklists/${DB_MAIN_CHECKLIST_ID}`
//   );
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return await response.json();
// }

const TaskList = SortableContainer(({tasks}) => {
  // const { data } = useQuery("tasks", getTasks);
  // const tasks = data?.list.contents || [];

  // const handleDrop = ([dropZone, item]) => {
  //   console.log("dropZone", dropZone);
  //   console.log("item", item);
  // };

  return (
    <>
      {tasks.map((task, index) => {
        // const currentPath = `${index}`;

        if (!task.done) {
          return (
            <React.Fragment key={index}>
              {/* <DropZone
                key={`${index}-0`}
                data={`${index}-0`}
                path={0}
                onDrop={handleDrop}
                isFirst={true} 
              />*/}
              <Task task={task} key={index} index={index} />
              {/* <DropZone
                key={`${index}-1`}
                data={`${index}-1`}
                path={currentPath}
                onDrop={handleDrop}
              /> */}
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
    </>
  );
});

export default TaskList;
