const { AppError } = require("../utils/error");
const { generateSignature } = require("../utils/signature");
class PredictRepository {
  constructor(api) {
    this.api = api;
  }

  // Hit API Prediction to get price prediction
  predict = async (data) => {
    try {
      const timestamp = new Date().toISOString();
      const apiKey = process.env.API_KEY;
      const signature = generateSignature(timestamp, apiKey, data);
      const res = await this.api.post("/predict", data, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": apiKey,
          "X-SIGNATURE": signature,
          "X-TIMESTAMP": timestamp,
        },
      });

      if (!res.data.success) throw new AppError(res.status, res.data.message);
      return [res.data.data, null];
    } catch (error) {
      return [null, error];
    }
  };
}

module.exports = PredictRepository;
