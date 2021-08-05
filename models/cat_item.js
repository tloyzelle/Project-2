const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cat_item extends Model {}

Cat_item.init(
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
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'cat_item',
    }
  );
  
  module.exports = Cat_item;
  