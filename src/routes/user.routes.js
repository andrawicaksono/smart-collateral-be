const express = require("express");
const router = express.Router();
const { userController, authMiddleware } = require("../container");
const { validateInput } = require("../middlewares/input.middleware");
const { addUserSchema } = require("../validators/user.validator");

router.post(
  "/",
  authMiddleware.verifyToken,
  authMiddleware.isAdmin,
  validateInput(addUserSchema),
  userController.addUser
);

module.exports = router;
