const express = require("express");
const {getUsers,addUsers ,signUp,signIn}= require("../controller/users")
const router = express.Router();
 
router.get("/getAll",getUsers);
router.post("/add",addUsers)
router.post('/signup', signUp);
router.post('/signin',signIn);
module.exports = router;
