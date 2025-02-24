const express = require("express");
const router = express.Router();

const checkRoutes = require("./check.routes");
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");

router.use("/check", checkRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
