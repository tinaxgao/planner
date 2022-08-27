import "./Checklist.css";
import React from "react";
import TaskList from "./components/TaskList";
import AddChecklistTask from "./AddChecklistTask";

const Checklist = () => {

  return (
    <>
      <TaskList />
      <AddChecklistTask />
    </>
  );
};

export default Checklist;
