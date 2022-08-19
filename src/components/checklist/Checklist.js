import "./Checklist.css";
import React from "react";
import TaskList from "./components/TaskList";
import AddChecklistTask from "./AddChecklistTask";

const Checklist = () => {

  // const task = tasks.checklist.map((i, index) => (
  //   <div key={i.id} className="task">
  //     <label className="toplabel">Task</label>
  //     <h3>
  //       id:{i.id}content:{i.content}index:{index}
  //     </h3>
  //     <div className="btn-checked" onClick={() => dispatch(removeTask(i))} />
  //   </div>
  // ));

  return (
    <div>
      {/* <div id="checklist">{task}</div> */}
      <TaskList />
      <AddChecklistTask />
    </div>
  );
};

export default Checklist;
