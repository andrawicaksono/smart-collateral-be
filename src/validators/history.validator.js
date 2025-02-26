const Joi = require("joi");

const addHistorySchema = Joi.object({
  name: Joi.string().required(),
  city: Joi.string(),
  latitude: Joi.number(),
  longitude: Joi.number(),
  swimming_pool: Joi.boolean(),
  garage: Joi.number(),
  carport: Joi.number(),
  garden: Joi.boolean(),
  parking_access: Joi.boolean(),
  drying_area: Joi.boolean(),
  security: Joi.boolean(),
  bedrooms: Joi.number(),
  bathrooms: Joi.number(),
  land_size: Joi.number(),
  building_size: Joi.number(),
  certificate: Joi.string(),
  electricity: Joi.number(),
  floors: Joi.number(),
  property_condition: Joi.number(),
  price_in_rp: Joi.number(),
  is_completed: Joi.boolean(),
});

module.exports = { addHistorySchema };
