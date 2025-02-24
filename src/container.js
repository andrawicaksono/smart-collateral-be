// Config
const config = require("./config");

// Models
const User = require("./models/user.model");

// Repositories
const UserRepository = require("./repositories/user.repository");

// Services
const UserService = require("./services/user.service");
const AuthService = require("./services/auth.service");
const TokenService = require("./services/token.service");

// Controllers
const CheckController = require("./controllers/check.controller");
const UserController = require("./controllers/user.controller");
const AuthController = require("./controllers/auth.controller");

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

module.exports = {
  checkController,
  userController,
  authController,
};
