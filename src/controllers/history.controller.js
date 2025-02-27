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
        garage: Number(garage),
        carport: Number(carport),
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

  getHistory = async (req, res, next) => {
    try {
      const user_id = req.user.id;
      const { is_completed, limit, offset } = req.query;
      const [history, error] = await this.historyService.getHistory({
        user_id,
        is_completed,
        limit,
        offset,
      });
      if (error) throw error;

      res.status(200).json({
        success: true,
        message: "History fetched successfully",
        data: {
          total_data: history.count,
          histories: history.history.map((history) => historyResponse(history)),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  getDetailedHistory = async (req, res, next) => {
    try {
      const user_id = req.user.id;
      const { id } = req.params;

      const [history, error] = await this.historyService.getDetailedHistory({
        user_id,
        id,
      });

      if (error) throw error;

      res.status(200).json({
        success: true,
        message: "Detailed History fetched successfully",
        data: historyResponse(history),
      });
    } catch (error) {
      next(error);
    }
  };

  updateHistory = async (req, res, next) => {
    try {
      const user_id = req.user.id;
      const { id } = req.params;
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

      const [updatedHistory, errorUpdatedHistory] =
        await this.historyService.updateHistory({
          id,
          user_id,
          name,
          city,
          latitude: Number(latitude),
          longitude: Number(longitude),
          swimming_pool: Boolean(swimming_pool),
          garage: Number(garage),
          carport: Number(carport),
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

      if (errorUpdatedHistory) throw errorUpdatedHistory;

      res.status(200).json({
        success: true,
        message: "History updated successfully",
        data: historyResponse(updatedHistory),
      });
    } catch (error) {
      next(error);
    }
  };

  deleteHistory = async (req, res, next) => {
    try {
      const user_id = req.user.id;
      const { id } = req.params;

      const [_, errorDeletedHistory] = await this.historyService.deleteHistory({
        user_id,
        id,
      });

      if (errorDeletedHistory) throw errorDeletedHistory;

      res.status(200).json({
        success: true,
        message: "History deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = HistoryController;
