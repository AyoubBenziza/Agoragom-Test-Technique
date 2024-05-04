// Imports
import { Request, Response } from "express";
import { writeFileSync } from "fs";

// Database
import db from "../../data/tasks.json" with { type: "json" };
import Task from "../interface/Task";


// Update Database
const updateDatabase = () => {
  writeFileSync("./data/tasks.json", JSON.stringify(db));
};

//-------------- CRUD --------------//

//-------------- GET --------------//
// List of All Tasks
const getAllTasks = (req: Request, res: Response) => {
  try {
    res.status(200).json(db);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

// Details of a Task
const getTask = (req: Request, res: Response) => {
  try {
    const task = db.find((task) => task.id === parseInt(req.params.id));
    res.status(200).json(task);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
//-------------- GET --------------//

//-------------- POST --------------//
// Create a new Task
const createTask = (req: Request, res: Response) => {
  try {
    const id: number = db.length + 1;
    const { title } = req.body;
    // Return an error if property title missing
    if (!title) throw new Error("Property title is not defined");
    const task:Task = { id, title };
    db.push(task);
    updateDatabase();
    res.status(201).send("New task created");
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
//-------------- POST --------------//

//-------------- PUT --------------//
// Edit a Task
const editTask = (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const { title } = req.body;
    // Return an error if property title missing
    if (!title) throw new Error("Property title is not defined");
    const index: number = db.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new Error("Task not found");
    }
    const task:Task = { id, title };
    db[index] = task;
    updateDatabase();
    res.status(201).send(task);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
//-------------- PUT --------------//

//-------------- DELETE --------------//
// Delete a Task
const deleteTask = (req: Request, res: Response) => {
  try {
    const index: number = db.findIndex((task) => task.id === parseInt(req.params.id));
    if (index === -1) {
      throw new Error("Task not found");
    }
    db.splice(index, 1);
    updateDatabase();
    res.status(200).send("Task deleted");
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
//-------------- DELETE --------------//

//-------------- CRUD --------------//

// Exports
export { createTask, deleteTask, editTask, getAllTasks, getTask };

