import React from "react";
import "./Checklist.css";
import { useDispatch } from "react-redux";
import { addTask } from "./checklistSlice";

const AddChecklistTask = () => {
  const dispatch = useDispatch();

  // Add new task from form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(document.getElementById("newTask").value));
    document.getElementById("newTask").value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTask">Add task</label>
        <input type="text" id="newTask" />
        <button id="btn-formsubmit" type="submit"></button>
      </form>
    </div>
  );
};

export default AddChecklistTask;
