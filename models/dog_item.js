const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog_item extends Model {}

Dog_item.init(
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
      filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
      },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'dog_item',
    }
  );
  
  module.exports = Dog_item;
  