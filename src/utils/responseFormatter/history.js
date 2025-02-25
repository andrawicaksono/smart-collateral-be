const historyResponse = (history) => {
  return {
    id: history.id,
    name: history.name,
    city: history.city,
    latitude: Number(history.latitude),
    longitude: Number(history.longitude),
    swimming_pool: history.swimming_pool,
    garage: history.garage,
    carport: history.carport,
    garden: history.garden,
    parking_access: history.parking_access,
    drying_area: history.drying_area,
    security: history.security,
    bedrooms: history.bedrooms,
    bathrooms: history.bathrooms,
    land_size: Number(history.land_size),
    building_size: Number(history.building_size),
    certificate: history.certificate,
    electricity: history.electricity,
    floors: history.floors,
    property_condition: history.property_condition,
    price_in_rp: Number(history.price_in_rp),
    is_completed: history.is_completed,
    created_at: history.created_at,
    updated_at: history.updated_at,
    deleted_at: history.deleted_at,
  };
};

module.exports = { historyResponse };
