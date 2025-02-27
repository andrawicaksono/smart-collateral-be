const axios = require("axios");

// Define API Client
const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

module.exports = api;
