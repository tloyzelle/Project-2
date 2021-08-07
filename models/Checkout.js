const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Checkout extends Model {}

Checkout.init({
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
    modelName: 'checkout',
  }
);

module.exports = Checkout;
