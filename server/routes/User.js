const express = require("express");
const router = express.Router();

const {singup, signin} = require("../controllers/Auth");

router.post("/signup",singup)

router.post("/signin",signin)

module.exports = router