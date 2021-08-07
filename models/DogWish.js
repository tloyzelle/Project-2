const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DogWish extends Model {}

DogWish.init({
    wishlistId: {
        type: DataTypes.INTEGER,
        references: {
            model:'wishlist',
            key: 'id'
        }
    },
    dogId: {
        type: DataTypes.INTEGER,
        references: {
            model:'dog_item',
            key: 'id'
        },
    }
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dogwish',
  }
);

module.exports = DogWish;
