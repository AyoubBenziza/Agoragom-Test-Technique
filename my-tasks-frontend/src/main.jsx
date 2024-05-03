// Imports
import "src/styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
  defer,
} from "react-router-dom";
import TaskList from "./components/task/TaskList";

import { createTask, deleteTask, getAllTasks } from "./services/task";

const tasksLoader = async () => {
  try {
    const tasks = await getAllTasks();
    console.log(`Tasks`, tasks);
    return defer({
      tasks: tasks, // <-- function value returned!
    });
  } catch (err) {
    console.error(err);
  }
};

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

const editTask = async ({ request, params }) => {
  try {
    const formData = await request.formData();
    const task = Object.fromEntries(formData);
    document.getElementById("formTask").reset();
    await editTask(params.taskId, task);
    return redirect("/tasks");
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

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        loader: async () => redirect("/tasks"),
      },
      {
        path: "tasks",
        element: <TaskList />,
        loader: tasksLoader,
        children: [
          {
            path: "create",
            element: null,
            action: addTask,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: ":taskId/edit",
            action: editTask,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: ":taskId/destroy",
            action: destroyTask,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
