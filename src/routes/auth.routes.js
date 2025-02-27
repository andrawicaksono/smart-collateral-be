const express = require("express");
const router = express.Router();
const { authController, authMiddleware } = require("../container");
const { validateInput } = require("../middlewares/input.middleware");
const { loginSchema } = require("../validators/auth.validator");
const { rateLimit } = require("express-rate-limit");

// Rate Limit 5 requests per 5 minutes
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later.",
});

router.post(
  "/login",
  limiter,
  validateInput(loginSchema),
  authController.login
);
router.get("/me", authMiddleware.verifyToken, authController.getAuthUser);

module.exports = router;
