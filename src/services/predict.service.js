class PredictService {
  constructor(predictRepository) {
    this.predictRepository = predictRepository;
  }

  predict = async (data) => {
    try {
      const [result, error] = await this.predictRepository.predict({
        ...data,
        swimming_pool: data.swimming_pool ? 1 : 0,
        garden: data.garden ? 1 : 0,
        parking_access: data.parking_access ? 1 : 0,
        drying_area: data.drying_area ? 1 : 0,
        security: data.security ? 1 : 0,
        property_condition:
          data.property_condition > 0 ? data.property_condition - 1 : 0,
      });
      if (error) throw error;
      return [result, null];
    } catch (error) {
      return [null, error];
    }
  };
}

module.exports = PredictService;
