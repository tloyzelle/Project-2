const { dog_item } = require('../models');


const dogData = [
    {
        title:'Chew Toy',
        description:'Cozie Marvin the Moose Plush Dog Toy',
        price:'$4.69'
    },
    {
        title:'Chew Toy',
        description:'Benebone Peanut Butter Flavor Wishbone Tough Dog Chew Toy',
        price:'$10.99'
    },
    {
        title:'Dog Food',
        description:'Bundle: Purina Pro Plan Puppy Lamb & Rice Formula Dry Dog Food + Nylabone Teething Pacifier Chew Toy',
        price:'$59.47'
    },
    {
        title:'Dog Appearel',
        description:'Frisco Neoprene Dog Life Jacket',
        price:'$30.39'
    },
]

const seedDogs = () => dog_item.bulkCreate(dogData);

module.exports = seedDogs;
