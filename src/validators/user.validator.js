const Joi = require("joi");

const addUserSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().min(8).required(),
  branch: Joi.string().required(),
});

module.exports = { addUserSchema };
