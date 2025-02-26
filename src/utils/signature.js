require("dotenv").config();
const crypto = require("crypto");

const SECRET_KEY = process.env.SECRET_KEY;

const generateSignature = (timestamp, apiKey, payload) => {
  const data = `${apiKey}:${timestamp}:${JSON.stringify(payload)}`;
  return crypto.createHmac("sha256", SECRET_KEY).update(data).digest("hex");
};

module.exports = { generateSignature };
