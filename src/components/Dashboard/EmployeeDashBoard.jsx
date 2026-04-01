import React from "react";
import Headers from "../Headers";
import TaskListNumber from "../UI/TaskListNumber";
import TasklistUi from "../TaskList/TasklistUi";
import { getTaskCount } from "../../utils/commonUtilis";
import { setLocalStorage } from "../../utils/LocalStorage";

const EmployeeDashBoard = ({ authData, onLogout, setAuthData }) => {
  const { currentUser } = authData;
  console.log("currentUser", currentUser);

 const handleUpdatedTaskStatus = (taskID, status) => {
  setAuthData((prev) => {
    const updatedEmployees = prev.employees.map((emp) => {
      if (emp.name === prev.currentUser.name) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.id === taskID) {
            return {
              ...task,
              active: false,
              newTask: false,
              completed: status === "completed",
              failed: status === "failed",
            };
          }
          return task;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: getTaskCount(updatedTasks),
        };
      }
      return emp;
    });

    // 🔥 IMPORTANT: update currentUser also
    const updatedCurrentUser = updatedEmployees.find(
      (emp) => emp.name === prev.currentUser.name
    );

    const updatedAuthData = {
      ...prev,
      employees: updatedEmployees,
      currentUser: updatedCurrentUser,
    };

    // ✅ Save latest data to localStorage
    setLocalStorage(updatedAuthData);

    return updatedAuthData;
  });
};

  return (
    <>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Headers currentUser={currentUser} onLogout={onLogout} />
        <TaskListNumber currentUser={currentUser} />
        <TasklistUi
          currentUser={currentUser}
          onStatusChange={handleUpdatedTaskStatus}
        />
      </div>
    </>
  );
};

export default EmployeeDashBoard;
