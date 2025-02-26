require("dotenv").config();
const db = require("./db");
const api = require("./api");
const jwtConfig = require("./jwt");

const port = Number(process.env.APP_PORT);

module.exports = {
  port,
  db,
  jwt: jwtConfig,
  api,
};
