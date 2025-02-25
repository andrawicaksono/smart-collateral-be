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
}

module.exports = HistoryRepository;
