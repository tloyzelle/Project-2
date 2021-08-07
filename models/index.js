const User = require('./User');
const Dog_item = require('./Dog_item');
const Cat_item = require ('./Cat_item');
const Wishlist = require('./Wishlist');
const ShoppingCart = require('./Shoppingcart');
const DogCheckout = require('./DogCheckout');
const DogWish = require('./DogWish');
const CatCheckout = require('./CatCheckout');
const CatWish = require('./CatWish');


Dog_item.belongsToMany(ShoppingCart, { through: DogCheckout});
ShoppingCart.belongsToMany(Dog_item, { through: DogCheckout})

Cat_item.belongsToMany(ShoppingCart, { through: CatCheckout});
ShoppingCart.belongsToMany(Cat_item, { through: CatCheckout})

Dog_item.belongsToMany(Wishlist, { through: DogWish});
Wishlist.belongsToMany(Dog_item, { through: DogWish})

Cat_item.belongsToMany(Wishlist, { through: CatWish});
Wishlist.belongsToMany(Cat_item, { through: CatWish})

module.exports = { User, Dog_item, Cat_item, ShoppingCart, Wishlist, DogCheckout, CatCheckout, DogWish, CatWish};


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
