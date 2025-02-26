const { AppError } = require("../utils/error");
class PredictRepository {
  constructor(api) {
    this.api = api;
  }
  predict = async (data) => {
    try {
      const res = await this.api.post("/predict", data);
      if (!res.data.success) throw new AppError(res.status, res.data.message);
      return [res.data.data, null];
    } catch (error) {
      return [null, error];
    }
  };
}

module.exports = PredictRepository;
