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
    price_in_rp: { type: DataTypes.DECIMAL(15, 2) },
    land_size: { type: DataTypes.DECIMAL(10, 2) },
    building_size: { type: DataTypes.DECIMAL(10, 2) },
    carpots: { type: DataTypes.SMALLINT },
    floors: { type: DataTypes.SMALLINT },
    total_bedrooms: { type: DataTypes.SMALLINT },
    total_bathrooms: { type: DataTypes.SMALLINT },
    electricity: { type: DataTypes.SMALLINT, validate: { isIn: [[1, 2, 3]] } },
    property_condition: {
      type: DataTypes.SMALLINT,
      validate: { isIn: [[1, 2, 3]] },
    },
    certificate: { type: DataTypes.SMALLINT, validate: { isIn: [[1, 2, 3]] } },
    facilitate: { type: DataTypes.SMALLINT, validate: { isIn: [[1, 2, 3]] } },
    lat: { type: DataTypes.DECIMAL(9, 6) },
    long: { type: DataTypes.DECIMAL(9, 6) },
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
