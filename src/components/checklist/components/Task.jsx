import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeTask } from "../checklistSlice";

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className="checklist">
      <label className="toplabel">Task</label>
      <h3>
        id:{task.id} / content:{task.content} / index:{index}
      </h3>
      <div className="btn-checked" onClick={() => dispatch(removeTask(task))} />
    </div>
  );
};

export default Task;
