const express = require("express");
const router = express.Router();
// There is a bug in line 4 you need to fix it
const taskModel = require("../models/taskModel");

//the purpose of this route is to get request through the root path, fetch a lists through taskModel, then return the list back to JSON Object
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// The purpose of this route is to accept incoming request of name and description, then add a task to taskmodel, then respond through the status code
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const task = await taskModel.addTask(name, description);
  res.status(201).json(task);
});

module.exports = router;
