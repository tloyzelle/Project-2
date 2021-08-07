const User = require('./User');
const Dog_item = require('./Dog_item');
const Cat_item = require ('./Cat_item');
const Wishlist = require('./Wishlist');
const ShoppingCart = require('./Shoppingcart');
const Checkout = require('./Checkout');


Dog_item.belongsToMany(ShoppingCart, { through: Checkout});
ShoppingCart.belongsToMany(Dog_item, { through: Checkout})


module.exports = { User, Dog_item, Cat_item, ShoppingCart, Wishlist, Checkout};


// ShoppingCart.hasMany(Dog_item, {
//     foreignKey: 'dogItem_id',
//   });
  
// Dog_item.belongsTo(ShoppingCart, {
//     foreignKey: 'dogItem_id',
//   });

// ShoppingCart.hasMany(Cat_item, {
//     foreignKey: 'catItem_id',
//   });
  
// Cat_item.belongsTo(ShoppingCart, {
//     foreignKey: 'catItem_id',
//   });

// Wishlist.hasMany(Dog_item, {
//     foreignKey: 'dogItem_id',
//   });
  
// Dog_item.belongsTo(Wishlist, {
//     foreignKey: 'dogItem_id',
//   });

// Wishlist.hasMany(Cat_item, {
//     foreignKey: 'catItem_id',
//   });
  
// Cat_item.belongsTo(Wishlist, {
//     foreignKey: 'catItem_id',
//   });

// User.hasOne(ShoppingCart, {
//     foreignKey: '',
//   });

// ShoppingCart.belongsTo(User, {
//     foreignKey: '',
//   });

// User.hasOne(Wishlist, {
//     foreignKey: '',
//   });

// Wishlist.belongsTo(User, {
//     foreignKey: '',
//   });
