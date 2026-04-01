import React from "react";

const NewTask = ({data,onStatusChange }) => {
  // console.log("hdwb", data);

  return (
    <div className="flex-shrink-0 p-5 h-full bg-gray-400 w-[300px] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {" "}
          {data?.priority}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
    <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
<p className="text-sm">{data.taskDescription}</p>

      <div className="flex justify-between mt-4 ">
<button
  onClick={() => onStatusChange(data.id, "active")}
  className="bg-green-500 py-1 px-2 text-sm"
>
  Accept Task
</button>      </div>
    </div>
  );
};

export default NewTask;
