const express = require("express");
const router = express.Router();

const checkRoutes = require("./check.routes");
const userRoutes = require("./user.routes");

router.use("/check", checkRoutes);
router.use("/user", userRoutes);

module.exports = router;
