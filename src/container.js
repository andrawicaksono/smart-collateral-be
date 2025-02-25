// Config
const config = require("./config");

// Models
const User = require("./models/user.model");
const History = require("./models/history.model");

// Repositories
const UserRepository = require("./repositories/user.repository");
const HistoryRepository = require("./repositories/history.repository");

// Services
const UserService = require("./services/user.service");
const AuthService = require("./services/auth.service");
const TokenService = require("./services/token.service");
const HistoryService = require("./services/history.service");

// Controllers
const CheckController = require("./controllers/check.controller");
const UserController = require("./controllers/user.controller");
const AuthController = require("./controllers/auth.controller");
const HistoryController = require("./controllers/history.controller");

// Check
const checkController = new CheckController();

// User
const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Token
const tokenService = new TokenService(config.jwt);

// Auth
const authService = new AuthService(userRepository, tokenService);
const authController = new AuthController(authService);

// History
const historyRepository = new HistoryRepository(History);
const historyService = new HistoryService(historyRepository, userRepository);
const historyController = new HistoryController(historyService);

// Middlewares
const AuthMiddleware = require("./middlewares/auth.middleware");
const authMiddleware = new AuthMiddleware(userService, tokenService);

module.exports = {
  checkController,
  userController,
  authController,
  historyController,
  authMiddleware,
};
