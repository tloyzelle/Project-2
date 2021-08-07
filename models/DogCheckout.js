const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DogCheckout extends Model {}

DogCheckout.init({
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
    modelName: 'dogcheckout',
  }
);

module.exports = DogCheckout;
