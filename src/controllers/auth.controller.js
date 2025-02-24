const { loginResponse } = require("../utils/responseFormatter/auth");

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const [user, error] = await this.authService.login({
        email,
        password,
      });
      if (error) throw error;
      res.status(200).json({
        success: true,
        message: "User added successfully",
        data: loginResponse(user),
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
