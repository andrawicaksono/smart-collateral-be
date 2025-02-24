class UserRepository {
  constructor(userModel) {
    this.model = userModel;
  }

  create = async (data) => {
    try {
      const user = await this.model.create(data);

      return [user, null];
    } catch (error) {
      return [null, error];
    }
  };

  findByEmail = async (email) => {
    try {
      const user = await this.model.findOne({ where: { email } });

      return [user, null];
    } catch (error) {
      return [null, error];
    }
  };
}

module.exports = UserRepository;
