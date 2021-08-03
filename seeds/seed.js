const sequelize = require("../config/connection");
const { User, cat_item, dog_item } = require("../models");

const userData = require("./userData.json");
const catItemData = require("./catItemData.json");
const dogItemData = require("./dogItemData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await dog_item.bulkCreate(dogItemData);

  await cat_item.bulkCreate(catItemData);

  process.exit(0);
};

seedDatabase();
