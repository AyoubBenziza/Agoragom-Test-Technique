// Imports
// React
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
// CSS
import "@/styles/index.css";
// Actions
import { addTask, destroyTask, updateTask } from "./actions/task";
// Loaders
import { taskLoader, tasksLoader } from "./loaders/task";

// Components
import Task from "./components/task/Task";
import TaskList from "./components/task/TaskList";
import TaskEdit from "./components/task/TaskEdit";

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
        children: [
          {
            index: true,
            element: <TaskList />,
            loader: tasksLoader,
          },
          {
            path: "create",
            element: null,
            action: addTask,
            errorElement: <h1>Oops! There was an error.</h1>,
          },
          {
            path: ":taskId",
            errorElement: <h1>Task not found</h1>,
            children: [
              {
                index: true,
                element: <Task />,
                loader: taskLoader,
              },
              {
                path: "edit",
                loader: taskLoader,
                action: updateTask,
                element: <TaskEdit />,
                errorElement: <h1>Oops! There was an error.</h1>,
              },
              {
                path: "destroy",
                action: destroyTask,
                errorElement: <h1>Oops! There was an error.</h1>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
