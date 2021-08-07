const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CatCheckout extends Model {}

CatCheckout.init({
    ShoppingcartId: {
        type: DataTypes.INTEGER,
        references: {
            model:'shoppingCart',
            key: 'id'
        }
    },
    dogId: {
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
    modelName: 'catcheckout',
  }
);

module.exports = CatCheckout;
