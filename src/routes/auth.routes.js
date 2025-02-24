const express = require("express");
const router = express.Router();
const { authController } = require("../container");
const { validateInput } = require("../middlewares/input.middleware");
const { loginSchema } = require("../validators/auth.validator");

router.post("/login", validateInput(loginSchema), authController.login);

module.exports = router;
