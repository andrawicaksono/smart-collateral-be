class AuthMiddleware {
  constructor(userService, tokenService) {
    this.userService = userService;
    this.tokenService = tokenService;
  }

  verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    try {
      if (!authHeader || !authHeader.startsWith("Bearer "))
        throw new Error("Invalid token");

      const token = authHeader.split(" ")[1];

      if (!token) throw Error("Invalid token");

      const decoded = this.tokenService.verify(token);

      const [user, err] = await this.userService.getUserById(decoded.id);
      if (err) throw err;

      req.user = user;

      next();
    } catch (err) {
      console.error(err);
      res.status(403).json({
        success: false,
        message: "Invalid token",
      });
    }
  };

  isAdmin = async (req, res, next) => {
    if (!req.user.is_admin)
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });

    next();
  };
}

module.exports = AuthMiddleware;
