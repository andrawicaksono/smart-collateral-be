class CheckController {
  checkHealth = async (req, res, next) => {
    try {
      res.status(200).json({
        success: true,
        message: "OK",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CheckController;
