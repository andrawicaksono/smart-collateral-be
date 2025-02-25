const express = require("express");
const router = express.Router();
const { authController, authMiddleware } = require("../container");
const { validateInput } = require("../middlewares/input.middleware");
const { loginSchema } = require("../validators/auth.validator");

router.post("/login", validateInput(loginSchema), authController.login);
router.get("/me", authMiddleware.verifyToken, authController.getAuthUser);

module.exports = router;
