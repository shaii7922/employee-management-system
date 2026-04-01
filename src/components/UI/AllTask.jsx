import React from "react";

const AllTask = ({ authData }) => {
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded  overflow-auto text-white">
      {/* Header */}
      <div className="bg-red-600 py-2 mb-3 px-4 flex justify-between rounded font-semibold">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h3 className="w-1/5 text-center">Active</h3>
        <h3 className="w-1/5 text-center">Completed</h3>
        <h3 className="w-1/5 text-center">Failed</h3>
      </div>

      {/* Rows */}
      {authData?.employees?.map((item) => (
        <div
          key={item.id}
          className="bg-red-400 py-2 mb-2 px-4 flex justify-between rounded"
        >
          <h2 className="w-1/5 font-medium">{item.name}</h2>

          <h3 className="w-1/5 text-center">{item.taskCount?.newTask}</h3>

          <h3 className="w-1/5 text-center">{item.taskCount?.active}</h3>

          <h3 className="w-1/5 text-center">{item.taskCount?.completed}</h3>

          <h3 className="w-1/5 text-center">{item.taskCount?.failed}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
