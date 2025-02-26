class PredictController {
  constructor(predictService) {
    this.predictService = predictService;
  }

  predict = async (req, res, next) => {
    try {
      const data = req.body;
      const [result, error] = await this.predictService.predict(data);
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "Predicted successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PredictController;
