import React from 'react'

const CompleteTask = ({data}) => {
  return (
   <div className="flex-shrink-0 p-5 h-full bg-pink-400 w-[300px] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">  {data?.category}</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm ">
       {data.taskDescription}
        </p>
           <div className=" mt-2 ">
        <button className="w-full bg-blue-500 rounded font-medium py-1 px-2 text-xs">Complete</button>
      </div>
      </div>
  )
}

export default CompleteTask
