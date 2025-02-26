const Joi = require("joi");

const predictSchema = Joi.object({
  city: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  swimming_pool: Joi.boolean().required(),
  garage: Joi.number().required(),
  carport: Joi.number().required(),
  garden: Joi.boolean().required(),
  parking_access: Joi.boolean().required(),
  drying_area: Joi.boolean().required(),
  security: Joi.boolean().required(),
  bedrooms: Joi.number().required(),
  bathrooms: Joi.number().required(),
  land_size: Joi.number().required(),
  building_size: Joi.number().required(),
  certificate: Joi.string().required(),
  electricity: Joi.number().required(),
  floors: Joi.number().required(),
  property_condition: Joi.number().required(),
});

module.exports = { predictSchema };
