import React from "react";
import Headers from "../Headers";
import CreateTask from "../UI/CreateTask";
import AllTask from "../UI/AllTask";
import { getTaskCount } from "../../utils/commonUtilis";
import { setLocalStorage } from "../../utils/LocalStorage";
import { toast } from "react-toastify";

const AdminDashBoard = ({ authData, onLogout, setAuthData }) => {
  const { currentUser, employees } = authData;
  console.log(authData, "admnpage");

  const addCreateTaskData = (addTask) => {
    const employeeExists = authData.employees.find(
      (emp) => emp.name === addTask.emname,
    );

    if (!employeeExists) {
      toast.error("Employee not found. Please create employee first.");
      return;
    }

    const newTask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: addTask.title,
      taskDescription: addTask.description,
      date: addTask.date,
      category: addTask.category,
      priority: addTask.priority, 
    };
    // console.log("data created parent",newTask);

    const updatedData = employees.map((em) => {
      if (em.name === addTask.emname) {
        const updateTask = [...em.tasks, newTask];

        return {
          ...em,
          tasks: updateTask,
          taskCount: getTaskCount(updateTask),
        };
      } else {
      }
      return em;
    });

    setAuthData((prev) => ({
      ...prev,
      employees: updatedData,
    }));
    setLocalStorage({
      ...authData,
      employees: updatedData,
    });
    toast.success("Task created successfully");
  };
  return (
    <div className="h-screen w-full p-7">
      <Headers currentUser={currentUser} onLogout={onLogout} />
      <CreateTask employees={employees} onCreateTask={addCreateTaskData} />
      <AllTask authData={authData} />
    </div>
  );
};

export default AdminDashBoard;
