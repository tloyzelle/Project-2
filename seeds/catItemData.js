const { cat_item } = require('../models');

const catData = [
    {
    title:'Cat Litter',
    description:"Dr. Elsey's Precious Cat Ultra Unscented Clumping Clay Cat Litter",
    price:'$18.96'
    },
    {
    title:'Cat Scratcher',
    description:'Frisco Step-In Cat Scratcher Toy with Catnip, Tropical Palms',
    price:'$10.98'
    },
    {
    title:'Cat Teaser',
    description:'Frisco Bird Teaser with Feathers Cat Toy',
    price:'$2.98'
    },
    {
    title:'Cat Food',
    description:'Meow Mix Original Choice Dry Cat Food',
    price:'$17.98'
    },    
]

const seedCats = () => cat_item.bulkCreate(catData);

module.exports = seedCats;
