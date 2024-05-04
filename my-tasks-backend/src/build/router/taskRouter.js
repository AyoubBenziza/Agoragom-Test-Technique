import express from "express";
const router = express.Router();
import { getAllTasks, getTask, createTask, editTask, deleteTask, } from "../controller/taskController.js";
router.get("/", getAllTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);
export default router;
