const express = require("express");
const router = express.Router();
const { userController } = require("../container");

router.post("/", userController.addUser);

module.exports = router;
