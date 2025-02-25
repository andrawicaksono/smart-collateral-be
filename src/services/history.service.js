const { AppError } = require("../utils/error");

class HistoryService {
  constructor(historyRepository, userRepository) {
    this.historyRepository = historyRepository;
    this.userRepository = userRepository;
  }

  addHistory = async (data) => {
    try {
      const [user, errorUser] = await this.userRepository.findById(
        data.user_id
      );
      if (errorUser) throw errorUser;
      if (!user) throw new AppError(404, "User not found");

      const [newHistory, errorNewHistory] = await this.historyRepository.create(
        data
      );
      if (errorNewHistory) throw errorNewHistory;
      return [newHistory, null];
    } catch (error) {
      return [null, error];
    }
  };

  getHistory = async (data) => {
    try {
      const [history, errorHistory] = await this.historyRepository.findAll(
        data
      );

      if (errorHistory) throw errorHistory;

      return [history, null];
    } catch (error) {
      return [null, error];
    }
  };

  getDetailedHistory = async (data) => {
    try {
      const [history, errorHistory] =
        await this.historyRepository.findByIdAndUserId(data);

      if (errorHistory) throw errorHistory;

      if (!history) throw new AppError(404, "History not found");

      return [history, null];
    } catch (error) {
      return [null, error];
    }
  };

  updateHistory = async (data) => {
    try {
      const [history, errorHistory] =
        await this.historyRepository.findByIdAndUserId({
          id: data.id,
          user_id: data.user_id,
        });

      if (errorHistory) throw errorHistory;

      if (!history) throw new AppError(404, "History not found");

      history.name = data.name;
      history.city = data.city;
      history.latitude = data.latitude;
      history.longitude = data.longitude;
      history.swimming_pool = data.swimming_pool;
      history.garage = data.garage;
      history.carport = data.carport;
      history.garden = data.garden;
      history.parking_access = data.parking_access;
      history.drying_area = data.drying_area;
      history.security = data.security;
      history.bedrooms = data.bedrooms;
      history.bathrooms = data.bathrooms;
      history.land_size = data.land_size;
      history.building_size = data.building_size;
      history.certificate = data.certificate;
      history.electricity = data.electricity;
      history.floors = data.floors;
      history.property_condition = data.property_condition;
      history.price_in_rp = data.price_in_rp;
      history.is_completed = data.is_completed;

      const [updatedHistory, errorUpdatedHistory] =
        await this.historyRepository.update(history);
      if (errorUpdatedHistory) throw errorUpdatedHistory;

      return [updatedHistory, null];
    } catch (error) {
      return [null, error];
    }
  };

  deleteHistory = async (data) => {
    try {
      const [history, errorHistory] =
        await this.historyRepository.findByIdAndUserId({
          id: data.id,
          user_id: data.user_id,
        });

      if (errorHistory) throw errorHistory;

      if (!history) throw new AppError(404, "History not found");

      const [deletedHistory, errorDeletedHistory] =
        await this.historyRepository.delete(history);
      if (errorDeletedHistory) throw errorDeletedHistory;

      return [deletedHistory, null];
    } catch (error) {
      return [null, error];
    }
  };
}

module.exports = HistoryService;
