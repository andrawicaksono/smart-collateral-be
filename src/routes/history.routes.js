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

router.get("/", authMiddleware.verifyToken, historyController.getHistory);

router.get(
  "/:id",
  authMiddleware.verifyToken,
  historyController.getDetailedHistory
);

module.exports = router;
