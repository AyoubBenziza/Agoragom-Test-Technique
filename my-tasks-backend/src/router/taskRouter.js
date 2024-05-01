// Imports
const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  createTask,
  editTask,
  deleteTask,
} = require("../controller/taskController");

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
module.exports = router;
