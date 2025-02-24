const express = require("express");
const router = express.Router();
const { authController } = require("../container");

router.post("/login", authController.login);

module.exports = router;
