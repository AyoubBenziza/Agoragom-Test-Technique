import { writeFileSync } from "fs";
import db from "../data/tasks.json" with { type: "json" };
const updateDatabase = () => {
    writeFileSync("./src/data/tasks.json", JSON.stringify(db));
};
const getAllTasks = (req, res) => {
    try {
        res.status(200).json(db);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
const getTask = (req, res) => {
    try {
        const task = db.find((task) => task.id === parseInt(req.params.id));
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
const createTask = (req, res) => {
    try {
        const id = db.length + 1;
        const { title } = req.body;
        if (!title)
            throw new Error("Property title is not defined");
        const task = { id, title };
        db.push(task);
        updateDatabase();
        res.status(201).send("New task created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
const editTask = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title } = req.body;
        if (!title)
            throw new Error("Property title is not defined");
        const index = db.findIndex((task) => task.id === id);
        if (index === -1) {
            throw new Error("Task not found");
        }
        const task = { id, title };
        db[index] = task;
        updateDatabase();
        res.status(201).send(task);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
const deleteTask = (req, res) => {
    try {
        const index = db.findIndex((task) => task.id === parseInt(req.params.id));
        if (index === -1) {
            throw new Error("Task not found");
        }
        db.splice(index, 1);
        updateDatabase();
        res.status(200).send("Task deleted");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
export { createTask, deleteTask, editTask, getAllTasks, getTask };
