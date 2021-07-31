const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class dog_item extends Model {}

dog_item.init(
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
      }
      },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'dog_item',
    }
  );
  
  module.exports = dog_item;
  