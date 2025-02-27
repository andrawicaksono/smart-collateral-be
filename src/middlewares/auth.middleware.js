const { AppError } = require("../utils/error");

class AuthMiddleware {
  constructor(userService, tokenService) {
    this.userService = userService;
    this.tokenService = tokenService;
  }

  // Verify Bearer token
  verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    try {
      if (!authHeader || !authHeader.startsWith("Bearer "))
        throw new AppError(403, "Invalid token");

      const token = authHeader.split(" ")[1];

      if (!token) throw AppError(403, "Invalid token");

      const decoded = this.tokenService.verify(token);

      const [user, error] = await this.userService.getUserById(decoded.id);
      if (error) throw error;

      req.user = user;
      req.token = token;

      next();
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }
  };

  isAdmin = async (req, res, next) => {
    try {
      if (!req.user.is_admin) throw new AppError(403, "Access denied");

      next();
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }
  };
}

module.exports = AuthMiddleware;
