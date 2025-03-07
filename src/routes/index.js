const express = require("express");
const router = express.Router();

const checkRoutes = require("./check.routes");
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const historyRoutes = require("./history.routes");
const predictRoutes = require("./predict.routes");

router.use("/check", checkRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/history", historyRoutes);
router.use("/predict", predictRoutes);

module.exports = router;
