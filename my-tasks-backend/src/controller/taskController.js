// Imports
const path = require("path");
const fs = require("fs");
const db = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/", "tasks.json"))
);

// Update Database
const updateDatabase = () =>
  fs.writeFileSync(
    path.join(__dirname, "../data/", "tasks.json"),
    JSON.stringify(db)
  );

//-------------- CRUD --------------//

//-------------- GET --------------//
// List of All Tasks
const getAllTasks = (req, res) => {
  try {
    res.status(200).json(db);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Details of a Task
const getTask = (req, res) => {
  try {
    const task = db.find((task) => task.id === parseInt(req.params.id));
    res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
//-------------- GET --------------//

//-------------- POST --------------//
// Create a new Task
const createTask = (req, res) => {
  try {
    const id = db.length + 1;
    const { title } = req.body;
    // Return an error if property title missing
    if (!title) throw new Error("Property title is not defined");
    const task = { id, title };
    db.push(task);
    updateDatabase();
    res.status(201).send("New task created");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
//-------------- POST --------------//

//-------------- PUT --------------//
// Edit a Task
const editTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title } = req.body;
    // Return an error if property title missing
    if (!title) throw new Error("Property title is not defined");
    const index = db.findIndex((task) => task.id === parseInt(id));
    const task = { id, title };
    db[index] = task;
    updateDatabase();
    res.status(201).send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
//-------------- PUT --------------//

//-------------- DELETE --------------//
// Delete a Task
const deleteTask = (req, res) => {
  try {
    const index = db.findIndex((task) => task.id === parseInt(req.params.id));
    console.log(index);
    db.splice(index, 1);
    updateDatabase();
    res.status(200).send("Task deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
//-------------- DELETE --------------//

//-------------- CRUD --------------//

// Exports
module.exports = { getAllTasks, getTask, createTask, editTask, deleteTask };
