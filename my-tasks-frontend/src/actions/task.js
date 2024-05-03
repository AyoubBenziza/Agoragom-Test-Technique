import { redirect } from "react-router-dom";
import { createTask, deleteTask, editTask } from "../services/task";

const addTask = async ({ request }) => {
  try {
    const formData = await request.formData();
    const task = Object.fromEntries(formData);
    document.getElementById("formTask").reset();
    await createTask(task);
    return redirect("/tasks");
  } catch (err) {
    console.error(err);
  }
};

const updateTask = async ({ request, params }) => {
  try {
    const formData = await request.formData();
    const task = Object.fromEntries(formData);
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
