const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./user.model");

class History extends Model {}
History.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: "id" },
    },
    name: { type: DataTypes.STRING(255), allowNull: false },
    city: { type: DataTypes.STRING(40), allowNull: false },
    latitude: { type: DataTypes.DECIMAL(9, 6) },
    longitude: { type: DataTypes.DECIMAL(9, 6) },
    swimming_pool: { type: DataTypes.BOOLEAN },
    garage: { type: DataTypes.BOOLEAN },
    carport: { type: DataTypes.BOOLEAN },
    garden: { type: DataTypes.BOOLEAN },
    parking_access: { type: DataTypes.BOOLEAN },
    drying_area: { type: DataTypes.BOOLEAN },
    security: { type: DataTypes.BOOLEAN },
    bedrooms: { type: DataTypes.SMALLINT },
    bathrooms: { type: DataTypes.SMALLINT },
    land_size: { type: DataTypes.DECIMAL(10, 2) },
    building_size: { type: DataTypes.DECIMAL(10, 2) },
    certificate: { type: DataTypes.STRING(10) },
    electricity: { type: DataTypes.INTEGER },
    floors: { type: DataTypes.SMALLINT },
    property_condition: {
      type: DataTypes.SMALLINT,
      validate: { isIn: [[1, 2, 3, 4, 5]] },
    },
    price_in_rp: { type: DataTypes.DECIMAL(15, 2) },
    is_completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deleted_at: { type: DataTypes.DATE },
  },
  {
    sequelize,
    modelName: "History",
    tableName: "histories",
    timestamps: false,
  }
);

User.hasMany(History, { foreignKey: "user_id", onDelete: "CASCADE" });
History.belongsTo(User, { foreignKey: "user_id" });

module.exports = History;
