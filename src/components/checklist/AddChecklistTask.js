import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { useForm } from "react-hook-form";
import "./Checklist.css";

/* ADD TASK TO TASKLIST */
const tasklistId = "630802099c96df23984b9e1b";
async function addNewTask(content) {
  console.log("addnewtask content:", content); // TODO delete console.log
  // POST the content to `http://localhost:9000/tasklists/${tasklistId}/add`
  const response = await fetch(
    `http://localhost:9000/tasklists/${tasklistId}/add`,
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
  const { mutate, isLoading } = useMutation((data) => addNewTask(data), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  // Add new task from form
  const onSubmit = (data) => {
    data.type = "listItem";
    console.log("data in add task", data); // TODO delete console.log
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
