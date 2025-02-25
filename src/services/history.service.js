const bcrypt = require("bcrypt");
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
}

module.exports = HistoryService;
