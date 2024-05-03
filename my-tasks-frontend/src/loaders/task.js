// Imports
import { defer } from "react-router-dom";
import { getAllTasks, getTask } from "../services/task";

// Load All Tasks
const tasksLoader = async () => {
  try {
    const tasks = await getAllTasks();
    return defer({
      tasks: tasks, // <-- function value returned!
    });
  } catch (err) {
    console.error(err);
  }
};

// Load One Task
const taskLoader = async ({ params }) => {
  try {
    const task = await getTask(params.taskId);
    return defer({
      task: task, // <-- function value returned!
    });
  } catch (err) {
    console.error(err);
  }
};

// Exports
export { taskLoader, tasksLoader };
