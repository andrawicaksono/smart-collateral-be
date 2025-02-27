require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");
const compression = require("compression");
const { xss } = require("express-xss-sanitizer");
const config = require("./config");
const routes = require("./routes");
const { errorHandler } = require("./middlewares/error.middleware");
const setupSwagger = require("./swaggerConfig");

const app = express();

// Security Config
app.use(helmet());
app.use(xss());
app.use(compression());

// Enable CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// Rate Limit 5 requests per 5 minutes
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later.",
});
app.use("/api/v1/auth", limiter);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);
app.use(errorHandler);

setupSwagger("/api/v1", app);

const startServer = async () => {
  try {
    await config.db.connect();

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
