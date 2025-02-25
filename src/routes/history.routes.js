const express = require("express");
const router = express.Router();
const { historyController, authMiddleware } = require("../container");
const { validateInput } = require("../middlewares/input.middleware");
const { addHistorySchema } = require("../validators/history.validator");

router.post(
  "/",
  authMiddleware.verifyToken,
  validateInput(addHistorySchema),
  historyController.addHistory
);

module.exports = router;
