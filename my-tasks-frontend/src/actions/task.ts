import { redirect } from "react-router-dom";
import { createTask, deleteTask, editTask } from "../services/task";
import Task from "../interfaces/Task";

const addTask = async ({ request }) => {
  try {
    const formTask = <HTMLFormElement>document.getElementById("formTask");
    const formData = await request.formData();
    const task: Task = <Task>Object.fromEntries(formData);
    if (formTask !== null) {
      formTask.reset();
    }
    await createTask(task);
    return redirect("/tasks");
  } catch (err) {
    console.error(err);
  }
};

const updateTask = async ({ request, params }) => {
  try {
    const formData = await request.formData();
    const task: Task = <Task>Object.fromEntries(formData);
    await editTask(params.taskId, task);
    return redirect(`/tasks/${params.taskId}`);
  } catch (err) {
    console.error(err);
  }
};

const destroyTask = async ({ params }) => {
  try {
    await deleteTask(params.taskId);
    return redirect("/tasks");
  } catch (err) {
    console.error(err);
  }
};

export { addTask, destroyTask, updateTask };
