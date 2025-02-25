const { historyResponse } = require("../utils/responseFormatter/history");

class HistoryController {
  constructor(historyService) {
    this.historyService = historyService;
  }

  addHistory = async (req, res, next) => {
    try {
      const {
        name,
        city,
        latitude,
        longitude,
        swimming_pool,
        garage,
        carport,
        garden,
        parking_access,
        drying_area,
        security,
        bedrooms,
        bathrooms,
        land_size,
        building_size,
        certificate,
        electricity,
        floors,
        property_condition,
        price_in_rp,
        is_completed,
      } = req.body;

      const user_id = req.user.id;

      const [history, error] = await this.historyService.addHistory({
        user_id,
        name,
        city,
        latitude: Number(latitude),
        longitude: Number(longitude),
        swimming_pool: Boolean(swimming_pool),
        garage: Boolean(garage),
        carport: Boolean(carport),
        garden: Boolean(garden),
        parking_access: Boolean(parking_access),
        drying_area: Boolean(drying_area),
        security: Boolean(security),
        bedrooms: Number(bedrooms),
        bathrooms: Number(bathrooms),
        land_size: Number(land_size),
        building_size: Number(building_size),
        certificate,
        electricity: Number(electricity),
        floors: Number(floors),
        property_condition: Number(property_condition),
        price_in_rp: Number(price_in_rp),
        is_completed: Boolean(is_completed),
      });

      if (error) throw error;
      res.status(201).json({
        success: true,
        message: "History added successfully",
        data: historyResponse(history),
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = HistoryController;
