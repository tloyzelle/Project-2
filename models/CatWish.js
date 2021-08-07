const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CatWish extends Model {}

CatWish.init({
    wishlistId: {
        type: DataTypes.INTEGER,
        references: {
            model:'wishlist',
            key: 'id'
        }
    },
    catId: {
        type: DataTypes.INTEGER,
        references: {
            model:'cat_item',
            key: 'id'
        },
    }
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'catwish',
  }
);

module.exports = CatWish;
