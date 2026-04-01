export const getTaskCount = (tasks = []) => {
  return {
    active: tasks.filter((t) => t.active).length,
    newTask: tasks.filter((task) => task.newTask).length,
    completed: tasks.filter((task) => task.completed).length,
    failed: tasks.filter((task) => task.failed).length,
  };
};
