const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wishlist extends Model {}

Wishlist.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      catItem_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'cat_item',
          key: 'id',
        },
      },
      dogItem_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'dog_item',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'wishlist',
    }
);
  
  module.exports = Wishlist;
  