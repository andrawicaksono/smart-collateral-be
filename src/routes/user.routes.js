const express = require("express");
const router = express.Router();
const { userController } = require("../container");
const { validateInput } = require("../middlewares/input.middleware");
const { addUserSchema } = require("../validators/user.validator");

router.post("/", validateInput(addUserSchema), userController.addUser);

module.exports = router;
