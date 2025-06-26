const express = require("express");
const router = express.Router();
const {auth} = require('../middlewares/auth');

const {createTask, updateTask, deleteTask, getTaskDetails, getAllTasks} = require("../controllers/Task");

router.post("/createtask",auth,createTask);
router.post("/update",auth,updateTask);
router.post("/delete",auth,deleteTask);
router.post("/get",auth,getAllTasks);

module.exports = router