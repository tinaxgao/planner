import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeTask } from "../checklistSlice";
import { LISTITEM } from "../../constants";

const Task = ({ task, index, path }) => {
  const dispatch = useDispatch();

  const [{ opacity }, drag] = useDrag({
    type: LISTITEM,
    item: { id: task.id, path },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.2 : 1,
    }),
  });

  return (
    <div className="checklist" ref={drag} style={{ opacity }}>
      <label className="toplabel">Task</label>
      <h3>
        id:{task._id} / content:{task.name} / index:{index}
      </h3>
      <div className="btn-checked" onClick={() => dispatch(removeTask(task))} />
    </div>
  );
};

export default Task;
