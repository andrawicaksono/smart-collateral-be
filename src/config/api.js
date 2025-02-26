const axios = require("axios");

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

module.exports = api;
