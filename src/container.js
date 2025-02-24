// Models
const User = require("./models/user.model");

// Repositories
const UserRepository = require("./repositories/user.repository");

// Services
const UserService = require("./services/user.service");

// Controllers
const CheckController = require("./controllers/check.controller");
const UserController = require("./controllers/user.controller");

// Check
const checkController = new CheckController();

// User
const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

module.exports = {
  checkController,
  userController,
};
