const bcrypt = require("bcrypt");
const { AppError } = require("../utils/error");

class AuthService {
  constructor(userRepository, tokenService) {
    this.userRepository = userRepository;
    this.tokenService = tokenService;
  }

  login = async (data) => {
    try {
      const [user, errorUser] = await this.userRepository.findByEmail(
        data.email
      );
      if (errorUser) throw errorUser;
      if (!user) throw new AppError(404, "User not found");
      const isMatch = await bcrypt.compare(data.password, user.password);
      if (!isMatch) throw new AppError(401, "Wrong password");

      const token = this.tokenService.sign({ id: user.id, email: user.email });
      return [{ user, token }, null];
    } catch (error) {
      return [null, error];
    }
  };

  getAuthUser = async (id, token) => {
    try {
      const [user, errorUser] = await this.userRepository.findById(id);
      if (errorUser) throw errorUser;
      if (!user) throw new AppError(404, "User not found");
      return [{ user, token }, null];
    } catch (error) {
      return [null, error];
    }
  };
}

module.exports = AuthService;
