const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");

const swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json"));

const setupSwagger = (prefix, app) => {
  app.use(
    `${prefix}/swagger`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );
};

module.exports = setupSwagger;
