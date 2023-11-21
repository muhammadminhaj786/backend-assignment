const express = require("express")
const router = express.Router();
const fs = require("fs");
const {SignUpController} = require("./controller/authController")


//auth api
router.post("/api/signup",SignUpController)

module.exports = router;