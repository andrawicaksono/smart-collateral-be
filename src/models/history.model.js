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
    latitude: { type: DataTypes.DECIMAL(9, 6), allowNull: true },
    longitude: { type: DataTypes.DECIMAL(9, 6), allowNull: true },
    swimming_pool: { type: DataTypes.BOOLEAN, allowNull: true },
    garage: { type: DataTypes.BOOLEAN, allowNull: true },
    carport: { type: DataTypes.BOOLEAN, allowNull: true },
    garden: { type: DataTypes.BOOLEAN, allowNull: true },
    parking_access: { type: DataTypes.BOOLEAN, allowNull: true },
    drying_area: { type: DataTypes.BOOLEAN, allowNull: true },
    security: { type: DataTypes.BOOLEAN, allowNull: true },
    bedrooms: { type: DataTypes.SMALLINT, allowNull: true },
    bathrooms: { type: DataTypes.SMALLINT, allowNull: true },
    land_size: { type: DataTypes.INTEGER, allowNull: true },
    building_size: { type: DataTypes.INTEGER, allowNull: true },
    certificate: { type: DataTypes.STRING(10), allowNull: true },
    electricity: { type: DataTypes.INTEGER, allowNull: true },
    floors: { type: DataTypes.SMALLINT, allowNull: true },
    property_condition: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      validate: {
        min: 0,
        max: 5,
      },
    },
    price_in_rp: { type: DataTypes.DECIMAL(15, 2), allowNull: true },
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
