const sequelize = require("../config/connection");
const { User, Cat_item, Dog_item } = require("../models");

const userData = require("./userData.json");
const catItemData = require("./catItemData.json");
const dogItemData = require("./dogItemData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Dog_item.bulkCreate(dogItemData);

  await Cat_item.bulkCreate(catItemData);

  process.exit(0);
};

seedDatabase();
