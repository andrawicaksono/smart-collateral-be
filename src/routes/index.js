const express = require("express");
const router = express.Router();

const checkRoutes = require("./check.routes");

router.use("/check", checkRoutes);

module.exports = router;
