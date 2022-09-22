import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { useForm } from "react-hook-form";
import "./Checklist.css";
import { DB_MAIN_CHECKLIST_ID, DB_BASE_URI } from "../constants";

async function addNewTask(content) {
  const response = await fetch(
    `${DB_BASE_URI}/tasklists/${DB_MAIN_CHECKLIST_ID}/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

const AddChecklistTask = () => {
  const { register, handleSubmit, resetField } = useForm();

  const queryClient = useQueryClient();
  const { mutate } = useMutation((data) => addNewTask(data), {
    onSettled: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const onSubmit = (data) => {
    data.type = "listItem";
    mutate(data);
    resetField("name");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="newTask" className="formLabel">
          Add task
        </label>
        <input {...register("name")} type="text" id="newTask" />
        <button id="btn-formsubmit" type="submit"></button>
      </form>
    </div>
  );
};

export default AddChecklistTask;
