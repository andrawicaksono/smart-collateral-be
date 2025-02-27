require("dotenv").config();
const { Sequelize } = require("sequelize");

// Define ORM
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: (msg, timing) => {
      if (timing > 2000) console.log(`SLOW QUERY: ${msg} (${timing}ms)`);
    },
    benchmark: true,
  }
);

// Connect to Database
const connect = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};

module.exports = { sequelize, connect };
