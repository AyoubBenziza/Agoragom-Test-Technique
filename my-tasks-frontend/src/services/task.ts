import Task from "../interfaces/Task";

// API URL
const url: string = "http://localhost:8080/api/tasks";

//----------------- CRUD ------------------//

//----------------- GET -------------------//
const getAllTasks = async () => {
  try {
    return fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((tasks: Task[]) => tasks);
  } catch (err) {
    return err;
  }
};
const getTask = async (id: string) => {
  try {
    return fetch(url + `/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((task: Task) => task);
  } catch (err) {
    return err;
  }
};
//----------------- GET -------------------//

//---------------- POST -------------------//
const createTask = async (task: Task) => {
  try {
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((response) => response);
  } catch (err) {
    return err;
  }
};
//---------------- POST -------------------//

//----------------- PUT -------------------//
const editTask = async (id: string, task: Task) => {
  try {
    return fetch(url + `/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...task }),
    }).then((response) => response);
  } catch (err) {
    return err;
  }
};
//----------------- PUT -------------------//

//---------------- DELETE ------------------//
const deleteTask = async (id: string) => {
  try {
    return fetch(url + `/${id}`, { method: "DELETE" }).then(
      (response) => response
    );
  } catch (err) {
    console.error(err);
    return err;
  }
};
//---------------- DELETE -----------------//

//----------------- CRUD ------------------//

// Exports
export { createTask, deleteTask, editTask, getTask, getAllTasks };
