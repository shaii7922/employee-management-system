import React from "react";

const TaskListNumber = ({ currentUser }) => {
  if (!currentUser) return null;

  const { taskCount } = currentUser;

  // const tasks = currentUser.tasks || [];

  console.log(currentUser,"upper")

  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      {/* New Tasks */}
      <div className="py-6 px-9 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-3xl font-semibold">{taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>

      {/* Active Tasks */}
      <div className="py-6 px-9 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-3xl font-semibold">{taskCount.active}</h2>
        <h3 className="text-xl font-medium">Active Tasks</h3>
      </div>

      {/* Completed Tasks */}
      <div className="py-6 px-9 rounded-xl w-[45%] bg-green-400">
        <h2 className="text-3xl font-semibold">{taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>

      {/* Failed Tasks */}
      <div className="py-6 px-9 rounded-xl w-[45%] bg-yellow-400">
        <h2 className="text-3xl font-semibold">{taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
