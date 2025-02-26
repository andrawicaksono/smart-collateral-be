const express = require("express");
const router = express.Router();
const { predictController, authMiddleware } = require("../container");
const { validateInput } = require("../middlewares/input.middleware");
const { predictSchema } = require("../validators/predict.validator");

router.post(
  "/",
  authMiddleware.verifyToken,
  validateInput(predictSchema),
  predictController.predict
);

module.exports = router;
