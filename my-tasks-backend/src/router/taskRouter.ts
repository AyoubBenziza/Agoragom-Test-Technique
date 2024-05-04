// Imports
import express from "express";
const router = express.Router();
import {
  getAllTasks,
  getTask,
  createTask,
  editTask,
  deleteTask,
} from "../controller/taskController.js";

//-------------- CRUD --------------//

//-------------- GET --------------//
router.get("/", getAllTasks);
router.get("/:id", getTask);
//-------------- GET --------------//

//-------------- POST --------------//
router.post("/", createTask);
//-------------- POST --------------//

//-------------- PUT --------------//
router.put("/:id", editTask);
//-------------- PUT --------------//

//-------------- DELETE --------------//
router.delete("/:id", deleteTask);
//-------------- DELETE --------------//

//-------------- CRUD --------------//

// Exports
export default router;
