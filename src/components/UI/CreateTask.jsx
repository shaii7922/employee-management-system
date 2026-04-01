import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { taskSchema } from "../../schemas/taskSchema";

const CreateTask = ({ onCreateTask, employees }) => {
  // const [dataStore, setStoreData] = useState({
  //   title: "",
  //   date: "",
  //   category: "",
  //   emname: "",
  //   description: "",
  // });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    onCreateTask(data);
    reset();
  };

  const onError = () => {
    toast.warning("Please fill all required fields");
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   onCreateTask(dataStore);

  //   setStoreData({
  //     title: "",
  //     date: "",
  //     category: "",
  //     emname: "",
  //     description: "",
  //   });

  // };
  // const handleData = (e) => {
  //   const { name, value } = e.target;
  //   setStoreData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  console.log("value={emp.name}", employees);

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-wrap w-full  items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                // name="title"
                // value={dataStore.title}
                // onChange={handleData}
                placeholder="Make a ui design"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                // name="date"
                // onChange={handleData}
                // value={dataStore.date}
                type="date"
                {...register("date", { required: true })}
              />

              {errors.date && (
                <p className="text-red-500 text-xs">{errors.date.message}</p>
              )}
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>

              {/* <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="Employee name"
                // name="emname"
                // value={dataStore.emname}
                // onChange={handleData}
                {...register("emname", { required: true })}
              /> */}

              <select
                {...register("emname", { required: true })}
                className="
    text-sm py-2 px-2 w-4/5
    rounded
    outline-none
    bg-[#1c1c1c]
    text-gray-200
    border border-gray-500
    cursor-pointer
  "
              >
                <option value="" className="bg-[#1c1c1c] text-gray-400">
                  Select Employee
                </option>

                {employees.map((em) => (
                  <option
                    key={em.id}
                    value={em.name}
                    className="bg-[#1c1c1c] text-white"
                  >
                    {em.name}
                  </option>
                ))}
              </select>

              {errors.emname && (
                <p className="text-red-500 text-xs">{errors.emname.message}</p>
              )}
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Priority</h3>
              <select
                {...register("priority", { required: true })}
                className="text-sm py-2 px-2 w-4/5 rounded bg-[#1c1c1c] text-white border border-gray-500"
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>

              {errors.priority && (
                <p className="text-red-500 text-xs">
                  {" "}
                  {errors.priority.message}
                </p>
              )}
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                // name="category"
                //   value={dataStore.category}
                // onChange={handleData}
                placeholder="design, dev, etc"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <p className="text-red-500 text-xs">
                  {" "}
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-2/5 flex-colitems-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="text-sm py-2 px-4 rounded outline-none bg-transparent h-44 px-2 w-full border-gray-400 border-[1px] rounded outline-none bg-transparent"
              // name="description"
              // value={dataStore.description}
              // onChange={handleData}
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs">
                {errors.description.message}
              </p>
            )}
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
