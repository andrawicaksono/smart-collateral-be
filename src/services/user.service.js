const bcrypt = require("bcrypt");
const { AppError } = require("../utils/error");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  addUser = async (data) => {
    try {
      const [user, errorUser] = await this.userRepository.findByEmail(
        data.email
      );
      if (errorUser) throw errorUser;
      if (user) throw new AppError(409, "User already exists");

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.password, salt);

      const [newUser, errorNewUser] = await this.userRepository.create({
        email: data.email,
        name: data.name,
        password: hashedPassword,
        branch: data.branch,
      });
      if (errorNewUser) throw errorNewUser;
      return [newUser, null];
    } catch (error) {
      return [null, error];
    }
  };

  getUserById = async (id) => {
    try {
      const [user, errorUser] = await this.userRepository.findById(id);
      if (errorUser) throw errorUser;

      if (!user) throw new AppError(404, "User not found");

      return [user, null];
    } catch (error) {
      return [null, error];
    }
  };
}

module.exports = UserService;
