require("dotenv").config();

const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;

module.exports = {
  secret,
  expiresIn,
};
