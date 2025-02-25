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
}

module.exports = HistoryService;
