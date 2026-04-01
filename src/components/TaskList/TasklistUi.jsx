import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TasklistUi = ({ currentUser, onStatusChange }) => {
  if (!currentUser) return null;

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full  mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap"
    >
      {currentUser?.tasks?.map((taski, i) => {
        if (taski?.active) {
          return (
            <AcceptTask key={i} data={taski} onStatusChange={onStatusChange} />
          );
        }
        if (taski?.newTask) {
          return (
            <NewTask data={taski} key={i} onStatusChange={onStatusChange} />
          );
        }
        if (taski?.completed) {
          return (
            <CompleteTask
              data={taski}
              key={i}
              onStatusChange={onStatusChange}
            />
          );
        }
        if (taski?.failed) {
          return (
            <FailedTask data={taski} key={i} onStatusChange={onStatusChange} />
          );
        }
      })}
    </div>
  );
};

export default TasklistUi;
