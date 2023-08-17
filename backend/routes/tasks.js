const express = require("express");
const router = express.Router();
const {getTasks,addtasks,Update,Remove}= require("../controller/tasks")
 
router.get("/get",getTasks);
router.post("/add",addtasks);
router.put("/:id",Update);
router.delete("/:id",Remove);
module.exports = router;
