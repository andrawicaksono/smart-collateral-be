const { addUserResponse } = require("../utils/responseFormatter/user");

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  addUser = async (req, res, next) => {
    try {
      const { email, name, password, branch } = req.body;
      const [user, error] = await this.userService.addUser({
        email,
        name,
        password,
        branch,
      });
      if (error) throw error;

      res.status(201).json({
        success: true,
        message: "User added successfully",
        data: addUserResponse(user),
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
