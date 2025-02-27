class HistoryRepository {
  constructor(historyModel) {
    this.model = historyModel;
  }

  create = async (data) => {
    try {
      const history = await this.model.create(data);

      return [history, null];
    } catch (error) {
      return [null, error];
    }
  };

  findAll = async (data) => {
    const condition = {
      user_id: data.user_id,
      deleted_at: null,
    };

    // Parse is_completed from string to boolean
    switch (data.is_completed) {
      case "true":
        condition.is_completed = true;
        break;
      case "false":
        condition.is_completed = false;
        break;
      default:
        break;
    }

    try {
      // Get all histories are matched with condition
      const histories = await this.model.findAll({
        where: condition,
        limit: data.limit ? Number(data.limit) : null,
        offset: data.offset ? Number(data.offset) : null,
        order: [["created_at", "DESC"]],
      });

      // Get total histories count are matched with condition
      const count = await this.model.count({
        where: condition,
      });

      return [{ histories, count }, null];
    } catch (error) {
      return [null, error];
    }
  };

  findByIdAndUserId = async (data) => {
    try {
      const history = await this.model.findOne({
        where: { id: data.id, user_id: data.user_id, deleted_at: null },
      });

      return [history, null];
    } catch (error) {
      return [null, error];
    }
  };

  update = async (history) => {
    try {
      history.updated_at = new Date();
      await history.save();

      return [history, null];
    } catch (error) {
      return [null, error];
    }
  };

  // Soft delete history
  delete = async (history) => {
    try {
      history.deleted_at = new Date();
      await history.save();

      return [history, null];
    } catch (error) {
      return [null, error];
    }
  };
}

module.exports = HistoryRepository;
